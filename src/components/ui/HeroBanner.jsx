import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { banners } from "../../data/products";

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % banners.length), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const banner = banners[current];

  return (
    <div className="relative h-[520px] md:h-[620px] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        style={{
          backgroundImage: `url(${banner.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className={`max-w-lg transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <span className="inline-block text-ember-400 text-xs font-body font-medium tracking-[0.3em] uppercase mb-4 border border-ember-400/40 px-3 py-1">
            New Collection
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-cream leading-none mb-6 whitespace-pre-line">
            {banner.title}
          </h1>
          <p className="font-body text-ink-200 text-lg mb-8 leading-relaxed max-w-sm">
            {banner.subtitle}
          </p>
          <div className="flex gap-4">
            <Link to="/?category=all" className="bg-ember-500 hover:bg-ember-400 text-cream font-body font-medium px-8 py-3.5 tracking-wide transition-all duration-200 active:scale-95">
              {banner.cta}
            </Link>
            <Link to="/?category=all" className="border border-cream/40 text-cream font-body font-medium px-8 py-3.5 tracking-wide hover:bg-cream/10 transition-all duration-200">
              Browse All
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2 bg-ember-400" : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={() => goTo((current - 1 + banners.length) % banners.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center rounded-full transition-colors backdrop-blur-sm"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % banners.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 text-white flex items-center justify-center rounded-full transition-colors backdrop-blur-sm"
      >
        ›
      </button>
    </div>
  );
}
