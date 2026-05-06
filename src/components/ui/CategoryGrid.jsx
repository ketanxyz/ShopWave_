import { Link } from "react-router-dom";
import { categories } from "../../data/products";

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-500 uppercase mb-2">Explore</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal">Shop by Category</h2>
        </div>
        <Link to="/?category=all" className="hidden md:flex items-center gap-1 text-sm font-body font-medium text-ink-500 hover:text-ember-500 transition-colors">
          All categories <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <Link
            key={cat.id}
            to={`/?category=${cat.id}`}
            className="group relative flex flex-col items-center justify-center p-6 bg-white border border-ink-100 hover:border-ember-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-sm"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            <h3 className="font-body font-semibold text-charcoal text-sm text-center leading-tight mb-1">
              {cat.name}
            </h3>
            <span className="text-xs font-body text-ink-400">{cat.count} items</span>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-ember-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        ))}
      </div>
    </section>
  );
}
