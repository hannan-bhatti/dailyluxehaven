import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { SlidersHorizontal, ArrowUpDown, Filter, Sparkles } from 'lucide-react';

export default function ProductCatalog({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  currency
}) {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState(5000);
  const [onlySale, setOnlySale] = useState(false);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (activeCategory !== 'all' && product.category !== activeCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory && !matchesDesc) return false;
      }
      // Price match
      if (product.price > priceRange) return false;

      // Sale filter
      if (onlySale && !product.originalPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default
    });
  }, [activeCategory, searchQuery, priceRange, onlySale, sortBy]);

  const activeCategoryObj = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="catalog" className="py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Catalog Title Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Master Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxe-black mb-3">
            {activeCategoryObj ? activeCategoryObj.name : "All Luxury Creations"}
          </h2>
          <p className="text-sm text-gray-500 font-light">
            {activeCategoryObj
              ? activeCategoryObj.description
              : "Discover Swiss timepieces, 18k gold diamond jewellery, designer purses, pure silk abayas, high-tech gadgets, and opulent home decorations."}
          </p>
        </div>

        {/* Filters & Toolbar Bar */}
        <div className="bg-white border border-[#EAE2D5] rounded-2xl p-4 sm:p-6 mb-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Category Chips Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === 'all'
                  ? 'bg-luxe-black text-luxe-gold shadow'
                  : 'bg-[#FAF8F5] text-gray-700 hover:bg-luxe-gold/10 hover:text-luxe-gold'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-luxe-black text-luxe-gold shadow'
                    : 'bg-[#FAF8F5] text-gray-700 hover:bg-luxe-gold/10 hover:text-luxe-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Right Toolbar controls */}
          <div className="flex flex-wrap items-center gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
            
            {/* Sale Only Toggle */}
            <label className="flex items-center gap-2 text-xs font-bold text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={onlySale}
                onChange={(e) => setOnlySale(e.target.checked)}
                className="rounded border-gray-300 text-luxe-gold focus:ring-luxe-gold"
              />
              <span>Sale Items Only</span>
            </label>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-luxe-gold" />
              <span className="font-bold text-gray-500 uppercase">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-3 py-1.5 font-semibold text-luxe-black focus:outline-none focus:border-luxe-gold cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

          </div>
        </div>

        {/* Active Filter Indicators */}
        {(searchQuery || activeCategory !== 'all' || onlySale) && (
          <div className="flex items-center gap-3 mb-6 text-xs text-gray-600">
            <span className="font-bold uppercase text-luxe-gold">Active Filters:</span>
            {activeCategory !== 'all' && (
              <span className="bg-luxe-gold/20 border border-luxe-gold/40 text-luxe-black px-2.5 py-1 rounded-full font-semibold">
                Category: {activeCategory}
              </span>
            )}
            {searchQuery && (
              <span className="bg-luxe-gold/20 border border-luxe-gold/40 text-luxe-black px-2.5 py-1 rounded-full font-semibold">
                Query: "{searchQuery}"
              </span>
            )}
            {onlySale && (
              <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full font-semibold">
                Sale Items Only
              </span>
            )}
            <button
              onClick={() => {
                onSelectCategory('all');
                setOnlySale(false);
              }}
              className="text-luxe-gold underline font-bold hover:text-luxe-black"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-[#EAE2D5] px-4">
            <Filter className="w-12 h-12 text-luxe-gold mx-auto mb-4 opacity-50" />
            <h3 className="font-serif text-2xl font-bold text-luxe-black mb-2">
              No Luxury Creations Match Your Criteria
            </h3>
            <p className="text-sm text-gray-500 mb-6 font-light max-w-md mx-auto">
              Try adjusting your filter search or select another category from our 12 luxury collections.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setOnlySale(false);
              }}
              className="bg-luxe-black text-luxe-gold hover:bg-luxe-gold hover:text-black font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors"
            >
              Show All Creations
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
