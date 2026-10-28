import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About Us' },
  { to: '/industries', label: 'Industries' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);

  const handleNavClick = (e: React.MouseEvent, to: string) => {
    close();
    if (to.includes('#')) {
      const [, hash] = to.split('#');
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          const navOffset = 76;
          const targetY = el.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
          window.history.replaceState(null, '', `#${hash}`);
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Precision Industrial Topbar */}
      <div className="topbar-industrial">
        <div className="container topbar-inner">
          <div className="topbar-left-tag">
            <span className="live-status-pulse small-pulse" />
            <span className="topbar-tagline">
              All Types of Customize Packaging Solutions · Ahmedabad, Gujarat
            </span>
          </div>
          <div className="topbar-links">
            <a href="mailto:honeypackaging2007@gmail.com" className="topbar-link-item" aria-label="Email primary address">
              <Mail size={12} className="text-gold" />
              <span>honeypackaging2007@gmail.com</span>
            </a>
            <a href="tel:+919909922785" className="topbar-link-item" aria-label="Call phone number">
              <Phone size={12} className="text-gold" />
              <span>+91 99099 22785</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar-industrial ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-inner">
          {/* Brand Logo & Name */}
          <Link className="brand-industrial" to="/" onClick={close} aria-label="Honey Packaging Home">
            <div className="brand-logo-frame">
              <img
                src="/images/logo/honey-packaging-logo.webp"
                alt="Honey Packaging Logo"
                className="brand-logo-img"
                width="42"
                height="42"
                loading="eager"
              />
            </div>
            <div className="brand-text-block">
              <strong className="brand-name">HONEY PACKAGING</strong>
              <small className="brand-sub">ALL TYPES OF CUSTOMIZE PACKAGING SOLUTIONS</small>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav-menu" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={(e) => handleNavClick(e, to)}
                className={({ isActive }) =>
                  `nav-item-link ${isActive && to === '/' ? 'nav-item-active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="nav-action-desktop">
            <Link to="/contact" className="button button-gold nav-quote-btn">
              <span>Get Quote</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            className="menu-toggle-btn"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close main navigation menu' : 'Open main navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${open ? 'drawer-open' : ''}`}>
          <div className="mobile-nav-inner">
            <div className="mobile-nav-links">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={(e) => handleNavClick(e, to)}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive && to === '/' ? 'mobile-active' : ''}`
                  }
                >
                  <span>{label}</span>
                  <ArrowRight size={15} className="mobile-chevron" />
                </NavLink>
              ))}
            </div>

            <div className="mobile-drawer-bottom">
              <Link to="/contact" onClick={close} className="button button-gold full-width">
                <span>Request Custom Quote</span>
                <ArrowRight size={16} />
              </Link>
              <div className="mobile-contact-chips">
                <a href="tel:+919909922785" className="mobile-chip">
                  <Phone size={14} className="text-gold" />
                  <span>+91 99099 22785</span>
                </a>
                <a href="https://wa.me/919909922785" target="_blank" rel="noopener noreferrer" className="mobile-chip">
                  <MessageCircle size={14} className="text-emerald" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
