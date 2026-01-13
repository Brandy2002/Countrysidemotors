// marketplace.js — fetch /api/products and render a responsive marketplace
console.log('[marketplace] loaded');

async function fetchProducts(params={}){
  const qs = new URLSearchParams(params).toString();
  const url = '/api/products' + (qs ? ('?' + qs) : '');
  try{
    const res = await fetch(url);
    if(!res.ok) throw new Error('Fetch failed');
    const data = await res.json();
    if(Array.isArray(data) && data.length) return data;
    // if endpoint returned empty, fall through to local arrays
  }catch(e){
    console.warn('[marketplace] remote fetch failed, falling back to local arrays', e);
  }

  // Fallback: build products from in-memory arrays if available
  try{
    const local = [];
    if(typeof kidsProducts !== 'undefined') local.push(...kidsProducts.map(p=>Object.assign({},p, { _category: 'kids' })));
    if(typeof batteryProducts !== 'undefined') local.push(...batteryProducts.map(p=>Object.assign({},p, { _category: 'battery' })));
    if(typeof tanksProducts !== 'undefined') local.push(...(tanksProducts||[]).map(p=>Object.assign({},p, { _category: 'tanks' })));
    if(typeof carPartsProducts !== 'undefined') local.push(...(carPartsProducts||[]).map(p=>Object.assign({},p, { _category: 'parts' })));
    if(typeof clancyProperties !== 'undefined') local.push(...(clancyProperties||[]).map(p=>Object.assign({},p, { _category: 'clancy' })));
    return local;
  }catch(e){
    console.error('[marketplace] fallback to local arrays failed', e);
    return [];
  }
}

function createMarketplaceCard(p){
  const a = document.createElement('a');
  a.className = 'marketplace-card';
  a.href = `product.html?id=${encodeURIComponent(p.id)}`;
  a.setAttribute('role','listitem');

  const img = document.createElement('img');
  img.src = (typeof getProductImage === 'function') ? getProductImage(p) : (p.image || 'assets/images/placeholder.png');
  img.alt = p.name || p.id;
  img.style.width = '100%'; img.style.height = '160px'; img.style.objectFit = 'cover';

  const body = document.createElement('div');
  body.className = 'marketplace-body';
  body.innerHTML = `
    <h4 class="mp-title">${p.name || ''}</h4>
    <div class="mp-meta">
      <div class="mp-price">${(typeof p.price === 'number') ? ('P' + p.price) : 'Call for price'}</div>
      <div class="mp-condition">${p.condition ? (p.condition.charAt(0).toUpperCase() + p.condition.slice(1)) : (p._category === 'parts' ? 'Used' : 'New')}</div>
    </div>
    <div class="mp-extra"> 
      <div class="mp-rating">${p.rating ? (p.rating.toFixed(1) + ' ★') : '—'}</div>
      <div class="mp-shipping">${p.shipping || 'Pickup or shipping'}</div>
      <div class="mp-location">${p.location || 'Botswana'}</div>
    </div>
  `;

  a.appendChild(img);
  a.appendChild(body);
  return a;
}

async function loadMarketplace(){
  const cat = document.getElementById('filterCategory').value;
  const min = document.getElementById('filterMin').value;
  const max = document.getElementById('filterMax').value;
  const sort = document.getElementById('sortSelect').value;
  const q = document.getElementById('searchQuery').value;
  const cond = document.getElementById('filterCondition').value;

  const params = {};
  if(cat) params.category = cat;
  if(min) params.min = min;
  if(max) params.max = max;
  if(sort && sort !== 'best') params.sort = sort;
  if(q) params.q = q;

  const items = await fetchProducts(params);

  // Apply client-side condition filter (since server may not have 'condition')
  const filtered = items.filter(p => {
    if(cond){
      const c = (p.condition || (p._category === 'parts' ? 'used' : 'new')).toLowerCase();
      return c === cond;
    }
    return true;
  });

  const grid = document.getElementById('marketplaceGrid');
  grid.innerHTML = '';

  document.getElementById('marketplaceBanner').textContent = `Showing ${filtered.length} results`;

  if(filtered.length === 0){
    grid.innerHTML = '<div class="empty">No results found</div>';
    return;
  }

  filtered.forEach(p => grid.appendChild(createMarketplaceCard(p)));
}

// Wire up controls
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('applyFilters').addEventListener('click', loadMarketplace);
  document.getElementById('searchQuery').addEventListener('keypress', (e)=>{ if(e.key === 'Enter') loadMarketplace(); });
  // quick apply on select change
  ['filterCategory','filterCondition','sortSelect'].forEach(id => document.getElementById(id).addEventListener('change', loadMarketplace));
  // initial load
  loadMarketplace();
});