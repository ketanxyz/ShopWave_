import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ink-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-ink-700">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-3xl font-bold text-cream mb-4">
              Shop<span className="text-ember-400">Wave</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-400 mb-6 font-body">
              Your destination for curated goods — from tech to fashion to artisan home finds.
            </p>
            <div className="flex gap-3">
              {["instagram", "twitter", "facebook", "youtube"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 bg-ink-700 hover:bg-ember-500 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-xs uppercase text-cream font-body">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-cream font-semibold mb-4 text-sm tracking-widest uppercase">Shop</h4>
            <ul className="space-y-2.5 font-body text-sm">
              {[["Electronics", "/?category=electronics"], ["Fashion", "/?category=fashion"], ["Home & Living", "/?category=home"], ["Books", "/?category=books"], ["Sports", "/?category=sports"], ["Beauty", "/?category=beauty"]].map(([name, to]) => (
                <li key={name}><Link to={to} className="hover:text-cream transition-colors">{name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-cream font-semibold mb-4 text-sm tracking-widest uppercase">Help</h4>
            <ul className="space-y-2.5 font-body text-sm">
              {["Track Order", "Returns & Exchanges", "Shipping Policy", "FAQ", "Contact Us"].map((item) => (
                <li key={item}><a href="#" className="hover:text-cream transition-colors">{item}</a></li>
              ))}
              <li><Link to="/terms" className="hover:text-cream transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-cream font-semibold mb-4 text-sm tracking-widest uppercase">Newsletter</h4>
            <p className="text-sm text-ink-400 mb-4 font-body">Get deals, new arrivals and style tips straight to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-ink-800 border border-ink-700 text-cream placeholder-ink-500 px-4 py-2.5 text-sm font-body outline-none focus:border-ember-400" />
              <button className="bg-ember-500 hover:bg-ember-400 text-cream px-4 py-2.5 text-sm font-body font-medium transition-colors">→</button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ink-500 font-body">© 2026 ShopWave. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-ink-500 font-body">
            <Link to="/terms" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms of Use</Link>
            <a href="#" className="hover:text-cream transition-colors">Cookie Settings</a>
          </div>
          <div className="flex gap-2 items-center text-xs text-ink-500 font-body">
            <span>💳</span> Visa · Mastercard · UPI · NetBanking
          </div>
        </div>
      </div>
    </footer>
  );
}
