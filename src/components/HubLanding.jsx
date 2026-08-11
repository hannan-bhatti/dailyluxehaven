import React, { useState } from 'react';
import { HUBS, CATEGORIES } from '../data/categories';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Sparkles, ArrowRight, Layers, Filter } from 'lucide-react';

export default function HubLanding({
  activeHubId,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  currency
}) {
  const hub = HUBS.find(h => h.id === activeHubId);
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');

  if (!hub) return null;

  const hubCategories = CATEGORIES.filter(cat => cat.hubId === hub.id);

  // Products belonging to this Hub
  const hubProducts = PRODUCTS.filter(product => {
    const cat = CATEGORIES.find(c => c.id === product.category);
    if (!cat || cat.hubId !== hub.id) return false;
    if (selectedSubCategory !== 'all' && product.category !== selectedSubCategory) return false;
    return true;
  });

  return (
    <section className="py-12 bg-[#FAF8F5]">
      
      {/* Hub Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden bg-luxe-black text-white p-8 sm:p-14 border border-luxe-gold/30 shadow-2xl">
          
          <img
            src={hub.heroImage}
            alt={hub.name}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/80 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block bg-luxe-gold/20 text-luxe-gold border border-luxe-gold/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
              {hub.badge}
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">
              {hub.name} Pavilion
            </h1>
            
            <p className="text-base sm:text-lg font-medium text-luxe-gold mb-3">
              {hub.tagline}
            </p>
            
            <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
              {hub.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-widest mr-2">Sub-Departments:</span>
              {hubCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSubCategory(cat.id === selectedSubCategory ? 'all' : cat.id)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all border ${
                    selectedSubCategory === cat.id
                      ? 'bg-gold-gradient text-luxe-black border-transparent shadow'
                      : 'bg-black/60 text-white border-white/20 hover:border-luxe-gold'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Sub-Categories Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl font-bold text-luxe-black">
            Explore {hub.name} Categories
          </h2>
          {selectedSubCategory !== 'all' && (
            <button
              onClick={() => setSelectedSubCategory('all')}
              className="text-xs font-bold text-luxe-gold hover:text-luxe-black underline"
            >
              Show All Sub-Categories
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {hubCategories.map(cat => (
            <div
              key={cat.id}
              onClick={() => setSelectedSubCategory(cat.id)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer h-36 border transition-all duration-300 ${
                selectedSubCategory === cat.id ? 'border-luxe-gold ring-2 ring-luxe-gold' : 'border-[#EAE2D5]'
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-luxe-gold block uppercase">{cat.count} Creations</span>
                <h4 className="font-serif text-base font-bold">{cat.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hub Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE2D5]">
          <div>
            <h3 className="font-serif text-2xl font-bold text-luxe-black">
              {selectedSubCategory === 'all' ? `All ${hub.name} Products` : CATEGORIES.find(c => c.id === selectedSubCategory)?.name}
            </h3>
            <p className="text-xs text-gray-500 font-light">
              Showing {hubProducts.length} luxury items in this hub
            </p>
          </div>
        </div>

        {hubProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hubProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <Filter className="w-10 h-10 text-luxe-gold mx-auto mb-2 opacity-50" />
            <p className="text-sm font-bold text-luxe-black">No products found in this sub-category</p>
          </div>
        )}
      </div>

    </section>
  );
}
