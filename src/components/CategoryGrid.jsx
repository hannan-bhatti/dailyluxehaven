import React from 'react';
import { CATEGORIES } from '../data/categories';
import { ArrowUpRight, Watch, Shirt, Home, Gem, Glasses, ShoppingBag, Moon, Sparkles, Sparkle, Baby, Headphones, Lamp } from 'lucide-react';

const ICON_MAP = {
  Watch, Shirt, Home, Gem, Glasses, ShoppingBag, Moon, Sparkles, Sparkle, Baby, Headphones, Lamp
};

export default function CategoryGrid({ activeCategory, onSelectCategory }) {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#EAE2D5] pb-6">
          <div>
            <div className="flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Curated Departments</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxe-black">
              Explore Our {CATEGORIES.length} Luxe Collections
            </h2>
          </div>
          <p className="text-xs text-gray-500 max-w-md mt-2 md:mt-0 font-light">
            Select a category to filter products, or browse our entire luxury inventory below.
          </p>
        </div>

        {/* Categories Grid (12 Items) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = ICON_MAP[cat.icon] || Sparkles;
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-luxe-hover border ${
                  isSelected ? 'border-luxe-gold ring-2 ring-luxe-gold/50' : 'border-[#EAE2D5]'
                }`}
              >
                {/* Image Container */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Item Count Pill */}
                  <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-luxe-gold text-[10px] font-bold px-2 py-0.5 rounded-full border border-luxe-gold/30">
                    {cat.count} Items
                  </span>

                  {/* Icon */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-luxe-gold/20 backdrop-blur-md border border-luxe-gold/40 flex items-center justify-center text-luxe-gold">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-base font-bold group-hover:text-luxe-gold transition-colors">
                        {cat.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-luxe-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] text-gray-300 line-clamp-1 font-light mt-0.5">
                      {cat.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
