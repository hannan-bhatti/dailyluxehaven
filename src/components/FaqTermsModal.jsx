import React, { useState } from 'react';
import { X, HelpCircle, Shield, FileText, RefreshCw, ChevronDown, Sparkles, CheckCircle2, Phone, Mail } from 'lucide-react';

const FAQS = [
  {
    q: "What currency are the prices listed in?",
    a: "All prices on Daily Luxe Haven are displayed by default in Pakistani Rupees (PKR / Rs.). You can also use the currency selector in the header to view prices in USD, EUR, GBP, or AED."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept EasyPaisa (03144362979 - Ahmed Raza), JazzCash (03144362979 - Ahmed Raza), and Visa/Mastercard/PayPak credit and debit cards with 256-bit SSL vault encryption."
  },
  {
    q: "How long does shipping take?",
    a: "Standard nationwide shipping across Pakistan takes 2 to 4 business days. International express shipping via DHL Express arrives within 3 to 7 business days."
  },
  {
    q: "Are all products 100% authentic?",
    a: "Yes. Every item at Daily Luxe Haven comes with a 100% Certified Authenticity Guarantee, original manufacturer packaging, serial numbers (where applicable), and luxury warranty documentation."
  },
  {
    q: "What is your 30-Day Return & Exchange Policy?",
    a: "We offer hassle-free 30-day returns and exchanges on unworn, unused items with original security tags and luxury packaging intact. Simply contact our support team at support@dailyluxehaven.com or +92 314 4362979 to arrange a pick-up."
  },
  {
    q: "Can I request custom size alterations or gold engraving?",
    a: "Yes! For abayas, fine jewellery, and timepieces, we offer bespoke sizing and complimentary initial gold engraving. Mention your request in the order notes or contact our WhatsApp Concierge."
  }
];

export default function FaqTermsModal({ isOpen, onClose, initialTab = 'faq' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-[#EAE2D5] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        
        {/* Modal Header */}
        <div className="bg-[#0B0B0C] text-white p-6 sm:p-8 flex items-center justify-between border-b border-luxe-gold/30">
          <div>
            <div className="flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Daily Luxe Haven Concierge Help</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              FAQs & Legal Terms
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-luxe-gold hover:text-luxe-black transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#EAE2D5] bg-[#FAF8F5] px-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'faq' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'terms' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'privacy' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'returns' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>30-Day Returns</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-sm text-gray-700 leading-relaxed">
          
          {/* TAB 1: FAQs */}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-luxe-black mb-4">
                Patron Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isExpanded = expandedFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#E2D9CC] rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
                    >
                      <button
                        onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left font-serif text-base font-bold text-luxe-black hover:text-[#B88015] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 text-[#B88015] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      {isExpanded && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-gray-600 border-t border-gray-100 bg-[#FAF8F5]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Direct Support Box */}
              <div className="bg-[#141418] text-white p-6 rounded-2xl mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-luxe-gold/30">
                <div>
                  <h4 className="font-serif text-lg font-bold text-luxe-gold">Have More Questions?</h4>
                  <p className="text-xs text-gray-300">Our VIP Concierge team is available 24/7 to assist you.</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+923144362979"
                    className="bg-[#B88015] text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:text-luxe-black transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Concierge</span>
                  </a>
                  <a
                    href="mailto:support@dailyluxehaven.com"
                    className="border border-white/30 text-white px-4 py-2 rounded-full font-bold text-xs hover:border-[#B88015] hover:text-[#B88015] transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-luxe-black">Terms & Conditions of Service</h3>
              <p className="text-xs text-gray-500">Last updated: August 2026</p>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">1. Acceptance of Terms</h4>
                  <p>By accessing or placing an order on Daily Luxe Haven (dailyluxehaven.com), you agree to be bound by these Terms of Service. All items sold are subject to product availability and verification of order details.</p>
                </section>

                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">2. Pricing & Currency</h4>
                  <p>Prices are listed by default in Pakistani Rupees (PKR). We reserve the right to correct pricing errors or adjust currency conversion rates without prior notice. All orders placed with Cash on Delivery (COD) must be settled upon physical delivery.</p>
                </section>

                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">3. Authenticity & Warranty</h4>
                  <p>Daily Luxe Haven guarantees 100% genuine authenticity on all luxury items, Swiss watches, 18k jewellery, and designer apparel. Warranty coverage applies as specified per item brand.</p>
                </section>

                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">4. Intellectual Property</h4>
                  <p>All brand graphics, logos, photos, and digital designs remain the exclusive property of Daily Luxe Haven.</p>
                </section>
              </div>
            </div>
          )}

          {/* TAB 3: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-luxe-black">Privacy Policy & Security</h3>
              <p className="text-xs text-gray-500">Last updated: August 2026</p>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">1. Data Collection</h4>
                  <p>We collect essential customer details (name, shipping address, contact phone number, email address) solely for fulfilling your orders, providing order status updates, and offering VIP customer support.</p>
                </section>

                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">2. Data Security & Encryption</h4>
                  <p>Your payment information and personal data are encrypted using 256-bit SSL technology. We never store credit card numbers on our servers and never sell customer data to third parties.</p>
                </section>

                <section>
                  <h4 className="font-bold text-luxe-black text-sm mb-1">3. Cookies & Analytics</h4>
                  <p>Cookies are used to maintain shopping cart items, remember currency preferences, and improve page loading performance.</p>
                </section>
              </div>
            </div>
          )}

          {/* TAB 4: 30-DAY RETURNS */}
          {activeTab === 'returns' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-luxe-black">30-Day Global Return Policy</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-[#FAF8F5] border border-[#E2D9CC] p-4 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-6 h-6 text-[#B88015] mx-auto" />
                  <h5 className="font-serif font-bold text-sm text-luxe-black">30 Days Window</h5>
                  <p className="text-[11px] text-gray-500">Request returns or size exchanges within 30 days of delivery.</p>
                </div>
                <div className="bg-[#FAF8F5] border border-[#E2D9CC] p-4 rounded-2xl text-center space-y-2">
                  <Shield className="w-6 h-6 text-[#B88015] mx-auto" />
                  <h5 className="font-serif font-bold text-sm text-luxe-black">Original Tags</h5>
                  <p className="text-[11px] text-gray-500">Items must be unworn in original packaging with seals intact.</p>
                </div>
                <div className="bg-[#FAF8F5] border border-[#E2D9CC] p-4 rounded-2xl text-center space-y-2">
                  <RefreshCw className="w-6 h-6 text-[#B88015] mx-auto" />
                  <h5 className="font-serif font-bold text-sm text-luxe-black">Free Doorstep Pickup</h5>
                  <p className="text-[11px] text-gray-500">We arrange complimentary courier pick-up from your address.</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                To initiate a return or exchange, contact our Concierge team at <strong>support@dailyluxehaven.com</strong> or WhatsApp <strong>+92 314 4362979</strong> with your order number. Refunds are processed within 48 hours of item inspection.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
