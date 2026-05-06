import { useSearchParams } from "react-router-dom";
import HeroBanner from "../components/ui/HeroBanner";
import CategoryGrid from "../components/ui/CategoryGrid";
import FeaturedProducts from "../components/ui/FeaturedProducts";
import PromoBanner from "../components/ui/PromoBanner";
import SuggestedProducts from "../components/ui/SuggestedProducts";
import ProductGrid from "../components/product/ProductGrid";
import { getSuggestedProducts } from "../data/products";

export default function HomePage() {
  const [params] = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");

  const isBrowsing = category || search;

  return (
    <div>
      {!isBrowsing && (
        <>
          <HeroBanner />
          <CategoryGrid />
          <FeaturedProducts />
          <PromoBanner />
          <SuggestedProducts
            products={getSuggestedProducts(null, 8)}
            title="Trending Now"
          />
        </>
      )}

      {isBrowsing && (
        <div className="mt-[72px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            {category && category !== "all" && (
              <div>
                <p className="text-xs font-body tracking-widest text-ink-400 uppercase mb-1">Category</p>
                <h1 className="font-display text-3xl font-bold text-charcoal capitalize">
                  {category === "home" ? "Home & Living" : category}
                </h1>
              </div>
            )}
            {search && (
              <div>
                <p className="text-xs font-body tracking-widest text-ink-400 uppercase mb-1">Search results for</p>
                <h1 className="font-display text-3xl font-bold text-charcoal">"{search}"</h1>
              </div>
            )}
            {category === "all" && !search && (
              <h1 className="font-display text-3xl font-bold text-charcoal">All Products</h1>
            )}
          </div>
          <ProductGrid categoryFilter={category} searchQuery={search} />
        </div>
      )}

      {/* Newsletter Section */}
      {!isBrowsing && (
        <section className="bg-ink-100 py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-500 uppercase mb-3">Stay in the loop</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Get Exclusive Deals
            </h2>
            <p className="font-body text-ink-500 mb-8 text-lg">
              Join 50,000+ shoppers and never miss a sale, new arrival, or curated pick.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border border-ink-300 bg-white px-4 py-3 font-body text-charcoal outline-none focus:border-ember-400 transition-colors"
              />
              <button className="bg-charcoal hover:bg-ember-500 text-cream font-body font-medium px-8 py-3 tracking-wide transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs font-body text-ink-400">No spam. Unsubscribe anytime.</p>
          </div>
        </section>
      )}
    </div>
  );
}
