export default function PromoBanner() {
  return (
    <section className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🚚",
              title: "Free Delivery",
              desc: "On all orders above ₹1,999. Same-day delivery in select cities.",
            },
            {
              icon: "🔄",
              title: "Easy Returns",
              desc: "30-day hassle-free return policy. No questions asked.",
            },
            {
              icon: "🔒",
              title: "Secure Payments",
              desc: "256-bit SSL encryption. Your data is always safe with us.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-5 p-6 border border-ink-700 hover:border-ember-500 transition-colors group">
              <span className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <div>
                <h3 className="font-display font-semibold text-lg text-cream mb-1">{item.title}</h3>
                <p className="font-body text-sm text-ink-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
