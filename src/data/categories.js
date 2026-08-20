export const HUBS = [
  {
    id: "fashion-beauty",
    name: "Fashion & Beauty",
    tagline: "Haute Couture, Swiss Timepieces, Fine Jewellery & Royal Cosmetics",
    description: "Explore our curated fashion pavilion featuring Swiss watches, 18k gold diamond jewellery, Italian leather purses, modest silk abayas, and royal fragrances.",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    badge: "Haute Couture & Fine Gems",
    categoryIds: ["watches", "clothes", "jewellery", "accessories", "purses", "night-dress", "hijabs-abaya", "cosmetics"]
  },
  {
    id: "home-living",
    name: "Home & Tech",
    tagline: "Opulent Living, Sculptural Decor & Gold-Accented Electronics",
    description: "Transform your living space with crystal decanters, French damask linens, architectural table lamps, and 24k gold audiophile electronics.",
    heroImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
    badge: "Luxe Interior & Smart Tech",
    categoryIds: ["house-hold", "gadgets", "home-decorators"]
  },
  {
    id: "kids-family",
    name: "Kids & Family",
    tagline: "Heirloom Children Wear, Velvet Nursery & Artisan Wooden Toys",
    description: "Handcrafted baby pram coats, organic pima cotton linings, and solid beechwood rocking horses built for generations.",
    heroImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1600&q=80",
    badge: "Heirloom Family Creations",
    categoryIds: ["kids-items"]
  }
];

export const CATEGORIES = [
  {
    id: "watches",
    hubId: "fashion-beauty",
    name: "Watches",
    description: "Chronographs of distinction & Swiss luxury precision timepieces.",
    icon: "Watch",
    count: 18,
    image: "/products/watches/oyster-datejust-wrist.jpg",
    featured: true
  },
  {
    id: "clothes",
    hubId: "fashion-beauty",
    name: "Clothes",
    description: "Haute couture, silk dresses, tailored suits & luxury wear.",
    icon: "Shirt",
    count: 32,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "house-hold",
    hubId: "home-living",
    name: "House hold",
    description: "Stainless steel food storage sets, electric masala grinders, hand choppers & smart shelves.",
    icon: "Home",
    count: 18,
    image: "/products/household/stainless-bowls-stack.jpg",
    featured: true
  },
  {
    id: "jewellery",
    hubId: "fashion-beauty",
    name: "Jewellery",
    description: "18K Gold, rare diamonds, emerald pendants & fine artisan gems.",
    icon: "Gem",
    count: 28,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "accessories",
    hubId: "fashion-beauty",
    name: "Accessories",
    description: "ANC Bluetooth headphones, AirPods Pro 2 & portable RGB karaoke speakers.",
    icon: "Headphones",
    count: 16,
    image: "/products/accessories/p9-headphones-display.jpg",
    featured: true
  },
  {
    id: "purses",
    hubId: "fashion-beauty",
    name: "Purses",
    description: "Handcrafted leather handbags, evening clutches & totes.",
    icon: "ShoppingBag",
    count: 20,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "night-dress",
    hubId: "fashion-beauty",
    name: "Night dress",
    description: "Pure Mulberry silk sleepwear, lace gowns & luxury robes.",
    icon: "Moon",
    count: 15,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "hijabs-abaya",
    hubId: "fashion-beauty",
    name: "Hijabs & Abaya",
    description: "Hand-embellished abayas, chiffon hijabs & modest elegance.",
    icon: "Sparkles",
    count: 26,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "cosmetics",
    hubId: "fashion-beauty",
    name: "Cosmetics",
    description: "Niche elixirs, organic skincare & royal fragrance collections.",
    icon: "Sparkle",
    count: 35,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "kids-items",
    hubId: "kids-family",
    name: "Kids items",
    description: "Designer children's wear, heirloom toys & velvet nursery decor.",
    icon: "Baby",
    count: 19,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "gadgets",
    hubId: "home-living",
    name: "Gadgets",
    description: "High-fidelity audio, gold-accented electronics & smart luxury.",
    icon: "Headphones",
    count: 16,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "home-decorators",
    hubId: "home-living",
    name: "Home decorators",
    description: "Sculptural vases, artisan candles, marble bowls & art accents.",
    icon: "Lamp",
    count: 25,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];
