import { useState, useMemo } from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

export default function ProductGrid({ categoryFilter, searchQuery }) {
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 80000]);
  const [minRating, setMinRating] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (categoryFilter && categoryFilter !== "all") {
      list = list.filter((p) => p.category === categoryFilter.toLowerCase().replace(" & living", "").replace("home", "home"));
      if (categoryFilter === "home") list = products.filter((p) => p.category === "home");
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }

    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1] && p.rating >= minRating
    );

    switch (sort) {
      case "price_asc": list.sort((a, b) => a.price - b.price); break;
      case "price_desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "reviews": list.sort((a, b) => b.reviews - a.reviews); break;
      default: list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [categoryFilter, searchQuery, sort, priceRange, minRating]);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 py-3 border-b border-ink-100">
        <div className="flex items-center gap-3">
          <button onClick={() => setFiltersOpen(!filtersOpen)} className="md:hidden flex items-center gap-2 text-sm font-body font-medium text-charcoal border border-ink-200 px-3 py-1.5 hover:bg-ink-50">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M6 10h12M9 16h6" />
            </svg>
            Filters
          </button>
          <span className="text-sm font-body text-ink-400">{filtered.length} products</span>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="text-sm font-body border border-ink-200 bg-white px-3 py-1.5 outline-none focus:border-ink-400 cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <aside className={`${filtersOpen ? "block" : "hidden"} md:block w-56 flex-shrink-0`}>
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="font-display font-semibold text-charcoal mb-3 text-sm">Price Range</h3>
              <div className="space-y-2">
                <input
                  type="range" min={0} max={80000} step={500}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full accent-ember-500"
                />
                <div className="flex justify-between text-xs font-body text-ink-400">
                  <span>₹0</span>
                  <span>₹{priceRange[1].toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-charcoal mb-3 text-sm">Min Rating</h3>
              <div className="space-y-2">
                {[0, 4, 4.5, 4.7].map((r) => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio" name="rating" checked={minRating === r}
                      onChange={() => setMinRating(r)}
                      className="accent-ember-500"
                    />
                    <span className="text-sm font-body text-ink-600">
                      {r === 0 ? "All" : `${r}+ ★`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setSort("featured"); setPriceRange([0, 80000]); setMinRating(0); }}
              className="text-xs font-body text-ember-500 underline underline-offset-2"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-ink-400 font-body">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm mt-1">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
