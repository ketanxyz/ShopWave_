import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-ink-100" : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-charcoal text-cream text-xs text-center py-1.5 font-body tracking-widest">
        FREE SHIPPING ON ORDERS ABOVE ₹1999 &nbsp;·&nbsp; USE CODE: WAVE10
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-bold text-charcoal tracking-tight">
            Shop<span className="text-ember-500">Wave</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Electronics", "Fashion", "Home", "Books", "Sports", "Beauty"].map((cat) => (
              <NavLink
                key={cat}
                to={`/?category=${cat.toLowerCase()}`}
                className="font-body text-sm font-medium text-ink-700 hover:text-ember-500 transition-colors tracking-wide"
              >
                {cat}
              </NavLink>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center border border-ink-200 bg-ink-50 rounded-full px-4 py-1.5 gap-2 focus-within:border-ink-400 transition-colors">
              <svg className="w-4 h-4 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-sm outline-none w-36 text-charcoal placeholder-ink-300 font-body"
              />
            </form>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-ink-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-ember-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              <div className="w-5 space-y-1">
                <span className={`block h-0.5 bg-charcoal transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-charcoal transition-all ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-charcoal transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-ink-100 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="flex items-center border border-ink-200 rounded-full px-4 py-2 gap-2">
            <svg className="w-4 h-4 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent text-sm outline-none flex-1 font-body" />
          </form>
          {["Electronics", "Fashion", "Home", "Books", "Sports", "Beauty"].map((cat) => (
            <NavLink key={cat} to={`/?category=${cat.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="block py-2 font-body font-medium text-ink-700 border-b border-ink-100">
              {cat}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
