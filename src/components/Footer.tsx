import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, ShieldCheck, FileText, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-industrial" id="contact">
      <div className="container footer-industrial-main">
        {/* Brand & Mission Column */}
        <div className="footer-brand-column">
          <Link className="brand-industrial" to="/" aria-label="Honey Packaging Home">
            <div className="brand-logo-frame">
              <img
                src="/images/logo/honey-packaging-logo.webp"
                alt="Honey Packaging Registered Logo"
                className="brand-logo-img"
                width="42"
                height="42"
                loading="lazy"
              />
            </div>
            <div className="brand-text-block">
              <strong className="brand-name">HONEY PACKAGING</strong>
              <small className="brand-sub">ALL TYPES OF CUSTOMIZE PACKAGING SOLUTIONS</small>
            </div>
          </Link>
          <p className="footer-industrial-desc">
            All Types of Customize Packaging Solutions for Indian manufacturing industries. Built tough for rigorous factory shifts. Est. 2007 in Kathwada, Ahmedabad, Gujarat.
          </p>

          <div className="footer-quick-contacts">
            <a
              href="https://wa.me/919909922785"
              aria-label="Contact us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
            >
              <MessageCircle size={16} className="text-emerald" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:honeypackaging2007@gmail.com"
              aria-label="Send email to honeypackaging2007@gmail.com"
              className="footer-social-pill"
            >
              <Mail size={16} className="text-gold" />
              <span>Email</span>
            </a>
            <a
              href="tel:+919909922785"
              aria-label="Call Honey Packaging at +91 99099 22785"
              className="footer-social-pill"
            >
              <Phone size={16} className="text-gold" />
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-links-column">
          <span className="footer-column-heading">Navigation</span>
          <div className="footer-nav-list">
            <Link to="/">Home</Link>
            <Link to="/#products">Packaging Machines</Link>
            <Link to="/solutions">Packing Solutions</Link>
            <Link to="/about">About Us &amp; Founder</Link>
            <Link to="/industries">Industries Served</Link>
            <Link to="/gallery">Plant &amp; Media Gallery</Link>
            <Link to="/contact">Get a Custom Quote</Link>
          </div>
        </div>

        {/* Facilities Column */}
        <div className="footer-facilities-column">
          <span className="footer-column-heading">Factory &amp; Head Office</span>
          <div className="footer-facility-block">
            <div className="facility-title-row">
              <MapPin size={13} className="text-gold" />
              <strong>Factory &amp; Workshop:</strong>
            </div>
            <p className="facility-addr-text">
              A/106, Shrinath Ind. Estate Park,
              <br />
              Nr. Hingalag mata Mandir, Opp. Sharnam Estate,
              <br />
              Kathwada, Ahmedabad – 382430, Gujarat
            </p>
          </div>

          <div className="footer-facility-block mt-3">
            <div className="facility-title-row">
              <MapPin size={13} className="text-gold" />
              <strong>Head Office:</strong>
            </div>
            <p className="facility-addr-text">
              93, Maruti Avenue, Opp. Sabar Dairy,
              <br />
              Himatnagar, Sabarkantha – 383001, Gujarat
            </p>
          </div>
        </div>

        {/* Legal & Compliance Column */}
        <div className="footer-compliance-column">
          <span className="footer-column-heading">Statutory &amp; Quality</span>
          <div className="gst-compliance-box">
            <span className="gst-label">GSTIN / TAX ID</span>
            <strong className="gst-number">24BIVPP5437N1ZD</strong>
            <span className="gst-jurisdiction">Registered in Gujarat, India</span>
          </div>

          <div className="mii-footer-card">
            <img
              src="/images/badges/make-in-india.webp"
              alt="Make in India Official Certified Logo"
              className="mii-footer-logo-img"
              width="76"
              height="34"
              loading="lazy"
            />
            <div className="mii-footer-text">
              <strong>Make in India</strong>
              <small>Certified Indigenous Engineering</small>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p className="copyright-notice">
            &copy; {new Date().getFullYear()} Honey Packaging. All rights reserved. Maintained by{' '}
            <a
              href="https://www.satyaneev.me"
              target="_blank"
              rel="noopener noreferrer"
              className="maintained-by-link"
            >
              satyaneev
            </a>
          </p>
          <div className="legal-links-row">
            <Link to="/privacy-policy" className="legal-link">
              <ShieldCheck size={13} /> Privacy Policy
            </Link>
            <span className="sep-dot">·</span>
            <Link to="/terms" className="legal-link">
              <FileText size={13} /> Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
