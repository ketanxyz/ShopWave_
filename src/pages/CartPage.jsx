import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getSuggestedProducts } from "../data/products";
import SuggestedProducts from "../components/ui/SuggestedProducts";

export default function CartPage() {
  const { items, totalItems, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();

  const shipping = totalPrice >= 1999 ? 0 : 99;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="mt-[72px] min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-8xl mb-6">🛒</div>
        <h2 className="font-display text-3xl font-bold text-charcoal mb-3">Your cart is empty</h2>
        <p className="font-body text-ink-500 mb-8 text-center">Looks like you haven't added anything yet. Let's change that!</p>
        <Link to="/" className="bg-charcoal hover:bg-ember-500 text-cream font-body font-medium px-8 py-4 tracking-wide transition-all duration-200">
          Start Shopping
        </Link>
        <SuggestedProducts products={getSuggestedProducts(null, 4)} title="You Might Like" />
      </div>
    );
  }

  return (
    <div className="mt-[72px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-500 uppercase mb-1">Your Bag</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
          Shopping Cart <span className="text-ink-400 text-2xl">({totalItems})</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {/* Column headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-2 border-b border-ink-200 text-xs font-body font-medium tracking-widest uppercase text-ink-400">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 py-4 border-b border-ink-100 items-start group">
              {/* Image + Info */}
              <div className="col-span-12 md:col-span-6 flex gap-4">
                <Link to={`/product/${item.id}`} className="flex-shrink-0 w-24 h-24 bg-ink-50 overflow-hidden border border-ink-100">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                </Link>
                <div>
                  <p className="text-[10px] font-body font-medium tracking-widest uppercase text-ink-400 mb-1">{item.category}</p>
                  <Link to={`/product/${item.id}`} className="font-body font-medium text-charcoal text-sm leading-snug hover:text-ember-500 transition-colors line-clamp-2 mb-2">
                    {item.name}
                  </Link>
                  <button
                    onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                    className="text-xs font-body text-ink-400 hover:text-red-500 transition-colors underline underline-offset-2"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-4 md:col-span-2 text-center">
                <p className="text-xs font-body text-ink-400 md:hidden mb-1">Price</p>
                <span className="font-body font-medium text-charcoal text-sm">
                  ₹{item.price.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Qty */}
              <div className="col-span-4 md:col-span-2 flex justify-center">
                <div className="flex items-center border border-ink-200">
                  <button
                    onClick={() => dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty - 1 })}
                    className="w-8 h-8 flex items-center justify-center hover:bg-ink-50 transition-colors font-body"
                  >−</button>
                  <span className="w-8 text-center font-body text-sm font-medium">{item.qty}</span>
                  <button
                    onClick={() => dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty + 1 })}
                    className="w-8 h-8 flex items-center justify-center hover:bg-ink-50 transition-colors font-body"
                  >+</button>
                </div>
              </div>

              {/* Total */}
              <div className="col-span-4 md:col-span-2 text-right">
                <p className="text-xs font-body text-ink-400 md:hidden mb-1">Total</p>
                <span className="font-display font-semibold text-charcoal">
                  ₹{(item.price * item.qty).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          ))}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
            <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-ink-500 hover:text-ember-500 transition-colors">
              ← Continue Shopping
            </Link>
            <button
              onClick={() => dispatch({ type: "CLEAR" })}
              className="text-sm font-body text-ink-400 hover:text-red-500 transition-colors underline underline-offset-2"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-ink-50 border border-ink-200 p-6 sticky top-24">
            <h2 className="font-display font-semibold text-xl text-charcoal mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6 pb-6 border-b border-ink-200">
              <div className="flex justify-between font-body text-sm">
                <span className="text-ink-600">Subtotal ({totalItems} items)</span>
                <span className="font-medium text-charcoal">₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-ink-600">Shipping</span>
                <span className={`font-medium ${shipping === 0 ? "text-green-600" : "text-charcoal"}`}>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between font-body text-sm">
                <span className="text-ink-600">GST (18%)</span>
                <span className="font-medium text-charcoal">₹{tax.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {totalPrice < 1999 && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 text-xs font-body text-amber-700">
                Add ₹{(1999 - totalPrice).toLocaleString("en-IN")} more for free shipping!
              </div>
            )}

            <div className="flex justify-between font-display font-bold text-xl text-charcoal mb-6">
              <span>Total</span>
              <span>₹{grandTotal.toLocaleString("en-IN")}</span>
            </div>

            {/* Coupon */}
            <div className="flex mb-6">
              <input
                type="text"
                placeholder="Coupon code"
                className="flex-1 border border-ink-300 bg-white px-3 py-2 text-sm font-body outline-none focus:border-ink-500"
              />
              <button className="bg-charcoal text-cream px-4 py-2 text-sm font-body hover:bg-ember-500 transition-colors">Apply</button>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-ember-500 hover:bg-ember-600 text-cream font-body font-medium py-4 tracking-wide transition-all duration-200 mb-3"
            >
              Proceed to Checkout →
            </button>

            <div className="text-center text-xs font-body text-ink-400 mt-4 space-y-1">
              <p>🔒 Secured by 256-bit SSL encryption</p>
              <p>💳 Visa · Mastercard · UPI · Net Banking</p>
            </div>
          </div>
        </div>
      </div>

      <SuggestedProducts products={getSuggestedProducts(null, 4)} title="You May Also Like" />
    </div>
  );
}
