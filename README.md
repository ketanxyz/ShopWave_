# ShopWave - E-Commerce Storefront

A modern, responsive e-commerce shopping application built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

## 🌟 Features

- **Responsive Design** — Fully mobile-responsive layout that works on desktop, tablet, and mobile devices
- **Product Browsing** — Browse products by category with search functionality
- **Hero Banner Slider** — Promotional carousel with category CTAs
- **Product Detail Pages** — Full product information with gallery, specs, ratings, and reviews
- **Shopping Cart** — Add items, adjust quantities, and manage cart items
- **Checkout Flow** — Complete checkout interface with order summary
- **Cart Persistence** — Cart data automatically saved to browser's localStorage
- **Category Navigation** — 6 product categories: Electronics, Fashion, Home, Books, Sports, Beauty
- **Search Support** — Real-time product search across all categories
- **Mobile Menu** — Responsive hamburger menu for mobile navigation

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.5 | UI framework |
| React Router DOM | 7.14.2 | Client-side routing |
| Vite | 8.0.10 | Build tool & dev server |
| Tailwind CSS | 3.4.19 | Utility-first CSS styling |
| ESLint | 10.2.1 | Code linting |
| PostCSS | 8.5.13 | CSS processing |

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js and npm installed:
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org).

## 📁 Project Structure

```
shopwave/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx      # Navigation bar with search & cart
│   │   │   ├── Layout.jsx      # Main layout wrapper
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── ui/
│   │   │   ├── HeroBanner.jsx         # Hero slider
│   │   │   ├── CategoryGrid.jsx       # Category showcase
│   │   │   ├── FeaturedProducts.jsx   # Featured items section
│   │   │   ├── PromoBanner.jsx        # Promotional banner
│   │   │   └── SuggestedProducts.jsx  # Related products
│   │   └── product/
│   │       ├── ProductCard.jsx   # Product item card
│   │       └── ProductGrid.jsx   # Product listing grid
│   ├── pages/
│   │   ├── HomePage.jsx        # Home page
│   │   ├── ProductPage.jsx     # Product detail page
│   │   ├── CartPage.jsx        # Shopping cart
│   │   ├── CheckoutPage.jsx    # Checkout page
│   │   └── TermsPage.jsx       # Terms & conditions
│   ├── context/
│   │   └── CartContext.jsx     # Cart state management
│   ├── data/
│   │   └── products.js         # Mock product data
│   ├── App.jsx                 # Main app routing
│   ├── main.jsx                # App entry point
│   ├── index.css               # Global styles
│   └── App.css                 # Component styles
├── public/                     # Static assets
├── package.json               # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS config
├── postcss.config.js         # PostCSS config
├── eslint.config.js          # ESLint config
└── index.html                # HTML template
```

## 🚀 Quick Start

### Step 1: Clone or Navigate to Project

If you don't have the project yet, clone it or navigate to the project directory:
```bash
cd shopwave
```

### Step 2: Install Dependencies

Install all required npm packages:
```bash
npm install
```

This command reads `package.json` and installs all dependencies in the `node_modules` folder. This may take a few minutes depending on your internet speed.

### Step 3: Start Development Server

Run the development server with hot module replacement (HMR):
```bash
npm run dev
```

You should see output similar to:
```
  VITE v8.0.10  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 4: Open in Browser

Open your web browser and navigate to:
```
http://localhost:5173/
```

You should now see the ShopWave homepage loaded.

## 📝 Available Commands

All commands should be run from the project root directory:

### Development
```bash
npm run dev
```
- Starts the development server with hot reload
- Watches for file changes and auto-refreshes the browser
- Useful during development

### Build for Production
```bash
npm run build
```
- Creates an optimized production build
- Output is in the `dist/` folder
- Minifies and optimizes all assets

### Preview Production Build
```bash
npm run preview
```
- Locally previews the production build
- Useful to test before deploying
- Runs on `http://localhost:4173/`

### Lint Code
```bash
npm run lint
```
- Checks code for linting errors
- Helps maintain code quality
- Reports any style issues

## 🌐 Accessing the App

### Routes Available

Once the app is running, you can navigate to:

- **Home Page** — `http://localhost:5173/`
  - Browse featured products, trending items
  - Browse by category
  - Search for products

- **Product Details** — `http://localhost:5173/product/:id`
  - View full product information
  - See ratings, reviews, and specifications
  - Add items to cart

- **Shopping Cart** — `http://localhost:5173/cart`
  - View items in cart
  - Adjust quantities
  - Remove items
  - View total price

- **Checkout** — `http://localhost:5173/checkout`
  - Review order details
  - Enter shipping & payment info (UI only)

- **Terms & Conditions** — `http://localhost:5173/terms`
  - Read store policies

## 📦 Product Data

The app comes with **18 mock products** across **6 categories**:

1. **Electronics** (4 products)
   - Wireless Headphones, Smart Watch, 4K Camera, Laptop

2. **Fashion** (4 products)
   - Leather Bag, Oxford Shirt, Chinos, Sneakers

3. **Home & Living** (4 products)
   - Aroma Diffuser, Pillow Set, Cast Iron Skillet, Coffee Set

4. **Books** (2 products)
   - Design of Everyday Things, Atomic Habits

5. **Sports** (2 products)
   - Yoga Mat, Dumbbell Set

6. **Beauty** (2 products)
   - Vitamin C Serum, Gua Sha Set

All product data is stored in `src/data/products.js`.

## 🛒 Shopping Features

### Adding Products to Cart
1. Click on any product card or go to its detail page
2. Select quantity (if on detail page)
3. Click "Add to Cart" button
4. Item will be added to your cart

### Managing Cart
1. Go to **Shopping Cart** page
2. View all items in your cart
3. Adjust quantities with +/- buttons
4. Remove items with the remove button
5. See real-time total price calculation

### Cart Persistence
- Your cart is automatically saved to browser's **localStorage**
- Cart contents persist even after refreshing or closing the browser
- Clear cache/cookies to reset the cart

## 🎨 Customization

### Adding New Products
Edit `src/data/products.js`:
```javascript
{
  id: 19,
  category: "electronics",
  name: "Product Name",
  price: 9999,
  originalPrice: 12999,
  rating: 4.8,
  reviews: 1234,
  badge: "New",
  featured: true,
  inStock: true,
  description: "Product description...",
  images: ["image-url-1", "image-url-2"],
  tags: ["tag1", "tag2"],
  specs: { Feature: "Value", ... }
}
```

### Changing Styles
- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Tailwind config: `tailwind.config.js`

### Modifying Navigation
Edit category links in `src/components/layout/Navbar.jsx`:
```javascript
["Electronics", "Fashion", "Home", "Books", "Sports", "Beauty"]
```

## 🐛 Troubleshooting

### Issue: Port 5173 already in use
**Solution:** Kill the process using that port or specify a different port:
```bash
npm run dev -- --port 3000
```

### Issue: Dependencies not installing
**Solution:** Clear npm cache and try again:
```bash
npm cache clean --force
npm install
```

### Issue: Styling not appearing
**Solution:** Make sure Tailwind CSS is properly built:
```bash
npm run dev
```
Wait for compilation to complete.

### Issue: Changes not reflecting in browser
**Solution:** 
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deploy to:
- **Vercel**: Connect GitHub repo, auto-deploys on push
- **Netlify**: Drag-drop `dist/` folder or connect GitHub
- **GitHub Pages**: Push to gh-pages branch
- **Traditional Hosting**: Upload `dist/` folder via FTP/SSH

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Project Full Documentation](./SHOPWAVE_PROJECT_DOCUMENTATION.txt)

## 📄 License

This project is open source and available for educational and development purposes.

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Some suggestions:
- Add backend API integration
- Implement user authentication
- Add real payment processing
- Improve accessibility
- Add more products
- Add unit and integration tests

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the full project documentation
3. Check browser console for error messages (F12)
4. Ensure Node.js and npm are up to date

---

**Happy Shopping! 🎉**

Built with ❤️ using React, Vite, and Tailwind CSS
