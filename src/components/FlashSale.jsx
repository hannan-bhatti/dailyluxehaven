import React, { useState, useEffect } from 'react';
import { Timer, Zap, ArrowRight, Eye, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function FlashSale({ onQuickView, onAddToCart, currency }) {
  const flashProducts = PRODUCTS.filter(p => p.isFlashSale);

  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (flashProducts.length === 0) return null;

  return (
    <section className="py-12 bg-luxe-black text-white relative overflow-hidden border-y border-luxe-gold/30">
      
      {/* Decorative Gold Accent Lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxe-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flash Header & Countdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 bg-luxe-gold/20 text-luxe-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 border border-luxe-gold/40">
              <Zap className="w-3.5 h-3.5 fill-luxe-gold animate-bounce" />
              <span>Limited Vault Access</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Daily Luxe Deals of the Day
            </h2>
          </div>

          {/* Countdown Clock Boxes */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mr-2">
              <Timer className="w-4 h-4 text-luxe-gold" />
              <span>ENDS IN:</span>
            </div>
            <div className="flex items-center gap-2 text-center">
              <div className="bg-[#1C1C22] border border-luxe-gold/40 text-luxe-gold rounded-lg px-3 py-1.5 min-w-[50px]">
                <span className="font-mono text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                <p className="text-[9px] uppercase tracking-wider text-gray-400">Hours</p>
              </div>
              <span className="text-luxe-gold font-bold text-lg">:</span>
              <div className="bg-[#1C1C22] border border-luxe-gold/40 text-luxe-gold rounded-lg px-3 py-1.5 min-w-[50px]">
                <span className="font-mono text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <p className="text-[9px] uppercase tracking-wider text-gray-400">Mins</p>
              </div>
              <span className="text-luxe-gold font-bold text-lg">:</span>
              <div className="bg-[#1C1C22] border border-luxe-gold/40 text-luxe-gold rounded-lg px-3 py-1.5 min-w-[50px]">
                <span className="font-mono text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <p className="text-[9px] uppercase tracking-wider text-gray-400">Secs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flash Sale Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flashProducts.map((product) => {
            const convertedPrice = Math.round(product.price * currency.rate);
            const convertedOrig = Math.round(product.originalPrice * currency.rate);
            const discountPct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <div
                key={product.id}
                className="bg-[#16161C] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-luxe-gold/60 transition-all duration-300 group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-56 rounded-xl overflow-hidden mb-4 bg-black/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase shadow">
                      -{discountPct}% OFF
                    </span>
                    <button
                      onClick={() => onQuickView(product)}
                      className="absolute bottom-3 right-3 bg-black/70 hover:bg-luxe-gold hover:text-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
                      title="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Category Pill */}
                  <p className="text-[10px] text-luxe-gold font-bold uppercase tracking-widest mb-1">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-luxe-gold transition-colors line-clamp-1 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2 font-light mb-4">
                    {product.description}
                  </p>
                </div>

                <div>
                  {/* Price Row */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-extrabold text-luxe-gold">
                      {currency.symbol}{convertedPrice.toLocaleString()}
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      {currency.symbol}{convertedOrig.toLocaleString()}
                    </span>
                  </div>

                  {/* Stock Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[11px] font-semibold text-gray-300 mb-1">
                      <span>Limited Quantity Left</span>
                      <span className="text-luxe-gold">Only 4 Left!</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-gradient w-[82%] rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Claim Offer Now</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
