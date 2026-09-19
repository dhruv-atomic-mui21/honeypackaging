import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Phone, MapPin, ShieldCheck, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Honey Packaging Home">
            <img
              src="/images/logo/honey-packaging-logo.webp"
              alt="Honey Packaging Registered Logo"
              className="brand-logo-img"
              width="44"
              height="44"
              loading="lazy"
            />
            <span className="brand-text-wrap">
              <strong className="text-white">HONEY PACKAGING</strong>
              <small className="text-gold">CUSTOMIZE PACKAGING SOLUTIONS</small>
            </span>
          </Link>
          <p className="footer-desc">
            All Type Customize Packaging Solutions for Indian manufacturing industries. Est. 2007 in Ahmedabad, Gujarat.
          </p>
          <div className="social-row">
            <a
              href="https://wa.me/919909922785"
              aria-label="Contact us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="mailto:honeypackaging2007@gmail.com"
              aria-label="Send email to honeypackaging2007@gmail.com"
              className="social-icon"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+919909922785"
              aria-label="Call Honey Packaging at +91 99099 22785"
              className="social-icon"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <span className="footer-col-title">Navigation</span>
          <Link to="/">Home</Link>
          <Link to="/products">Packaging Machines</Link>
          <Link to="/solutions">Packing Solutions</Link>
          <Link to="/about">About Us &amp; Founder</Link>
          <Link to="/industries">Industries Served</Link>
          <Link to="/gallery">Plant &amp; Media Gallery</Link>
          <Link to="/contact">Get a Quote</Link>
        </div>

        <div className="footer-column wide">
          <span className="footer-col-title">Factory &amp; Head Office</span>
          <p>
            <b><MapPin size={13} className="inline-icon" /> Factory &amp; Workshop:</b>
            <br />
            A/106, Shrinath Ind. Estate Park,
            <br />
            Nr. Hingalag mata Mandir, Opp. Sharnam Estate,
            <br />
            Kathwada, Ahmedabad – 382430, Gujarat
          </p>
          <p className="mt-2">
            <b><MapPin size={13} className="inline-icon" /> Head Office:</b>
            <br />
            93, Maruti Avenue, Opp. Sabar Dairy,
            <br />
            Himatnagar, Sabarkantha – 383001, Gujarat
          </p>
        </div>

        <div className="footer-column">
          <span className="footer-col-title">Legal &amp; Compliance</span>
          <div className="gst-block">
            <span className="gst-label">GSTIN / TAX ID</span>
            <span className="gst-number">24BIVPP5437N1ZD</span>
            <span className="gst-state">Registered in Gujarat, India</span>
          </div>

          <div className="mii-footer-badge">
            <img
              src="/images/badges/make-in-india.webp"
              alt="Make in India Official Certified Logo"
              className="mii-footer-logo"
              width="68"
              height="30"
              loading="lazy"
            />
            <span>Make in <b>India</b> Certified</span>
          </div>

          <div className="footer-contact-extra">
            <a href="mailto:honeypackaging2007@gmail.com" aria-label="Primary email">
              <Mail size={12} /> honeypackaging2007@gmail.com
            </a>
            <a href="mailto:honeypackaging1978@gmail.com" aria-label="Secondary email">
              <Mail size={12} /> honeypackaging1978@gmail.com
            </a>
          </div>

          <div className="footer-policy-links">
            <Link to="/privacy-policy" className="footer-policy-link">
              <ShieldCheck size={12} /> Privacy Policy
            </Link>
            <Link to="/terms" className="footer-policy-link">
              <FileText size={12} /> Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Honey Packaging. All rights reserved. Maintained by{' '}
          <a
            href="https://www.satyaneev.me"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', textDecoration: 'none' }}
          >
            satyaneev
          </a>
        </span>
        <span className="footer-gst">GSTIN: 24BIVPP5437N1ZD</span>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy</Link>
          <span>·</span>
          <Link to="/terms">Terms</Link>
          <span>·</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
