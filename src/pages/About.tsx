import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, MapPin, Phone, Mail, BadgeCheck, ShieldCheck, Award, Calendar, CheckCircle2 } from 'lucide-react';

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
    <main className="page-main industrial-about-page">
      <SEO
        title="About Us & Founder Jasapal Puvar | Honey Packaging Ahmedabad"
        description="Learn about Honey Packaging, founded in 2007 by Jasapal Puvar. Discover our 17-year history manufacturing packaging machines, conveyors, and strapping lines in Gujarat."
        path="/about"
      />

      {/* Hero Section */}
      <section className="page-hero-industrial">
        <div className="container page-hero-inner">
          <div className="hero-telemetry-tag">
            <span className="live-status-pulse" />
            <span className="telemetry-text">EST. 2007 · KATHWADA, AHMEDABAD · FOUNDER PROFILE</span>
          </div>

          <h1 className="page-title-industrial">
            Built on the Factory<br />
            <span className="text-gold-gradient">Floor, Not a Catalogue.</span>
          </h1>

          <p className="page-lead-industrial">
            Honey Packaging started with one commitment: deliver rugged, dependable packaging machines to Indian manufacturers — and back every installation with prompt on-site engineering support.
          </p>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="section industrial-founder-section">
        <div className="container founder-grid-layout">
          <div className="founder-visual-card">
            <div className="founder-viewfinder-frame">
              <div className="frame-corner corner-tl">+</div>
              <div className="frame-corner corner-tr">+</div>
              <div className="frame-corner corner-bl">+</div>
              <div className="frame-corner corner-br">+</div>

              <img
                src="/images/team/jasapal-puvar.webp"
                alt="Jasapal Puvar, Founder and Managing Director of Honey Packaging"
                width="340"
                height="340"
                className="founder-portrait-photo"
                loading="eager"
              />

              <div className="founder-role-badge">
                <BadgeCheck size={18} className="text-gold" />
                <span>Founder &amp; Managing Director</span>
              </div>
            </div>

            <div className="founder-stats-strip">
              <div className="founder-stat-node">
                <strong className="stat-number">17+</strong>
                <span className="stat-label">Years Floor Experience</span>
              </div>
              <div className="founder-stat-node">
                <strong className="stat-number">500+</strong>
                <span className="stat-label">Machinery Deployments</span>
              </div>
            </div>
          </div>

          <div className="founder-bio-card">
            <span className="tech-mono-badge">LEADERSHIP &amp; ENGINEERING</span>
            <h2 className="founder-name-heading">Jasapal Puvar</h2>
            
            <blockquote className="founder-quote">
              &quot;Packaging is the final promise you make to your customer. If the carton fails in transit, your brand takes the hit. We build machines so that never happens.&quot;
            </blockquote>

            <p className="bio-paragraph">
              With over seventeen years on the factory floors of Gujarat, Jasapal Puvar built Honey Packaging from the ground up in Kathwada, Ahmedabad. Rather than selling generic catalogue items, his approach has always been hands-on: visit the customer&apos;s packing department, understand the carton weights and pallet stability demands, and supply equipment that works reliably 365 days a year.
            </p>

            <p className="bio-paragraph">
              Today, that floor-first philosophy governs everything we do — from how we fabricate customized conveyor runs to our rapid on-site commissioning and after-sales support.
            </p>

            <div className="founder-contact-bar">
              <a href="tel:+919909922785" className="founder-direct-btn">
                <Phone size={15} className="text-gold" />
                <span>+91 99099 22785</span>
              </a>
              <a href="mailto:honeypackaging2007@gmail.com" className="founder-direct-btn">
                <Mail size={15} className="text-gold" />
                <span>honeypackaging2007@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 17 Year Engineering Timeline */}
      <section className="section industrial-timeline-section">
        <div className="container">
          <div className="section-heading-industrial">
            <span className="tech-mono-badge">17 YEARS OF INDUSTRIAL CRAFT</span>
            <h2 className="section-title-large">
              Milestones of Growth.<br />
              <span className="text-gold-gradient">Still on the Factory Floor.</span>
            </h2>
          </div>

          <div className="industrial-timeline-track">
            {milestones.map(({ year, text }, idx) => (
              <div className="timeline-card-node" key={year}>
                <div className="timeline-node-header">
                  <div className="timeline-year-pill">
                    <Calendar size={13} className="text-gold" />
                    <span>{year}</span>
                  </div>
                  <span className="timeline-seq-tag">STAGE 0{idx + 1}</span>
                </div>
                <p className="timeline-node-desc">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Principles */}
      <section className="section industrial-values-section">
        <div className="container">
          <div className="section-heading-industrial">
            <span className="tech-mono-badge">FOUNDATIONAL PRINCIPLES</span>
            <h2 className="section-title-large">
              Four Principles.<br />
              <span className="text-gold-gradient">One Lasting Standard.</span>
            </h2>
          </div>

          <div className="values-industrial-grid">
            {values.map(({ title, text }, i) => (
              <div className="value-industrial-card" key={title}>
                <div className="val-card-head">
                  <span className="val-index-code">RULE 0{i + 1}</span>
                  <CheckCircle2 size={16} className="text-gold" />
                </div>
                <h3 className="val-title">{title}</h3>
                <p className="val-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Locations & Compliance */}
      <section className="section industrial-locations-section">
        <div className="container locations-grid-layout">
          <div className="locations-info-col">
            <span className="tech-mono-badge">DUAL GUJARAT HUBS</span>
            <h2 className="section-title-large">
              Two Facilities.<br />
              <span className="text-gold-gradient">One Unified Team.</span>
            </h2>
            <p className="locations-narrative">
              Strategically situated in Ahmedabad&apos;s Kathwada industrial hub and Himatnagar&apos;s Sabar Dairy corridor for swift logistical deployment.
            </p>

            <div className="compliance-chips-row">
              <div className="compliance-chip-node">
                <Award size={16} className="text-gold" />
                <span>GST Registered: 24BIVPP5437N1ZD</span>
              </div>
              <div className="compliance-chip-node">
                <ShieldCheck size={16} className="text-gold" />
                <span>Make in India Certified Supplier</span>
              </div>
            </div>
          </div>

          <div className="location-cards-col">
            <div className="industrial-facility-card">
              <div className="facility-head">
                <MapPin size={20} className="text-gold" />
                <h3>Factory &amp; Engineering Workshop</h3>
              </div>
              <p className="facility-address">
                A/106, Shrinath Industrial Estate Park,
                <br />
                Nr. Hingalag mata Mandir, Opp. Sharnam Estate,
                <br />
                Kathwada, Ahmedabad – 382430, Gujarat
              </p>
              <a
                href="https://maps.google.com/?q=Kathwada+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="facility-map-link"
              >
                <span>View on Google Maps</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="industrial-facility-card">
              <div className="facility-head">
                <MapPin size={20} className="text-gold" />
                <h3>Head Office &amp; Consultation Desk</h3>
              </div>
              <p className="facility-address">
                93, Maruti Avenue,
                <br />
                Opp. Sabar Dairy,
                <br />
                Himatnagar, Sabarkantha – 383001, Gujarat
              </p>
              <a
                href="https://maps.google.com/?q=Himatnagar+Sabarkantha"
                target="_blank"
                rel="noopener noreferrer"
                className="facility-map-link"
              >
                <span>View on Google Maps</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="industrial-cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <span className="tech-mono-badge">WORKSHOP CONSULTATION</span>
            <h2 className="cta-headline">
              Visit Our Factory or Discuss Your Requirement with Jasapal Puvar
            </h2>
            <p className="cta-subtext">
              Schedule a workshop visit in Kathwada or invite our engineering team to your plant floor.
            </p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="button button-gold cta-main-btn">
              <span>Schedule Consultation</span>
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+919909922785" className="button button-ghost-light cta-wa-btn">
              <Phone size={15} />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
