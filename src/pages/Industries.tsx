import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const industries = [
  {
    num: '01',
    name: 'Food & Beverage Processing',
    desc: 'From flour mills, spices, and grains to edible oil and beverage bottlers — we engineer stainless-frame strapping tables, heat shrink bundling, and washdown-tolerant conveyor systems.',
    machines: ['Automatic Box Strapping Machine', 'Continuous Shrink Tunnel', 'Fully Auto Pallet Stretch Wrapper', 'Motorized Belt Conveyor'],
  },
  {
    num: '02',
    name: 'FMCG & Consumer Goods',
    desc: 'High-speed dispatch floors requiring continuous operation with zero operator downtime. Our online high-speed strapping arches and random carton sealers eliminate packaging congestion.',
    machines: ['Auto Strapping Machine Online', 'Top & Bottom Carton Sealing', 'Precision L-Sealer', 'Ring Stretch Wrapping Machine'],
  },
  {
    num: '03',
    name: 'Pharmaceuticals & Healthcare',
    desc: 'Hygienic, tamper-evident carton sealing, POF shrink wrap packaging, and clean-line roller conveyor modules calibrated for sensitive medical carton handling.',
    machines: ['Carton Sealing Machine', 'Web Sealer with Shrink Tunnel', 'Stainless Free Roller Conveyor', 'Semi-Auto Box Strapping Table'],
  },
  {
    num: '04',
    name: 'Warehousing & E-Commerce Logistics',
    desc: 'Fast fulfillment centers handling unpredictable carton sizes. Our self-adjusting random carton sealers and mobile turntable wrappers handle variable volumes with minimum labor.',
    machines: ['Auto Random Carton Sealing with Flap Closure', 'Semi Auto Strapping Machine', 'Box Wrapping Pre-Stretch', 'Custom Roller Conveyors'],
  },
  {
    num: '05',
    name: 'Agro Products & Commodities',
    desc: 'Heavy bags, compressed bales, and bulk corrugated cartons. Heavy-duty low-table strapping machines and pallet stretch wrappers designed for rugged warehouse environments.',
    machines: ['Automatic Strapping Machine Low Table with Pressing', 'Fully Auto Pallet Stretch Wrapper', 'Ring Stretch Wrapper', 'Virgin PP Strapping Rolls'],
  },
  {
    num: '06',
    name: 'Engineering & Industrial Manufacturing',
    desc: 'Heavy industrial parts, castings, ceramics (e.g. AGL Tiles), and export freight requiring high-tension strap reinforcement and weather-tight pallet film wrapping.',
    machines: ['Box Wrapping Machine with Power Pre-Stretch', 'Side Belt Drive Strapping Online', 'Customized Conveyor Systems', 'Automatic Strapping Machine'],
  },
];

export default function Industries() {
  return (
    <main className="page-main">
      <SEO
        title="Industries Served | Packaging Machinery for FMCG, Food &amp; Pharma | Honey Packaging"
        description="Explore packaging machinery tailored for Food & Beverage, FMCG, Pharma, Logistics, Agro, and Heavy Engineering across Gujarat manufacturing plants."
        path="/industries"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Industrial Sector Expertise</span>
          <h1 className="page-title">
            Wherever Products<br />
            <em>Need to Move Securely.</em>
          </h1>
          <p className="page-lead">
            Six primary manufacturing verticals. One dedicated packaging partner. Machines configured to your product density, carton durability, and daily dispatch volumes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industries-detail-grid">
            {industries.map(({ num, name, desc, machines }) => (
              <article className="industry-detail-card" key={num}>
                <span className="industry-num" aria-hidden="true">
                  {num}
                </span>
                <div className="industry-content">
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <div className="industry-machines" aria-label="Recommended machinery">
                    {machines.map((m) => (
                      <span key={m} className="machine-tag">
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="industry-card-actions">
                    <Link
                      to={`/contact?need=${encodeURIComponent(`Inquiry for ${name}`)}`}
                      className="text-link font-semibold"
                    >
                      Get Quote for {name.split('&')[0].trim()} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="page-cta-strip">
        <div className="container page-cta-inner">
          <div>
            <h3>Have a specialized industrial product or irregular packing shape?</h3>
            <p>We build customized conveyor sections and strapping machines adapted to non-standard items.</p>
          </div>
          <div className="cta-button-group">
            <Link to="/contact" className="button button-primary">
              Consult an Engineer <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919909922785"
              className="button button-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp Discussion
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
