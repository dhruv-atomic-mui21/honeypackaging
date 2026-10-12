import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  ArrowRight,
  Check,
  Boxes,
  CircleDot,
  PackageCheck,
  MoveRight,
  Phone,
  MessageCircle,
  Activity,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

const flows = [
  {
    icon: Boxes,
    code: 'FLOW-SEQ-01',
    title: 'Carton Strapping & Automated Dispatch',
    steps: [
      'Cartons packed & weighed at loading station',
      'Dual top & bottom tape sealing on continuous line',
      'High-speed arch strapping (friction heat weld seal)',
      'Conveyor transit to pallet staging area',
      'Immediate forklift loading or warehouse racking',
    ],
    tone: 'gold',
  },
  {
    icon: CircleDot,
    code: 'FLOW-SEQ-02',
    title: 'High-Throughput Pallet Stretch Wrapping',
    steps: [
      'Pallet loaded onto heavy-duty rotating turntable',
      'Automatic optical photo-eye detects pallet height',
      'Power pre-stretch carriage stretches film up to 250% for maximum yield',
      'Multi-layer bottom and top reinforcement wraps applied',
      'Moisture-sealed and ready for export container or truck freight',
    ],
    tone: 'blue',
  },
  {
    icon: PackageCheck,
    code: 'FLOW-SEQ-03',
    title: 'Retail Presentation & Shrink Bundling',
    steps: [
      'Multi-packs or promotional units collated at infeed',
      'Precision L-sealer or web sleeve sealer cuts & seals film envelope',
      'Hot air recirculation tunnel contracts film uniformly 360 degrees',
      'Rapid air-cooling section sets clean, tamper-evident finish',
      'Carton packing for supermarket or distributor dispatch',
    ],
    tone: 'orange',
  },
  {
    icon: MoveRight,
    code: 'FLOW-SEQ-04',
    title: 'Custom In-Line Conveyor Integration',
    steps: [
      'Gravity roller infeed from primary manufacturing cells',
      'Motorized belt conveyor transfer between packing machines',
      'Side-belt or online strapping arch integration without stopping flow',
      '90-degree transfer or inclined elevation to dispatch bay',
      'Complete end-to-line rhythm configured to floor dimensions',
    ],
    tone: 'navy',
  },
];

const whyChoose = [
  'Application-specific machine selection — no over-spec or generic catalogue quotes',
  'Prompt on-site factory visits across Ahmedabad, Himatnagar, and Gujarat industrial corridors',
  'Turnkey installation, electrical calibration, and hands-on operator training',
  'Genuine spare parts, heating elements, and virgin PP strapping rolls in stock',
  'Conveyor system customization fabricated to your exact floor blueprint',
  'Dedicated service from founder Jasapal Puvar and senior engineers with 17+ years experience',
];

export default function Solutions() {
  return (
    <main className="page-main industrial-solutions-page">
      <SEO
        title="Packaging Line Solutions & Factory Automation | Honey Packaging"
        description="Discover custom packaging flows, online strapping conveyor integrations, pallet wrapping systems, and retail shrink bundling engineered for Gujarat manufacturing plants."
        path="/solutions"
      />

      {/* Solutions Page Hero */}
      <section className="page-hero-industrial">
        <div className="container page-hero-inner">
          <div className="hero-telemetry-tag">
            <span className="live-status-pulse" />
            <span className="telemetry-text">END-TO-END FACTORY WORKFLOWS // PACKAGING AUTOMATION</span>
          </div>

          <h1 className="page-title-industrial">
            Not Just a Machine.<br />
            <span className="text-gold-gradient">A Better Rhythm.</span>
          </h1>

          <p className="page-lead-industrial">
            We design integrated packaging workflows that fit your floor layout, operator speed, and output goals — then fabricate and commission the equipment to make them run seamlessly.
          </p>
        </div>
      </section>

      {/* Engineered Line Sequences */}
      <section className="section industrial-flows-section">
        <div className="container">
          <div className="section-heading-industrial">
            <span className="tech-mono-badge">SYNCHRONIZED PACKING LINES</span>
            <h2 className="section-title-large">
              Packaging Flows That<br />
              <span className="text-gold-gradient">Eliminate Factory Bottlenecks.</span>
            </h2>
          </div>

          <div className="industrial-flows-grid">
            {flows.map(({ icon: Icon, code, title, steps, tone }) => (
              <article className={`industrial-flow-card tone-${tone}`} key={title}>
                <div className="flow-card-head">
                  <div className="flow-icon-circle">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <span className="flow-code-badge">{code}</span>
                </div>

                <h3 className="flow-card-heading">{title}</h3>

                <ol className="flow-steps-ladder">
                  {steps.map((s, i) => (
                    <li key={i} className="flow-step-node">
                      <span className="step-node-number">{String(i + 1).padStart(2, '0')}</span>
                      <span className="step-node-label">{s}</span>
                    </li>
                  ))}
                </ol>

                <div className="flow-card-bottom">
                  <Link
                    to={`/contact?need=${encodeURIComponent(title)}`}
                    className="button button-gold flow-inquire-btn"
                  >
                    <span>Configure This Line</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Honey Packaging */}
      <section className="section industrial-why-section">
        <div className="container why-grid-container">
          <div className="why-copy-col">
            <span className="tech-mono-badge">THE GUJARAT MANUFACTURING ADVANTAGE</span>
            <h2 className="section-title-large">
              Practical Engineering.<br />
              <span className="text-gold-gradient">Real Factory Results.</span>
            </h2>
            <p className="why-lead-desc">
              We never push pre-packaged machines that do not fit your space. We inspect your production constraints first, calculate your consumable savings, and supply the optimal machinery.
            </p>

            <div className="why-actions-group">
              <Link to="/contact" className="button button-gold">
                <span>Start Technical Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919909922785"
                className="button button-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="why-cards-col">
            <div className="why-checklist-panel">
              <div className="why-panel-header">
                <ShieldCheck size={16} className="text-gold" />
                <span>OUR 6 CORE ENGINEERING STANDARDS</span>
              </div>
              <ul className="why-items-list">
                {whyChoose.map((w, idx) => (
                  <li key={w} className="why-item-row">
                    <div className="why-item-marker">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="why-item-text">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="industrial-cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <span className="tech-mono-badge">PLANT LAYOUT CONSULTATION</span>
            <h2 className="cta-headline">
              Tell Us What You Are Packing &amp; Your Target Throughput
            </h2>
            <p className="cta-subtext">
              Our engineering team will draft an optimal conveyor layout and machine recommendation for your plant within 24 hours.
            </p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="button button-gold cta-main-btn">
              <span>Design My Packing Line</span>
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+919909922785" className="button button-ghost-light cta-wa-btn">
              <Phone size={15} />
              <span>+91 99099 22785</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
