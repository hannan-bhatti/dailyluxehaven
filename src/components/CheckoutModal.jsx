import React, { useState } from 'react';
import { X, CheckCircle, CreditCard, ShieldCheck, Truck, Lock, ArrowRight, Printer, Sparkles, Building, MapPin, User, Mail, Phone, Copy, Check, Smartphone, MessageCircle } from 'lucide-react';

const PAKISTAN_CITIES = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
  'Peshawar', 'Multan', 'Quetta', 'Sialkot', 'Gujranwala', 
  'Hyderabad', 'Abbottabad', 'Bahawalpur', 'Sargodha', 'Sukkur', 'Gujrat'
];

export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutData,
  onOrderComplete,
  currency
}) {
  if (!isOpen || !checkoutData) return null;

  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [paymentMethod, setPaymentMethod] = useState('easypaisa'); // 'easypaisa' | 'jazzcash' | 'card'
  const [isProcessing, setIsProcessing] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: 'Ahmed',
    lastName: 'Raza',
    email: 'ahmed.raza@luxehaven.com',
    phone: '+92 314 4362979',
    address: 'House #42, Block 5, Clifton / Gulberg',
    city: 'Karachi',
    country: 'Pakistan',
    zip: '75500',
    // Card inputs
    cardNumber: '•••• •••• •••• 8842',
    cardExp: '11/28',
    cardCvc: '921',
    // Mobile Wallet inputs
    senderPhone: '03144362979',
    trxId: '9823481729'
  });

  const [orderId, setOrderId] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
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
    }, 1600);
  };

  const totalAmount = checkoutData.total || 0;

  const getPaymentTitle = () => {
    if (paymentMethod === 'easypaisa') return 'EasyPaisa Mobile Account';
    if (paymentMethod === 'jazzcash') return 'JazzCash Mobile Account';
    return 'Credit / Debit Card';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EAE2D5] my-8">
        
        {/* Header */}
        <div className="bg-[#121215] text-white p-6 border-b border-luxe-gold/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="DLH Logo" className="h-9 w-auto" />
            <div>
              <h2 className="font-serif text-xl font-bold text-white">Daily Luxe Haven Checkout</h2>
              <p className="text-[10px] text-luxe-gold uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-luxe-gold inline" />
                256-Bit SSL Encrypted Vault Checkout • Pakistan
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
              <span>Shipping Address</span>
            </div>
            <span className="text-gray-300">———</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-luxe-black font-extrabold' : 'text-gray-400'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-luxe-gold text-black' : 'bg-gray-200'}`}>2</span>
              <span>Payment Method</span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Shipping Details */}
          {step === 1 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl font-bold text-luxe-black flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-luxe-gold" />
                  <span>Express Delivery Address</span>
                </h3>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  🚚 Nationwide Delivery Across Pakistan
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. Ahmed"
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
                    placeholder="e.g. Raza"
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
                    placeholder="name@example.com"
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Phone (WhatsApp)</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+92 3XX XXXXXXX"
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Street / House Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House / Apartment #, Street, Sector / Area"
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-[#FAF8F5] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-luxe-black font-semibold focus:border-luxe-gold outline-none"
                  >
                    {PAKISTAN_CITIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    readOnly
                    className="w-full bg-[#F3EFE9] border border-[#E2D9CC] rounded-xl px-4 py-2.5 text-xs text-gray-700 font-semibold outline-none cursor-not-allowed"
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
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl font-bold text-luxe-black flex items-center gap-2">
                  <Lock className="w-5 h-5 text-luxe-gold" />
                  <span>Select Payment Method</span>
                </h3>
                <span className="text-[11px] font-bold text-luxe-gold uppercase tracking-wider bg-[#121215] px-3 py-1 rounded-full">
                  Instant Vault Secure
                </span>
              </div>

              {/* 3 Payment Options: EasyPaisa, JazzCash, Credit/Debit Card */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                
                {/* EasyPaisa Option */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('easypaisa')}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all relative overflow-hidden ${
                    paymentMethod === 'easypaisa'
                      ? 'border-[#00C067] bg-[#0E1E16] text-[#00E57B] shadow-lg ring-2 ring-[#00C067]/40'
                      : 'border-gray-200 bg-[#FAF8F5] text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#00C067] text-white flex items-center justify-center font-black text-sm shadow">
                    EP
                  </div>
                  <div className="leading-tight">
                    <span className="block font-extrabold text-sm">EasyPaisa</span>
                    <span className="text-[10px] text-gray-400 font-normal">Direct Transfer</span>
                  </div>
                </button>

                {/* JazzCash Option */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('jazzcash')}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all relative overflow-hidden ${
                    paymentMethod === 'jazzcash'
                      ? 'border-[#F73A18] bg-[#221010] text-[#FF5B3B] shadow-lg ring-2 ring-[#F73A18]/40'
                      : 'border-gray-200 bg-[#FAF8F5] text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#EB2127] text-white flex items-center justify-center font-black text-sm shadow">
                    JC
                  </div>
                  <div className="leading-tight">
                    <span className="block font-extrabold text-sm">JazzCash</span>
                    <span className="text-[10px] text-gray-400 font-normal">Direct Transfer</span>
                  </div>
                </button>

                {/* Debit / Credit Card Option */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-center font-bold text-xs flex flex-col items-center justify-center gap-2 transition-all relative overflow-hidden ${
                    paymentMethod === 'card'
                      ? 'border-luxe-gold bg-[#141418] text-luxe-gold shadow-lg ring-2 ring-luxe-gold/40'
                      : 'border-gray-200 bg-[#FAF8F5] text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="w-9 h-9 rounded-xl bg-[#1C1C24] text-luxe-gold border border-luxe-gold/40 flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-extrabold text-sm">Debit / Credit</span>
                    <span className="text-[10px] text-gray-400 font-normal">Visa / Master</span>
                  </div>
                </button>

              </div>

              {/* EASYPAISA DETAILS BOX */}
              {paymentMethod === 'easypaisa' && (
                <div className="space-y-4 mb-6">
                  {/* Account Summary Banner */}
                  <div className="bg-gradient-to-br from-[#0A2619] via-[#0E3523] to-[#0A1F15] text-white p-5 rounded-2xl border border-[#00C067]/40 shadow-md">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-[#00C067] text-white font-extrabold text-[10px] tracking-wider uppercase">
                          EasyPaisa
                        </span>
                        <span className="text-xs font-semibold text-emerald-300">Official Merchant Deposit</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('03144362979')}
                        className="flex items-center gap-1 bg-white/10 hover:bg-[#00C067] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {copiedAccount ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-300" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Number</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Account Title</span>
                        <span className="font-serif text-lg font-bold text-white">Ahmed Raza</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">EasyPaisa Mobile Number</span>
                        <span className="font-mono text-lg font-bold text-[#00E57B] tracking-wider">03144362979</span>
                      </div>
                    </div>
                  </div>

                  {/* Transfer Guide & Inputs */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E2D9CC] text-xs space-y-3">
                    <div className="text-gray-700 space-y-1 text-[11px] bg-white p-3 rounded-xl border border-gray-200">
                      <p className="font-bold text-luxe-black text-xs mb-1">EasyPaisa Transfer Steps:</p>
                      <p>1. Open your <strong>EasyPaisa App</strong> & tap <strong>Send Money</strong>.</p>
                      <p>2. Select <strong>EasyPaisa Transfer</strong> and enter <strong>03144362979</strong> (Title: <strong>Ahmed Raza</strong>).</p>
                      <p>3. Send total amount <strong>{currency.symbol}{Math.round(totalAmount).toLocaleString()}</strong>.</p>
                      <p>4. Enter your Sender Phone Number & the 10-12 digit <strong>Transaction ID (TID)</strong> received via SMS from <strong>3737</strong> below:</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          Your Sender EasyPaisa Number
                        </label>
                        <input
                          type="text"
                          name="senderPhone"
                          required
                          value={formData.senderPhone}
                          onChange={handleInputChange}
                          placeholder="e.g. 03141234567"
                          className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-[#00C067] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          Transaction ID (TID / TRX)
                        </label>
                        <input
                          type="text"
                          name="trxId"
                          required
                          value={formData.trxId}
                          onChange={handleInputChange}
                          placeholder="e.g. 9823481729"
                          className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-[#00C067] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* JAZZCASH DETAILS BOX */}
              {paymentMethod === 'jazzcash' && (
                <div className="space-y-4 mb-6">
                  {/* Account Summary Banner */}
                  <div className="bg-gradient-to-br from-[#2D0C0C] via-[#3D1414] to-[#1F0808] text-white p-5 rounded-2xl border border-[#EB2127]/40 shadow-md">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="px-2 py-0.5 rounded bg-[#EB2127] text-white font-extrabold text-[10px] tracking-wider uppercase">
                          JazzCash
                        </span>
                        <span className="text-xs font-semibold text-orange-300">Official Merchant Deposit</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('03144362979')}
                        className="flex items-center gap-1 bg-white/10 hover:bg-[#EB2127] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        {copiedAccount ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-orange-300" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Number</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">Account Title</span>
                        <span className="font-serif text-lg font-bold text-white">Ahmed Raza</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider block">JazzCash Mobile Number</span>
                        <span className="font-mono text-lg font-bold text-[#FF6347] tracking-wider">03144362979</span>
                      </div>
                    </div>
                  </div>

                  {/* Transfer Guide & Inputs */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#E2D9CC] text-xs space-y-3">
                    <div className="text-gray-700 space-y-1 text-[11px] bg-white p-3 rounded-xl border border-gray-200">
                      <p className="font-bold text-luxe-black text-xs mb-1">JazzCash Transfer Steps:</p>
                      <p>1. Open your <strong>JazzCash App</strong> (or dial <strong>*786#</strong>) & tap <strong>Send Money</strong>.</p>
                      <p>2. Select <strong>To JazzCash Account</strong> and enter <strong>03144362979</strong> (Title: <strong>Ahmed Raza</strong>).</p>
                      <p>3. Send total amount <strong>{currency.symbol}{Math.round(totalAmount).toLocaleString()}</strong>.</p>
                      <p>4. Enter your Sender Mobile Number & the 10-12 digit <strong>Transaction ID (TID)</strong> received via SMS from <strong>8558</strong> below:</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          Your Sender JazzCash Number
                        </label>
                        <input
                          type="text"
                          name="senderPhone"
                          required
                          value={formData.senderPhone}
                          onChange={handleInputChange}
                          placeholder="e.g. 03001234567"
                          className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-[#EB2127] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                          Transaction ID (TRX ID / TID)
                        </label>
                        <input
                          type="text"
                          name="trxId"
                          required
                          value={formData.trxId}
                          onChange={handleInputChange}
                          placeholder="e.g. 8472910384"
                          className="w-full bg-white border border-[#E2D9CC] rounded-xl px-4 py-2 text-xs text-luxe-black font-mono font-bold focus:border-[#EB2127] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CARD INPUTS */}
              {paymentMethod === 'card' && (
                <div className="space-y-4 mb-6 bg-[#FAF8F5] p-4 rounded-2xl border border-[#E2D9CC]">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Card Number (Visa / Mastercard / PayPak)</label>
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
              <div className="bg-[#121215] text-white p-4 rounded-2xl flex items-center justify-between mb-6 border border-luxe-gold/20">
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
                    <span>Verifying & Processing...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Confirm & Place Order</span>
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
                  <span className="font-semibold text-gray-600">Payment Gateway:</span>
                  <span className="font-bold text-luxe-black">{getPaymentTitle()}</span>
                </div>
                {(paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') && (
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-600">Transaction ID (TID):</span>
                    <span className="font-mono font-bold text-emerald-700">{formData.trxId}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Customer:</span>
                  <span className="font-bold text-luxe-black">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Contact (WhatsApp):</span>
                  <span className="font-bold text-luxe-black">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-600">Shipping To:</span>
                  <span className="font-bold text-luxe-black">{formData.address}, {formData.city}, {formData.country}</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-sm font-extrabold text-luxe-black">
                  <span>Total Amount Paid:</span>
                  <span className="text-luxe-gold">{currency.symbol}{Math.round(totalAmount).toLocaleString()}</span>
                </div>
              </div>

              {/* WhatsApp Quick Verification Button */}
              <div className="max-w-md mx-auto mb-6">
                <a
                  href={`https://wa.me/923144362979?text=Hello%20Daily%20Luxe%20Haven%2C%20I%20have%20placed%20order%20${orderId}%20for%20${currency.symbol}${Math.round(totalAmount).toLocaleString()}%20via%20${encodeURIComponent(getPaymentTitle())}%20(TID:%20${formData.trxId}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Receipt via WhatsApp Concierge (+92 314 4362979)</span>
                </a>
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
