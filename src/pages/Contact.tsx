import SEO from '@/components/SEO';
import { Mail, MapPin, MessageCircle, Phone, Clock, ShieldCheck, Activity, Award } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function Contact() {
  return (
    <main className="page-main industrial-contact-page">
      <SEO
        title="Contact & Request Quote | Packaging Machinery Ahmedabad | Honey Packaging"
        description="Contact Honey Packaging in Kathwada, Ahmedabad & Himatnagar, Gujarat. Get custom quotes for strapping machines, pallet wrappers, carton sealers & conveyors. Call +91 99099 22785."
        path="/contact"
      />

      {/* Hero Section */}
      <section className="page-hero-industrial">
        <div className="container page-hero-inner">
          <div className="hero-telemetry-tag">
            <span className="live-status-pulse" />
            <span className="telemetry-text">DIRECT ENGINEERING DESK // 24-HOUR RFQ RESPONSE</span>
          </div>

          <h1 className="page-title-industrial">
            Tell Us What<br />
            <span className="text-gold-gradient">You&apos;re Packing.</span>
          </h1>

          <p className="page-lead-industrial">
            We will help you evaluate the right machine for your carton size, daily output, and plant layout — without aggressive sales tactics or generic price sheets.
          </p>
        </div>
      </section>

      {/* Main Contact & RFQ Grid */}
      <section className="section industrial-contact-section">
        <div className="container contact-grid-layout">
          {/* Left: Industrial Contact Dossier */}
          <div className="contact-dossier-column">
            <span className="tech-mono-badge">OFFICIAL COMMUNICATIONS</span>
            <h2 className="dossier-title">
              Get in<br />
              <span className="text-gold-gradient">Direct Touch.</span>
            </h2>
            <p className="dossier-intro">
              Reach our engineering desk by phone, email, or WhatsApp. We reply within one business day with technical suggestions and formal quotes.
            </p>

            <div className="contact-cards-stack">
              {/* Direct Hotline */}
              <div className="contact-telemetry-card">
                <span className="card-micro-label">DIRECT ENGINEERING CALL</span>
                <a href="tel:+919909922785" className="contact-telemetry-main" aria-label="Call Jasapal Puvar at +91 99099 22785">
                  <Phone size={20} className="text-gold" />
                  <span>+91 99099 22785</span>
                </a>
                <span className="card-sub-note">Jasapal Puvar — Technical Director</span>
              </div>

              {/* Instant WhatsApp */}
              <div className="contact-telemetry-card">
                <span className="card-micro-label">INSTANT WHATSAPP CHANNEL</span>
                <a
                  href="https://wa.me/919909922785"
                  className="contact-whatsapp-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp (+91 99099 22785)</span>
                </a>
              </div>

              {/* Inboxes */}
              <div className="contact-telemetry-card">
                <span className="card-micro-label">OFFICIAL INBOXES</span>
                <div className="inbox-links-col">
                  <a href="mailto:honeypackaging2007@gmail.com" className="inbox-link-item">
                    <Mail size={15} className="text-gold" />
                    <span>honeypackaging2007@gmail.com</span>
                  </a>
                  <a href="mailto:honeypackaging1978@gmail.com" className="inbox-link-item">
                    <Mail size={15} className="text-gold" />
                    <span>honeypackaging1978@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="contact-telemetry-card">
                <span className="card-micro-label">OPERATING HOURS</span>
                <div className="hours-row">
                  <Clock size={15} className="text-gold" />
                  <span>Monday – Saturday: 9:00 AM – 7:30 PM IST</span>
                </div>
              </div>

              {/* Kathwada Works */}
              <div className="contact-telemetry-card">
                <span className="card-micro-label">FACTORY &amp; ENGINEERING WORKS</span>
                <div className="address-block">
                  <MapPin size={16} className="text-gold address-pin" />
                  <p>
                    A/106, Shrinath Industrial Estate Park,
                    <br />
                    Nr. Hingalag mata Mandir, Opp. Sharnam Estate,
                    <br />
                    Kathwada, Ahmedabad – 382430, Gujarat
                  </p>
                </div>
              </div>

              {/* Head Office */}
              <div className="contact-telemetry-card">
                <span className="card-micro-label">HEAD OFFICE</span>
                <div className="address-block">
                  <MapPin size={16} className="text-gold address-pin" />
                  <p>
                    93, Maruti Avenue, Opp. Sabar Dairy,
                    <br />
                    Himatnagar, Sabarkantha – 383001, Gujarat
                  </p>
                </div>
              </div>

              {/* Statutory Compliance */}
              <div className="contact-compliance-bar">
                <Award size={16} className="text-gold" />
                <span className="gst-val">GSTIN: 24BIVPP5437N1ZD</span>
              </div>
            </div>
          </div>

          {/* Right: Modernized RFQ Quote Form Card */}
          <div className="contact-form-column">
            <div className="rfq-card-container">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
