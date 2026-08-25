import React from 'react';
import { Star, Quote, Award, Sparkles } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Lady Cordelia Montagu",
    role: "Collector & VIP Member",
    text: "The Royal Oak Chronograph in 18k Rose Gold from Daily Luxe Haven arrived with exquisite packaging. True master craftsmanship and unparalleled VIP service.",
    rating: 5,
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Sheikha Ayesha Al-Mansoor",
    role: "Haute Couture Patron",
    text: "The Imperial Gold Velvet Abaya and handcrafted chiffon sets are pure perfection. The silk drape and gold sequin finish turn heads at every evening gala.",
    rating: 5,
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Julian Vance",
    role: "Architectural Interior Designer",
    text: "Ordered the Spherical Brass Table Lamp and Crystal Glassware set for a luxury penthouse project. Exceptional quality and fast express delivery.",
    rating: 5,
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#EAE2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Patron Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxe-black mb-3">
            Acclaimed By Luxury Connoisseurs Worldwide
          </h2>
          <p className="text-xs text-gray-500 font-light uppercase tracking-wider">
            "LIVE DAILY. SHOP LUXE."
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-[#EAE2D5] rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-luxe-hover transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-luxe-gold/15 absolute top-7 right-7 pointer-events-none" />

              <div>
                <div className="flex items-center gap-1.5 text-amber-400 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-[15px] sm:text-base text-gray-800 font-sans font-normal mb-6 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-luxe-gold/40 shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-lg font-bold text-luxe-black leading-snug">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-luxe-gold font-semibold tracking-wide">
                    {rev.role} • {rev.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Press Badges Bar */}
        <div className="pt-10 border-t border-[#EAE2D5] text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-6">
            Featured In Global Press & Luxury Publications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 font-serif text-gray-400 font-bold text-lg sm:text-2xl tracking-widest uppercase">
            <span className="hover:text-luxe-gold transition-colors cursor-default">VOGUE</span>
            <span className="hover:text-luxe-gold transition-colors cursor-default">HARPER'S BAZAAR</span>
            <span className="hover:text-luxe-gold transition-colors cursor-default">ELLE LUXURY</span>
            <span className="hover:text-luxe-gold transition-colors cursor-default">GQ STYLE</span>
            <span className="hover:text-luxe-gold transition-colors cursor-default">ROBB REPORT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
