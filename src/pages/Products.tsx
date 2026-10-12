import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
  Search,
  X,
  Cpu,
  Layers,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';
import { categories } from '@/data/products';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

  const [active, setActive] = useState(() => {
    return categories.some((c) => c.id === catParam) ? (catParam as string) : categories[0].id;
  });

  useEffect(() => {
    if (catParam && categories.some((c) => c.id === catParam)) {
      setActive(catParam);
    }
  }, [catParam]);

  const handleTabClick = (id: string) => {
    setActive(id);
    setSearchParams({ category: id });
    setSearchQuery('');
  };

  const current = categories.find((c) => c.id === active) || categories[0];

  // Search filtering across current category products
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return current.products;
    }
    const q = searchQuery.toLowerCase().trim();
    return current.products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDesc.toLowerCase().includes(q) ||
        p.specs.some((s) => s.toLowerCase().includes(q))
    );
  }, [current, searchQuery]);

  return (
    <main className="page-main industrial-products-page">
      <SEO
        title="Industrial Packaging Machines & Conveyors | Honey Packaging"
        description="Explore our full catalogue of box strapping machines, pallet stretch wrappers, carton sealers, shrink tunnels & customized conveyors. Sourced and serviced in Ahmedabad, Gujarat."
        path="/products"
      />

      {/* Page Hero */}
      <section className="page-hero-industrial">
        <div className="container page-hero-inner">
          <div className="hero-telemetry-tag">
            <span className="live-status-pulse" />
            <span className="telemetry-text">EQUIPMENT CATALOGUE // DIRECT FACTORY SUPPLY</span>
          </div>

          <h1 className="page-title-industrial">
            All Industrial<br />
            <span className="text-gold-gradient">Packaging Solutions.</span>
          </h1>

          <p className="page-lead-industrial">
            Manufactured, supplied, and supported from Kathwada, Ahmedabad. Every machine customizable to your exact package dimensions, line throughput, and plant floor layout.
          </p>
        </div>
      </section>

      <section className="section products-full-section">
        <div className="container">
          {/* Category Tabs & Quick Search Toolbar */}
          <div className="industrial-catalogue-toolbar">
            <div className="category-pill-tabs" role="tablist" aria-label="Product Categories">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={active === c.id}
                  className={`category-pill-tab ${active === c.id ? 'active-pill' : ''}`}
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
                placeholder={`Search ${current.name}...`}
                className="industrial-search-input"
                aria-label={`Search in ${current.name}`}
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
              <div className={`category-large-avatar tone-${current.tone}`}>
                <current.icon size={30} />
              </div>
              <div className="cat-hero-text">
                <div className="cat-meta-row">
                  <span className="cat-model-count-tag">
                    {current.products.length} {current.products.length > 1 ? 'MODELS AVAILABLE' : 'MODEL AVAILABLE'}
                  </span>
                  <span className="cat-location-tag">KATHWADA WORKS · AHMEDABAD</span>
                </div>
                <h2 className="cat-hero-title">{current.name}</h2>
                <p className="cat-hero-tagline">{current.tagline}</p>
                <p className="cat-hero-description">{current.description}</p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="industrial-products-grid">
              {filteredProducts.map((p, index) => (
                <article className="industrial-product-card" key={p.id}>
                  {/* Card Header Tag */}
                  <div className="product-card-top-tag">
                    <span className="product-index-code">MODEL #{String(index + 1).padStart(2, '0')}</span>
                    <span className="product-status-tag">HEAVY INDUSTRIAL</span>
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
              ))}
            </div>
          ) : (
            <div className="products-empty-state">
              <div className="empty-state-card">
                <SlidersHorizontal size={36} className="empty-icon text-gold" />
                <h3>No Machinery Models Found</h3>
                <p>
                  No machinery models in &quot;{current.name}&quot; matched your search for &quot;{searchQuery}&quot;.
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

      {/* Industrial Page Bottom CTA Strip */}
      <section className="industrial-cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-banner-text">
            <span className="tech-mono-badge">CUSTOM ENGINEERING CAPABILITY</span>
            <h2 className="cta-headline">
              Need a Custom Conveyor Line or Site Assessment?
            </h2>
            <p className="cta-subtext">
              Our engineers fabricate customized conveyors, in-line strapping arches, and integration layouts tailored to your exact floor plan.
            </p>
          </div>
          <div className="cta-banner-actions">
            <Link to="/contact" className="button button-gold cta-main-btn">
              <span>Get a Custom Quote</span>
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
