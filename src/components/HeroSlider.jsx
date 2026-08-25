import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Crown, ShieldCheck } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "LIVE DAILY. SHOP LUXE.",
    subtitle: "The Autumn Haute Couture & Timepiece Collection",
    description: "Immerse yourself in hand-crafted Swiss watches, 18K gold diamond jewellery, custom abayas & royal household decors.",
    badge: "2026 Autumn Exclusive",
    image: "/hero.png",
    cta: "Explore Collection",
    categoryTarget: "jewellery"
  },
  {
    id: 2,
    title: "EMERALD & GOLD ELEGANCE",
    subtitle: "Modest Abayas & Silk Couture",
    description: "Discover bespoke velvet abayas, silk chiffon hijabs, and signature modest couture crafted for royalty.",
    badge: "Haute Couture",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80",
    cta: "Shop Abayas & Silk",
    categoryTarget: "hijabs-abaya"
  },
  {
    id: 3,
    title: "SWISS LUXURY CHRONOGRAPHS",
    subtitle: "Precision Timepieces for Connoisseurs",
    description: "Complimentary worldwide express shipping & 5-year international guarantee on all gold mechanical timepieces.",
    badge: "Master Craftsmanship",
    image: "/products/watches/oyster-datejust-wrist.jpg",
    cta: "View Luxury Watches",
    categoryTarget: "watches"
  }
];

export default function HeroSlider({ onSelectCategory }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative bg-[#0E0E10] text-white overflow-hidden min-h-[550px] lg:min-h-[620px] flex items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center opacity-40 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#0E0E10]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-[#0E0E10]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-2xl">
          
          {/* Gold Badge */}
          <div className="inline-flex items-center gap-2 bg-luxe-gold/20 border border-luxe-gold/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <Crown className="w-4 h-4 text-luxe-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E8C872]">
              {slide.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
            {slide.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-luxe-gold mb-3">
            {slide.subtitle}
          </p>

          <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed font-light">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectCategory(slide.categoryTarget)}
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-luxe-black font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-gold-glow flex items-center gap-2"
            >
              <span>{slide.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectCategory('all')}
              className="border border-luxe-gold/60 text-white hover:bg-white/10 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
            >
              Browse All Categories
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-luxe-gold" />
              <span>100% Authenticity Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-luxe-gold" />
              <span>Worldwide VIP Express Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-luxe-gold hover:text-black transition-all border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-luxe-gold hover:text-black transition-all border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-8 bg-luxe-gold' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
