import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, Phone, MessageCircle, Factory, ShieldCheck, Cpu } from 'lucide-react';

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
    <main className="page-main industrial-industries-page">
      <SEO
        title="Industries Served | Packaging Machinery for FMCG, Food & Pharma | Honey Packaging"
        description="Explore packaging machinery tailored for Food & Beverage, FMCG, Pharma, Logistics, Agro, and Heavy Engineering across Gujarat manufacturing plants."
        path="/industries"
      />

      {/* Hero Section */}
      <section className="page-hero-industrial">
        <div className="container page-hero-inner">
          <div className="hero-telemetry-tag">
            <span className="live-status-pulse" />
            <span className="telemetry-text">SECTOR EXPERTISE // GUJARAT MANUFACTURING CORRIDORS</span>
          </div>

          <h1 className="page-title-industrial">
            Wherever Products<br />
            <span className="text-gold-gradient">Need to Move Securely.</span>
          </h1>

          <p className="page-lead-industrial">
            Six primary manufacturing verticals. One dedicated packaging partner. Machines configured to your product density, carton durability, and daily dispatch volumes.
          </p>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="section industrial-sectors-section">
        <div className="container">
          <div className="section-heading-industrial">
            <span className="tech-mono-badge">APPLICATION SPECS</span>
            <h2 className="section-title-large">
              Engineered for Your<br />
              <span className="text-gold-gradient">Production Environment.</span>
            </h2>
          </div>

          <div className="industrial-sectors-grid">
            {industries.map(({ num, name, desc, machines }) => (
              <article className="industrial-sector-card" key={num}>
                <div className="sector-card-header">
                  <span className="sector-num-badge">SECTOR {num}</span>
                  <Factory size={18} className="text-gold" />
                </div>

                <h3 className="sector-name">{name}</h3>
                <p className="sector-desc">{desc}</p>

                <div className="sector-machinery-box">
                  <span className="machinery-box-title">
                    <Cpu size={12} className="text-gold" />
                    RECOMMENDED MACHINERY
                  </span>
                  <div className="machinery-tags-wrap">
                    {machines.map((m) => (
                      <span key={m} className="machinery-pill-tag">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sector-card-footer">
                  <Link
                    to={`/contact?need=${encodeURIComponent(`Inquiry for ${name}`)}`}
                    className="button button-gold sector-quote-btn"
                  >
                    <span>Get Quote for {name.split('&')[0].trim()}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Page Bottom CTA Strip */}
      <section className="industrial-cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <span className="tech-mono-badge">SECTOR SPECIFIC ADVICE</span>
            <h2 className="cta-headline">
              Not Sure Which Configuration Suits Your Line?
            </h2>
            <p className="cta-subtext">
              Share your product dimensions, line speed, and operating conditions. Our technical team will recommend the right machine.
            </p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="button button-gold cta-main-btn">
              <span>Talk to an Engineer</span>
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
