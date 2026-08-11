import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck, Truck, Lock, ArrowRight, Printer, Sparkles, Building, MapPin, User, Mail, Phone } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutData,
  onOrderComplete,
  currency
}) {
  if (!isOpen || !checkoutData) return null;

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@luxehaven.com',
    phone: '+1 (555) 234-5678',
    address: '740 Park Avenue, Apt 14B',
    city: 'New York',
    country: 'United States',
    zip: '10021',
    cardNumber: '•••• •••• •••• 8842',
    cardExp: '11/28',
    cardCvc: '921'
  });

  const [orderId, setOrderId] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const generatedId = `DLH-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setStep(3);
      onOrderComplete();
    }, 1800);
  };

  const totalAmount = checkoutData.total || 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EAE2D5] my-8">
        
        {/* Header */}
        <div className="bg-[#121215] text-white p-6 border-b border-luxe-gold/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="DLH Logo" className="h-9 w-auto" />
            <div>
              <h2 className="font-serif text-xl font-bold text-white">Daily Luxe Haven Checkout</h2>
              <p className="text-[10px] text-luxe-gold uppercase tracking-widest font-semibold">
                256-Bit SSL Encrypted Vault Checkout
              </p>
            </div>
          </div>
          {step !== 3 && (
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress Steps Header */}
        {step !== 3 && (
          <div className="bg-[#FAF8F5] border-b border-[#EAE2D5] px-6 py-3 flex items-center justify-around text-xs font-bold">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-luxe-black font-extrabold' : 'text-gray-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-luxe-gold text-black' : 'bg-gray-200'}`}>1</span>
              <span>Shipping Info</span>
            </div>
            <span className="text-gray-300">———</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-luxe-black font-extrabold' : 'text-gray-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-luxe-gold text-black' : 'bg-gray-200'}`}>2</span>
              <span>Payment Gateway</span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Shipping Details */}
          {step === 1 && (
            <div>
              <h3 className="font-serif text-xl font-bold text-luxe-black mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-luxe-gold" />
                <span>Express Shipping Address</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-extrabold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-gold-glow flex items-center gap-2"
                >
                  <span>Continue To Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Payment Gateway */}
          {step === 2 && (
            <form onSubmit={handlePay}>
              <h3 className="font-serif text-xl font-bold text-luxe-black mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-luxe-gold" />
                <span>Select Luxury Payment Gateway</span>
              </h3>

              {/* Payment Methods */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-luxe-gold bg-luxe-black text-luxe-gold shadow'
                      : 'border-gray-200 bg-[#FAF8F5] text-gray-700'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Credit / Debit</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-4 rounded-xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'apple'
                      ? 'border-luxe-gold bg-luxe-black text-luxe-gold shadow'
                      : 'border-gray-200 bg-[#FAF8F5] text-gray-700'
                  }`}
                >
                  <span className="text-base font-extrabold">Pay</span>
                  <span>Apple Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 rounded-xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'paypal'
                      ? 'border-luxe-gold bg-luxe-black text-luxe-gold shadow'
                      : 'border-gray-200 bg-[#FAF8F5] text-gray-700'
                  }`}
                >
                  <span className="text-base font-extrabold italic text-blue-600">PayPal</span>
                  <span>Express</span>
                </button>
              </div>

              {/* Card Inputs */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6 bg-[#FAF8F5] p-4 rounded-2xl border border-[#E2D9CC]">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-luxe-gold outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Expiry Date</label>
                      <input
                        type="text"
                        name="cardExp"
                        value={formData.cardExp}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-luxe-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">CVC / CVV</label>
                      <input
                        type="text"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-luxe-gold outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Order Total Highlight */}
              <div className="bg-[#121215] text-white p-4 rounded-2xl flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs text-gray-400 font-medium">Total Charged</span>
                  <p className="font-serif text-2xl font-bold text-luxe-gold">
                    {currency.symbol}{Math.round(totalAmount).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Insured Express Shipping</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-gray-500 hover:text-luxe-black"
                >
                  ← Back To Address
                </button>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-extrabold px-8 py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-gold-glow flex items-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span>Encrypting & Processing...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Authorise Payment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Order Receipt Confirmation */}
          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-300 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-luxe-black mb-1">
                Order Confirmed!
              </h3>
              <p className="text-xs text-luxe-gold font-bold uppercase tracking-widest mb-6">
                Live Daily. Shop Luxe.
              </p>

              <div className="bg-[#FAF8F5] border border-[#EAE2D5] rounded-2xl p-6 text-left max-w-md mx-auto mb-6 text-xs space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-bold text-gray-600">Order Reference:</span>
                  <span className="font-mono font-bold text-luxe-gold text-sm">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Customer:</span>
                  <span className="font-bold text-luxe-black">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Confirmation Email:</span>
                  <span className="font-bold text-luxe-black">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Shipping To:</span>
                  <span className="font-bold text-luxe-black">{formData.address}, {formData.city}</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-sm font-extrabold text-luxe-black">
                  <span>Total Amount Paid:</span>
                  <span className="text-luxe-gold">{currency.symbol}{Math.round(totalAmount).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="border border-[#E2D9CC] bg-white hover:bg-gray-100 text-luxe-black font-bold px-6 py-2.5 rounded-xl text-xs uppercase flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt</span>
                </button>
                
                <button
                  onClick={onClose}
                  className="bg-luxe-black text-luxe-gold hover:bg-luxe-gold hover:text-black font-bold px-8 py-2.5 rounded-xl text-xs uppercase transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
