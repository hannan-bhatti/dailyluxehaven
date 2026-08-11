import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Sparkles, Crown, Phone, Mail, TrendingUp, History, ArrowRight, Watch, Shirt, Home, Gem, Glasses, Moon, Baby, Headphones, Lamp, Layers } from 'lucide-react';
import { CATEGORIES, HUBS } from '../data/categories';
import { PRODUCTS } from '../data/products';

const CURRENCIES = [
  { code: 'PKR', symbol: 'Rs. ', rate: 280 },
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'AED', symbol: 'د.إ', rate: 3.67 },
];

const POPULAR_TAGS = [
  "18k Gold Jewellery",
  "Velvet Abaya",
  "Swiss Watch",
  "Mulberry Silk",
  "Wireless Headphones",
  "Crystal Glassware",
  "Designer Purse",
  "Gold Lamp"
];

export default function Header({
  activeCategory,
  onSelectCategory,
  activeHubId,
  onSelectHub,
  searchQuery,
  onSearchChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  currency,
  onCurrencyChange,
  onQuickView
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaHub, setActiveMegaHub] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState(["Rose Gold Watch", "Velvet Abaya", "Silk Robe"]);

  // Predictive Auto-Complete Matching Products
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.colors && p.colors.some(c => c.toLowerCase().includes(q)))
    ).slice(0, 5);
  }, [searchQuery]);

  const handleSelectTag = (tag) => {
    onSearchChange(tag);
    if (!recentSearches.includes(tag)) {
      setRecentSearches(prev => [tag, ...prev.slice(0, 4)]);
    }
  };

  const handleProductClick = (product) => {
    setIsSearchFocused(false);
    if (onQuickView) onQuickView(product);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE2D5]">
      {/* Top Announcement & Contact Bar */}
      <div className="bg-luxe-black text-luxe-gold text-xs py-2 px-4 border-b border-luxe-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 font-medium tracking-widest text-[11px]">
          
          {/* Left: Contact info */}
          <div className="hidden sm:flex items-center gap-4 text-gray-300">
            <a href="tel:+923144362979" className="flex items-center gap-1.5 hover:text-luxe-gold transition-colors font-semibold">
              <Phone className="w-3 h-3 text-luxe-gold" />
              <span>+92 314 4362979</span>
            </a>
            <span className="text-gray-600">•</span>
            <a href="mailto:info@dailyluxehaven.com" className="flex items-center gap-1.5 hover:text-luxe-gold transition-colors">
              <Mail className="w-3 h-3 text-luxe-gold" />
              <span>info@dailyluxehaven.com</span>
            </a>
          </div>

          {/* Center/Right: Motto */}
          <div className="flex items-center justify-center gap-2 mx-auto md:mx-0">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#E8C872]" />
            <span>COMPLIMENTARY EXPRESS SHIPPING WORLDWIDE &nbsp;|&nbsp; LIVE DAILY. SHOP LUXE.</span>
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#E8C872]" />
          </div>

        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-luxe-black hover:text-luxe-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { onSelectCategory('all'); onSelectHub(null); }}>
            <img 
              src="/logo.png" 
              alt="Daily Luxe Haven Logo" 
              className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <div className="flex items-center gap-1">
                <span className="font-serif text-2xl font-bold tracking-tight text-luxe-black">
                  DAILY LUXE
                </span>
                <span className="font-serif text-2xl font-normal tracking-tight text-luxe-gold">
                  HAVEN
                </span>
              </div>
              <p className="text-[10px] tracking-[0.25em] text-luxe-gold-dark uppercase font-semibold">
                LIVE DAILY. SHOP LUXE.
              </p>
            </div>
          </div>

          {/* Predictive Dynamic Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
            <div className={`w-full flex items-center bg-white border ${isSearchFocused ? 'border-luxe-gold ring-2 ring-luxe-gold/30 shadow-md' : 'border-[#E2D9CC]'} rounded-full px-4 py-2 transition-all duration-200 shadow-sm`}>
              <Search className="w-4 h-4 text-luxe-gold mr-2" />
              <input
                type="text"
                placeholder="Predictive search: abayas, gold watch, perfumes..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full text-sm bg-transparent outline-none text-luxe-black placeholder-gray-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="text-xs font-bold text-gray-400 hover:text-luxe-black p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Predictive Auto-Complete Overlay Modal */}
            {isSearchFocused && (
              <>
                <div
                  className="fixed inset-0 z-30 bg-black/20"
                  onClick={() => setIsSearchFocused(false)}
                />
                
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#EAE2D5] rounded-3xl shadow-2xl p-5 z-40 animate-fadeIn space-y-4">
                  
                  {/* Mode 1: Search Query Present -> Predictive Products */}
                  {searchQuery.trim() !== '' ? (
                    <div>
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
                        <span className="text-[11px] font-extrabold uppercase text-luxe-gold tracking-widest flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Predictive Instant Matches ({searchResults.length})
                        </span>
                        <span className="text-[10px] text-gray-400">Click to view product</span>
                      </div>

                      {searchResults.length > 0 ? (
                        <div className="space-y-2">
                          {searchResults.map(product => {
                            const pPrice = Math.round(product.price * currency.rate);
                            return (
                              <div
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF8F5] cursor-pointer transition-colors border border-transparent hover:border-luxe-gold/30 group"
                              >
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-11 h-11 object-cover rounded-lg border border-gray-200 bg-white"
                                />
                                <div className="flex-1 min-w-0">
                                  <h5 className="font-serif text-sm font-bold text-luxe-black group-hover:text-luxe-gold transition-colors truncate">
                                    {product.name}
                                  </h5>
                                  <span className="text-[10px] text-luxe-gold uppercase font-bold tracking-wider">
                                    {product.category}
                                  </span>
                                </div>
                                <span className="font-extrabold text-xs text-luxe-black">
                                  {currency.symbol}{pPrice.toLocaleString()}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="py-4 text-center text-xs text-gray-500">
                          No instant matches found for "{searchQuery}". Press Enter to view catalog.
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Mode 2: Empty Query -> Trending Tags & Recent Searches */
                    <div className="space-y-4">
                      
                      {/* Popular Searches */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-luxe-black uppercase tracking-wider mb-2.5">
                          <TrendingUp className="w-3.5 h-3.5 text-luxe-gold" />
                          <span>Popular Luxury Searches</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {POPULAR_TAGS.map(tag => (
                            <button
                              key={tag}
                              onClick={() => handleSelectTag(tag)}
                              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E2D9CC] text-gray-700 hover:border-luxe-gold hover:bg-luxe-black hover:text-luxe-gold transition-all"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Recent Searches */}
                      {recentSearches.length > 0 && (
                        <div className="pt-3 border-t border-gray-100">
                          <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            <span className="flex items-center gap-1.5">
                              <History className="w-3.5 h-3.5 text-gray-400" />
                              Recent Searches
                            </span>
                            <button
                              onClick={() => setRecentSearches([])}
                              className="text-[10px] text-gray-400 hover:text-red-500 lowercase font-normal"
                            >
                              Clear History
                            </button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {recentSearches.map(rec => (
                              <button
                                key={rec}
                                onClick={() => handleSelectTag(rec)}
                                className="text-xs font-medium px-3 py-1 rounded-lg bg-gray-50 text-gray-600 hover:bg-luxe-gold/20 hover:text-luxe-black transition-colors"
                              >
                                🕒 {rec}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              </>
            )}
          </div>

          {/* Header Action Icons */}
          <div className="flex items-center gap-4">
            
            {/* Currency Selector */}
            <div className="relative hidden sm:block">
              <select
                value={currency.code}
                onChange={(e) => {
                  const sel = CURRENCIES.find(c => c.code === e.target.value);
                  if (sel) onCurrencyChange(sel);
                }}
                className="bg-transparent text-xs font-semibold text-luxe-black border border-[#E2D9CC] rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-luxe-gold cursor-pointer"
              >
                {CURRENCIES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 text-luxe-black hover:text-luxe-gold transition-colors group"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-luxe-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-luxe-black text-white px-4 py-2 rounded-full hover:bg-luxe-gold transition-colors duration-300 shadow-md group"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">Cart</span>
              <span className="bg-luxe-gold text-luxe-black text-xs font-extrabold px-2 py-0.5 rounded-full group-hover:bg-luxe-black group-hover:text-luxe-gold transition-colors">
                {cartCount}
              </span>
            </button>

          </div>
        </div>

        {/* Category Landing Hubs Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-between border-t border-[#EAE2D5] py-3 text-xs tracking-wider font-semibold uppercase relative">
          <div className="flex items-center gap-8">
            
            {/* All Products Button */}
            <button
              onClick={() => { onSelectCategory('all'); onSelectHub(null); }}
              className={`pb-1 border-b-2 transition-all duration-200 ${
                activeCategory === 'all' && !activeHubId
                  ? 'border-luxe-gold text-luxe-gold font-bold'
                  : 'border-transparent text-gray-800 hover:text-luxe-gold'
              }`}
            >
              All Luxe Vault
            </button>

            {/* 3 Main Hubs Dropdowns */}
            {HUBS.map(hub => {
              const isHubActive = activeHubId === hub.id;
              const hubCats = CATEGORIES.filter(c => c.hubId === hub.id);

              return (
                <div
                  key={hub.id}
                  className="relative group"
                  onMouseEnter={() => setActiveMegaHub(hub.id)}
                  onMouseLeave={() => setActiveMegaHub(null)}
                >
                  <button
                    onClick={() => { onSelectHub(hub.id); }}
                    className={`flex items-center gap-1.5 pb-1 border-b-2 transition-all duration-200 ${
                      isHubActive
                        ? 'border-luxe-gold text-luxe-gold font-bold'
                        : 'border-transparent text-gray-800 hover:text-luxe-gold'
                    }`}
                  >
                    <span>{hub.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-luxe-gold group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {activeMegaHub === hub.id && (
                    <div className="absolute top-full left-0 w-80 bg-white border border-[#EAE2D5] rounded-2xl shadow-2xl p-4 z-50 animate-fadeIn">
                      <div className="border-b border-gray-100 pb-2 mb-3">
                        <span className="text-[10px] text-luxe-gold font-bold uppercase tracking-widest">{hub.badge}</span>
                        <h4 className="font-serif text-sm font-bold text-luxe-black uppercase">{hub.name} Hub</h4>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {hubCats.map(cat => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onSelectHub(hub.id);
                              onSelectCategory(cat.id);
                              setActiveMegaHub(null);
                            }}
                            className="text-left p-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-[#FAF8F5] hover:text-luxe-gold transition-colors flex items-center justify-between"
                          >
                            <span>{cat.name}</span>
                            <span className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-bold">{cat.count}</span>
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => { onSelectHub(hub.id); setActiveMegaHub(null); }}
                        className="w-full bg-luxe-black text-luxe-gold text-[10px] font-bold py-2 rounded-xl uppercase text-center hover:bg-luxe-gold hover:text-black transition-colors"
                      >
                        Enter {hub.name} Landing Hub →
                      </button>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          <div className="flex items-center gap-2 text-luxe-gold font-bold">
            <Sparkles className="w-3.5 h-3.5 text-luxe-gold animate-spin" />
            <span>Vault Hub Architecture</span>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE2D5] py-4 bg-white px-2 space-y-4">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full text-sm bg-[#FAF8F5] border border-[#E2D9CC] rounded-lg px-4 py-2 text-luxe-black"
              />
            </div>
            
            <p className="text-[11px] font-bold text-luxe-gold uppercase tracking-widest px-2">Main Category Hubs</p>
            <div className="space-y-2">
              <button
                onClick={() => { onSelectCategory('all'); onSelectHub(null); setMobileMenuOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-md text-xs font-bold ${!activeHubId && activeCategory === 'all' ? 'bg-luxe-black text-luxe-gold' : 'bg-gray-100'}`}
              >
                All Products Vault
              </button>
              
              {HUBS.map(hub => (
                <div key={hub.id} className="border border-gray-200 rounded-xl p-3 bg-[#FAF8F5]">
                  <button
                    onClick={() => { onSelectHub(hub.id); setMobileMenuOpen(false); }}
                    className="font-serif text-sm font-bold text-luxe-black block mb-2"
                  >
                    {hub.name} Hub Landing →
                  </button>
                  <div className="grid grid-cols-2 gap-1.5">
                    {CATEGORIES.filter(c => c.hubId === hub.id).map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { onSelectHub(hub.id); onSelectCategory(cat.id); setMobileMenuOpen(false); }}
                        className="text-left text-[11px] text-gray-700 hover:text-luxe-gold font-semibold py-1"
                      >
                        • {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </header>
  );
}
