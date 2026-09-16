import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

// Lazy loaded routes for optimal bundle splitting and fast initial page load speed
const Home = lazy(() => import('@/pages/Home'));
const Products = lazy(() => import('@/pages/Products'));
const Solutions = lazy(() => import('@/pages/Solutions'));
const About = lazy(() => import('@/pages/About'));
const Industries = lazy(() => import('@/pages/Industries'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="page-loading-skeleton" aria-label="Loading page content">
      <Loader2 size={32} className="spin text-gold" />
      <span>Loading packaging solutions…</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Custom 404 handler */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <CookieConsent />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        className="floating-whatsapp"
        href="https://wa.me/919909922785?text=Hello%20Honey%20Packaging,%20I%20would%20like%20to%20inquire%20about%20packaging%20machinery."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Honey Packaging engineer on WhatsApp"
      >
        <MessageCircle size={22} />
        <span>Chat with Us</span>
      </a>
    </div>
  );
}
