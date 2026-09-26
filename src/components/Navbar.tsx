import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/about', label: 'About Us' },
  { to: '/industries', label: 'Industries' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-tagline">
            All Type Customize Packaging Solutions · Ahmedabad, Gujarat
          </span>
          <div className="topbar-links">
            <a href="mailto:honeypackaging2007@gmail.com" aria-label="Email primary address">
              <Mail size={13} /> honeypackaging2007@gmail.com
            </a>
            <a href="tel:+919909922785" aria-label="Call phone number">
              <Phone size={13} /> +91 99099 22785
            </a>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <Link className="brand" to="/" onClick={close} aria-label="Honey Packaging Home">
            <img
              src="/images/logo/honey-packaging-logo.webp"
              alt="Honey Packaging Logo"
              className="brand-logo-img"
              width="44"
              height="44"
              loading="eager"
            />
            <span className="brand-text-wrap">
              <strong>HONEY PACKAGING</strong>
              <small>CUSTOMIZE PACKAGING SOLUTIONS</small>
            </span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close main navigation menu' : 'Open main navigation menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={close}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                {label}
              </NavLink>
            ))}

            <div className="mobile-contact-links">
              <a href="tel:+919909922785" className="mobile-contact-link">
                <Phone size={15} /> +91 99099 22785
              </a>
              <a href="mailto:honeypackaging2007@gmail.com" className="mobile-contact-link">
                <Mail size={15} /> honeypackaging2007@gmail.com
              </a>
            </div>

            <Link className="nav-cta" to="/contact" onClick={close}>
              <span>Get a Quote</span>
              <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
