import { Link } from "react-router-dom";
import { getFeaturedProducts } from "../../data/products";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="bg-ink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-500 uppercase mb-2">Handpicked</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">Featured Products</h2>
          </div>
          <Link to="/?category=all" className="hidden md:flex items-center gap-1 text-sm font-body font-medium text-ink-500 hover:text-ember-500 transition-colors">
            View all <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/?category=all" className="inline-flex items-center gap-2 border border-charcoal text-charcoal font-body font-medium px-6 py-3 hover:bg-charcoal hover:text-cream transition-all duration-200">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
