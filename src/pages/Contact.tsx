import SEO from '@/components/SEO';
import { Mail, MapPin, MessageCircle, Phone, Clock, ShieldCheck } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function Contact() {
  return (
    <main className="page-main">
      <SEO
        title="Contact &amp; Request Quote | Packaging Machinery Ahmedabad | Honey Packaging"
        description="Contact Honey Packaging in Kathwada, Ahmedabad &amp; Himatnagar, Gujarat. Get custom quotes for strapping machines, pallet wrappers, carton sealers &amp; conveyors. Call +91 99099 22785."
        path="/contact"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Direct Technical Consultation</span>
          <h1 className="page-title">
            Tell Us What<br />
            <em>You&apos;re Packing.</em>
          </h1>
          <p className="page-lead">
            We will help you evaluate the right machine for your carton size, daily output, and plant layout — without aggressive sales tactics or generic price sheets.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h2>
              Get in<br />
              <em>Touch.</em>
            </h2>
            <p className="contact-intro">
              Reach our engineering desk by phone, email, or WhatsApp. We reply within one business day with technical suggestions and formal quotes.
            </p>

            <div className="contact-block">
              <span className="contact-block-label">Direct Engineering Call</span>
              <a href="tel:+919909922785" className="contact-link-lg" aria-label="Call Jasapal Puvar at +91 99099 22785">
                <Phone size={20} className="text-gold" /> +91 99099 22785
              </a>
              <span className="contact-sub-label">Jasapal Puvar — Technical Director</span>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Official Inboxes</span>
              <a href="mailto:honeypackaging2007@gmail.com" className="contact-link">
                <Mail size={15} /> honeypackaging2007@gmail.com
              </a>
              <a href="mailto:honeypackaging1978@gmail.com" className="contact-link">
                <Mail size={15} /> honeypackaging1978@gmail.com
              </a>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Instant WhatsApp Chat</span>
              <a
                href="https://wa.me/919909922785"
                className="contact-link whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> Chat on WhatsApp (+91 99099 22785)
              </a>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Operating Hours</span>
              <p className="contact-schedule">
                <Clock size={14} className="text-gold" />
                Monday – Saturday: 9:00 AM – 7:30 PM IST
              </p>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Factory &amp; Engineering Works</span>
              <p className="contact-address">
                <MapPin size={15} className="address-pin-icon" />
                <span>
                  A/106, Shrinath Industrial Estate Park,
                  <br />
                  Nr. Hingalag mata Mandir, Opp. Sharnam Estate,
                  <br />
                  Kathwada, Ahmedabad – 382430, Gujarat
                </span>
              </p>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Head Office</span>
              <p className="contact-address">
                <MapPin size={15} className="address-pin-icon" />
                <span>
                  93, Maruti Avenue, Opp. Sabar Dairy,
                  <br />
                  Himatnagar, Sabarkantha – 383001, Gujarat
                </span>
              </p>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Statutory Compliance</span>
              <div className="contact-compliance-row">
                <ShieldCheck size={16} className="text-gold" />
                <span className="contact-gst">GSTIN: 24BIVPP5437N1ZD</span>
              </div>
            </div>
          </div>

          {/* Right: Quote Form Card */}
          <div className="quote-form-card">
            <QuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
