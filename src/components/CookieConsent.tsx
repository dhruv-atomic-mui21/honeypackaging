import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('hp_cookie_consent');
    if (!consent) {
      // Show after a brief 1s delay so it doesn't block immediate initial render
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hp_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('hp_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside aria-label="Cookie consent banner" className="cookie-banner">
      <div className="container cookie-inner">
        <div className="cookie-text">
          <div className="cookie-icon">
            <ShieldCheck size={20} />
          </div>
          <p>
            We use essential cookies and technical storage to improve your browsing experience and process quote requests. Read our{' '}
            <Link to="/privacy-policy" className="cookie-link">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button type="button" onClick={handleDecline} className="button button-ghost-sm">
            Decline
          </button>
          <button type="button" onClick={handleAccept} className="button button-primary-sm">
            Accept Cookies
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="cookie-close-btn"
            aria-label="Close cookie consent banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
