export function getSizePrice(product, selectedSize) {
  if (!product) return 0;
  if (selectedSize && product.sizePrices && product.sizePrices[selectedSize] !== undefined) {
    return product.sizePrices[selectedSize];
  }
  return product.price;
}

export const PRODUCTS = [
  // WATCHES
  {
    id: "w-01",
    name: "Rolex Date Just Plain Bezel Stone Dial (Gent's Collection)",
    category: "watches",
    price: 4500,
    originalPrice: 5500,
    rating: 4.9,
    reviewsCount: 58,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-09-30T23:59:59",
    image: "/products/watches/oyster-datejust-wrist.jpg",
    hoverImage: "/products/watches/oyster-datejust-box.jpg",
    gallery: [
      "/products/watches/oyster-datejust-wrist.jpg",
      "/products/watches/oyster-datejust-box.jpg",
      "/products/watches/oyster-datejust-dial.jpg",
      "/products/watches/oyster-datejust-specs.jpg",
      "/products/watches/oyster-datejust-jubilee.jpg",
      "/products/watches/oyster-datejust-profile.jpg",
      "/products/watches/oyster-datejust-caseback.jpg"
    ],
    description: "ROLEX DATE JUST PLAIN BEZEL STONE DIAL (Gent's Collection) - AA Grade Quality. Features Quartz Movement, 42MM size, stainless steel chain with brass case, date display window, and security power lock. The most demanding colourway, delivered in luxury presentation box.",
    colors: ["Two-Tone Yellow Gold & Steel"],
    sizes: ["42MM Standard"],
    sizePrices: {
      "42MM Standard": 4500
    },
    specs: {
      "Collection": "Gent's Collection",
      "Model": "Rolex Date Just Plain Bezel",
      "Dial": "Stone Dial with Diamond Markers & Date Window",
      "Movement": "High Precision Quartz Movement",
      "Quality": "AA Grade Quality",
      "Size": "42MM Size",
      "Case & Chain": "Stainless Steel Chain & Brass Case with Date",
      "Lock": "Security Power Lock",
      "Packaging": "Original Luxury Presentation Box & Tag"
    }
  },
  {
    id: "w-02",
    name: "Rolex Yacht-Master Date Just with Date (Heavy Master Lock)",
    category: "watches",
    price: 3000,
    originalPrice: 3800,
    rating: 4.9,
    reviewsCount: 42,
    isNew: true,
    isBestseller: true,
    image: "/products/watches/oyster-yachtmaster-front.jpg",
    hoverImage: "/products/watches/oyster-yachtmaster-profile.jpg",
    gallery: [
      "/products/watches/oyster-yachtmaster-front.jpg",
      "/products/watches/oyster-yachtmaster-profile.jpg",
      "/products/watches/oyster-yachtmaster-open.jpg",
      "/products/watches/oyster-yachtmaster-caseback.jpg"
    ],
    description: "Rolex Yacht-Master Date Just with Date. Premium Quality craftsmanship featuring a working steel rotating bezel, heavy master lock clasp, and high-performance black Oysterflex-style elastomer strap.",
    colors: ["18k Everose Gold & Matte Black"],
    sizes: ["40MM Standard", "42MM Executive"],
    sizePrices: {
      "40MM Standard": 3000,
      "42MM Executive": 3300
    },
    specs: {
      "Model": "Rolex Yacht-Master Date Just with Date",
      "Quality": "Premium Quality",
      "Bezel": "Working Steel Rotating Bezel",
      "Lock & Clasp": "Heavy Master Lock Security Clasp",
      "Dial": "Black Dial with Date & Luminescent Hands",
      "Strap": "High-Density Oysterflex Style Elastomer Strap",
      "Movement": "High Precision Quartz / Chronometer Movement"
    }
  },
  {
    id: "w-03",
    name: "MIRA Fancy Stone Watch & Trending Tulip Hand Bracelets Set",
    category: "watches",
    price: 2500,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 76,
    isNew: true,
    isBestseller: true,
    image: "/products/watches/mira-gem-blue.jpg",
    hoverImage: "/products/watches/mira-gem-boxes-poster.jpg",
    gallery: [
      "/products/watches/mira-gem-blue.jpg",
      "/products/watches/mira-gem-red.jpg",
      "/products/watches/mira-gem-green.jpg",
      "/products/watches/mira-gem-pink.jpg",
      "/products/watches/mira-gem-black.jpg",
      "/products/watches/mira-gem-purple.jpg",
      "/products/watches/mira-gem-boxes-poster.jpg",
      "/products/watches/mira-gem-lifestyle-collaged.jpg"
    ],
    colorImages: {
      "Sapphire Royal Blue": "/products/watches/mira-gem-blue.jpg",
      "Ruby Velvet Red": "/products/watches/mira-gem-red.jpg",
      "Emerald Imperial Green": "/products/watches/mira-gem-green.jpg",
      "Rose Quartz Blossom": "/products/watches/mira-gem-pink.jpg",
      "Obsidian Midnight Black": "/products/watches/mira-gem-black.jpg",
      "Amethyst Royal Purple": "/products/watches/mira-gem-purple.jpg"
    },
    description: "Gift Set For Her: Fancy beautiful MIRA design stone watch plus trending tulip hand bracelets for her. Best quality guaranteed. Features a sculptural trillion-cut gemstone case in rose gold with matching tulip crystal vine hand chain.",
    colors: [
      "Sapphire Royal Blue",
      "Ruby Velvet Red",
      "Emerald Imperial Green",
      "Rose Quartz Blossom",
      "Obsidian Midnight Black",
      "Amethyst Royal Purple"
    ],
    sizes: ["Single Set (Watch + Tulip Bracelet)", "Deluxe Velvet Box Edition"],
    sizePrices: {
      "Single Set (Watch + Tulip Bracelet)": 2500,
      "Deluxe Velvet Box Edition": 2800
    },
    specs: {
      "Set Inclusions": "MIRA Design Stone Watch + Trending Tulip Hand Bracelet",
      "Quality": "Best Quality Guaranteed",
      "Design": "Sculptural Trillion-Cut Gemstones in Rose Gold Finish",
      "Bracelet": "Matching Crystal Tulip / Leaf Hand Chain",
      "Packaging": "Custom Monogram Velvet Box with Gold Latch"
    }
  },
  {
    id: "w-04",
    name: "7/1 in ULTRA Model Smart Watch with Charger (Gift Box Pack)",
    category: "watches",
    price: 3000,
    originalPrice: 4000,
    rating: 4.8,
    reviewsCount: 114,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-09-25T23:59:59",
    image: "/products/watches/ultra-7in1-main.jpg",
    hoverImage: "/products/watches/ultra-7in1-main.jpg",
    gallery: [
      "/products/watches/ultra-7in1-main.jpg"
    ],
    video: "/products/watches/ultra-7in1-video.mp4",
    description: "7/1 in ULTRA Model Smart Watch with Charger (Gift Box Pack). Features massive 2.01\" big screen HD touchscreen, magnetic fast wireless charger, and 7 interchangeable straps (Stainless steel link, Flame orange ocean sport, Desert canvas leather, Navy silicone, Ivory white, Ribbed black, and Pine green).",
    colors: ["Titanium Silver Body + 7 Straps Included"],
    sizes: ["2.01\" Big Screen Gift Box Pack"],
    sizePrices: {
      "2.01\" Big Screen Gift Box Pack": 3000
    },
    specs: {
      "Model": "7-in-1 ULTRA Smart Watch Edition",
      "Display": "2.01\" Big Screen HD IPS Curved Touchscreen",
      "Straps Included": "7 Interchangeable Straps (Steel, Ocean, Leather, Silicone)",
      "Charger": "Magnetic Fast Wireless Charger Included",
      "Features": "Bluetooth Calling, Notifications, Health & Fitness Tracking",
      "Packaging": "Vibrant Deluxe Gift Box Pack"
    }
  },
  {
    id: "w-05",
    name: "A58 PLUS Ladies Gift Set Model (The Most Demanding Model)",
    category: "watches",
    price: 4000,
    originalPrice: 5000,
    rating: 4.9,
    reviewsCount: 89,
    isNew: true,
    isBestseller: true,
    image: "/products/watches/a58-plus-glamour.jpg",
    hoverImage: "/products/watches/a58-plus-set-box.jpg",
    gallery: [
      "/products/watches/a58-plus-glamour.jpg",
      "/products/watches/a58-plus-set-box.jpg"
    ],
    colors: ["Blush Pink Box Edition", "Obsidian Black Edition", "Champagne Gold Edition"],
    colorImages: {
      "Blush Pink Box Edition": "/products/watches/a58-plus-glamour.jpg",
      "Obsidian Black Edition": "/products/watches/a58-plus-set-box.jpg",
      "Champagne Gold Edition": "/products/watches/a58-plus-set-box.jpg"
    },
    description: "A58 PLUS Ladies Gift Set Model (The Most Demanding Model). Complete 6-piece luxury gift box featuring a 2.02\" HD large screen smartwatch, secondary 18k gold diamond-studded quartz watch, crystal tennis bracelet, pendant necklace, earrings, ring, and extra bands.",
    sizes: ["Complete Ladies Gift Box Set"],
    sizePrices: {
      "Complete Ladies Gift Box Set": 4000
    },
    specs: {
      "Model": "A58 Plus Ladies Gift Set Model",
      "Edition": "The Most Demanding Model",
      "Smartwatch": "2.02\" Borderless HD Large Screen with Calling & Fitness",
      "Analog Watch": "Gold Crystal Bezel Quartz Analog Watch",
      "Jewelry Inclusions": "Tennis Bangle, Pendant Necklace, Stud Earrings, Ring",
      "Packaging": "Grand Double-Layer Pink Velvet Showcase Box"
    }
  },
  {
    id: "w-06",
    name: "PU Watch Leather Storage Box / Display Box (High Quality)",
    category: "watches",
    price: 2700,
    originalPrice: 3500,
    rating: 4.9,
    reviewsCount: 93,
    isNew: false,
    isBestseller: true,
    image: "/products/watches/watch-box-12slot-top.jpg",
    hoverImage: "/products/watches/watch-box-12slot-open.jpg",
    gallery: [
      "/products/watches/watch-box-12slot-top.jpg",
      "/products/watches/watch-box-12slot-open.jpg",
      "/products/watches/watch-box-6slot-closed.jpg",
      "/products/watches/watch-box-6slot-open.jpg"
    ],
    colors: ["Executive Black & Suede Beige"],
    sizes: ["6 Slots High Quality", "12 Slots High Quality"],
    sizePrices: {
      "6 Slots High Quality": 2700,
      "12 Slots High Quality": 3500
    },
    specs: {
      "Product": "PU Watch Leather Storage Box / Display Box",
      "Quality": "High Quality Construction",
      "6 Slots Price": "Rs 2,700/- Only",
      "12 Slots Price": "Rs 3,500/- Only",
      "Exterior": "Premium Scratch-Resistant Black PU Leather",
      "Interior": "Plush Anti-Tarnish Beige Suede Velvet Lining",
      "Window": "Real Scratch-Proof Tempered Viewing Glass",
      "Hardware": "Brushed Chrome Heavy-Duty Lock Clasp with Key"
    }
  },

  // CLOTHES
  {
    id: "c-01",
    name: "Luxe Champagne Silk Trench Coat",
    category: "clothes",
    price: 4500,
    originalPrice: 5800,
    rating: 4.9,
    reviewsCount: 64,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "100% pure Mulberry silk outer shell with double-breasted metallic button detail and detachable belt. Flowing silhouette of pure elegance.",
    colors: ["Champagne", "Onyx Black", "Ivory Cream"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizePrices: {
      "XS": 4200,
      "S": 4500,
      "M": 4800,
      "L": 5100,
      "XL": 5500
    },
    specs: {
      "Material": "100% Mulberry Silk (22 Momme)",
      "Fit": "Tailored Oversized Silhouette",
      "Care": "Professional Dry Clean Only"
    }
  },
  {
    id: "c-02",
    name: "Velvet Midnight Blazer with Royal Embroidery",
    category: "clothes",
    price: 3800,
    originalPrice: 4600,
    rating: 4.7,
    reviewsCount: 41,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "Deep dark navy velvet blazer featuring hand-threaded metallic filigree along lapels and pockets. Luxurious satin lining.",
    colors: ["Midnight Navy", "Emerald Green"],
    sizes: ["S", "M", "L", "XL"],
    sizePrices: {
      "S": 3800,
      "M": 4000,
      "L": 4200,
      "XL": 4500
    },
    specs: {
      "Material": "Cotton Velvet",
      "Details": "Hand-stitched Metallic Thread"
    }
  },

  // HOUSE HOLD
  {
    id: "h-01",
    name: "Imperial Rimmed Crystal Cut Glass Set",
    category: "house-hold",
    price: 2900,
    originalPrice: 3600,
    rating: 4.9,
    reviewsCount: 52,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    description: "Handblown Lead-Free Crystal decanter and matching tumblers with hand-dipped electroplated metallic rims.",
    colors: ["Gold & Clear", "Amber Gold"],
    sizes: ["4-Piece Set", "7-Piece Set", "12-Piece Set"],
    sizePrices: {
      "4-Piece Set": 2900,
      "7-Piece Set": 3600,
      "12-Piece Set": 4900
    },
    specs: {
      "Craftsmanship": "Handblown Artisan Crystal"
    }
  },
  {
    id: "h-02",
    name: "French Jacquard Gold Table Linen Set",
    category: "house-hold",
    price: 2400,
    originalPrice: 3000,
    rating: 4.8,
    reviewsCount: 21,
    isNew: true,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    description: "Woven in Lyon with golden metallic yarn interwoven into soft Egyptian cotton damask.",
    colors: ["Gold Damask", "Cream White"],
    sizes: ["6-Seater (180x240cm)", "8-Seater (180x300cm)", "12-Seater (180x380cm)"],
    sizePrices: {
      "6-Seater (180x240cm)": 2400,
      "8-Seater (180x300cm)": 2900,
      "12-Seater (180x380cm)": 3800
    },
    specs: {
      "Material": "80% Egyptian Cotton, 20% Lurex Gold"
    }
  },

  // JEWELLERY
  {
    id: "j-01",
    name: "Crown Royale 18k Gold Diamond Pendant",
    category: "jewellery",
    price: 3200,
    originalPrice: 4200,
    rating: 5.0,
    reviewsCount: 88,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-08-16T18:00:00",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Directly inspired by the Daily Luxe Haven emblem. Handcrafted 18k gold plated crown encrusted with round brilliant crystals.",
    colors: ["Yellow Gold", "Rose Gold", "White Gold"],
    sizes: ["16 inch chain", "18 inch chain", "20 inch chain"],
    sizePrices: {
      "16 inch chain": 2900,
      "18 inch chain": 3200,
      "20 inch chain": 3500
    },
    specs: {
      "Purity": "18K Gold Plated Brass",
      "Stones": "Brilliant Grade A Cubic Zirconia"
    }
  },
  {
    id: "j-02",
    name: "Eternal Emerald Cut Gold Drop Earrings",
    category: "jewellery",
    price: 2800,
    originalPrice: 3500,
    rating: 4.9,
    reviewsCount: 41,
    isNew: false,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant emerald-cut center stones encircled by micro-pave halos set on delicate gold drops.",
    colors: ["Emerald Gold"],
    sizes: ["Standard Drop (2.4 ct)", "Grand Royal Drop (4.0 ct)"],
    sizePrices: {
      "Standard Drop (2.4 ct)": 2800,
      "Grand Royal Drop (4.0 ct)": 3400
    },
    specs: {
      "Gemstone": "Faceted Emerald Crystal"
    }
  },

  // ACCESSORIES
  {
    id: "a-01",
    name: "P9 Wireless Bluetooth Headphones (with Box Packing)",
    category: "accessories",
    price: 2200,
    originalPrice: 3000,
    rating: 4.9,
    reviewsCount: 84,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-09-28T23:59:59",
    image: "/products/accessories/p9-headphones-display.jpg",
    hoverImage: "/products/accessories/p9-headphones-colors.jpg",
    gallery: [
      "/products/accessories/p9-headphones-display.jpg",
      "/products/accessories/p9-headphones-colors.jpg",
      "/products/accessories/p9-headphones-overview.jpg",
      "/products/accessories/p9-headphones-wear.jpg",
      "/products/accessories/p9-headphones-ports.jpg",
      "/products/accessories/p9-headphone-black.jpg",
      "/products/accessories/p9-headphone-blue.jpg",
      "/products/accessories/p9-headphone-green.jpg",
      "/products/accessories/p9-headphone-silver.jpg"
    ],
    colors: ["Space Gray / Black", "Sky Blue", "Mint Green", "Platinum Silver / White"],
    colorImages: {
      "Space Gray / Black": "/products/accessories/p9-headphone-black.jpg",
      "Sky Blue": "/products/accessories/p9-headphone-blue.jpg",
      "Mint Green": "/products/accessories/p9-headphone-green.jpg",
      "Platinum Silver / White": "/products/accessories/p9-headphone-silver.jpg"
    },
    sizes: ["Standard Box Pack"],
    sizePrices: {
      "Standard Box Pack": 2200
    },
    description: "P9 Wireless Bluetooth Headphones with Box Packing. Connect On Both iOS & Android! Features Active Noise Cancellation (ANC), multi-mode playback (Bluetooth, MicroSD TF memory card, 3.5mm AUX cable), low latency high-amplitude sound, and ultra-comfortable ergonomic over-ear design.",
    specs: {
      "Model": "P9 Wireless Bluetooth Over-Ear Headphone",
      "Compatibility": "Connect On Both iOS & Android Devices",
      "Playback Modes": "Bluetooth Wireless / TF Memory Card / 3.5mm Cable",
      "Noise Control": "Active Noise Cancellation (ANC)",
      "Design": "Ergonomic Over-Ear Cushioned Earcups",
      "Packaging": "Original Retail Box Packing with Charging Cable"
    }
  },
  {
    id: "a-02",
    name: "AirPods Pro 2 with Lanyard Buzzer Edition (High Quality)",
    category: "accessories",
    price: 2500,
    originalPrice: 3400,
    rating: 4.9,
    reviewsCount: 116,
    isNew: true,
    isBestseller: true,
    image: "/products/accessories/airpods-pro2-unboxed.jpg",
    hoverImage: "/products/accessories/airpods-pro2-case.jpg",
    gallery: [
      "/products/accessories/airpods-pro2-unboxed.jpg",
      "/products/accessories/airpods-pro2-case.jpg"
    ],
    colors: ["Gloss White Edition"],
    sizes: ["Complete Retail Box Pack"],
    sizePrices: {
      "Complete Retail Box Pack": 2500
    },
    description: "AirPods Pro 2 with Lanyard Buzzer Edition in High Quality Box Packing. Comes with braided Type C to Type C fast charging cable, speaker buzzer holes on case for audio locate alerts, side lanyard loop attachment, Active Noise Cancellation, touch volume swipe controls, and multiple silicone ear tips.",
    specs: {
      "Model": "AirPods Pro 2 Lanyard Buzzer Edition",
      "Quality": "High Quality Retail Box Packing",
      "Cable Included": "Type C to Type C Braided Fast Cable",
      "Case Features": "Built-In Speaker Buzzer & Lanyard Loop",
      "Sound & Touch": "Active Noise Cancellation & Swipe Controls",
      "Inclusions": "Charging Case, Earbuds, Multi-Size Ear Tips, Type-C Cable"
    }
  },
  {
    id: "a-03",
    name: "AirPods Pro 2 Matte Black with Buzzer & Clip Pouch",
    category: "accessories",
    price: 2800,
    originalPrice: 3800,
    rating: 5.0,
    reviewsCount: 92,
    isNew: true,
    isBestseller: true,
    image: "/products/accessories/airpods-pro2-black-pouch.jpg",
    hoverImage: "/products/accessories/airpods-pro2-black-box.jpg",
    gallery: [
      "/products/accessories/airpods-pro2-black-pouch.jpg",
      "/products/accessories/airpods-pro2-black-box.jpg",
      "/products/accessories/airpods-pro2-black-case.jpg"
    ],
    colors: ["Stealth Matte Black + Clip Pouch"],
    sizes: ["Full Box Pack with Pouch"],
    sizePrices: {
      "Full Box Pack with Pouch": 2800
    },
    description: "AirPods Pro 2 Black with Buzzer Edition in High Quality Box Packing (Premium Quality). Price with protective silicone pouch and carabiner clip: 2800/- Only. Includes Type C to Type C cable, 100% ANC, speaker buzzer case, and deluxe presentation packaging.",
    specs: {
      "Model": "AirPods Pro 2 Stealth Matte Black Edition",
      "Quality": "Premium Quality (100% ANC Certified)",
      "Protective Pouch": "Shockproof Black Silicone Case with Carabiner Hook",
      "Cable Included": "Type C to Type C Fast Charging Cable",
      "Case Features": "Speaker Buzzer Audio Alerts & Magnetic Lid",
      "Packaging": "Deluxe Black Presentation Box Pack"
    }
  },
  {
    id: "a-04",
    name: "GTS-1941 Portable RGB Speaker with Karaoke Microphone",
    category: "accessories",
    price: 2500,
    originalPrice: 3500,
    rating: 4.8,
    reviewsCount: 67,
    isNew: true,
    isBestseller: true,
    image: "/products/accessories/gts1941-speaker-mic.jpg",
    hoverImage: "/products/accessories/gts1941-speaker-mic.jpg",
    gallery: [
      "/products/accessories/gts1941-speaker-mic.jpg"
    ],
    colors: ["Midnight Black & Dynamic RGB"],
    sizes: ["Complete Speaker + Mic Box Pack"],
    sizePrices: {
      "Complete Speaker + Mic Box Pack": 2500
    },
    description: "GTS-1941 Speaker+Mic RGB Multipurpose Rechargeable Portable Speaker with One Mic (Box Packing). Features dynamic RGB party pulsing light grille, 3-inch big sound bass driver, sturdy carry handle, USB / TF / AUX playback, and handheld karaoke microphone.",
    specs: {
      "Model": "GTS-1941 Multipurpose RGB Speaker + Mic",
      "Speaker Driver": "3-Inch Big Sound High-Bass Driver",
      "Lighting": "Dynamic RGB Multi-Color Pulsing Grille",
      "Microphone": "Handheld Karaoke Mic Included",
      "Connectivity": "Bluetooth Wireless, USB Flash Drive, MicroSD Card, AUX",
      "Packaging": "Original Retail Box Pack with Charging Cable"
    }
  },

  // PURSES
  {
    id: "p-01",
    name: "The Haven Monogram Leather Flap Bag",
    category: "purses",
    price: 3800,
    originalPrice: 4800,
    rating: 4.9,
    reviewsCount: 76,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    description: "Structured vegan leather handbag adorned with custom gold turn-lock closure.",
    colors: ["Luxe Gold-Black", "Cream Ivory", "Emerald Green"],
    sizes: ["Mini (18cm)", "Medium (24cm)", "Grand Tote (32cm)"],
    sizePrices: {
      "Mini (18cm)": 3200,
      "Medium (24cm)": 3800,
      "Grand Tote (32cm)": 4500
    },
    specs: {
      "Leather": "Premium Structured Vegan Leather"
    }
  },
  {
    id: "p-02",
    name: "Satin Evening Clutch with Crystal Crown Lock",
    category: "purses",
    price: 2600,
    originalPrice: 3400,
    rating: 4.8,
    reviewsCount: 33,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Lustrous heavy silk satin frame with removable chain and sparkling crown clasp.",
    colors: ["Champagne Gold", "Obsidian Black"],
    sizes: ["Compact (20cm)", "Deluxe (25cm)"],
    sizePrices: {
      "Compact (20cm)": 2600,
      "Deluxe (25cm)": 3200
    },
    specs: {
      "Closure": "Crystal Crown Clasp"
    }
  },

  // NIGHT DRESS
  {
    id: "nd-01",
    name: "Victoria Gold Trim Mulberry Silk Nightgown",
    category: "night-dress",
    price: 2500,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 45,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    description: "Mulberry silk full-length nightgown featuring french eyelash lace trims.",
    colors: ["Pearl White", "Rose Champagne", "Midnight Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizePrices: {
      "XS": 2300,
      "S": 2500,
      "M": 2700,
      "L": 2900,
      "XL": 3200
    },
    specs: {
      "Silk Weight": "Pure Silk Satin Finish"
    }
  },
  {
    id: "nd-02",
    name: "Royal Kimono Silk Robe with Hand-Cut Lace",
    category: "night-dress",
    price: 3200,
    originalPrice: 4000,
    rating: 4.8,
    reviewsCount: 28,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1508742345712-0656a285ac27?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Floor-sweeping silk kimono with wide bell sleeves, hand-cut French lace hem.",
    colors: ["Golden Ivory", "Obsidian Black"],
    sizes: ["S/M", "L/XL", "Custom Tailored"],
    sizePrices: {
      "S/M": 3200,
      "L/XL": 3600,
      "Custom Tailored": 4200
    },
    specs: {
      "Fabric": "Heavyweight Silk Satin"
    }
  },

  // HIJABS & ABAYA
  {
    id: "ha-01",
    name: "Imperial Gold Sequined Velvet Abaya Set",
    category: "hijabs-abaya",
    price: 5200,
    originalPrice: 6500,
    rating: 5.0,
    reviewsCount: 94,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-08-17T12:00:00",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&w=800&q=80",
    description: "Open-front velvet abaya adorned with hand-stitched gold sequins and crystal beadwork along lapels. Includes matching chiffon hijab.",
    colors: ["Black & Gold", "Emerald & Gold", "Burgundy & Gold"],
    sizes: ["52", "54", "56", "58", "60"],
    sizePrices: {
      "52": 4800,
      "54": 5000,
      "56": 5200,
      "58": 5400,
      "60": 5600
    },
    specs: {
      "Fabric": "Premium Plush Velvet & Chiffon"
    }
  },
  {
    id: "ha-02",
    name: "Luxury Silk Chiffon Hijab with Gold Lace Rim",
    category: "hijabs-abaya",
    price: 1200,
    originalPrice: 1600,
    rating: 4.9,
    reviewsCount: 63,
    isNew: false,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-breathable non-slip silk chiffon fabric with intricate metallic gold embroidered edges.",
    colors: ["Champagne Gold", "Nude Mocha", "Classic Black"],
    sizes: ["Standard (180cm x 70cm)", "Maxi (200cm x 80cm)"],
    sizePrices: {
      "Standard (180cm x 70cm)": 1200,
      "Maxi (200cm x 80cm)": 1500
    },
    specs: {
      "Material": "Silk Blend Chiffon"
    }
  },

  // COSMETICS
  {
    id: "cs-01",
    name: "Luxe 24k Gold Infused Age-Defying Elixir",
    category: "cosmetics",
    price: 2400,
    originalPrice: 3000,
    rating: 4.9,
    reviewsCount: 112,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    description: "Concentrated facial oil with pure gold leaf flakes, Damascus rose extract, and Hyaluronic Acid.",
    colors: ["Pure Gold Drops"],
    sizes: ["30ml / 1.0 fl oz", "50ml / 1.7 fl oz", "100ml / 3.4 fl oz"],
    sizePrices: {
      "30ml / 1.0 fl oz": 1800,
      "50ml / 1.7 fl oz": 2400,
      "100ml / 3.4 fl oz": 3600
    },
    specs: {
      "Active Ingredients": "Gold Flakes, Squalane, Rosehip Seed Oil"
    }
  },
  {
    id: "cs-02",
    name: "Royal Oud & Amber Extrait de Parfum",
    category: "cosmetics",
    price: 3200,
    originalPrice: 4000,
    rating: 5.0,
    reviewsCount: 84,
    isNew: false,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "Intoxicating blend of Cambodian agarwood, warm amber resin, saffron, and Madagascar vanilla.",
    colors: ["Amber Gold"],
    sizes: ["50ml / 1.7 fl oz", "100ml / 3.4 fl oz"],
    sizePrices: {
      "50ml / 1.7 fl oz": 2500,
      "100ml / 3.4 fl oz": 3200
    },
    specs: {
      "Fragrance Type": "Extrait de Parfum (30% Concentration)"
    }
  },

  // KIDS ITEMS
  {
    id: "k-01",
    name: "Heirloom Velvet Baby Pram Coat Set",
    category: "kids-items",
    price: 2600,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 38,
    isNew: true,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    description: "Soft plush cotton velvet pram coat lined in organic cotton with matching bonnet.",
    colors: ["Cream Ivory", "Dusty Gold", "Royal Navy"],
    sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "2-3Y"],
    sizePrices: {
      "0-3M": 2200,
      "3-6M": 2400,
      "6-12M": 2600,
      "12-18M": 2800,
      "2-3Y": 3000
    },
    specs: {
      "Material": "100% Cotton Velvet"
    }
  },
  {
    id: "k-02",
    name: "Handcrafted Gold Wooden Rocking Horse",
    category: "kids-items",
    price: 4200,
    originalPrice: 5200,
    rating: 4.8,
    reviewsCount: 19,
    isNew: false,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    description: "Carved from solid wood with non-toxic gold leaf detailing and genuine leather saddle.",
    colors: ["Natural Wood & Gold"],
    sizes: ["Junior Edition", "Classic Heirloom Size"],
    sizePrices: {
      "Junior Edition": 3500,
      "Classic Heirloom Size": 4200
    },
    specs: {
      "Material": "Solid Hardwood & Leather"
    }
  },

  // GADGETS
  {
    id: "g-01",
    name: "Aura Sound 24k Gold Wireless Headphones",
    category: "gadgets",
    price: 3500,
    originalPrice: 4500,
    rating: 4.9,
    reviewsCount: 71,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-08-16T10:00:00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    description: "Active Noise Cancellation studio headphones with gold trim earcups and Hi-Res wireless audio.",
    colors: ["24k Gold & Black", "Gold & Pearl White"],
    sizes: ["Standard Wireless", "Audiophile Pro Bundle"],
    sizePrices: {
      "Standard Wireless": 3500,
      "Audiophile Pro Bundle": 4200
    },
    specs: {
      "Battery Life": "40 Hours Playback"
    }
  },
  {
    id: "g-02",
    name: "Luxe Charge Gold Marble Wireless Station",
    category: "gadgets",
    price: 1900,
    originalPrice: 2500,
    rating: 4.8,
    reviewsCount: 46,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Marble texture fast wireless charging dock with brushed gold trims.",
    colors: ["Gold Brass & White Marble", "Gold Brass & Black Marble"],
    sizes: ["2-in-1 Dual Dock", "3-in-1 Triple Dock"],
    sizePrices: {
      "2-in-1 Dual Dock": 1600,
      "3-in-1 Triple Dock": 1900
    },
    specs: {
      "Fast Charging": "15W MagSafe"
    }
  },

  // HOME DECORATORS
  {
    id: "hd-01",
    name: "Spherical Brass & Marble Table Lamp",
    category: "home-decorators",
    price: 3200,
    originalPrice: 4000,
    rating: 4.9,
    reviewsCount: 57,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "Architectural luminaire with hand-brushed gold brass arc base and handblown frosted glass opal globe.",
    colors: ["Brushed Brass Gold"],
    sizes: ["Medium (H: 42cm)", "Large (H: 52cm)", "Grand Arc (H: 68cm)"],
    sizePrices: {
      "Medium (H: 42cm)": 2800,
      "Large (H: 52cm)": 3200,
      "Grand Arc (H: 68cm)": 3900
    },
    specs: {
      "Lighting": "Dimmable Warm LED"
    }
  },
  {
    id: "hd-02",
    name: "Artisan Gold Leaf Sculptural Bowl",
    category: "home-decorators",
    price: 2400,
    originalPrice: 3000,
    rating: 4.8,
    reviewsCount: 33,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Centerpiece bowl textured with authentic gold leaf finishing.",
    colors: ["Burnished Gold"],
    sizes: ["Medium (30cm)", "Large (38cm)", "Statement Bowl (48cm)"],
    sizePrices: {
      "Medium (30cm)": 2000,
      "Large (38cm)": 2400,
      "Statement Bowl (48cm)": 3100
    },
    specs: {
      "Craft": "Hand-hammered & Gilding"
    }
  }
];
