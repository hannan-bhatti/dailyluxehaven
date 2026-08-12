import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, ShieldCheck, Sparkles, Crown } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function Footer({ onSelectCategory, onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      onShowToast("✨ Welcome code 'WELCOME15' unlocked! Check your inbox.");
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0B0B0C] text-white pt-16 pb-12 border-t border-luxe-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Banner */}
        <div className="bg-[#141418] border border-luxe-gold/40 rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-luxe-gold/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest mb-2">
                <Crown className="w-4 h-4" />
                <span>The Luxe Privilege Circle</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                Subscribe & Receive 15% Off Your First Order
              </h3>
              <p className="text-xs text-gray-300 font-light">
                Join our elite list for early vault drops, private haute couture previews, and VIP luxury promotions.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="bg-luxe-gold/20 border border-luxe-gold text-luxe-gold p-4 rounded-2xl text-center text-xs font-bold">
                  ✨ Thank you for subscribing! Use code <span className="underline font-mono text-sm">WELCOME15</span> at checkout for 15% off.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your VIP email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0E0E10] border border-gray-700 focus:border-luxe-gold rounded-full pl-11 pr-4 py-3 text-xs text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-extrabold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-gold-glow flex items-center justify-center gap-2"
                  >
                    <span>Join Circle</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs">
          
          {/* Brand Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Daily Luxe Haven Logo" className="h-14 w-auto" />
              <div>
                <span className="font-serif text-xl font-bold text-white">DAILY LUXE </span>
                <span className="font-serif text-xl font-bold text-luxe-gold">HAVEN</span>
                <p className="text-[9px] tracking-[0.25em] text-luxe-gold-dark font-bold uppercase mt-0.5">
                  LIVE DAILY. SHOP LUXE.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Daily Luxe Haven is your premier luxury destination for Swiss timepieces, 18k gold diamond jewellery, Italian leather purses, modest silk abayas, high-tech gadgets, and home decor.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-luxe-gold font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Certified Authentic Guarantee</span>
            </div>
          </div>

          {/* Quick Shop Collections */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-luxe-gold/30 pb-2 inline-block">
              Quick Shop
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-medium">
              {['jewellery', 'hijabs-abaya', 'watches', 'purses', 'cosmetics', 'clothes'].map((catId) => {
                const cat = CATEGORIES.find(c => c.id === catId);
                if (!cat) return null;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => {
                        onSelectCategory(cat.id);
                        window.scrollTo({ top: 600, behavior: 'smooth' });
                      }}
                      className="hover:text-luxe-gold transition-colors flex items-center gap-1.5"
                    >
                      <span>•</span>
                      <span>{cat.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-luxe-gold/30 pb-2 inline-block">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-medium">
              <li><a href="#catalog" className="hover:text-luxe-gold transition-colors">• 30-Day Global Returns</a></li>
              <li><a href="#catalog" className="hover:text-luxe-gold transition-colors">• Authenticity Guarantee</a></li>
              <li><a href="#catalog" className="hover:text-luxe-gold transition-colors">• Express Shipping Policy</a></li>
              <li><a href="#catalog" className="hover:text-luxe-gold transition-colors">• Size & Fitting Guide</a></li>
              <li><a href="#catalog" className="hover:text-luxe-gold transition-colors">• FAQs & Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect With Us & Social Icons */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-luxe-gold/30 pb-2 inline-block">
              Connect With Us
            </h4>
            
            <div className="space-y-2 text-gray-300">
              <a href="tel:+923144362979" className="flex items-center gap-2 text-luxe-gold font-bold hover:underline">
                <Phone className="w-3.5 h-3.5" />
                <span>+92 314 4362979</span>
              </a>
              <a href="mailto:info@dailyluxehaven.com" className="flex items-center gap-2 hover:text-luxe-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-luxe-gold" />
                <span>info@dailyluxehaven.com</span>
              </a>
              <a href="mailto:support@dailyluxehaven.com" className="flex items-center gap-2 hover:text-luxe-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-luxe-gold" />
                <span>support@dailyluxehaven.com</span>
              </a>
            </div>

            {/* Social Media Links & Icons */}
            <div className="pt-3 border-t border-white/10">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-3">
                Follow Haven
              </span>
              <div className="flex items-center gap-3">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923144362979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#18181F] border border-[#333] flex items-center justify-center text-gray-300 hover:text-luxe-black hover:bg-luxe-gold hover:border-luxe-gold transition-all duration-300 transform hover:scale-110 shadow"
                  title="WhatsApp Concierge"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dailyluxehaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#18181F] border border-[#333] flex items-center justify-center text-gray-300 hover:text-luxe-black hover:bg-luxe-gold hover:border-luxe-gold transition-all duration-300 transform hover:scale-110 shadow"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/dailyluxehaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#18181F] border border-[#333] flex items-center justify-center text-gray-300 hover:text-luxe-black hover:bg-luxe-gold hover:border-luxe-gold transition-all duration-300 transform hover:scale-110 shadow"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com/@dailyluxehaven"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#18181F] border border-[#333] flex items-center justify-center text-gray-300 hover:text-luxe-black hover:bg-luxe-gold hover:border-luxe-gold transition-all duration-300 transform hover:scale-110 shadow"
                  title="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.53-1.28 2.53.02 1.01.55 1.97 1.39 2.51.98.63 2.27.7 3.32.22 1.05-.48 1.79-1.55 1.84-2.72.03-3.38.01-6.76.02-10.14z"/>
                  </svg>
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <p>
            © {new Date().getFullYear()} <strong className="text-luxe-gold">Daily Luxe Haven</strong>. All Rights Reserved. Live Daily. Shop Luxe.
          </p>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Cookie Settings</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
