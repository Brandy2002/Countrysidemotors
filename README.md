# Countryside Motors Botswana — E-Commerce Platform

A modern, responsive e-commerce website showcasing Kids' Ride-On Cars and Astro Batteries with local Botswana support.

## 📋 Project Features

- **Kids' Ride-On Cars Catalog** — 3 premium electric vehicles (AMG Jeep, Mercedes Convertible, Porsche)
- **Astro Batteries** — High-capacity LiFePO4 batteries (24V 60Ah, 12V 100Ah)
- **Product Filtering** — Filter by battery voltage, capacity, and price
- **Shopping Cart** — localStorage-backed cart with quantity management
- **Checkout Flow** — Botswana-specific shipping (city/town/remote) + payment options (COD, Bank Transfer, Mobile)
- **Responsive Design** — Mobile, tablet, desktop layouts
- **Accessibility** — ARIA labels, keyboard navigation (Esc), focus states

## 🚀 Quick Start

### Option 1: Static Files (No Server)
1. Open `index.html` in your browser
2. Browse products, add to cart, checkout

### Option 2: Local Mock Server
```bash
node server.js
```
Then visit `http://localhost:3000`
- Mock server receives orders at `/api/orders`
- Stores orders in `orders.json` (for testing only)

## 📁 File Structure

```
countryside-motors/
├── index.html              # Homepage + hero + featured sections
├── kids.html               # Kids' Ride-On Cars catalog
├── batteries.html          # Astro Batteries catalog
├── product.html            # Product detail page (dynamic via URL params)
├── checkout.html           # Order & shipping form
├── company.html            # Company mission & values
├── contact.html            # Contact form
├── script.js               # Product data, cart logic, filtering
├── style.css               # Responsive design & styling
├── server.js               # Mock Node.js server for orders
├── assets/
│   └── images/             # Product photos (WEBP & JPG)
└── README.md               # This file
```

## 💳 Checkout & Payment

1. **Add Items** → Click "Add to Cart" on product cards
2. **Review Cart** → Click Cart button (top-right) to review
3. **Checkout** → Fill shipping address & select delivery zone:
   - **City** (Gaborone/Francistown): P100
   - **Town** (Regional): P150
   - **Remote**: P250
4. **Payment Options**:
   - Cash on Delivery (COD)
   - Bank Transfer
   - Mobile Payment (placeholder)

## 🔧 Development Notes

### Adding Products
Edit `script.js` in the `kidsProducts` or `batteryProducts` arrays:
```javascript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 1500,
  age: '3–7 years',      // Kids products
  battery: '12V',        // Battery specs
  image: 'assets/images/photo.webp',
  // ... other specs
}
```

### Filtering
- **Kids page**: Filter by battery voltage & price
- **Batteries page**: Filter by capacity & price
- Filters auto-render on selection change

### Product Details Page
Visit `product.html?id=ride-jeep` to view details for a specific product (URL-based routing).

## 🌐 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)
1. Push files to GitHub
2. Connect to Netlify/Vercel
3. Build command: (none needed, static files)
4. Publish directory: `/`
5. Deploy!

### Custom Backend (Production)
Replace mock server with real backend:
- `/api/orders` POST → save to database
- `/api/products` GET → fetch from database
- Integrate payment gateway (Stripe, PayPal, local payment providers)
- Email confirmations (SendGrid, Mailgun)

## 🔐 Security (Production)

- ✅ Validate all form inputs server-side
- ✅ Sanitize user data before storing
- ✅ Use HTTPS only
- ✅ Implement CORS properly
- ✅ Rate-limit checkout endpoint
- ✅ PCI compliance for payment data

## ♿ Accessibility

- All images have descriptive `alt` attributes
- Navigation keyboard-accessible (Tab, Enter, Esc)
- Focus indicators on all buttons & links
- Semantic HTML (header, nav, main, section, footer)
- Color contrast ratios meet WCAG AA standards

## 📝 TODOs for Production

- [ ] Replace mock server with proper backend (Node/Express, Python/Flask, etc.)
- [ ] Add real payment gateway (Stripe, Paystack, etc.)
- [ ] Email notifications (order confirmation, shipping updates)
- [ ] Admin dashboard for order management
- [ ] Inventory tracking
- [ ] User accounts & order history
- [ ] SSL/HTTPS certificate
- [ ] CDN for image delivery
- [ ] Analytics (Google Analytics, Hotjar)
- [ ] Run Lighthouse audit & fix issues

## 📞 Contact & Support

**Countryside Motors Botswana**
- Email: sales@countrysidemotors.bw
- Phone: +267 7000 0000
- Location: Gaborone, Botswana

---

**Built with:** HTML5, CSS3, vanilla JavaScript  
**Last Updated:** December 28, 2025
