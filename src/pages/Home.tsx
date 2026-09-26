import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock3,
  Factory,
  Headset,
  MessageCircle,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { categories } from '@/data/products';

const benefits = [
  {
    icon: Settings2,
    title: 'Right-fit machinery',
    text: 'Practical machine recommendations engineered for your exact carton dimensions, speeds, and floor plan.',
  },
  {
    icon: ShieldCheck,
    title: 'Built for industrial duty',
    text: 'Heavy steel frames, high-torque motors, and durable components designed for rigorous daily factory shifts.',
  },
  {
    icon: Headset,
    title: 'Local Gujarat service',
    text: 'Direct engineer support from Kathwada, Ahmedabad. On-site installation, operator training, and genuine spares.',
  },
  {
    icon: Zap,
    title: 'Fast dispatch & response',
    text: 'Standard strapping machines and consumables in stock for immediate dispatch across Gujarat and India.',
  },
];

const flowStages = [
  { num: '01', title: 'Infeed', desc: 'Carton loading & weighing' },
  { num: '02', title: 'Tape Seal', desc: 'Top & bottom BOPP seal' },
  { num: '03', title: 'Strapping', desc: 'Friction heat weld' },
  { num: '04', title: 'Wrapping', desc: 'Power pre-stretch film' },
  { num: '05', title: 'Dispatch', desc: 'Pallet staging & transit' },
];

export default function Home() {
  return (
    <main id="home">
      <SEO
        title="Honey Packaging | All Type Customize Packaging Solutions | Ahmedabad"
        description="Semi & automatic box strapping machines, pallet stretch wrappers, carton sealers, shrink tunnels & customize conveyors in Ahmedabad, Gujarat. Est. 2007."
        path="/"
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Ahmedabad · Kathwada · Gujarat
            </div>
            <h1>
              Pack smarter.<br />
              <em>Move faster.</em>
            </h1>
            <p className="hero-lead">
              All type customize packaging solutions for manufacturers and warehouses that keep India moving. Built tough, supported locally.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button button-primary">
                Get a Custom Quote <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/919909922785"
                className="button button-ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> WhatsApp Engineer
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true">
                <span>HP</span>
                <span>IN</span>
                <span>24</span>
              </div>
              <p>
                <strong>Trusted by 500+ Gujarat manufacturers</strong>
                <br />
                with prompt on-site engineering and genuine spares since 2007.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src="/images/hero-new-machine.webp"
                alt="Automated packaging conveyor line in a modern manufacturing facility"
                width="500"
                height="440"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="visual-stamp">
              <BadgeCheck size={20} />
              <span>
                Complete End-to-End<br />
                <strong>Packaging Lines</strong>
              </span>
            </div>
            <div className="visual-note">
              <span className="pulse" />
              Heavy-duty machines that<br />
              <strong>work as hard as you do.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip" aria-label="Company credentials">
        <div className="container trust-grid">
          <div className="trust-intro">
            <span className="section-kicker">One Partner</span>
            <strong>
              From first carton<br />
              to final pallet dispatch.
            </strong>
          </div>
          <div className="trust-item">
            <Factory size={22} className="trust-icon" />
            <span>
              Ahmedabad &amp; Himatnagar<br />
              <b>Dual Gujarat Presence</b>
            </span>
          </div>
          <div className="trust-item">
            <PackageCheck size={22} className="trust-icon" />
            <span>
              Complete End-of-Line<br />
              <b>Turnkey Machinery</b>
            </span>
          </div>
          <div className="trust-item">
            <Clock3 size={22} className="trust-icon" />
            <span>
              Same-Day Technical<br />
              <b>Support &amp; Spares</b>
            </span>
          </div>
          <div className="trust-item make-in-india-badge">
            <div className="mii-logo-wrap">
              <img
                src="/images/badges/make-in-india.webp"
                alt="Make in India Official Certified Logo"
                className="mii-official-logo"
                width="84"
                height="38"
                loading="lazy"
              />
            </div>
            <span className="mii-text">
              Indigenous Engineering<br />
              <b>Make in India</b>
            </span>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">The Machine Room</span>
              <h2>
                Everything your<br />
                <em>line needs next.</em>
              </h2>
            </div>
            <div className="heading-side">
              <p>
                From entry-level semi-automatic strapping to fully automated in-line pallet wrapping lines, we engineer machines to your speed, product size, and budget.
              </p>
              <Link className="text-link" to="/products">
                View complete catalogue <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="product-grid">
            {categories.map(({ id, name, image, alt, products, icon: Icon, tone }) => (
              <Link className={`product-card ${tone}`} to={`/products?category=${id}`} key={id}>
                <div className="product-card-top">
                  <div className="product-icon">
                    <Icon size={24} />
                  </div>
                  <span className="product-count-badge">
                    {products.length} {products.length > 1 ? 'models' : 'model'}
                  </span>
                </div>
                <div className="product-preview-thumb">
                  <img
                    src={image}
                    alt={alt}
                    width="176"
                    height="132"
                    loading="lazy"
                  />
                </div>
                <div className="product-card-info">
                  <h3>{name}</h3>
                  <p>{products.length} packaging solutions</p>
                </div>
                <span className="card-arrow-wrap" aria-hidden="true">
                  View Specifications <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="section dark-section" id="about">
        <div className="container about-grid">
          <div className="about-art">
            <div className="art-orbit orbit-one" aria-hidden="true" />
            <div className="art-orbit orbit-two" aria-hidden="true" />
            <div className="art-core">
              <span>HP</span>
              <small>EST. 2007</small>
            </div>
            <div className="art-label label-one">STRAP</div>
            <div className="art-label label-two">WRAP</div>
            <div className="art-label label-three">CONVEY</div>
          </div>

          <div className="about-copy">
            <span className="section-kicker light">The Honey Packaging Difference</span>
            <h2>
              Less guesswork.<br />
              <em>More throughput.</em>
            </h2>
            <p>
              For over 17 years, founder Jasapal Puvar and the Honey Packaging engineering team have helped Gujarat manufacturers eliminate packaging bottlenecks, prevent transport damage, and cut consumable costs.
            </p>
            <div className="benefit-list">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div className="benefit" key={title}>
                  <div className="benefit-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="button button-gold mt-8">
              Read Our Story &amp; Founder Profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Teaser */}
      <section className="section solutions-section" id="solutions">
        <div className="container solution-grid">
          <div className="solution-copy">
            <span className="section-kicker">Built Around Your Output</span>
            <h2>
              Not just a machine.<br />
              <em>A synchronized rhythm.</em>
            </h2>
            <p>
              Carton sealing, strapping, stretch wrapping, and conveyor transit should work as one fluid, bottleneck-free system. We help you design the optimal packing sequence for your factory floor.
            </p>
            <div className="check-list">
              <span>
                <Check size={16} className="text-gold" /> Custom conveyor layouts built to your floor plan
              </span>
              <span>
                <Check size={16} className="text-gold" /> On-site machine commissioning and operator training
              </span>
              <span>
                <Check size={16} className="text-gold" /> Immediate dispatch of PP strapping rolls and spares
              </span>
            </div>
            <div className="cta-row-flex">
              <Link to="/contact" className="button button-dark">
                Request Engineering Advice <ArrowRight size={17} />
              </Link>
              <Link to="/solutions" className="text-link">
                View packing flows <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="flow-card">
            <div className="flow-header">
              <span>INTEGRATED DISPATCH FLOW</span>
              <span className="live">
                <i /> LIVE DISPATCH
              </span>
            </div>
            <div className="flow-visual" role="img" aria-label="Interactive packaging flow visualizer">
              <div className="flow-stages-track">
                {flowStages.map((stage) => (
                  <div className="flow-stage-item" key={stage.num}>
                    <div className="flow-stage-num">{stage.num}</div>
                    <span className="flow-stage-label">{stage.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flow-footer">
              <span>
                <strong>05</strong> Integrated Stages
              </span>
              <span>
                <strong>100%</strong> Gujarat Supported
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Home CTA Strip */}
      <section className="home-cta-section">
        <div className="container home-cta-inner">
          <div>
            <h2>
              Upgrade your packing line.<br />
              <em>Talk to our engineers today.</em>
            </h2>
            <p>
              Send your carton dimensions, throughput requirements, and plant location. Receive a tailored quote within 24 hours.
            </p>
          </div>
          <div className="home-cta-actions">
            <Link to="/contact" className="button button-primary">
              Get a Custom Quote <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/919909922785"
              className="button button-ghost-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} /> WhatsApp +91 99099 22785
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
