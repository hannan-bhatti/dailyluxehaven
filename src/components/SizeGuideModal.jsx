import React, { useState } from 'react';
import { X, Sparkles, Ruler, Shirt, Watch, Gem, ShoppingBag, Info, CheckCircle2 } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose, initialCategory = 'abayas' }) {
  const [activeTab, setActiveTab] = useState(initialCategory);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-[#EAE2D5] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10">
        
        {/* Header */}
        <div className="bg-[#0B0B0C] text-white p-6 sm:p-8 flex items-center justify-between border-b border-luxe-gold/30">
          <div>
            <div className="flex items-center gap-2 text-luxe-gold text-xs font-bold uppercase tracking-widest mb-1">
              <Ruler className="w-4 h-4" />
              <span>Bespoke Fitting & Measurement Guide</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Luxury Size & Fit Assistant
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-luxe-gold hover:text-luxe-black transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-[#EAE2D5] bg-[#FAF8F5] px-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('abayas')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'abayas' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Abayas & Nightdresses</span>
          </button>

          <button
            onClick={() => setActiveTab('clothes')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'clothes' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <Shirt className="w-4 h-4" />
            <span>Clothes & Apparel</span>
          </button>

          <button
            onClick={() => setActiveTab('watches')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'watches' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <Watch className="w-4 h-4" />
            <span>Watches & Wristwear</span>
          </button>

          <button
            onClick={() => setActiveTab('jewellery')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'jewellery' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <Gem className="w-4 h-4" />
            <span>Rings & Necklaces</span>
          </button>

          <button
            onClick={() => setActiveTab('purses')}
            className={`flex items-center gap-2 py-4 px-4 font-serif text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'purses' ? 'border-[#B88015] text-[#B88015]' : 'border-transparent text-gray-600 hover:text-[#B88015]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Purses & Bags</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-sm text-gray-700">
          
          {/* ABAYAS & NIGHTDRESSES */}
          {activeTab === 'abayas' && (
            <div className="space-y-4">
              <div className="bg-[#FAF8F5] border border-[#E2D9CC] p-4 rounded-2xl flex items-start gap-3">
                <Info className="w-5 h-5 text-[#B88015] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Abaya sizes are determined primarily by your <strong>overall height</strong> from shoulder to floor (in inches). Bust measurements are cut with an elegant, modest loose drape.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0B0B0C] text-luxe-gold">
                      <th className="p-3 rounded-tl-xl font-serif">Abaya Size</th>
                      <th className="p-3 font-serif">Recommended Height</th>
                      <th className="p-3 font-serif">Abaya Length (Inches)</th>
                      <th className="p-3 font-serif">Bust Width (Inches)</th>
                      <th className="p-3 rounded-tr-xl font-serif">Sleeve Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border border-gray-200">
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 52 (Small)</td>
                      <td className="p-3">5'0" - 5'2" (152 - 157 cm)</td>
                      <td className="p-3 font-semibold">52 inches</td>
                      <td className="p-3">22 - 24 inches</td>
                      <td className="p-3">27 inches</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 54 (Medium)</td>
                      <td className="p-3">5'3" - 5'4" (160 - 163 cm)</td>
                      <td className="p-3 font-semibold">54 inches</td>
                      <td className="p-3">24 - 26 inches</td>
                      <td className="p-3">28 inches</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 56 (Large)</td>
                      <td className="p-3">5'5" - 5'6" (165 - 168 cm)</td>
                      <td className="p-3 font-semibold">56 inches</td>
                      <td className="p-3">26 - 28 inches</td>
                      <td className="p-3">29 inches</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 58 (XL)</td>
                      <td className="p-3">5'7" - 5'8" (170 - 173 cm)</td>
                      <td className="p-3 font-semibold">58 inches</td>
                      <td className="p-3">28 - 30 inches</td>
                      <td className="p-3">30 inches</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 60 (XXL)</td>
                      <td className="p-3">5'9" - 6'0" (175 - 183 cm)</td>
                      <td className="p-3 font-semibold">60 inches</td>
                      <td className="p-3">30 - 32 inches</td>
                      <td className="p-3">31 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* CLOTHES & APPAREL */}
          {activeTab === 'clothes' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0B0B0C] text-luxe-gold">
                      <th className="p-3 rounded-tl-xl font-serif">Standard Size</th>
                      <th className="p-3 font-serif">Chest / Bust (Inches)</th>
                      <th className="p-3 font-serif">Waist (Inches)</th>
                      <th className="p-3 rounded-tr-xl font-serif">Hips (Inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border border-gray-200">
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Small (S)</td>
                      <td className="p-3 font-semibold">34" - 36" (86-91 cm)</td>
                      <td className="p-3">28" - 30" (71-76 cm)</td>
                      <td className="p-3">36" - 38" (91-96 cm)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Medium (M)</td>
                      <td className="p-3 font-semibold">38" - 40" (96-101 cm)</td>
                      <td className="p-3">32" - 34" (81-86 cm)</td>
                      <td className="p-3">40" - 42" (101-106 cm)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Large (L)</td>
                      <td className="p-3 font-semibold">42" - 44" (106-111 cm)</td>
                      <td className="p-3">36" - 38" (91-96 cm)</td>
                      <td className="p-3">44" - 46" (111-116 cm)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">X-Large (XL)</td>
                      <td className="p-3 font-semibold">46" - 48" (116-121 cm)</td>
                      <td className="p-3">40" - 42" (101-106 cm)</td>
                      <td className="p-3">48" - 50" (121-127 cm)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* WATCHES & WRISTWEAR */}
          {activeTab === 'watches' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-luxe-black">Timepiece Case Diameter & Strap Sizing</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-[#E2D9CC] rounded-2xl p-4 bg-[#FAF8F5] text-center space-y-2">
                  <span className="text-2xl font-serif font-bold text-[#B88015]">36mm - 38mm</span>
                  <h5 className="font-bold text-xs text-luxe-black">Petite / Classic Dress</h5>
                  <p className="text-[11px] text-gray-500">Ideal for slim wrists (14 cm to 16 cm circumference).</p>
                </div>
                <div className="border border-[#E2D9CC] rounded-2xl p-4 bg-[#FAF8F5] text-center space-y-2">
                  <span className="text-2xl font-serif font-bold text-[#B88015]">40mm - 42mm</span>
                  <h5 className="font-bold text-xs text-luxe-black">Standard Luxury Executive</h5>
                  <p className="text-[11px] text-gray-500">Universal fit for standard wrists (16 cm to 18.5 cm).</p>
                </div>
                <div className="border border-[#E2D9CC] rounded-2xl p-4 bg-[#FAF8F5] text-center space-y-2">
                  <span className="text-2xl font-serif font-bold text-[#B88015]">44mm - 46mm</span>
                  <h5 className="font-bold text-xs text-luxe-black">Oversized / Chronograph</h5>
                  <p className="text-[11px] text-gray-500">Bold statement presence for larger wrists (18.5 cm+).</p>
                </div>
              </div>
            </div>
          )}

          {/* RINGS & JEWELLERY */}
          {activeTab === 'jewellery' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-luxe-black">Ring & Fine Jewellery Sizing Chart</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0B0B0C] text-luxe-gold">
                      <th className="p-3 rounded-tl-xl font-serif">US Ring Size</th>
                      <th className="p-3 font-serif">Inner Diameter (mm)</th>
                      <th className="p-3 rounded-tr-xl font-serif">Inner Circumference (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 border border-gray-200">
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 6</td>
                      <td className="p-3 font-semibold">16.5 mm</td>
                      <td className="p-3">51.9 mm</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 7</td>
                      <td className="p-3 font-semibold">17.3 mm</td>
                      <td className="p-3">54.4 mm</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 8</td>
                      <td className="p-3 font-semibold">18.1 mm</td>
                      <td className="p-3">57.0 mm</td>
                    </tr>
                    <tr className="hover:bg-[#FAF8F5]">
                      <td className="p-3 font-bold text-luxe-black">Size 9</td>
                      <td className="p-3 font-semibold">18.9 mm</td>
                      <td className="p-3">59.5 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* PURSES & BAGS */}
          {activeTab === 'purses' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-luxe-black">Handbag & Purse Dimensions Guide</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#E2D9CC] p-4 rounded-2xl bg-[#FAF8F5] space-y-1">
                  <h5 className="font-serif font-bold text-luxe-black text-sm">Clutch & Evening Minaudière</h5>
                  <p className="text-xs text-[#B88015] font-bold">20 cm x 12 cm x 5 cm (8" x 4.7" x 2")</p>
                  <p className="text-[11px] text-gray-500">Holds smartphone, lipstick, cardholder, and keys.</p>
                </div>
                <div className="border border-[#E2D9CC] p-4 rounded-2xl bg-[#FAF8F5] space-y-1">
                  <h5 className="font-serif font-bold text-luxe-black text-sm">Medium Shoulder Bag & Crossbody</h5>
                  <p className="text-xs text-[#B88015] font-bold">28 cm x 18 cm x 9 cm (11" x 7" x 3.5")</p>
                  <p className="text-[11px] text-gray-500">Perfect everyday companion with interior zip compartments.</p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Note */}
          <div className="bg-[#141418] text-white p-4 rounded-2xl flex items-center justify-between gap-4 border border-luxe-gold/30">
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#B88015]" />
              <span>Need a custom tailored measurement? Contact our WhatsApp Concierge for assistance.</span>
            </div>
            <a
              href="https://wa.me/923144362979"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B88015] text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap hover:bg-white hover:text-luxe-black transition-colors"
            >
              WhatsApp Concierge
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
