import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Check, Sparkles, Banknote } from 'lucide-react';
import { getSizePrice } from '../data/products';

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  currency,
  onDirectBuy,
  onOpenSizeGuide
}) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const currentPrice = getSizePrice(product, selectedSize);
  const convertedPrice = Math.round(currentPrice * currency.rate);
  const convertedOrig = product.originalPrice ? Math.round(product.originalPrice * currency.rate) : null;

  const handleAdd = () => {
    onAddToCart({
      ...product,
      price: currentPrice,
      selectedColor,
      selectedSize,
      quantity
    });
  };

  const handleBuyNow = () => {
    onDirectBuy({
      ...product,
      price: currentPrice,
      selectedColor,
      selectedSize,
      quantity
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#EAE2D5] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-luxe-gold hover:text-white text-gray-700 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Preview */}
          <div className="bg-[#FAF8F5] p-6 flex flex-col justify-between relative border-r border-[#EAE2D5]">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-4 left-4 bg-luxe-black text-luxe-gold text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Micro badges below image */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div className="bg-white p-2.5 rounded-xl border border-[#EAE2D5]">
                <ShieldCheck className="w-4 h-4 text-luxe-gold mx-auto mb-1" />
                <span className="text-[10px] font-bold text-gray-700 block">Authentic</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#EAE2D5]">
                <Truck className="w-4 h-4 text-luxe-gold mx-auto mb-1" />
                <span className="text-[10px] font-bold text-gray-700 block">Free Express</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-[#EAE2D5]">
                <RotateCcw className="w-4 h-4 text-luxe-gold mx-auto mb-1" />
                <span className="text-[10px] font-bold text-gray-700 block">30-Day Return</span>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Options */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              
              {/* Category Pill & Wishlist button */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-luxe-gold uppercase tracking-widest">
                  Daily Luxe Haven Vault
                </span>
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                    isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-600' : ''}`} />
                  <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
                </button>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxe-black mb-3">
                {product.name}
              </h2>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                <span className="text-xs text-gray-400">({product.reviewsCount} verified reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6 pb-4 border-b border-[#EAE2D5]">
                <span className="text-3xl font-extrabold text-luxe-black">
                  {currency.symbol}{convertedPrice.toLocaleString()}
                </span>
                {convertedOrig && (
                  <span className="text-base line-through text-gray-400">
                    {currency.symbol}{convertedOrig.toLocaleString()}
                  </span>
                )}
                <span className="ml-auto text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  In Stock & Ready to Ship
                </span>
              </div>

              {/* Variant Selector: Color */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-4">
                  <label className="block text-xs font-extrabold uppercase text-gray-700 tracking-wider mb-2">
                    Select Color / Finish: <span className="text-luxe-gold">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          selectedColor === color
                            ? 'border-luxe-gold bg-luxe-black text-luxe-gold'
                            : 'border-[#E2D9CC] bg-white text-gray-700 hover:border-luxe-gold'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Variant Selector: Size */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-extrabold uppercase text-gray-700 tracking-wider">
                      Select Option / Size: <span className="text-[#B88015]">{selectedSize}</span>
                    </label>
                    {onOpenSizeGuide && (
                      <button
                        onClick={() => onOpenSizeGuide(product.category)}
                        className="text-[11px] font-bold text-[#B88015] hover:underline flex items-center gap-1"
                      >
                        <span>📏 Fitting Size Guide</span>
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => {
                      const sPrice = Math.round(getSizePrice(product, size) * currency.rate);
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                            selectedSize === size
                              ? 'border-luxe-gold bg-luxe-black text-luxe-gold shadow-md ring-1 ring-luxe-gold'
                              : 'border-[#E2D9CC] bg-white text-gray-700 hover:border-luxe-gold hover:bg-[#FAF8F5]'
                          }`}
                        >
                          <span>{size}</span>
                          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${selectedSize === size ? 'bg-luxe-gold/20 text-luxe-gold' : 'bg-gray-100 text-gray-500'}`}>
                            {currency.symbol}{sPrice.toLocaleString()}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tabs: Details / Specs */}
              <div className="mb-6">
                <div className="flex border-b border-gray-200 mb-3 text-xs font-bold">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 mr-4 border-b-2 transition-colors ${
                      activeTab === 'details' ? 'border-luxe-gold text-luxe-black' : 'border-transparent text-gray-400'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeTab === 'specs' ? 'border-luxe-gold text-luxe-black' : 'border-transparent text-gray-400'
                    }`}
                  >
                    Specifications
                  </button>
                </div>

                {activeTab === 'details' ? (
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {product.description}
                  </p>
                ) : (
                  <div className="space-y-1.5 text-xs text-gray-600 font-light">
                    {product.specs && Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                        <span className="font-semibold text-gray-700">{key}:</span>
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Quantity Selector & Action Buttons */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-[#E2D9CC] rounded-xl overflow-hidden bg-[#FAF8F5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-200 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-bold text-luxe-black">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-200 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 bg-luxe-black hover:bg-luxe-gold hover:text-black text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4 text-luxe-gold" />
                  <span>Add To Cart</span>
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Instant Checkout</span>
              </button>

              {/* Trust Badges & Clear 7-Day Returns Guarantees */}
              <div className="mt-4 pt-3 border-t border-[#EAE2D5] bg-[#FAF8F5] p-3 rounded-2xl space-y-2 border border-[#E2D9CC]">
                <div className="grid grid-cols-3 gap-2 text-center">
                  
                  {/* Shipping Timeline */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <Truck className="w-4 h-4 text-[#B88015] mb-1" />
                    <span className="text-[10px] font-bold text-luxe-black leading-tight">2-4 Days Delivery</span>
                    <span className="text-[9px] text-gray-500 font-medium mt-0.5">Nationwide PK</span>
                  </div>

                  {/* Cash on Delivery */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <Banknote className="w-4 h-4 text-[#B88015] mb-1" />
                    <span className="text-[10px] font-bold text-luxe-black leading-tight">COD Available</span>
                    <span className="text-[9px] text-gray-500 font-medium mt-0.5">Pay At Doorstep</span>
                  </div>

                  {/* Easy 7-Day Returns */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-gray-200 shadow-sm">
                    <RotateCcw className="w-4 h-4 text-[#B88015] mb-1" />
                    <span className="text-[10px] font-bold text-luxe-black leading-tight">7-Day Returns</span>
                    <span className="text-[9px] text-gray-500 font-medium mt-0.5">Easy Exchanges</span>
                  </div>

                </div>

                <div className="flex items-center justify-center gap-1.5 text-[10px] font-extrabold text-emerald-800 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Certified Authentic & Insured Delivery</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
