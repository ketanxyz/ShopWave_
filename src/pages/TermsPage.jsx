import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using ShopWave's website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service. ShopWave reserves the right to modify these terms at any time, and such modifications shall be effective immediately upon posting.`,
  },
  {
    title: "2. Use of the Website",
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse our website by introducing viruses, trojans, worms, or other technologically harmful material. You must not attempt to gain unauthorized access to our website, server, or any database connected to our website.`,
  },
  {
    title: "3. Product Information & Pricing",
    content: `We endeavour to provide accurate product descriptions and pricing. However, ShopWave does not warrant that product descriptions or other content is accurate, complete, reliable, or error-free. Prices are subject to change without notice. We reserve the right to modify or discontinue any product at any time without prior notice. In the event of a pricing error, we reserve the right to cancel orders placed at incorrect prices.`,
  },
  {
    title: "4. Orders & Payment",
    content: `By placing an order on ShopWave, you represent that you are at least 18 years of age. All orders are subject to acceptance and availability. We reserve the right to refuse service to anyone for any reason at any time. Payment must be received before dispatch. We accept major credit/debit cards, UPI, and net banking. All transactions are secured with 256-bit SSL encryption.`,
  },
  {
    title: "5. Shipping & Delivery",
    content: `ShopWave offers free shipping on orders above ₹1,999. For orders below this threshold, a standard shipping fee of ₹99 applies. Estimated delivery times are 3–7 business days depending on your location. We are not responsible for delays caused by courier services, natural disasters, or other circumstances beyond our control. Risk of loss and title for items purchased pass to you upon delivery.`,
  },
  {
    title: "6. Returns & Refund Policy",
    content: `We offer a 30-day return policy for most items. Products must be returned in their original packaging, unused, and in the same condition that you received them. Certain items such as personal care products, digital downloads, and customized goods are not eligible for return. Refunds will be processed within 7–10 business days after we receive and inspect the returned item. Shipping costs for returns are borne by the customer unless the item is defective.`,
  },
  {
    title: "7. Intellectual Property",
    content: `All content on ShopWave, including but not limited to text, graphics, logos, images, and software, is the property of ShopWave or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, duplicate, copy, sell, resell, or exploit any portion of the service without express written permission from ShopWave.`,
  },
  {
    title: "8. Privacy Policy",
    content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, disclose, and protect your personal information. By using ShopWave, you consent to the collection and use of information in accordance with our Privacy Policy. We do not sell, trade, or transfer your personally identifiable information to outside parties except as described in our Privacy Policy.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `ShopWave shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) our services. Our total liability for any claim arising from your use of our service shall not exceed the amount you paid for the transaction giving rise to the claim.`,
  },
  {
    title: "10. Governing Law",
    content: `These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of New Delhi, India. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    title: "11. Contact Information",
    content: `If you have any questions about these Terms and Conditions, please contact us at: ShopWave Customer Support, Email: legal@shopwave.in, Phone: 1800-SHOPWAVE, Address: 42 Commerce Street, New Delhi, India 110001. We aim to respond to all inquiries within 24-48 business hours.`,
  },
];

export default function TermsPage() {
  return (
    <div className="mt-[72px]">
      {/* Hero */}
      <div className="bg-charcoal text-cream py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-body text-ink-400 mb-6">
            <Link to="/" className="hover:text-ember-400 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-ink-300">Terms & Conditions</span>
          </nav>
          <p className="text-xs font-body font-medium tracking-[0.3em] text-ember-400 uppercase mb-3">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Terms & Conditions
          </h1>
          <p className="font-body text-ink-300 text-lg">Last updated: January 1, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-12">
          <p className="font-body text-amber-800 text-sm leading-relaxed">
            <strong>Important:</strong> Please read these terms carefully before using ShopWave. These terms constitute a legally binding agreement between you and ShopWave. By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
        </div>

        {/* TOC */}
        <div className="bg-ink-50 border border-ink-200 p-6 mb-12">
          <h2 className="font-display font-semibold text-charcoal mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((s) => (
              <a
                key={s.title}
                href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="font-body text-sm text-ink-600 hover:text-ember-500 transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-ember-400 rounded-full flex-shrink-0" />
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.title}
              id={section.title.replace(/\s+/g, "-").toLowerCase()}
              className="scroll-mt-24"
            >
              <h2 className="font-display text-xl font-semibold text-charcoal mb-4 pb-2 border-b border-ink-200">
                {section.title}
              </h2>
              <p className="font-body text-ink-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-ink-200 text-center">
          <p className="font-body text-ink-500 text-sm mb-4">
            By continuing to use ShopWave, you agree to these terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="bg-charcoal hover:bg-ember-500 text-cream font-body font-medium px-8 py-3 tracking-wide transition-colors">
              Return to Shopping
            </Link>
            <a href="mailto:legal@shopwave.in" className="border border-ink-300 text-charcoal font-body font-medium px-8 py-3 hover:bg-ink-50 transition-colors">
              Contact Legal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
