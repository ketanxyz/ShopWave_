import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function SuggestedProducts({ products, title = "You May Also Like" }) {
  const { dispatch } = useCart();

  if (!products || products.length === 0) return null;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-500 uppercase mb-2">Discover</p>
          <h2 className="font-display text-3xl font-bold text-charcoal">{title}</h2>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible scrollbar-hide">
          {products.map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group flex-shrink-0 w-60 md:w-auto bg-white border border-ink-100 hover:border-ember-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-sm"
              >
                <div className="relative aspect-square overflow-hidden bg-ink-50">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {discount > 0 && (
                    <span className="absolute top-2 right-2 bg-ember-500 text-cream text-[10px] font-body px-1.5 py-0.5">
                      -{discount}%
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-body font-medium tracking-widest uppercase text-ink-400 mb-0.5">{product.category}</p>
                  <h4 className="font-body font-medium text-charcoal text-sm leading-tight mb-2 line-clamp-2 group-hover:text-ember-500 transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-charcoal text-sm">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: "ADD", product });
                      }}
                      className="text-[10px] font-body border border-charcoal text-charcoal px-2 py-1 hover:bg-charcoal hover:text-cream transition-all duration-200"
                    >
                      + Cart
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
