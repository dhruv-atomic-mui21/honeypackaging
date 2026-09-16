import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, Home, Boxes, Phone, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="page-main not-found-page">
      <SEO
        title="404 — Page Not Found | Honey Packaging"
        description="The requested page could not be found. Explore our industrial packaging machinery, box strapping machines, and customized conveyors."
        path="/404"
      />

      <div className="container not-found-container">
        <div className="not-found-card">
          <div className="not-found-badge">404 ERROR</div>
          <h1>Page Not Found</h1>
          <p className="not-found-lead">
            The page or machine specification you are looking for has moved, been updated, or no longer exists.
          </p>

          <div className="not-found-links-grid">
            <Link to="/" className="not-found-link-card">
              <Home size={22} className="text-gold" />
              <div>
                <h3>Home</h3>
                <p>Return to our main overview</p>
              </div>
              <ArrowRight size={16} />
            </Link>

            <Link to="/products" className="not-found-link-card">
              <Boxes size={22} className="text-blue" />
              <div>
                <h3>All Packaging Machines</h3>
                <p>Browse strapping, wrapping &amp; sealing lines</p>
              </div>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="not-found-cta-group">
            <Link to="/contact" className="button button-primary">
              Request a Custom Quote <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/919909922785" className="button button-ghost">
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <a href="tel:+919909922785" className="button button-ghost">
              <Phone size={16} /> +91 99099 22785
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
