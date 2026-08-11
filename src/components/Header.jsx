import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Sparkles, Crown, Phone, Mail, Watch, Shirt, Home, Gem, Glasses, Moon, Baby, Headphones, Lamp } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

const CURRENCIES = [
  { code: 'PKR', symbol: 'Rs. ', rate: 280 },
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'AED', symbol: 'د.إ', rate: 3.67 },
];

export default function Header({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  currency,
  onCurrencyChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onSelectCategory('all')}>
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

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6 relative">
            <div className={`w-full flex items-center bg-white border ${isSearchFocused ? 'border-luxe-gold ring-1 ring-luxe-gold' : 'border-[#E2D9CC]'} rounded-full px-4 py-2 transition-all duration-200 shadow-sm`}>
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search watches, jewellery, abayas, purses..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full text-sm bg-transparent outline-none text-luxe-black placeholder-gray-400"
              />
              {searchQuery && (
                <button onClick={() => onSearchChange('')} className="text-xs text-gray-400 hover:text-luxe-black">
                  Clear
                </button>
              )}
            </div>
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

        {/* Categories Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-between border-t border-[#EAE2D5] py-3 text-xs tracking-wider font-semibold uppercase">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
            
            {/* All Products */}
            <button
              onClick={() => onSelectCategory('all')}
              className={`pb-1 border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'border-luxe-gold text-luxe-gold font-bold'
                  : 'border-transparent text-gray-700 hover:text-luxe-gold'
              }`}
            >
              All Luxe Collections
            </button>

            {/* Mega Dropdown / Direct Links for 12 categories */}
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`pb-1 border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'border-luxe-gold text-luxe-gold font-bold'
                    : 'border-transparent text-gray-700 hover:text-luxe-gold'
                }`}
              >
                {cat.name}
              </button>
            ))}

          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE2D5] py-4 bg-white px-2 space-y-3">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full text-sm bg-[#FAF8F5] border border-[#E2D9CC] rounded-lg px-4 py-2 text-luxe-black"
              />
            </div>
            
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-2">Categories</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => { onSelectCategory('all'); setMobileMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-md text-xs font-semibold ${activeCategory === 'all' ? 'bg-luxe-gold text-white' : 'hover:bg-luxe-sand'}`}
              >
                All Products
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => { onSelectCategory(cat.id); setMobileMenuOpen(false); }}
                  className={`text-left px-3 py-2 rounded-md text-xs font-semibold ${activeCategory === cat.id ? 'bg-luxe-gold text-white' : 'hover:bg-luxe-sand text-gray-800'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
