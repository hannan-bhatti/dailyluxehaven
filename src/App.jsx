import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CategoryGrid from './components/CategoryGrid';
import FlashSale from './components/FlashSale';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import FaqTermsModal from './components/FaqTermsModal';
import SizeGuideModal from './components/SizeGuideModal';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeHubId, setActiveHubId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState({ code: 'PKR', symbol: 'Rs. ', rate: 280 });
  
  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState(null);

  // FAQs & Size Guide Modals
  const [faqTermsOpen, setFaqTermsOpen] = useState(false);
  const [faqTermsTab, setFaqTermsTab] = useState('faq');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [sizeGuideCategory, setSizeGuideCategory] = useState('abayas');

  // Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenFaqTerms = (tab = 'faq') => {
    setFaqTermsTab(tab);
    setFaqTermsOpen(true);
  };

  const handleOpenSizeGuide = (cat = 'abayas') => {
    if (cat === 'Watches' || cat === 'watches') setSizeGuideCategory('watches');
    else if (cat === 'Jewellery' || cat === 'jewellery') setSizeGuideCategory('jewellery');
    else if (cat === 'Purses' || cat === 'purses') setSizeGuideCategory('purses');
    else if (cat === 'Clothes' || cat === 'clothes') setSizeGuideCategory('clothes');
    else setSizeGuideCategory('abayas');
    
    setSizeGuideOpen(true);
  };

  // Add to Cart
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize);
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    showToast(`✨ Added "${product.name}" to your shopping cart!`);
  };

  // Update Quantity
  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQty } : item));
  };

  // Remove item from cart
  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Wishlist toggle
  const handleToggleWishlist = (product) => {
    setWishlistIds(prev => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.name}" from your wishlist.`);
        return prev.filter(id => id !== product.id);
      } else {
        showToast(`💖 Saved "${product.name}" to your wishlist!`);
        return [...prev, product.id];
      }
    });
  };

  // Direct Buy Now
  const handleDirectBuy = (product) => {
    handleAddToCart(product);
    setQuickViewProduct(null);
    setCartOpen(true);
  };

  // Category select handler
  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hub select handler
  const handleSelectHub = (hubId) => {
    setActiveHubId(hubId);
    setActiveCategory('all');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Proceed checkout
  const handleProceedCheckout = (data) => {
    setCheckoutData(data);
    setCheckoutOpen(true);
  };

  // Order Complete
  const handleOrderComplete = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141417]">
      
      {/* Header */}
      <Header
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        activeHubId={activeHubId}
        onSelectHub={handleSelectHub}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        onQuickView={setQuickViewProduct}
      />

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Hero Slider */}
        <HeroSlider onSelectCategory={handleSelectCategory} />

        {/* 12 Categories Grid */}
        <CategoryGrid
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Deals of the Day Flash Sale */}
        <FlashSale
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
          currency={currency}
        />

        {/* Filterable & Searchable Product Catalog */}
        <ProductCatalog
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          currency={currency}
        />

        {/* Patron Testimonials */}
        <Testimonials />

      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onShowToast={showToast}
        onOpenFaqTerms={handleOpenFaqTerms}
        onOpenSizeGuide={handleOpenSizeGuide}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        currency={currency}
        onDirectBuy={handleDirectBuy}
        onOpenSizeGuide={handleOpenSizeGuide}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={handleProceedCheckout}
        currency={currency}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        checkoutData={checkoutData}
        onOrderComplete={handleOrderComplete}
        currency={currency}
      />

      {/* FAQs, Terms & Privacy Policy Modal */}
      <FaqTermsModal
        isOpen={faqTermsOpen}
        onClose={() => setFaqTermsOpen(false)}
        initialTab={faqTermsTab}
      />

      {/* Size & Fitting Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        initialCategory={sizeGuideCategory}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}
