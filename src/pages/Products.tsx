import { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, Check, Phone, MessageCircle, Search, X } from 'lucide-react';
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

  // Search filtering
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
    <main className="page-main">
      <SEO
        title="Industrial Packaging Machines & Conveyors | Honey Packaging"
        description="Explore our full catalogue of box strapping machines, pallet stretch wrappers, carton sealers, shrink tunnels & customized conveyors. Sourced and serviced in Ahmedabad, Gujarat."
        path="/products"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Industrial Machinery Catalogue</span>
          <h1 className="page-title">
            All Our<br />
            <em>Packaging Solutions.</em>
          </h1>
          <p className="page-lead">
            Manufactured, supplied, and supported from Kathwada, Ahmedabad. Every machine customizable to your package specifications and line throughput.
          </p>
        </div>
      </section>

      <section className="section products-full-section">
        <div className="container">
          {/* Category Tabs & Quick Search */}
          <div className="cat-nav-toolbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div className="cat-tabs" role="tablist" aria-label="Product Categories" style={{ marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active === c.id}
                  className={`cat-tab ${active === c.id ? 'cat-tab-active' : ''}`}
                  onClick={() => handleTabClick(c.id)}
                >
                  <c.icon size={16} />
                  <span>{c.name}</span>
                </button>
              ))}
            </div>

            <div style={{ position: 'relative', minWidth: '260px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${current.name}...`}
                style={{
                  padding: '9px 36px 9px 36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-light)',
                  background: '#ffffff',
                  fontSize: '0.9rem',
                  width: '100%',
                }}
                aria-label={`Search in ${current.name}`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Active Category Header */}
          <div className="cat-detail">
            <div className="cat-detail-header">
              <div className={`cat-icon-lg ${current.tone}`}>
                <current.icon size={28} />
              </div>
              <div>
                <h2>{current.name}</h2>
                <p className="cat-tagline">{current.tagline}</p>
                <p className="cat-desc">{current.description}</p>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="product-detail-grid">
                {filteredProducts.map((p) => (
                  <article className="product-detail-card" key={p.id}>
                    <div className="product-img-frame">
                      <img
                        src={p.image}
                        alt={p.alt}
                        width="400"
                        height="300"
                        loading="lazy"
                        className="product-card-img"
                      />
                    </div>
                    <div className="product-card-body">
                      <h3>{p.name}</h3>
                      <p className="product-short-desc">{p.shortDesc}</p>

                      {p.specs.length > 0 && (
                        <ul className="product-specs">
                          {p.specs.map((s) => (
                            <li key={s}>
                              <Check size={13} className="spec-check-icon" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="product-card-actions">
                        <Link
                          to={`/contact?need=${encodeURIComponent(p.name)}`}
                          className="button button-primary-sm full-width"
                        >
                          Request Quote <ArrowRight size={14} />
                        </Link>
                        <a
                          href={`https://wa.me/919909922785?text=${encodeURIComponent(
                            `Hello Honey Packaging, I want to inquire about the ${p.name}.`
                          )}`}
                          className="button button-ghost-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Inquire about ${p.name} on WhatsApp`}
                        >
                          <MessageCircle size={14} /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-muted)' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                  No machinery models found matching &quot;{searchQuery}&quot; in {current.name}.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="button button-ghost-sm"
                  style={{ marginTop: '12px' }}
                >
                  Clear search filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="page-cta-strip">
        <div className="container page-cta-inner">
          <div>
            <h3>Need a custom line configuration or site assessment?</h3>
            <p>Our engineers fabricate customized conveyors and integration layouts tailored to your exact floor plan.</p>
          </div>
          <div className="cta-button-group">
            <Link to="/contact" className="button button-primary">
              Get a Custom Quote <ArrowRight size={16} />
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
