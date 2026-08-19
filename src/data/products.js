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
    name: "Oyster Perpetual Datejust Two-Tone Diamond Dial",
    category: "watches",
    price: 3850,
    originalPrice: 4500,
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
    description: "Iconic luxury two-tone timepiece blending 904L Oystersteel and 18k yellow gold. Showcases a fluted gold bezel, sunray jet-black dial accented with 10 brilliant-cut diamond hour markers, date aperture with Cyclops 2.5x magnification, screw-down twinlock crown, and the legendary 5-piece link Jubilee bracelet with concealed Crownclasp. Delivered with signature emerald green luxury box and official tag.",
    colors: ["Two-Tone Yellow Gold & Steel"],
    sizes: ["36mm", "41mm"],
    sizePrices: {
      "36mm": 3850,
      "41mm": 4250
    },
    specs: {
      "Movement": "Superlative Chronometer Automatic 3235",
      "Case Material": "18K Yellow Gold & 904L Oystersteel",
      "Bezel": "Signature Fluted 18K Yellow Gold Bezel",
      "Dial": "Sunray Black with 10 Diamond Hour Markers",
      "Bracelet": "Two-Tone Jubilee with Concealed Crownclasp",
      "Crystal": "Scratch-Resistant Sapphire with Cyclops Lens",
      "Water Resistance": "100m / 330ft Waterproof Twinlock Crown",
      "Packaging": "Original Luxury Emerald Presentation Box & Tag"
    }
  },
  {
    id: "w-02",
    name: "Oyster Perpetual Yacht-Master 18k Everose Gold Oysterflex",
    category: "watches",
    price: 3490,
    originalPrice: 3950,
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
    description: "Commanding maritime luxury in solid 18k Everose Gold. Fitted with a matte black ceramic 60-minute rotatable bezel with polished raised numerals, deep black dial with Chromalight luminescent Mercedes hands, and the high-performance patented Oysterflex elastomer strap with solid rose gold Oysterlock safety clasp.",
    colors: ["18k Everose Gold & Matte Black"],
    sizes: ["40mm", "42mm"],
    sizePrices: {
      "40mm": 3490,
      "42mm": 3890
    },
    specs: {
      "Movement": "Superlative Chronometer Automatic Calibre 3235",
      "Case": "Solid 18k Everose Gold Polished Finish",
      "Bezel": "Matte Sandblasted Ceramic 60-Min Raised Numerals",
      "Dial": "Chromalight High-Luminescence Dot/Baton Markers",
      "Strap": "Oysterflex High-Density Elastomer with Cushion System",
      "Clasp": "Solid 18k Rose Gold Oysterlock Safety Clasp",
      "Water Resistance": "300m / 1000ft Professional Diver Rating"
    }
  },
  {
    id: "w-03",
    name: "MIRA Rare Gem Trillion Crystal Watch & Botanical Bracelet Set",
    category: "watches",
    price: 790,
    originalPrice: 1050,
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
    description: "An exquisite haute joaillerie timepiece accompanied by a matching crystal botanical vine bracelet. Features a sculptural triangular dial surrounded by four trillion-cut Austrian faceted gemstones in high-polish Rose Gold. Delivered in a custom matching velvet jewelry presentation box.",
    colors: [
      "Sapphire Royal Blue",
      "Ruby Velvet Red",
      "Emerald Imperial Green",
      "Rose Quartz Blossom",
      "Obsidian Midnight Black",
      "Amethyst Royal Purple"
    ],
    sizes: ["Single Set (Watch + Bracelet)", "Deluxe Velvet Box Edition"],
    sizePrices: {
      "Single Set (Watch + Bracelet)": 790,
      "Deluxe Velvet Box Edition": 920
    },
    specs: {
      "Movement": "Japanese Quartz High-Accuracy Movement",
      "Case & Band": "18k Rose Gold IP Plated Alloy",
      "Stones": "Precision Faceted Austrian Trillion Crystals",
      "Companion Jewelry": "Matching Gem Leaf Vine Chain Bracelet",
      "Packaging": "Custom Monogram Velvet Box with Gold Latch"
    }
  },
  {
    id: "w-04",
    name: "ULTRA 2.01\" Big Screen Smartwatch Bundle (7-in-1 Straps)",
    category: "watches",
    price: 390,
    originalPrice: 550,
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
    description: "Complete flagship smartwatch bundle featuring a massive 2.01\" HD bezel-less curved touchscreen. Includes magnetic wireless fast charger and 7 distinct interchangeable premium straps: Stainless steel link bracelet, Flame orange ocean sport strap, Desert canvas leather, Navy silicone, Ivory white, Ribbed black, and Pine green.",
    colors: ["Titanium Silver Body + 7 Straps Included"],
    sizes: ["2.01\" Big Screen Box Edition"],
    sizePrices: {
      "2.01\" Big Screen Box Edition": 390
    },
    specs: {
      "Display": "2.01\" HD IPS Curved Touchscreen (320x385)",
      "Straps Included": "7 Interchangeable Straps (Steel, Ocean, Leather, Silicone)",
      "Connectivity": "Bluetooth 5.2 Calls, Notifications, NFC, Health Tracking",
      "Battery & Charging": "Wireless Fast Magnetic Puck Charger (5-7 Days Battery)",
      "Water Resistance": "IP68 Water & Dust Resistant",
      "Packaging": "Vibrant Orange Luxury Magnetic Presentation Box"
    }
  },
  {
    id: "w-05",
    name: "A58 Plus 2.02\" Smartwatch & Fine Jewelry 6-Piece Gift Set",
    category: "watches",
    price: 480,
    originalPrice: 650,
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
    description: "The ultimate luxury gift set for her. Unboxes a 2.02\" HD large screen smartwatch alongside a secondary 18k gold diamond-studded quartz watch, matching gold crystal tennis bracelet, delicate pendant necklace, crystal stud earrings, solitaire ring, and extra fashion straps.",
    sizes: ["Complete 6-Piece Gift Set"],
    sizePrices: {
      "Complete 6-Piece Gift Set": 480
    },
    specs: {
      "Smartwatch": "2.02\" Borderless HD Screen with Fitness & Call Support",
      "Analog Watch": "Gold Crystal Bezel Quartz Analog Watch",
      "Jewelry Inclusions": "Tennis Bangle, Pendant Necklace, Stud Earrings, Ring",
      "Accessories": "Magnetic USB Charging Cable & Extra Band",
      "Packaging": "Grand Double-Layer Pink Velvet Showcase Box"
    }
  },
  {
    id: "w-06",
    name: "Handcrafted Vegan Leather Watch Showcase & Collector Box",
    category: "watches",
    price: 160,
    originalPrice: 220,
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
    sizes: ["6 Slots Compact Organizer", "12 Slots Showcase Vault"],
    sizePrices: {
      "6 Slots Compact Organizer": 160,
      "12 Slots Showcase Vault": 240
    },
    specs: {
      "Exterior": "Premium Scratch-Resistant Black Vegan Leather",
      "Stitching": "Precision White Saddle Contrast Stitching",
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
    price: 890,
    originalPrice: 1100,
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
      "XS": 820,
      "S": 890,
      "M": 950,
      "L": 1020,
      "XL": 1090
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
    price: 750,
    originalPrice: 890,
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
      "S": 750,
      "M": 790,
      "L": 840,
      "XL": 890
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
    price: 320,
    originalPrice: 400,
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
      "4-Piece Set": 320,
      "7-Piece Set": 420,
      "12-Piece Set": 680
    },
    specs: {
      "Craftsmanship": "Handblown Artisan Crystal"
    }
  },
  {
    id: "h-02",
    name: "French Jacquard Gold Table Linen Set",
    category: "house-hold",
    price: 290,
    originalPrice: 360,
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
      "6-Seater (180x240cm)": 240,
      "8-Seater (180x300cm)": 290,
      "12-Seater (180x380cm)": 380
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
    price: 1950,
    originalPrice: 2400,
    rating: 5.0,
    reviewsCount: 88,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-08-16T18:00:00",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Directly inspired by the Daily Luxe Haven emblem. Handcrafted 18k solid gold crown encrusted with round brilliant diamonds.",
    colors: ["Yellow Gold", "Rose Gold", "White Gold"],
    sizes: ["16 inch chain", "18 inch chain", "20 inch chain"],
    sizePrices: {
      "16 inch chain": 1750,
      "18 inch chain": 1950,
      "20 inch chain": 2150
    },
    specs: {
      "Gold Purity": "18K Solid Gold (750 hallmark)",
      "Diamond Carat": "1.25 ctw VS1 Color E"
    }
  },
  {
    id: "j-02",
    name: "Eternal Emerald Cut Gold Drop Earrings",
    category: "jewellery",
    price: 1480,
    originalPrice: 1750,
    rating: 4.9,
    reviewsCount: 41,
    isNew: false,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant Colombian emerald-cut center stones encircled by micro-pave diamond halos set on delicate 18k gold drops.",
    colors: ["Emerald Gold"],
    sizes: ["Standard Drop (2.4 ct)", "Grand Royal Drop (4.0 ct)"],
    sizePrices: {
      "Standard Drop (2.4 ct)": 1480,
      "Grand Royal Drop (4.0 ct)": 2180
    },
    specs: {
      "Gemstone": "Natural Colombian Emerald"
    }
  },

  // ACCESSORIES
  {
    id: "a-01",
    name: "Monogram Gold-Plated Aviator Sunglasses",
    category: "accessories",
    price: 360,
    originalPrice: 450,
    rating: 4.8,
    reviewsCount: 39,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-lightweight titanium frame with 24k gold plating and gradient brown polarized UV400 lenses.",
    colors: ["Gold & Brown Gradient", "Gold & Dark Smoke"],
    sizes: ["Medium Fit (55mm)", "Large Fit (58mm)"],
    sizePrices: {
      "Medium Fit (55mm)": 360,
      "Large Fit (58mm)": 395
    },
    specs: {
      "Lens": "Polarized Category 3 UV400"
    }
  },
  {
    id: "a-02",
    name: "Hand-Rolled Italian Silk Square Scarf",
    category: "accessories",
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviewsCount: 27,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Printed in Como, Italy. Rich royal damask and gold chain art print on 100% heavy silk twill.",
    colors: ["Gold & Royal Navy", "Gold & Ivory"],
    sizes: ["Square (70cm x 70cm)", "Grand Square (90cm x 90cm)", "Maxi Twill (140cm x 140cm)"],
    sizePrices: {
      "Square (70cm x 70cm)": 180,
      "Grand Square (90cm x 90cm)": 240,
      "Maxi Twill (140cm x 140cm)": 340
    },
    specs: {
      "Material": "100% Silk Twill"
    }
  },

  // PURSES
  {
    id: "p-01",
    name: "The Haven Monogram Leather Flap Bag",
    category: "purses",
    price: 1250,
    originalPrice: 1550,
    rating: 4.9,
    reviewsCount: 76,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
    description: "Structured calfskin leather handbag adorned with custom gold turn-lock closure.",
    colors: ["Luxe Gold-Black", "Cream Ivory", "Emerald Green"],
    sizes: ["Mini (18cm)", "Medium (24cm)", "Grand Tote (32cm)"],
    sizePrices: {
      "Mini (18cm)": 980,
      "Medium (24cm)": 1250,
      "Grand Tote (32cm)": 1580
    },
    specs: {
      "Leather": "Full Grain Italian Calfskin"
    }
  },
  {
    id: "p-02",
    name: "Satin Evening Clutch with Crystal Crown Lock",
    category: "purses",
    price: 680,
    originalPrice: 820,
    rating: 4.8,
    reviewsCount: 33,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Lustrous heavy silk satin frame with removable snake chain and sparkling crown clasp.",
    colors: ["Champagne Gold", "Obsidian Black"],
    sizes: ["Compact (20cm)", "Deluxe (25cm)"],
    sizePrices: {
      "Compact (20cm)": 680,
      "Deluxe (25cm)": 820
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
    price: 340,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 45,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    description: "100% Grade 6A Mulberry silk full-length nightgown featuring french eyelash lace trims.",
    colors: ["Pearl White", "Rose Champagne", "Midnight Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizePrices: {
      "XS": 310,
      "S": 340,
      "M": 370,
      "L": 400,
      "XL": 440
    },
    specs: {
      "Silk Weight": "25 Momme Pure Silk"
    }
  },
  {
    id: "nd-02",
    name: "Royal Kimono Silk Robe with Hand-Cut Lace",
    category: "night-dress",
    price: 480,
    originalPrice: 580,
    rating: 4.8,
    reviewsCount: 28,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1508742345712-0656a285ac27?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Floor-sweeping silk kimono with wide bell sleeves, hand-cut French Chantilly lace hem.",
    colors: ["Golden Ivory", "Obsidian Black"],
    sizes: ["S/M", "L/XL", "Custom Tailored"],
    sizePrices: {
      "S/M": 480,
      "L/XL": 530,
      "Custom Tailored": 650
    },
    specs: {
      "Fabric": "100% Heavyweight Silk"
    }
  },

  // HIJABS & ABAYA
  {
    id: "ha-01",
    name: "Imperial Gold Sequined Velvet Abaya Set",
    category: "hijabs-abaya",
    price: 640,
    originalPrice: 790,
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
      "52": 580,
      "54": 610,
      "56": 640,
      "58": 670,
      "60": 700
    },
    specs: {
      "Fabric": "Premium Plush Velvet & Chiffon"
    }
  },
  {
    id: "ha-02",
    name: "Luxury Silk Chiffon Hijab with Gold Lace Rim",
    category: "hijabs-abaya",
    price: 110,
    originalPrice: 150,
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
      "Standard (180cm x 70cm)": 110,
      "Maxi (200cm x 80cm)": 145
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
    price: 260,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 112,
    isNew: true,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    description: "Concentrated facial oil with pure 24K gold flakes, rare Damascus rose extract, and Hyaluronic Acid.",
    colors: ["Pure Gold Drops"],
    sizes: ["30ml / 1.0 fl oz", "50ml / 1.7 fl oz", "100ml / 3.4 fl oz"],
    sizePrices: {
      "30ml / 1.0 fl oz": 180,
      "50ml / 1.7 fl oz": 260,
      "100ml / 3.4 fl oz": 420
    },
    specs: {
      "Active Ingredients": "24k Pure Gold Flakes, Squalane, Rosehip Seed Oil"
    }
  },
  {
    id: "cs-02",
    name: "Royal Oud & Amber Extrait de Parfum",
    category: "cosmetics",
    price: 390,
    originalPrice: 480,
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
      "50ml / 1.7 fl oz": 270,
      "100ml / 3.4 fl oz": 390
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
    price: 210,
    originalPrice: 270,
    rating: 4.9,
    reviewsCount: 38,
    isNew: true,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
    description: "Soft plush cotton velvet pram coat lined in organic pima cotton with matching bonnet.",
    colors: ["Cream Ivory", "Dusty Gold", "Royal Navy"],
    sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "2-3Y"],
    sizePrices: {
      "0-3M": 180,
      "3-6M": 195,
      "6-12M": 210,
      "12-18M": 225,
      "2-3Y": 245
    },
    specs: {
      "Material": "100% Cotton Velvet"
    }
  },
  {
    id: "k-02",
    name: "Handcrafted Gold Wooden Rocking Horse",
    category: "kids-items",
    price: 490,
    originalPrice: 620,
    rating: 4.8,
    reviewsCount: 19,
    isNew: false,
    isBestseller: true,
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    description: "Carved from solid beechwood with non-toxic gold leaf detailing and genuine leather saddle.",
    colors: ["Natural Wood & Gold"],
    sizes: ["Junior Edition", "Classic Heirloom Size"],
    sizePrices: {
      "Junior Edition": 390,
      "Classic Heirloom Size": 490
    },
    specs: {
      "Material": "Solid Beechwood & Italian Leather"
    }
  },

  // GADGETS
  {
    id: "g-01",
    name: "Aura Sound 24k Gold Wireless Headphones",
    category: "gadgets",
    price: 790,
    originalPrice: 950,
    rating: 4.9,
    reviewsCount: 71,
    isNew: true,
    isBestseller: true,
    isFlashSale: true,
    flashSaleEndTime: "2026-08-16T10:00:00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
    description: "Active Noise Cancellation studio headphones with real 24k gold leaf earcups.",
    colors: ["24k Gold & Black", "Gold & Pearl White"],
    sizes: ["Standard Wireless", "Audiophile Pro Bundle"],
    sizePrices: {
      "Standard Wireless": 790,
      "Audiophile Pro Bundle": 980
    },
    specs: {
      "Battery Life": "40 Hours Playback"
    }
  },
  {
    id: "g-02",
    name: "Luxe Charge Gold Marble Wireless Station",
    category: "gadgets",
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 46,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Carrara marble fast wireless charging dock with brushed gold brass trims.",
    colors: ["Gold Brass & White Marble", "Gold Brass & Black Marble"],
    sizes: ["2-in-1 Dual Dock", "3-in-1 Triple Dock"],
    sizePrices: {
      "2-in-1 Dual Dock": 140,
      "3-in-1 Triple Dock": 180
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
    price: 520,
    originalPrice: 650,
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
      "Medium (H: 42cm)": 420,
      "Large (H: 52cm)": 520,
      "Grand Arc (H: 68cm)": 680
    },
    specs: {
      "Lighting": "Dimmable Warm LED"
    }
  },
  {
    id: "hd-02",
    name: "Artisan Gold Leaf Sculptural Bowl",
    category: "home-decorators",
    price: 340,
    originalPrice: 410,
    rating: 4.8,
    reviewsCount: 33,
    isNew: false,
    isBestseller: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    hoverImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Cast aluminum centerpiece bowl textured with authentic 24k gold leaf finishing.",
    colors: ["Burnished Gold"],
    sizes: ["Medium (30cm)", "Large (38cm)", "Statement Bowl (48cm)"],
    sizePrices: {
      "Medium (30cm)": 270,
      "Large (38cm)": 340,
      "Statement Bowl (48cm)": 450
    },
    specs: {
      "Craft": "Hand-hammered & Gilding"
    }
  }
];
