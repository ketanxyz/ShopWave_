import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const steps = ["Delivery", "Payment", "Review"];

export default function CheckoutPage() {
  const { items, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "",
    payMethod: "upi", upiId: "", cardNum: "", cardExp: "", cardCvv: "",
  });

  const shipping = totalPrice >= 1999 ? 0 : 99;
  const tax = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + shipping + tax;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch({ type: "CLEAR" });
  };

  if (orderPlaced) {
    return (
      <div className="mt-[72px] min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold text-charcoal mb-3">Order Placed!</h2>
          <p className="font-body text-ink-500 mb-2">
            Thank you, <strong>{form.name || "valued customer"}</strong>! Your order has been confirmed.
          </p>
          <p className="font-body text-ink-400 text-sm mb-2">
            Order #{Math.random().toString(36).slice(2, 10).toUpperCase()}
          </p>
          <p className="font-body text-ink-400 text-sm mb-8">
            Estimated delivery: <strong>3–5 business days</strong>
          </p>
          <Link
            to="/"
            className="bg-charcoal hover:bg-ember-500 text-cream font-body font-medium px-8 py-4 tracking-wide transition-colors inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mt-[72px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-ink-500 mb-4">No items to checkout.</p>
          <Link to="/" className="text-ember-500 font-body underline">Go Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[72px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-500 uppercase mb-1">Checkout</p>
        <h1 className="font-display text-3xl font-bold text-charcoal">Complete Your Order</h1>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-0 mb-10">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`flex items-center gap-2 cursor-pointer transition-colors ${i <= step ? "text-ember-500" : "text-ink-300"}`}
              onClick={() => i < step && setStep(i)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-bold border-2 transition-colors ${
                i < step ? "bg-ember-500 border-ember-500 text-white" :
                i === step ? "border-ember-500 text-ember-500 bg-white" :
                "border-ink-200 text-ink-300"
              }`}>
                {i < step ? "✓" : i + 1}
              </div>
              <span className="font-body font-medium text-sm hidden sm:block">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-3 transition-colors ${i < step ? "bg-ember-400" : "bg-ink-200"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          {/* Step 0: Delivery */}
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="font-display text-xl font-semibold text-charcoal mb-6">Delivery Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[["Full Name", "name", "text"], ["Email Address", "email", "email"], ["Phone Number", "phone", "tel"]].map(([label, key, type]) => (
                  <div key={key} className={key === "name" ? "sm:col-span-2" : ""}>
                    <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">{label}</label>
                    <input type={type} value={form[key]} onChange={set(key)} placeholder={label}
                      className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-ember-400 transition-colors" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">Address</label>
                <input type="text" value={form.address} onChange={set("address")} placeholder="Street address, apartment, etc."
                  className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-ember-400 transition-colors" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[["City", "city"], ["State", "state"], ["Pincode", "pincode"]].map(([label, key]) => (
                  <div key={key}>
                    <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">{label}</label>
                    <input type="text" value={form[key]} onChange={set(key)} placeholder={label}
                      className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm text-charcoal outline-none focus:border-ember-400 transition-colors" />
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-4 bg-ember-500 hover:bg-ember-600 text-cream font-body font-medium px-10 py-4 tracking-wide transition-colors">
                Continue to Payment →
              </button>
            </div>
          )}

          {/* Step 1: Payment */}
          {step === 1 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-6">Payment Method</h2>
              <div className="space-y-3 mb-6">
                {[["upi", "UPI", "Pay with Google Pay, PhonePe, BHIM etc."], ["card", "Credit / Debit Card", "Visa, Mastercard, RuPay"], ["cod", "Cash on Delivery", "Pay when your order arrives"]].map(([val, label, sub]) => (
                  <label key={val} className={`flex items-center gap-4 p-4 border-2 cursor-pointer transition-colors ${form.payMethod === val ? "border-ember-400 bg-ember-50" : "border-ink-200 bg-white hover:border-ink-300"}`}>
                    <input type="radio" name="pay" value={val} checked={form.payMethod === val} onChange={set("payMethod")} className="accent-ember-500" />
                    <div>
                      <p className="font-body font-medium text-charcoal text-sm">{label}</p>
                      <p className="font-body text-xs text-ink-400">{sub}</p>
                    </div>
                  </label>
                ))}
              </div>

              {form.payMethod === "upi" && (
                <div>
                  <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">UPI ID</label>
                  <input type="text" value={form.upiId} onChange={set("upiId")} placeholder="username@upi"
                    className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm outline-none focus:border-ember-400 transition-colors" />
                </div>
              )}

              {form.payMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">Card Number</label>
                    <input type="text" value={form.cardNum} onChange={set("cardNum")} placeholder="1234 5678 9012 3456" maxLength={19}
                      className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm outline-none focus:border-ember-400 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">Expiry</label>
                      <input type="text" value={form.cardExp} onChange={set("cardExp")} placeholder="MM/YY" maxLength={5}
                        className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm outline-none focus:border-ember-400 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-ink-500 uppercase tracking-wider mb-1.5">CVV</label>
                      <input type="password" value={form.cardCvv} onChange={set("cardCvv")} placeholder="•••" maxLength={4}
                        className="w-full border border-ink-200 bg-white px-4 py-3 font-body text-sm outline-none focus:border-ember-400 transition-colors" />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-6">
                <button onClick={() => setStep(0)} className="border border-ink-300 text-charcoal font-body font-medium px-6 py-4 hover:bg-ink-50 transition-colors">
                  ← Back
                </button>
                <button onClick={() => setStep(2)} className="flex-1 bg-ember-500 hover:bg-ember-600 text-cream font-body font-medium py-4 tracking-wide transition-colors">
                  Review Order →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Review */}
          {step === 2 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-6">Review Your Order</h2>

              {/* Delivery summary */}
              <div className="mb-6 p-4 bg-ink-50 border border-ink-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-body font-semibold text-charcoal text-sm">Delivery To</h3>
                  <button onClick={() => setStep(0)} className="text-xs text-ember-500 font-body underline">Edit</button>
                </div>
                <p className="font-body text-sm text-ink-600">{form.name}</p>
                <p className="font-body text-sm text-ink-600">{form.address}, {form.city}, {form.state} - {form.pincode}</p>
                <p className="font-body text-sm text-ink-600">{form.phone}</p>
              </div>

              {/* Payment summary */}
              <div className="mb-6 p-4 bg-ink-50 border border-ink-200">
                <div className="flex justify-between items-start">
                  <h3 className="font-body font-semibold text-charcoal text-sm">Payment</h3>
                  <button onClick={() => setStep(1)} className="text-xs text-ember-500 font-body underline">Edit</button>
                </div>
                <p className="font-body text-sm text-ink-600 mt-1 capitalize">
                  {form.payMethod === "cod" ? "Cash on Delivery" : form.payMethod === "upi" ? `UPI — ${form.upiId || "—"}` : `Card ending ••••${form.cardNum.slice(-4) || "——"}`}
                </p>
              </div>

              {/* Items */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-3 border-b border-ink-100">
                    <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover bg-ink-50 border border-ink-100 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-body font-medium text-charcoal text-sm leading-tight line-clamp-1">{item.name}</p>
                      <p className="font-body text-xs text-ink-400 mt-0.5">Qty: {item.qty}</p>
                    </div>
                    <span className="font-display font-semibold text-charcoal text-sm">
                      ₹{(item.price * item.qty).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="border border-ink-300 text-charcoal font-body font-medium px-6 py-4 hover:bg-ink-50 transition-colors">
                  ← Back
                </button>
                <button onClick={handlePlaceOrder} className="flex-1 bg-charcoal hover:bg-ember-500 text-cream font-body font-medium py-4 tracking-wide transition-colors">
                  Place Order — ₹{grandTotal.toLocaleString("en-IN")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-ink-50 border border-ink-200 p-6 sticky top-24">
            <h3 className="font-display font-semibold text-charcoal mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm font-body">
                  <span className="text-ink-600 line-clamp-1 flex-1 mr-2">{item.name} ×{item.qty}</span>
                  <span className="font-medium text-charcoal flex-shrink-0">₹{(item.price * item.qty).toLocaleString("en-IN")}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-ink-200 pt-4 space-y-2">
              <div className="flex justify-between text-sm font-body text-ink-600">
                <span>Subtotal</span><span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-sm font-body text-ink-600">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600" : ""}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm font-body text-ink-600">
                <span>GST (18%)</span><span>₹{tax.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between font-display font-bold text-charcoal pt-2 border-t border-ink-200">
                <span>Total</span><span>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
