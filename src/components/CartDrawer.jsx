import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedCheckout,
  currency
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const convertedSubtotal = rawSubtotal * currency.rate;

  const FREE_SHIPPING_THRESHOLD = 150 * currency.rate;
  const progressToFreeShipping = Math.min(100, (convertedSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - convertedSubtotal);

  const discountAmount = (convertedSubtotal * discountPercent) / 100;
  const finalTotal = convertedSubtotal - discountAmount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUXE10' || promoCode.trim().toUpperCase() === 'WELCOME15') {
      const pct = promoCode.trim().toUpperCase() === 'WELCOME15' ? 15 : 10;
      setDiscountPercent(pct);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try LUXE10 for 10% off!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        
        {/* Drawer Panel */}
        <div className="w-screen max-w-md bg-white border-l border-[#EAE2D5] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#EAE2D5] bg-[#FAF8F5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-luxe-gold" />
              <h2 className="font-serif text-xl font-bold text-luxe-black">Your Shopping Cart</h2>
              <span className="bg-luxe-gold text-luxe-black text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-luxe-black hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#121215] text-white px-6 py-3 border-b border-luxe-gold/20 text-xs">
            <div className="flex items-center justify-between font-medium mb-1.5">
              {remainingForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-luxe-gold">{currency.symbol}{Math.round(remainingForFreeShipping).toLocaleString()}</strong> more for Complimentary Express Delivery
                </span>
              ) : (
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 🎉 You unlocked Free Worldwide Express Shipping!
                </span>
              )}
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gold-gradient h-full rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item, idx) => {
                const itemPrice = Math.round(item.price * currency.rate);

                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="flex gap-4 p-3 rounded-2xl border border-[#EAE2D5] bg-[#FAF8F5] hover:border-luxe-gold/40 transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl border border-gray-200 bg-white"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-sm font-bold text-luxe-black line-clamp-1">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Selected Variants */}
                        {(item.selectedColor || item.selectedSize) && (
                          <p className="text-[11px] text-gray-500 font-medium mt-0.5">
                            {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                            {item.selectedColor && item.selectedSize && <span> | </span>}
                            {item.selectedSize && <span>Option: {item.selectedSize}</span>}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="font-extrabold text-sm text-luxe-black">
                          {currency.symbol}{(itemPrice * item.quantity).toLocaleString()}
                        </span>

                        {/* Quantity Buttons */}
                        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-2.5 text-xs font-bold text-luxe-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="font-serif text-lg font-bold text-luxe-black mb-1">
                  Your Cart is Currently Empty
                </h3>
                <p className="text-xs text-gray-500 font-light mb-6">
                  Explore our luxury watches, jewellery, silk abayas, and home items.
                </p>
                <button
                  onClick={onClose}
                  className="bg-luxe-black text-luxe-gold font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider hover:bg-luxe-gold hover:text-black transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE2D5] space-y-4">
              
              {/* Promo Code Entry */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Promo code (LUXE10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white border border-[#E2D9CC] rounded-xl pl-9 pr-3 py-2 text-xs uppercase text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-luxe-black text-luxe-gold hover:bg-luxe-gold hover:text-black text-xs font-bold px-4 py-2 rounded-xl uppercase transition-colors"
                >
                  Apply
                </button>
              </form>

              {discountPercent > 0 && (
                <p className="text-xs font-bold text-emerald-600 flex items-center justify-between">
                  <span>Promo Code Applied ({discountPercent}% Off):</span>
                  <span>-{currency.symbol}{Math.round(discountAmount).toLocaleString()}</span>
                </p>
              )}
              {promoError && (
                <p className="text-[11px] font-medium text-red-500">{promoError}</p>
              )}

              {/* Price Calculation Lines */}
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-luxe-black">
                    {currency.symbol}{Math.round(convertedSubtotal).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Worldwide Shipping</span>
                  <span className="font-bold text-emerald-600">
                    {remainingForFreeShipping === 0 ? 'FREE' : `${currency.symbol}${Math.round(25 * currency.rate)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-gray-200 font-extrabold text-luxe-black">
                  <span>Estimated Total</span>
                  <span className="text-luxe-gold text-lg">
                    {currency.symbol}{Math.round(finalTotal + (remainingForFreeShipping === 0 ? 0 : 25 * currency.rate)).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedCheckout({
                    items: cartItems,
                    total: finalTotal + (remainingForFreeShipping === 0 ? 0 : 25 * currency.rate),
                    discount: discountAmount
                  });
                }}
                className="w-full bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                <span>Proceed To Luxury Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
