import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star, Sparkles } from 'lucide-react';

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  currency
}) {
  const [isHovered, setIsHovered] = useState(false);

  const convertedPrice = Math.round(product.price * currency.rate);
  const convertedOrig = product.originalPrice ? Math.round(product.originalPrice * currency.rate) : null;

  return (
    <div
      className="bg-white rounded-2xl border border-[#EAE2D5] overflow-hidden flex flex-col justify-between hover:shadow-luxe-hover hover:border-luxe-gold/50 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Product Image Frame */}
        <div className="relative h-64 sm:h-72 w-full bg-[#FAF8F5] overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
          
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isNew && (
              <span className="bg-luxe-black text-luxe-gold text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border border-luxe-gold/30">
                NEW ARRIVAL
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-luxe-gold text-luxe-black text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                BESTSELLER
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                SALE
              </span>
            )}
          </div>

          {/* Top Right Wishlist Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
              isWishlisted
                ? 'bg-red-50 text-red-500 shadow'
                : 'bg-white/80 text-gray-700 hover:text-red-500 hover:bg-white'
            }`}
            title="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
          </button>

          {/* Quick View Button on Hover Overlay */}
          <div className="absolute inset-x-0 bottom-3 px-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full bg-luxe-black/90 hover:bg-luxe-gold hover:text-luxe-black text-white text-xs font-bold py-2.5 rounded-xl backdrop-blur-md transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>

        </div>

        {/* Details Container */}
        <div className="p-5">
          {/* Category Name */}
          <p className="text-[10px] font-extrabold text-luxe-gold uppercase tracking-widest mb-1">
            {product.category}
          </p>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-lg font-bold text-luxe-black group-hover:text-luxe-gold transition-colors line-clamp-1 cursor-pointer mb-2"
          >
            {product.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-gray-600">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Colors available swatch indicator */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[10px] text-gray-400 font-semibold uppercase">Colors:</span>
              <span className="text-[11px] font-medium text-gray-700">
                {product.colors.slice(0, 2).join(', ')}{product.colors.length > 2 ? ` +${product.colors.length - 2}` : ''}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Pricing & Add to Cart Button */}
      <div className="p-5 pt-0 border-t border-transparent">
        <div className="flex items-baseline justify-between mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-extrabold text-luxe-black">
              {currency.symbol}{convertedPrice.toLocaleString()}
            </span>
            {convertedOrig && (
              <span className="text-xs line-through text-gray-400">
                {currency.symbol}{convertedOrig.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Trust Badge Indicator */}
        <div className="flex items-center justify-between text-[10px] font-semibold text-gray-500 mb-2 px-0.5">
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <span>✓ COD & 7-Day Returns</span>
          </span>
          <span className="text-gray-500">🚚 2-4 Days PK</span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-[#FAF8F5] hover:bg-luxe-black hover:text-white border border-[#EAE2D5] text-luxe-black font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-luxe-gold group-hover:text-luxe-gold" />
          <span>Add To Cart</span>
        </button>
      </div>

    </div>
  );
}
