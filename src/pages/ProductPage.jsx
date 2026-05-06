import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, getSuggestedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import SuggestedProducts from "../components/ui/SuggestedProducts";

const StarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= Math.round(rating) ? "text-amber-400" : "text-ink-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <span className="text-sm font-body text-ink-500">{rating} ({reviews.toLocaleString()} reviews)</span>
  </div>
);

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { dispatch } = useCart();

  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="mt-[72px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Product Not Found</h2>
          <Link to="/" className="text-ember-500 font-body underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) dispatch({ type: "ADD", product });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < qty; i++) dispatch({ type: "ADD", product });
    navigate("/cart");
  };

  const suggested = getSuggestedProducts(id, 4);

  return (
    <div className="mt-[72px]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs font-body text-ink-400">
          <Link to="/" className="hover:text-ember-500 transition-colors">Home</Link>
          <span>›</span>
          <Link to={`/?category=${product.category}`} className="hover:text-ember-500 transition-colors capitalize">
            {product.category}
          </Link>
          <span>›</span>
          <span className="text-charcoal line-clamp-1">{product.name}</span>
        </nav>
      </div>

      {/* Main Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square bg-ink-50 overflow-hidden mb-3 border border-ink-100">
              <img
                src={product.images[selectedImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`w-20 h-20 border-2 overflow-hidden transition-all ${
                      i === selectedImg ? "border-ember-500" : "border-ink-100 hover:border-ink-300"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {product.badge && (
              <span className="inline-block bg-charcoal text-cream text-[10px] font-body font-medium tracking-widest uppercase px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-4">
              {product.name}
            </h1>

            <StarRating rating={product.rating} reviews={product.reviews} />

            {/* Price */}
            <div className="flex items-baseline gap-4 mt-6 mb-6 pb-6 border-b border-ink-100">
              <span className="font-display text-4xl font-bold text-charcoal">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-body text-xl text-ink-300 line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="bg-ember-500 text-cream font-body font-medium text-sm px-2 py-0.5">
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-400"}`} />
              <span className={`text-sm font-body font-medium ${product.inStock ? "text-green-700" : "text-red-600"}`}>
                {product.inStock ? "In Stock — Ready to Ship" : "Out of Stock"}
              </span>
            </div>

            {/* Qty */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body font-medium text-charcoal text-sm">Quantity</span>
              <div className="flex items-center border border-ink-200">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-ink-50 transition-colors font-body text-lg">−</button>
                <span className="w-12 text-center font-body font-medium text-charcoal">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-ink-50 transition-colors font-body text-lg">+</button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 font-body font-medium tracking-wide transition-all duration-200 ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
                } disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="flex-1 py-4 bg-ember-500 hover:bg-ember-600 text-cream font-body font-medium tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs font-body text-ink-500 bg-ink-50 border border-ink-200 px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-ink-100">
              {[["🚚", "Free Delivery", "Above ₹1999"], ["🔄", "30-Day Returns", "Hassle free"], ["✅", "Authentic", "100% Genuine"]].map(([icon, title, sub]) => (
                <div key={title} className="text-center p-3 bg-ink-50 rounded-sm">
                  <span className="text-xl">{icon}</span>
                  <p className="text-xs font-body font-medium text-charcoal mt-1">{title}</p>
                  <p className="text-[10px] font-body text-ink-400">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex border-b border-ink-200">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-body font-medium text-sm tracking-wide capitalize transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-ember-500 text-ember-500"
                    : "border-transparent text-ink-500 hover:text-charcoal"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="max-w-2xl">
                <p className="font-body text-ink-600 leading-relaxed text-base">{product.description}</p>
                <ul className="mt-6 space-y-2">
                  {["Premium quality materials", "Carefully crafted for durability", "Designed for everyday use", "Backed by our satisfaction guarantee"].map((point) => (
                    <li key={point} className="flex items-center gap-3 font-body text-sm text-ink-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="max-w-lg">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs || {}).map(([key, val], i) => (
                      <tr key={key} className={i % 2 === 0 ? "bg-ink-50" : "bg-white"}>
                        <td className="py-3 px-4 font-body font-medium text-charcoal text-sm w-1/2">{key}</td>
                        <td className="py-3 px-4 font-body text-ink-600 text-sm">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-2xl space-y-6">
                <div className="flex items-center gap-6 p-6 bg-ink-50 rounded-sm">
                  <div className="text-center">
                    <div className="font-display text-5xl font-bold text-charcoal">{product.rating}</div>
                    <div className="flex justify-center mt-1">
                      {[1,2,3,4,5].map(s => <span key={s} className={`text-lg ${s <= product.rating ? "text-amber-400" : "text-ink-200"}`}>★</span>)}
                    </div>
                    <div className="text-xs font-body text-ink-400 mt-1">{product.reviews.toLocaleString()} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5,4,3,2,1].map(star => {
                      const pct = star === 5 ? 65 : star === 4 ? 20 : star === 3 ? 10 : star === 2 ? 3 : 2;
                      return (
                        <div key={star} className="flex items-center gap-3">
                          <span className="text-xs font-body text-ink-400 w-3">{star}</span>
                          <div className="flex-1 h-2 bg-ink-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs font-body text-ink-400 w-8">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {[
                  { name: "Priya S.", date: "2 days ago", rating: 5, text: "Absolutely love this product! Quality exceeded my expectations. Fast delivery too." },
                  { name: "Rahul M.", date: "1 week ago", rating: 4, text: "Great value for money. Would definitely recommend to friends and family." },
                  { name: "Ananya K.", date: "2 weeks ago", rating: 5, text: "Perfect! Exactly as described. The packaging was immaculate." },
                ].map((review) => (
                  <div key={review.name} className="border-b border-ink-100 pb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-ink-200 flex items-center justify-center text-sm font-display font-bold text-charcoal">
                          {review.name[0]}
                        </div>
                        <span className="font-body font-medium text-charcoal text-sm">{review.name}</span>
                      </div>
                      <span className="text-xs font-body text-ink-400">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {[1,2,3,4,5].map(s => <span key={s} className={`text-sm ${s <= review.rating ? "text-amber-400" : "text-ink-200"}`}>★</span>)}
                    </div>
                    <p className="font-body text-sm text-ink-600">{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <SuggestedProducts products={suggested} title="Related Products" />
    </div>
  );
}
