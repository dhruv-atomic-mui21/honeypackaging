import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
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
  Activity,
  Award,
  ChevronRight,
  Search,
  X,
  Cpu,
  SlidersHorizontal,
} from 'lucide-react';
import { categories } from '@/data/products';
import StickyMachineShowcase from '@/components/StickyMachineShowcase';

const benefits = [
  {
    icon: Settings2,
    code: 'BENEFIT-01',
    title: 'Right-Fit Machine Engineering',
    text: 'Practical machine recommendations engineered for your exact carton dimensions, speeds, and plant floor layout — zero over-speccing.',
  },
  {
    icon: ShieldCheck,
    code: 'BENEFIT-02',
    title: 'Heavy Industrial Duty Construction',
    text: 'Heavy steel frames, high-torque motors, and precision mechanical components designed for rigorous multi-shift factory operations.',
  },
  {
    icon: Headset,
    code: 'BENEFIT-03',
    title: 'Local Gujarat Service & Spares',
    text: 'Direct engineering response from Kathwada, Ahmedabad. On-site installation, operator training, and genuine spares within hours.',
  },
  {
    icon: Zap,
    code: 'BENEFIT-04',
    title: 'Immediate Dispatch & Response',
    text: 'Standard box strapping machines, PP rolls, and replacement heating elements maintained in stock for instant Gujarat and nationwide dispatch.',
  },
];

const flowStages = [
  { num: '01', title: 'Infeed Station', desc: 'Carton loading & weight inspection' },
  { num: '02', title: 'Tape Sealing', desc: 'Top & bottom synchronous BOPP seal' },
  { num: '03', title: 'Box Strapping', desc: 'High-speed friction heat welding' },
  { num: '04', title: 'Stretch Wrapping', desc: 'Power pre-stretch film enclosure' },
  { num: '05', title: 'Pallet Dispatch', desc: 'Pallet staging & direct container transit' },
];

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

  const [activeCat, setActiveCat] = useState(() => {
    return categories.some((c) => c.id === catParam) ? (catParam as string) : categories[0].id;
  });

  useEffect(() => {
    if (catParam && categories.some((c) => c.id === catParam)) {
      setActiveCat(catParam);
    }
  }, [catParam]);

  const handleTabClick = (id: string) => {
    setActiveCat(id);
    setSearchParams({ category: id }, { replace: true });
    setSearchQuery('');
  };

  const currentCategory = categories.find((c) => c.id === activeCat) || categories[0];

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return currentCategory.products;
    }
    const q = searchQuery.toLowerCase().trim();
    return currentCategory.products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.specs.some((s) => s.toLowerCase().includes(q))
    );
  }, [currentCategory, searchQuery]);

  return (
    <main id="home" className="home-main">
      <SEO
        title="Honey Packaging | All Types of Customize Packaging Solutions | Ahmedabad"
        description="Semi & automatic box strapping machines, pallet stretch wrappers, carton sealers, shrink tunnels & customize conveyors in Ahmedabad, Gujarat. Est. 2007."
        path="/"
      />

      {/* Hero Section */}
      <section className="hero-industrial">
        <div className="hero-tech-grid" aria-hidden="true" />
        <div className="hero-glow-layer" aria-hidden="true" />

        <div className="container hero-content-grid">
          <div className="hero-copy-column">
            {/* Engineering Status Pill */}
            <div className="hero-telemetry-tag">
              <span className="live-status-pulse" />
              <span className="telemetry-text">
                AHMEDABAD · ALL TYPES OF CUSTOMIZE PACKAGING SOLUTIONS · EST. 2007
              </span>
            </div>

            <h1 className="hero-main-title">
              Pack Smarter.<br />
              <span className="hero-title-accent">Move Faster.</span>
            </h1>

            <p className="hero-lead-text">
              All types of customize packaging solutions for manufacturers and warehouses that keep India moving. Built tough for rigorous shifts, supported locally by direct engineers.
            </p>

            <div className="hero-cta-group">
              <Link to="/contact" className="button button-gold hero-cta-btn">
                <span>Get a Custom Quote</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/919909922785"
                className="button button-ghost-light hero-wa-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Engineer</span>
              </a>
            </div>

            {/* Verification Proof Badge */}
            <div className="hero-proof-card">
              <div className="proof-avatar-stack" aria-hidden="true">
                <span className="avatar-chip">HP</span>
                <span className="avatar-chip">GJ</span>
                <span className="avatar-chip">17+</span>
              </div>
              <div className="proof-text-wrap">
                <strong className="proof-lead">Trusted by 500+ Gujarat Manufacturers</strong>
                <p className="proof-sub">
                  Rapid on-site engineering, hands-on training, and genuine spares since 2007.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual-column">
            <div className="hero-viewfinder-frame">
              <div className="frame-corner corner-tl">+</div>
              <div className="frame-corner corner-tr">+</div>
              <div className="frame-corner corner-bl">+</div>
              <div className="frame-corner corner-br">+</div>

              <div className="hero-img-wrap">
                <img
                  src="/images/hero-new-machine.webp"
                  alt="Automated packaging conveyor line in a modern manufacturing facility"
                  width="540"
                  height="460"
                  loading="eager"
                  fetchPriority="high"
                  className="hero-main-image"
                />
              </div>

              {/* Viewfinder Telemetry Overlays */}
              <div className="viewfinder-tag top-tag">
                <BadgeCheck size={16} className="text-gold" />
                <span>COMPLETE END-OF-LINE PACKAGING</span>
              </div>

              <div className="viewfinder-tag bottom-tag">
                <span className="radar-dot" />
                <span>HEAVY-DUTY INDUSTRIAL INTEGRATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Engineering Credentials Strip */}
      <section className="trust-strip-industrial" aria-label="Company credentials">
        <div className="container trust-strip-grid">
          <div className="trust-lead-item">
            <span className="tech-label-kicker">ONE PARTNER</span>
            <strong className="trust-lead-title">
              From first carton<br />
              to final pallet dispatch.
            </strong>
          </div>

          <div className="trust-card-item">
            <div className="trust-icon-box">
              <Factory size={20} className="text-gold" />
            </div>
            <div className="trust-info">
              <span className="trust-header">Ahmedabad &amp; Himatnagar</span>
              <strong className="trust-highlight">Dual Gujarat Presence</strong>
            </div>
          </div>

          <div className="trust-card-item">
            <div className="trust-icon-box">
              <PackageCheck size={20} className="text-gold" />
            </div>
            <div className="trust-info">
              <span className="trust-header">Complete End-of-Line</span>
              <strong className="trust-highlight">Turnkey Machinery</strong>
            </div>
          </div>

          <div className="trust-card-item">
            <div className="trust-icon-box">
              <Clock3 size={20} className="text-gold" />
            </div>
            <div className="trust-info">
              <span className="trust-header">Same-Day Technical</span>
              <strong className="trust-highlight">Support &amp; Spares</strong>
            </div>
          </div>

          <div className="trust-card-item mii-industrial-badge">
            <div className="mii-logo-container">
              <img
                src="/images/badges/make-in-india.webp"
                alt="Make in India Official Certified Logo"
                className="mii-seal-img"
                width="84"
                height="38"
                loading="lazy"
              />
            </div>
            <div className="trust-info">
              <span className="trust-header">Indigenous Engineering</span>
              <strong className="trust-highlight">Make in India</strong>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SPLIT SCROLL MACHINERY SHOWCASE SECTION */}
      <StickyMachineShowcase />

      {/* Merged Product Machinery & Consumables Section */}
      <section className="section industrial-catalogue-section" id="products">
        <div className="container">
          <div className="section-heading-industrial split-heading">
            <div>
              <span className="tech-mono-badge">FULL EQUIPMENT & CONSUMABLES MATRIX</span>
              <h2 className="section-title-large">
                The Machine Room:<br />
                <span className="text-gold-gradient">Engineered to Your Output.</span>
              </h2>
            </div>
            <div className="heading-side-column">
              <p>
                From entry-level semi-automatic wrappers and strapping tables to fully automated in-line conveyors, shrink tunnels, and prime/recycled strapping rolls—tailored directly to your plant output.
              </p>
              <a
                href="https://wa.me/919909922785?text=Hello%20Honey%20Packaging%2C%20I%20want%20to%20consult%20an%20engineer%20for%20machinery."
                target="_blank"
                rel="noopener noreferrer"
                className="tech-arrow-link"
              >
                <span>Consult Factory Engineer</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Category Tabs & Quick Search Toolbar */}
          <div className="industrial-catalogue-toolbar">
            <div className="category-pill-tabs" role="tablist" aria-label="Product Machinery Divisions">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCat === c.id}
                  className={`category-pill-tab ${activeCat === c.id ? 'active-pill' : ''}`}
                  onClick={() => handleTabClick(c.id)}
                >
                  <c.icon size={16} />
                  <span>{c.name}</span>
                  <span className="pill-count-bubble">{c.products.length}</span>
                </button>
              ))}
            </div>

            <div className="industrial-search-box">
              <Search size={16} className="search-icon-adornment" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${currentCategory.name}...`}
                className="industrial-search-input"
                aria-label={`Search in ${currentCategory.name}`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Active Category Header Banner */}
          <div className="active-category-hero-card">
            <div className="cat-hero-left">
              <div className={`category-large-avatar tone-${currentCategory.tone}`}>
                <currentCategory.icon size={30} />
              </div>
              <div className="cat-hero-text">
                <div className="cat-meta-row">
                  <span className="cat-model-count-tag">
                    {currentCategory.products.length} {currentCategory.products.length > 1 ? 'MODELS AVAILABLE' : 'MODEL AVAILABLE'}
                  </span>
                  <span className="cat-location-tag">KATHWADA WORKS · AHMEDABAD</span>
                </div>
                <h2 className="cat-hero-title">{currentCategory.name}</h2>
                <p className="cat-hero-tagline">{currentCategory.tagline}</p>
                <p className="cat-hero-description">{currentCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="industrial-products-grid">
              {filteredProducts.map((p, index) => {
                const isSemi = p.name.toLowerCase().includes('semi');
                const isConsumable = currentCategory.id === 'strapping-roll' || currentCategory.id === 'consumables';
                const statusTag = isConsumable
                  ? 'FACTORY STOCK'
                  : isSemi
                  ? 'SEMI-AUTOMATIC'
                  : 'AUTOMATIC';

                return (
                  <article className="industrial-product-card" key={p.id}>
                    {/* Card Header Tag */}
                    <div className="product-card-top-tag">
                      <span className="product-index-code">MODEL #{String(index + 1).padStart(2, '0')}</span>
                      <span className="product-status-tag">{statusTag}</span>
                    </div>

                    {/* Machine Photo Viewfinder */}
                    <div className="product-viewfinder-frame">
                      <div className="frame-corner corner-tl">+</div>
                      <div className="frame-corner corner-tr">+</div>
                      <div className="frame-corner corner-bl">+</div>
                      <div className="frame-corner corner-br">+</div>

                      <img
                        src={p.image}
                        alt={p.alt}
                        width="400"
                        height="300"
                        loading="lazy"
                        className="product-card-photo"
                      />
                    </div>

                    {/* Card Content Body */}
                    <div className="product-card-content">
                      <h3 className="product-card-name">{p.name}</h3>
                      <p className="product-card-brief">{p.shortDesc}</p>

                      {/* Technical Specifications Matrix */}
                      {p.specs.length > 0 && (
                        <div className="product-card-specs-box">
                          <div className="specs-box-title">
                            <Cpu size={13} className="text-gold" />
                            <span>SPECIFICATIONS</span>
                          </div>
                          <ul className="product-specs-list">
                            {p.specs.map((s) => (
                              <li key={s} className="spec-list-item">
                                <Check size={13} className="spec-check text-gold" />
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Dual Action CTA Buttons */}
                      <div className="product-card-action-bar">
                        <Link
                          to={`/contact?need=${encodeURIComponent(p.name)}`}
                          className="button button-gold card-rfq-btn"
                        >
                          <span>Request Quote</span>
                          <ArrowRight size={14} />
                        </Link>
                        <a
                          href={`https://wa.me/919909922785?text=${encodeURIComponent(
                            `Hello Honey Packaging, I want to inquire about the ${p.name}.`
                          )}`}
                          className="button button-ghost-light card-wa-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Inquire about ${p.name} on WhatsApp`}
                        >
                          <MessageCircle size={15} />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="products-empty-state">
              <div className="empty-state-card">
                <SlidersHorizontal size={36} className="empty-icon text-gold" />
                <h3>No Machinery Models Found</h3>
                <p>
                  No machinery models in &quot;{currentCategory.name}&quot; matched your search for &quot;{searchQuery}&quot;.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="button button-gold mt-4"
                >
                  Reset Search Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Integrated Packaging Flow Stage Sequence */}
      <section className="section industrial-flow-section" id="solutions">
        <div className="container flow-section-grid">
          <div className="flow-copy-column">
            <span className="tech-mono-badge">SYNCHRONIZED OPERATIONS</span>
            <h2 className="section-title-large">
              Not Just a Machine.<br />
              <span className="text-gold-gradient">A Seamless Flow.</span>
            </h2>
            <p className="flow-intro-text">
              Carton sealing, strapping, stretch wrapping, and conveyor transit should function as one fluid, bottleneck-free system. We help you design the optimal packing sequence for your factory floor plan.
            </p>

            <div className="flow-checklist">
              <div className="flow-check-item">
                <Check size={16} className="text-gold check-icon" />
                <span>Custom conveyor layouts engineered to your exact plant floor plan</span>
              </div>
              <div className="flow-check-item">
                <Check size={16} className="text-gold check-icon" />
                <span>On-site machine commissioning and hands-on operator training</span>
              </div>
              <div className="flow-check-item">
                <Check size={16} className="text-gold check-icon" />
                <span>Immediate dispatch of virgin PP strapping rolls and genuine spares</span>
              </div>
            </div>

            <div className="flow-actions-row">
              <Link to="/contact" className="button button-gold">
                Request Engineering Advice <ArrowRight size={16} />
              </Link>
              <Link to="/solutions" className="button button-ghost-light">
                View All Packing Flows <ChevronRight size={15} />
              </Link>
            </div>
          </div>

          {/* Interactive Flow Sequence Visual Card */}
          <div className="flow-visual-card">
            <div className="flow-card-header">
              <div className="flow-header-title">
                <Activity size={14} className="text-emerald" />
                <span>INTEGRATED DISPATCH FLOW // REAL-TIME RHYTHM</span>
              </div>
              <span className="flow-status-live">
                <span className="live-pulse" /> LIVE DISPATCH
              </span>
            </div>

            <div className="flow-stages-timeline">
              {flowStages.map((stage, idx) => (
                <div className="flow-timeline-step" key={stage.num}>
                  <div className="step-marker-column">
                    <span className="step-badge">{stage.num}</span>
                    {idx < flowStages.length - 1 && <span className="step-connector" />}
                  </div>
                  <div className="step-content-box">
                    <h4 className="step-name">{stage.title}</h4>
                    <p className="step-desc">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flow-card-footer">
              <div className="flow-metric">
                <strong className="metric-val">05</strong>
                <span className="metric-label">Integrated Stages</span>
              </div>
              <div className="flow-metric">
                <strong className="metric-val">100%</strong>
                <span className="metric-label">Gujarat Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="section industrial-sectors-section" id="industries">
        <div className="container">
          <div className="section-heading-industrial split-heading">
            <div>
              <span className="tech-mono-badge">SECTOR EXPERTISE // GUJARAT MANUFACTURING</span>
              <h2 className="section-title-large">
                Built for High-Stakes<br />
                <span className="text-gold-gradient">Production Floors.</span>
              </h2>
            </div>
            <div className="heading-side-column">
              <p>
                From ceramic tile cartons at AGL to Shubhalakshmi polyester yarns, edible oils, pharmaceuticals, and agro bales — packaging machinery matched to your exact load profile and shifts.
              </p>
              <Link to="/industries" className="tech-arrow-link">
                <span>Explore All 6 Industry Solutions</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="industrial-sectors-grid">
            {[
              {
                num: '01',
                name: 'Ceramics & Heavy Tiles',
                desc: 'Heavy-duty automatic box strapping and M-Type pallet wrappers engineered for high-density carton packaging with zero edge damage.',
                machines: ['Automatic Box Strapping Machine', 'M-Type Pallet Stretch Wrapper', 'AQD-19 Pneumatic Tool'],
                client: 'Deployed at AGL Tiles & Morbi Ceramic Corridors',
              },
              {
                num: '02',
                name: 'Textiles, Yarns & Cotton Bales',
                desc: 'Vertical and horizontal compression strapping systems designed for soft yarn boxes, compressed cotton bales, and fabric rolls.',
                machines: ['Horizontal Compression Strapping', 'Low Table with Pressing', 'High-Tensile PP Straps'],
                client: 'Trusted by Shubhalakshmi Polyesters Ltd',
              },
              {
                num: '03',
                name: 'Food, Edible Oils & FMCG',
                desc: 'Synchronous top & bottom carton sealers and continuous heat shrink tunnels for uniform tamper-evident packaging lines.',
                machines: ['Top & Bottom Carton Sealer', 'Continuous Shrink Tunnel', 'Free Roller Conveyor Bed'],
                client: 'Gujarat Food Processing & Edible Oil Units',
              },
              {
                num: '04',
                name: 'Pharmaceuticals & Cleanrooms',
                desc: 'Tamper-evident carton sealing, POF shrink wrapping, and clean stainless roller conveyors for hygienic healthcare packaging.',
                machines: ['Semi-Automatic L-Sealer', 'Auto Random Carton Sealer', 'Stainless Gravity Conveyor'],
                client: 'Ahmedabad & Vadodara Pharma Clusters',
              },
            ].map(({ num, name, desc, machines, client }) => (
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
                    RECOMMENDED SETUP
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
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{client}</span>
                  <Link
                    to={`/contact?need=${encodeURIComponent(`Machinery for ${name}`)}`}
                    className="button button-gold sector-quote-btn"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Honey Packaging Difference */}
      <section className="section industrial-difference-section" id="about">
        <div className="container difference-grid">
          <div className="difference-badge-column">
            <div className="difference-core-shield">
              <div className="orbit-ring ring-outer" aria-hidden="true" />
              <div className="orbit-ring ring-inner" aria-hidden="true" />
              <div className="shield-center">
                <span className="shield-initials">HP</span>
                <span className="shield-year">EST. 2007</span>
              </div>
              <div className="shield-tag tag-top">STRAP</div>
              <div className="shield-tag tag-right">WRAP</div>
              <div className="shield-tag tag-bottom">CONVEY</div>
            </div>
          </div>

          <div className="difference-copy-column">
            <span className="tech-mono-badge">THE HONEY PACKAGING ADVANTAGE</span>
            <h2 className="section-title-large">
              Less Guesswork.<br />
              <span className="text-gold-gradient">More Output.</span>
            </h2>
            <p className="difference-desc">
              For over 17 years, founder Jasapal Puvar and the Honey Packaging engineering team have helped Gujarat manufacturers eliminate packaging bottlenecks, prevent transport damage, and cut consumable costs.
            </p>

            <div className="benefits-matrix">
              {benefits.map(({ icon: Icon, code, title, text }) => (
                <div className="benefit-tech-card" key={title}>
                  <div className="benefit-card-top">
                    <div className="benefit-icon-box">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="benefit-code">{code}</span>
                  </div>
                  <h3 className="benefit-card-title">{title}</h3>
                  <p className="benefit-card-text">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/about" className="button button-gold">
                Read Our Story &amp; Founder Profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Unified High-Tech Home CTA Strip */}
      <section className="industrial-cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <span className="tech-mono-badge">READY TO OPTIMIZE YOUR FLOOR?</span>
            <h2 className="cta-headline">
              Upgrade Your Packing Line.<br />
              <span className="text-gold-gradient">Talk to Our Engineers Today.</span>
            </h2>
            <p className="cta-subtext">
              Send your carton dimensions, throughput requirements, and plant location. Receive a tailored quote within 24 hours.
            </p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="button button-gold cta-main-btn">
              <span>Get a Custom Quote</span>
              <ArrowRight size={17} />
            </Link>
            <a
              href="https://wa.me/919909922785"
              className="button button-ghost-light cta-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              <span>WhatsApp +91 99099 22785</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
