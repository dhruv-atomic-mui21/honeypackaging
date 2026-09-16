import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, Check, Boxes, CircleDot, PackageCheck, MoveRight, Phone, MessageCircle } from 'lucide-react';

const flows = [
  {
    icon: Boxes,
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
    <main className="page-main">
      <SEO
        title="Packaging Line Solutions &amp; Factory Automation | Honey Packaging"
        description="Discover custom packaging flows, online strapping conveyor integrations, pallet wrapping systems, and retail shrink bundling engineered for Gujarat manufacturing plants."
        path="/solutions"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">End-to-End Factory Workflows</span>
          <h1 className="page-title">
            Not Just a Machine.<br />
            <em>A Better Rhythm.</em>
          </h1>
          <p className="page-lead">
            We design integrated packaging workflows that fit your floor layout, operator speed, and output goals — then fabricate and commission the equipment to make them run seamlessly.
          </p>
        </div>
      </section>

      {/* Packing Flow Cards */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Engineered Line Sequences</span>
            <h2>
              Packaging Flows That<br />
              <em>Eliminate Factory Bottlenecks.</em>
            </h2>
          </div>

          <div className="flows-grid">
            {flows.map(({ icon: Icon, title, steps, tone }) => (
              <article className={`flow-detail-card ${tone}`} key={title}>
                <div className={`flow-detail-icon ${tone}`}>
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <ol className="flow-steps">
                  {steps.map((s, i) => (
                    <li key={i}>
                      <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <Link
                  to={`/contact?need=${encodeURIComponent(title)}`}
                  className="flow-cta"
                >
                  Configure This Line <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Honey Packaging */}
      <section className="section dark-section">
        <div className="container why-grid">
          <div>
            <span className="section-kicker light">Why Gujarat Manufacturers Choose Us</span>
            <h2>
              Practical Engineering.<br />
              <em>Real Factory Results.</em>
            </h2>
            <p className="why-desc">
              We never push pre-packaged items that do not fit your space. We inspect your production constraints first, calculate your consumable savings, and supply the optimal machinery.
            </p>
            <div className="cta-button-group mt-8">
              <Link to="/contact" className="button button-gold">
                Start Technical Consultation <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919909922785"
                className="button button-ghost-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </div>
          </div>

          <ul className="why-list" aria-label="Key engineering benefits">
            {whyChoose.map((w) => (
              <li key={w}>
                <Check size={16} className="text-gold" />
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="page-cta-strip">
        <div className="container page-cta-inner">
          <div>
            <h3>Tell us what you are packing and your daily target throughput</h3>
            <p>Our engineering team will draft an optimal conveyor layout and machine recommendation for your plant.</p>
          </div>
          <div className="cta-button-group">
            <Link to="/contact" className="button button-primary">
              Design My Packing Line <ArrowRight size={16} />
            </Link>
            <a href="tel:+919909922785" className="button button-dark">
              <Phone size={15} /> +91 99099 22785
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
