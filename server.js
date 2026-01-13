// Simple local mock server with email support
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000; 

const root = process.cwd();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'brandon.okedi@gmail.com',
    pass: 'mrmf suvu jlrf bopk'
  }
});

function sendJSON(res, status, obj){
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}

function serveStatic(req, res){
  // serve files from repo, decode URL to support spaces and encoded chars
  let url = req.url.split('?')[0];
  try { url = decodeURIComponent(url); } catch(e) { /* ignore malformed */ }
  if(url === '/') url = '/index.html';
  // prevent path traversal
  const fpath = path.normalize(path.join(root, url));
  if(!fpath.startsWith(root)){ res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(fpath, (err, data) => {
    if(err){ res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(fpath).toLowerCase();
    const map = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.json':'application/json', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg'};
    res.writeHead(200, { 'Content-Type': map[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

const server = http.createServer((req,res)=>{
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if(req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if(req.method === 'POST' && req.url === '/api/contact'){
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', ()=>{
      try{
        const data = JSON.parse(body);
        const { fullName, email, phone, message } = data;
        
        if(!fullName || !email || !phone || !message){
          sendJSON(res, 400, { error: 'All fields required' });
          return;
        }

        // Send email to admin
        const mailOptions = {
          from: 'brandon.okedi@gmail.com',
          to: 'brandon.okedi@gmail.com',
          subject: 'New Contact Inquiry from Countryside Motors Website',
          html: `
            <h2>New Contact Inquiry</h2>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>This message was sent from the Countryside Motors Botswana website.</small></p>
          `
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if(err){
            console.error('Email send failed:', err);
            sendJSON(res, 500, { error: 'Failed to send message' });
          } else {
            console.log('Email sent:', info.response);
            sendJSON(res, 200, { success: true, message: 'Your inquiry has been sent successfully!' });
          }
        });
      }catch(e){
        console.error('Failed to process contact form', e);
        sendJSON(res, 400, { error: 'Invalid request' });
      }
    });
    return;
  }

  if(req.method === 'POST' && req.url === '/api/orders'){
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', ()=>{
      try{
        const order = JSON.parse(body);
        // simple storage: append to orders.json
        const file = path.join(root, 'orders.json');
        const orders = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : [];
        const id = 'ORD-' + Date.now();
        orders.push({ id, order });
        fs.writeFileSync(file, JSON.stringify(orders, null, 2));
        sendJSON(res, 201, { id });
      }catch(e){
        console.error('Failed to save order', e);
        sendJSON(res, 400, { error: 'Invalid order' });
      }
    });
    return;
  }

  // GET /api/products -> returns all products parsed from script.js (supports filters & sorting)
  if(req.method === 'GET' && req.url.startsWith('/api/products')){
    try{
      // read script.js and parse the product arrays using simple heuristics
      const text = fs.readFileSync(path.join(root,'script.js'),'utf8');
      const re = /const\s+(\w+)(?:Products|Properties)\s*=\s*\[([\s\S]*?)\];/g;
      let m; const products = [];
      while((m = re.exec(text)) !== null){
        const name = m[1]; // kids, battery, tanks, clancy, etc
        const category = name.replace(/(Products|Properties)$/, '').toLowerCase();
        const body = m[2];
        // find object literals inside the array
        const objRe = /\{([\s\S]*?)\}\s*(?:,|$)/g;
        let o;
        while((o = objRe.exec(body)) !== null){
          let objText = '{' + o[1] + '}';
          // Convert to JSON-ish: quote keys and convert single quotes -> double
          objText = objText.replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":');
          objText = objText.replace(/'/g, '"');
          objText = objText.replace(/,\s*\}/g, '}');
          try{
            const obj = JSON.parse(objText);
            obj._category = category;
            products.push(obj);
          }catch(e){
            // skip unparsable objects
          }
        }
      }

      // Apply simple query filters
      const urlObj = new URL(req.url, `http://${req.headers.host}`);
      const qp = urlObj.searchParams;
      let out = products.slice();
      if(qp.get('category')){
        const v = qp.get('category').toLowerCase();
        out = out.filter(p => (p._category || '').toLowerCase() === v || (p.category || '').toLowerCase() === v);
      }
      if(qp.get('q')){
        const q = qp.get('q').toLowerCase();
        out = out.filter(p => (p.name||'').toLowerCase().includes(q) || (p.id||'').toLowerCase().includes(q));
      }
      if(qp.get('min')){
        const min = parseFloat(qp.get('min')) || 0; out = out.filter(p => (typeof p.price === 'number') ? p.price >= min : true);
      }
      if(qp.get('max')){
        const max = parseFloat(qp.get('max')) || Infinity; out = out.filter(p => (typeof p.price === 'number') ? p.price <= max : true);
      }

      // Sorting
      const sort = qp.get('sort');
      if(sort === 'price_asc') out.sort((a,b)=> (a.price||0)-(b.price||0));
      else if(sort === 'price_desc') out.sort((a,b)=> (b.price||0)-(a.price||0));
      else if(sort === 'newest') out.reverse(); // best-effort: assume arrays are oldest->newest

      sendJSON(res, 200, out);
    }catch(e){
      console.error('Failed to parse products', e);
      sendJSON(res, 500, { error: 'Failed to retrieve products' });
    }
    return;
  }

  // GET /api/images -> list files in assets/images for client-side matching
  if(req.method === 'GET' && req.url === '/api/images'){
    try{
      const imagesDir = path.join(root, 'assets', 'images');
      const files = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir).filter(f => !f.startsWith('.')) : [];
      sendJSON(res, 200, { images: files });
    }catch(e){
      console.error('Failed to list images', e);
      sendJSON(res, 500, { error: 'Failed to read images' });
    }
    return;
  }

  // Simple status endpoint to return local IPv4 addresses for convenience
  if(req.method === 'GET' && req.url === '/_status'){
    const nets = os.networkInterfaces();
    const ips = [];
    Object.values(nets).forEach(ifaces => {
      if(!ifaces) return;
      ifaces.forEach(iface => {
        if(iface.family === 'IPv4' && !iface.internal) ips.push(iface.address);
      });
    });
    sendJSON(res, 200, { port: PORT, ips });
    return;
  }

  // Serve static files by default (simple)
  if(req.method === 'GET') return serveStatic(req,res);

  res.writeHead(405); res.end('Method not allowed');
});

server.listen(PORT, '0.0.0.0', ()=>{
  const nets = os.networkInterfaces();
  const ips = [];
  Object.values(nets).forEach(ifaces => {
    if(!ifaces) return;
    ifaces.forEach(iface => {
      if(iface.family === 'IPv4' && !iface.internal) ips.push(iface.address);
    });
  });
  console.log('Mock server listening on:');
  console.log('  http://localhost:' + PORT);
  ips.forEach(ip => console.log('  http://' + ip + ':' + PORT));
  console.log('If you cannot reach the server from your phone, ensure your desktop firewall allows incoming connections on port ' + PORT + ' and both devices are on the same network.');

  // Audit car parts images and log missing files for quick debugging
  try{
    const carParts = require(path.join(root,'script.js'))?.carPartsProducts;
    if(Array.isArray(carParts)){
      const missing = [];
      carParts.forEach(p => {
        if(p.image){
          const imgPath = path.join(root, p.image);
          if(!fs.existsSync(imgPath)) missing.push(p.image);
        }
      });
      if(missing.length) console.log('Warning: missing car part images:', missing);
      else console.log('All car part images appear present on disk.');
    }
  }catch(e){ /* ignore */ }
});