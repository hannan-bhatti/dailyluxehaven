import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  currency
}) {
  if (!isOpen) return null;

  const savedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        
        <div className="w-screen max-w-md bg-white border-l border-[#EAE2D5] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#EAE2D5] bg-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              <h2 className="font-serif text-xl font-bold text-luxe-black">Your Wishlist Vault</h2>
              <span className="bg-luxe-gold text-luxe-black text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                {savedProducts.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-luxe-black hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedProducts.length > 0 ? (
              savedProducts.map((product) => {
                const itemPrice = Math.round(product.price * currency.rate);

                return (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 rounded-2xl border border-[#EAE2D5] bg-[#FAF8F5] hover:border-luxe-gold/40 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-xl border border-gray-200 bg-white"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-sm font-bold text-luxe-black line-clamp-1">
                            {product.name}
                          </h4>
                          <button
                            onClick={() => onToggleWishlist(product)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] text-luxe-gold uppercase font-bold tracking-widest mt-0.5">
                          {product.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="font-extrabold text-sm text-luxe-black">
                          {currency.symbol}{itemPrice.toLocaleString()}
                        </span>

                        <button
                          onClick={() => {
                            onAddToCart(product);
                            onToggleWishlist(product);
                          }}
                          className="bg-luxe-black hover:bg-luxe-gold hover:text-black text-white text-xs font-bold px-3 py-1.5 rounded-lg uppercase transition-colors flex items-center gap-1.5"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          <span>Move To Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-luxe-black mb-1">
                  Your Wishlist is Empty
                </h3>
                <p className="text-xs text-gray-500 font-light mb-6">
                  Click the heart icon on any luxury creation to save it here for later.
                </p>
                <button
                  onClick={onClose}
                  className="bg-luxe-black text-luxe-gold font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-luxe-gold hover:text-black transition-colors"
                >
                  Explore Catalog
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
