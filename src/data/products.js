export const categories = [
  { id: "electronics", name: "Electronics", icon: "💻", color: "bg-slate-100", count: 12 },
  { id: "fashion", name: "Fashion", icon: "👗", color: "bg-pink-50", count: 28 },
  { id: "home", name: "Home & Living", icon: "🏡", color: "bg-amber-50", count: 19 },
  { id: "books", name: "Books", icon: "📚", color: "bg-emerald-50", count: 34 },
  { id: "sports", name: "Sports", icon: "⚽", color: "bg-blue-50", count: 15 },
  { id: "beauty", name: "Beauty", icon: "✨", color: "bg-rose-50", count: 22 },
];

export const banners = [
  {
    id: 1,
    title: "New Season\nArrival",
    subtitle: "Discover the latest trends in fashion and lifestyle",
    cta: "Shop Now",
    bg: "from-ink-800 to-ink-900",
    accent: "#d4461a",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
  },
  {
    id: 2,
    title: "Tech\nEssentials",
    subtitle: "Cutting-edge electronics for the modern professional",
    cta: "Explore",
    bg: "from-slate-800 to-charcoal",
    accent: "#6b7c5c",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&q=80",
  },
  {
    id: 3,
    title: "Summer\nSale",
    subtitle: "Up to 50% off on selected items across all categories",
    cta: "Grab Deals",
    bg: "from-ember-600 to-ember-800",
    accent: "#faf8f3",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80",
  },
];

export const products = [
  // Electronics
  {
    id: 1, category: "electronics", name: "Wireless Noise-Cancelling Headphones",
    price: 4999, originalPrice: 7499, rating: 4.8, reviews: 2341,
    badge: "Best Seller", featured: true, inStock: true,
    description: "Premium wireless headphones with industry-leading noise cancellation, 30-hour battery life, and exceptional sound quality.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
    ],
    tags: ["wireless", "audio", "premium"],
    specs: { Brand: "SoundCore", Battery: "30 hrs", Connectivity: "Bluetooth 5.2", Weight: "250g" },
  },
  {
    id: 2, category: "electronics", name: "Smart Watch Pro Series 5",
    price: 12999, originalPrice: 15999, rating: 4.6, reviews: 1823,
    badge: "New", featured: true, inStock: true,
    description: "Advanced smartwatch with health monitoring, GPS, and a stunning always-on AMOLED display.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    ],
    tags: ["smartwatch", "fitness", "wearable"],
    specs: { Display: "1.4\" AMOLED", Battery: "7 days", GPS: "Built-in", Water: "50m" },
  },
  {
    id: 3, category: "electronics", name: "4K Ultra HD Camera",
    price: 34999, originalPrice: 39999, rating: 4.9, reviews: 892,
    badge: "Pro", featured: false, inStock: true,
    description: "Mirrorless camera with 4K video, 24.2MP sensor and 5-axis image stabilization.",
    images: ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80"],
    tags: ["camera", "photography", "4k"],
    specs: { Sensor: "24.2 MP", Video: "4K 60fps", ISO: "100-51200", Weight: "650g" },
  },
  {
    id: 4, category: "electronics", name: "Slim Laptop 14\" i7",
    price: 64999, originalPrice: 74999, rating: 4.7, reviews: 567,
    badge: "Deal", featured: true, inStock: true,
    description: "Ultra-thin laptop with Intel i7, 16GB RAM, 512GB SSD and all-day battery life.",
    images: ["https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80"],
    tags: ["laptop", "work", "portable"],
    specs: { CPU: "Intel i7 12th", RAM: "16GB", Storage: "512GB SSD", Battery: "14 hrs" },
  },

  // Fashion
  {
    id: 5, category: "fashion", name: "Premium Leather Crossbody Bag",
    price: 3499, originalPrice: 4999, rating: 4.7, reviews: 1456,
    badge: "Trending", featured: true, inStock: true,
    description: "Hand-crafted genuine leather bag with adjustable strap and gold-tone hardware.",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    ],
    tags: ["bag", "leather", "accessories"],
    specs: { Material: "Genuine Leather", Dimensions: "25×18×8 cm", Strap: "Adjustable", Color: "Tan Brown" },
  },
  {
    id: 6, category: "fashion", name: "Classic Oxford White Shirt",
    price: 1299, originalPrice: 1799, rating: 4.5, reviews: 3201,
    badge: "Classic", featured: false, inStock: true,
    description: "Crisp Oxford weave cotton shirt, perfect for both formal and casual occasions.",
    images: ["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80"],
    tags: ["shirt", "formal", "cotton"],
    specs: { Material: "100% Cotton", Fit: "Regular", Care: "Machine Wash", Sizes: "XS–XXL" },
  },
  {
    id: 7, category: "fashion", name: "Slim Fit Chinos - Navy",
    price: 1899, originalPrice: 2499, rating: 4.4, reviews: 2108,
    badge: null, featured: false, inStock: true,
    description: "Stretch slim-fit chinos in a versatile navy, ideal for office or weekend wear.",
    images: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"],
    tags: ["pants", "casual", "slim"],
    specs: { Material: "Stretch Cotton", Fit: "Slim", Rise: "Mid", Sizes: "28–38" },
  },
  {
    id: 8, category: "fashion", name: "Minimalist Leather Sneakers",
    price: 4599, originalPrice: 5999, rating: 4.6, reviews: 987,
    badge: "New", featured: true, inStock: true,
    description: "Italian-inspired minimalist leather sneakers with cushioned insole and rubber sole.",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"],
    tags: ["shoes", "sneakers", "leather"],
    specs: { Material: "Full-grain Leather", Sole: "Natural Rubber", Sizes: "6–12", Color: "White" },
  },

  // Home & Living
  {
    id: 9, category: "home", name: "Bamboo Aroma Diffuser",
    price: 1599, originalPrice: 2199, rating: 4.8, reviews: 4321,
    badge: "Best Seller", featured: true, inStock: true,
    description: "Elegant ultrasonic diffuser with ambient LED lighting and 7-color mood setting.",
    images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80"],
    tags: ["aromatherapy", "home", "wellness"],
    specs: { Capacity: "500ml", Coverage: "30 m²", Timer: "1/3/6 hrs", LEDs: "7 colors" },
  },
  {
    id: 10, category: "home", name: "Linen Throw Pillow Set (2)",
    price: 1099, originalPrice: 1399, rating: 4.3, reviews: 1876,
    badge: null, featured: false, inStock: true,
    description: "Woven linen pillow covers in natural earth tones, set of two 45×45cm covers.",
    images: ["https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80"],
    tags: ["decor", "linen", "home"],
    specs: { Material: "100% Linen", Size: "45×45 cm", Set: "2 covers", Care: "Machine Wash" },
  },
  {
    id: 11, category: "home", name: "Cast Iron Skillet 10\"",
    price: 2299, originalPrice: 2999, rating: 4.9, reviews: 5432,
    badge: "Top Rated", featured: true, inStock: true,
    description: "Pre-seasoned cast iron skillet that goes from stovetop to oven, built to last generations.",
    images: ["https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?w=600&q=80"],
    tags: ["cooking", "kitchen", "cast iron"],
    specs: { Size: "10 inch", Material: "Cast Iron", "Oven Safe": "Up to 260°C", Weight: "2.3kg" },
  },
  {
    id: 12, category: "home", name: "Ceramic Pour-Over Coffee Set",
    price: 2799, originalPrice: 3499, rating: 4.7, reviews: 2109,
    badge: "Artisan", featured: false, inStock: true,
    description: "Hand-thrown ceramic pour-over dripper with matching server, for the perfect morning ritual.",
    images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"],
    tags: ["coffee", "ceramic", "kitchen"],
    specs: { Capacity: "600ml", Material: "Stoneware", Dishwasher: "Yes", Color: "Matte White" },
  },

  // Books
  {
    id: 13, category: "books", name: "The Design of Everyday Things",
    price: 499, originalPrice: 699, rating: 4.9, reviews: 7821,
    badge: "Classic", featured: false, inStock: true,
    description: "Don Norman's seminal work on user-centered design, revised and expanded edition.",
    images: ["https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&q=80"],
    tags: ["design", "non-fiction", "ux"],
    specs: { Author: "Don Norman", Pages: "368", Publisher: "Basic Books", Edition: "Revised" },
  },
  {
    id: 14, category: "books", name: "Atomic Habits",
    price: 399, originalPrice: 599, rating: 4.8, reviews: 12903,
    badge: "Best Seller", featured: true, inStock: true,
    description: "James Clear's proven framework for building good habits and breaking bad ones.",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"],
    tags: ["self-help", "productivity", "habits"],
    specs: { Author: "James Clear", Pages: "320", Publisher: "Avery", Format: "Hardcover" },
  },

  // Sports
  {
    id: 15, category: "sports", name: "Yoga Mat Premium Cork",
    price: 2199, originalPrice: 2999, rating: 4.7, reviews: 3402,
    badge: "Eco", featured: true, inStock: true,
    description: "Non-slip natural cork yoga mat with antimicrobial surface, 5mm thick.",
    images: ["https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=600&q=80"],
    tags: ["yoga", "fitness", "eco"],
    specs: { Material: "Cork + Rubber", Thickness: "5mm", Dimensions: "183×61 cm", Weight: "1.8kg" },
  },
  {
    id: 16, category: "sports", name: "Adjustable Dumbbell Set 5–25kg",
    price: 8999, originalPrice: 11999, rating: 4.8, reviews: 1678,
    badge: "Value", featured: true, inStock: true,
    description: "Space-saving adjustable dumbbell pair that replaces 15 sets of weights.",
    images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"],
    tags: ["weights", "gym", "strength"],
    specs: { Range: "5–25 kg", Increment: "2.5kg", Material: "Cast Iron", Warranty: "2 years" },
  },

  // Beauty
  {
    id: 17, category: "beauty", name: "Vitamin C Brightening Serum",
    price: 1799, originalPrice: 2499, rating: 4.6, reviews: 6234,
    badge: "Fan Fave", featured: true, inStock: true,
    description: "20% Vitamin C serum with hyaluronic acid and ferulic acid for radiant, even-toned skin.",
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80"],
    tags: ["skincare", "vitamin-c", "serum"],
    specs: { Volume: "30ml", Concentration: "20% Vit C", Skin: "All types", "Cruelty-free": "Yes" },
  },
  {
    id: 18, category: "beauty", name: "Gua Sha Rose Quartz Set",
    price: 999, originalPrice: 1499, rating: 4.5, reviews: 4109,
    badge: "Wellness", featured: false, inStock: true,
    description: "Authentic rose quartz gua sha tool with facial oil for lymphatic drainage ritual.",
    images: ["https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80"],
    tags: ["gua-sha", "skincare", "wellness"],
    specs: { Material: "Rose Quartz", Includes: "Tool + 30ml Oil", Skin: "All types", Origin: "Natural Stone" },
  },
];

export const getProductById = (id) => products.find((p) => p.id === Number(id));
export const getProductsByCategory = (cat) => products.filter((p) => p.category === cat);
export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getSuggestedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== Number(currentId)).slice(0, limit);
