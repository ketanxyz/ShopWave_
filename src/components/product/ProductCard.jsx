import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? "text-amber-400" : "text-ink-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const addToCart = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", product });
    // Brief feedback animation
    const btn = e.currentTarget;
    btn.textContent = "Added ✓";
    btn.classList.add("bg-sage", "border-sage");
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.classList.remove("bg-sage", "border-sage");
    }, 1200);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block bg-white rounded-sm overflow-hidden border border-ink-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-ink-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-charcoal text-cream text-[10px] font-body font-medium tracking-widest uppercase px-2 py-0.5">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-ember-500 text-cream text-[10px] font-body font-medium px-2 py-0.5">
            -{discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[10px] font-body font-medium tracking-widest uppercase text-ink-400 mb-1">{product.category}</p>
        <h3 className="font-body font-medium text-charcoal text-sm leading-snug mb-2 line-clamp-2 group-hover:text-ember-500 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-ink-400 font-body">({product.reviews.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-display font-semibold text-charcoal">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-xs text-ink-300 line-through font-body">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={addToCart}
          className="mt-3 w-full border border-charcoal text-charcoal text-xs font-body font-medium tracking-wide py-2 hover:bg-charcoal hover:text-cream transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
