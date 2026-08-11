import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, ShieldCheck, Sparkles, Heart, Crown } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Daily Luxe Haven Logo" className="h-14 w-auto" />
              <div>
                <span className="font-serif text-2xl font-bold text-white">DAILY LUXE </span>
                <span className="font-serif text-2xl font-bold text-luxe-gold">HAVEN</span>
                <p className="text-[10px] tracking-[0.25em] text-luxe-gold-dark font-bold uppercase mt-0.5">
                  LIVE DAILY. SHOP LUXE.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-light leading-relaxed max-w-sm">
              Daily Luxe Haven is the premier digital luxury destination for Swiss timepieces, fine 18k diamond jewellery, Italian leather purses, modest silk abayas, high-tech gadgets, and opulent home decors.
            </p>
            
            {/* Direct Contact Links */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <a href="tel:+923144362979" className="flex items-center gap-2 text-luxe-gold font-bold hover:underline">
                <Phone className="w-3.5 h-3.5" />
                <span>+92 314 4362979</span>
              </a>
              <a href="mailto:info@dailyluxehaven.com" className="flex items-center gap-2 text-gray-300 hover:text-luxe-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-luxe-gold" />
                <span>info@dailyluxehaven.com</span>
              </a>
              <a href="mailto:support@dailyluxehaven.com" className="flex items-center gap-2 text-gray-300 hover:text-luxe-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-luxe-gold" />
                <span>support@dailyluxehaven.com</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-luxe-gold font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Certified Authentic Guarantee</span>
            </div>
          </div>

          {/* 12 Categories List */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-luxe-gold/30 pb-2 inline-block">
              12 Luxe Departments
            </h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      window.scrollTo({ top: 600, behavior: 'smooth' });
                    }}
                    className="hover:text-luxe-gold transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-luxe-gold/30 pb-2 inline-block">
              More Departments
            </h4>
            <ul className="space-y-2 text-gray-400 font-medium">
              {CATEGORIES.slice(6, 12).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      window.scrollTo({ top: 600, behavior: 'smooth' });
                    }}
                    className="hover:text-luxe-gold transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-luxe-gold/30 pb-2 inline-block">
              Vault Concierge
            </h4>
            <ul className="space-y-2.5 text-gray-400 font-medium">
              <li>
                <a href="tel:+923144362979" className="flex items-center gap-1.5 text-luxe-gold font-bold hover:underline">
                  <Phone className="w-3 h-3" />
                  <span>+92 314 4362979</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dailyluxehaven.com" className="flex items-center gap-1.5 hover:text-luxe-gold transition-colors">
                  <Mail className="w-3 h-3 text-luxe-gold" />
                  <span>info@dailyluxehaven.com</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@dailyluxehaven.com" className="flex items-center gap-1.5 hover:text-luxe-gold transition-colors">
                  <Mail className="w-3 h-3 text-luxe-gold" />
                  <span>support@dailyluxehaven.com</span>
                </a>
              </li>
              <li className="pt-2 border-t border-gray-800"><a href="#catalog" className="hover:text-luxe-gold transition-colors">Track Express Order</a></li>
              <li><a href="#catalog" className="hover:text-luxe-gold transition-colors">30-Day Global Returns</a></li>
            </ul>
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
