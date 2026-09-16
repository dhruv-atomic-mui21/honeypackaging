import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, MapPin, Phone, Mail, BadgeCheck, ShieldCheck, Award } from 'lucide-react';

const milestones = [
  {
    year: '2007',
    text: 'Honey Packaging founded in Ahmedabad by Jasapal Puvar with a dedication to robust semi-automatic strapping and carton sealing machines for Gujarat manufacturers.',
  },
  {
    year: '2011',
    text: 'Expanded production to heavy-duty turntable pallet stretch wrapping machines and shrink packaging tunnels for high-speed FMCG dispatch.',
  },
  {
    year: '2016',
    text: 'Established head office and customer technical consultation center in Himatnagar to provide rapid engineering response to Sabarkantha and North Gujarat plants.',
  },
  {
    year: '2020',
    text: 'Launched customized conveyor fabrication division — engineering custom motorized belt conveyors and gravity roller lines adapted to client factory floor layouts.',
  },
  {
    year: '2026',
    text: 'Over 500+ active industrial machinery installations across Gujarat and western India. GST registered with certified Make in India supply credentials.',
  },
];

const values = [
  {
    title: 'Right-Fit Over Upsell',
    text: 'We assess your carton weights, speed requirements, and budget first — recommending the machine that truly delivers the highest ROI.',
  },
  {
    title: 'Dual Gujarat Presence',
    text: 'Our Kathwada, Ahmedabad factory and Himatnagar head office ensure that service engineers and genuine spares reach your floor without delay.',
  },
  {
    title: 'Custom Fabrication',
    text: 'Every conveyor system, in-line strapping arch, and random carton sealer is measured and tailored to your production rhythm.',
  },
  {
    title: 'Long-Term Partnership',
    text: 'We stand behind our equipment with 12-month warranties, operator hands-on training, regular preventative checks, and lifetime technical guidance.',
  },
];

export default function About() {
  return (
    <main className="page-main">
      <SEO
        title="About Us &amp; Founder Jasapal Puvar | Honey Packaging Ahmedabad"
        description="Learn about Honey Packaging, founded in 2007 by Jasapal Puvar. Discover our 17-year history manufacturing packaging machines, conveyors, and strapping lines in Gujarat."
        path="/about"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Est. 2007 · Kathwada, Ahmedabad</span>
          <h1 className="page-title">
            Built on the factory<br />
            <em>floor, not a catalogue.</em>
          </h1>
          <p className="page-lead">
            Honey Packaging started with one commitment: deliver rugged, dependable packaging machines to Indian manufacturers — and back every installation with local on-site service.
          </p>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="section">
        <div className="container founder-grid">
          <div className="founder-art">
            <div className="founder-photo-wrapper">
              <img
                src="/images/team/jasapal-puvar.webp"
                alt="Jasapal Puvar, Founder and Managing Director of Honey Packaging"
                width="340"
                height="340"
                className="founder-photo"
                loading="eager"
              />
              <div className="founder-badge">
                <BadgeCheck size={18} />
                <span>Founder &amp; Managing Director</span>
              </div>
            </div>
            <div className="founder-credentials">
              <div className="founder-stat">
                <strong>17+</strong>
                <span>Years Experience</span>
              </div>
              <div className="founder-stat">
                <strong>500+</strong>
                <span>Installations</span>
              </div>
            </div>
          </div>

          <div className="founder-copy">
            <span className="section-kicker">Leadership &amp; Engineering</span>
            <h2>Jasapal Puvar</h2>
            <p className="lead-p">
              &quot;Packaging is the final promise you make to your customer. If the carton fails in transit, your brand takes the hit. We build machines so that never happens.&quot;
            </p>
            <p>
              With over seventeen years on the factory floors of Gujarat, Jasapal Puvar built Honey Packaging from the ground up in Kathwada, Ahmedabad. Rather than selling generic catalogue items, his approach has always been hands-on: visit the customer&apos;s packing department, understand the carton weights and pallet stability demands, and supply equipment that works reliably 365 days a year.
            </p>
            <p>
              Today, that floor-first philosophy governs everything we do — from how we fabricate customized conveyor runs to our rapid on-site commissioning and after-sales support.
            </p>

            <div className="founder-contact">
              <a href="tel:+919909922785" className="founder-contact-link">
                <Phone size={15} /> +91 99099 22785
              </a>
              <a href="mailto:honeypackaging2007@gmail.com" className="founder-contact-link">
                <Mail size={15} /> honeypackaging2007@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 17 Year Timeline */}
      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker light">Our Journey</span>
            <h2>
              17 Years of Growth.<br />
              <em>Still on the Factory Floor.</em>
            </h2>
          </div>
          <div className="timeline">
            {milestones.map(({ year, text }) => (
              <div className="timeline-item" key={year}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-line" aria-hidden="true" />
                <div className="timeline-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Operational Values</span>
            <h2>
              Four Principles.<br />
              <em>One Lasting Standard.</em>
            </h2>
          </div>
          <div className="values-grid">
            {values.map(({ title, text }, i) => (
              <div className="value-card" key={title}>
                <span className="value-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Locations & Compliance */}
      <section className="section dark-section">
        <div className="container locations-grid">
          <div>
            <span className="section-kicker light">Dual Gujarat Facilities</span>
            <h2>
              Two Bases.<br />
              <em>One Unified Team.</em>
            </h2>
            <p className="locations-intro-p">
              Strategically situated in Ahmedabad&apos;s Kathwada industrial hub and Himatnagar&apos;s Sabar Dairy corridor for swift logistical deployment.
            </p>
            <div className="compliance-badges">
              <div className="compliance-tag">
                <Award size={16} className="text-gold" />
                <span>GST Registered: 24BIVPP5437N1ZD</span>
              </div>
              <div className="compliance-tag">
                <ShieldCheck size={16} className="text-gold" />
                <span>Make in India Supplier</span>
              </div>
            </div>
          </div>

          <div className="location-cards">
            <div className="location-card">
              <MapPin size={20} className="text-gold" />
              <h3>Factory &amp; Engineering Workshop</h3>
              <p>
                A/106, Shrinath Industrial Estate Park,
                <br />
                Nr. Hingalag mata Mandir, Opp. Sharnam Estate,
                <br />
                Kathwada, Ahmedabad – 382430, Gujarat
              </p>
              <a href="https://maps.google.com/?q=Kathwada+Ahmedabad" target="_blank" rel="noopener noreferrer" className="location-link">
                View on Google Maps <ArrowRight size={13} />
              </a>
            </div>

            <div className="location-card">
              <MapPin size={20} className="text-gold" />
              <h3>Head Office &amp; Consultation Desk</h3>
              <p>
                93, Maruti Avenue,
                <br />
                Opp. Sabar Dairy,
                <br />
                Himatnagar, Sabarkantha – 383001, Gujarat
              </p>
              <a href="https://maps.google.com/?q=Himatnagar+Sabarkantha" target="_blank" rel="noopener noreferrer" className="location-link">
                View on Google Maps <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="page-cta-strip">
        <div className="container page-cta-inner">
          <div>
            <h3>Visit our factory or discuss your requirement with Jasapal Puvar</h3>
            <p>Schedule a workshop visit in Kathwada or invite our engineering team to your plant.</p>
          </div>
          <div className="cta-button-group">
            <Link to="/contact" className="button button-primary">
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <a href="tel:+919909922785" className="button button-dark">
              <Phone size={15} /> Direct Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
