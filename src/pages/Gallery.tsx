import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ImageIcon, ArrowRight, X, MessageCircle, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: string;
  client?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g-pallet-factory',
    src: '/images/gallery/gallery-pallet-wrapping-factory.webp',
    title: 'High-Volume Pallet Stretch Wrapper in Operation',
    caption: 'Automatic turntable pallet stretch wrapping line stabilizing bulk palletized goods at a major manufacturing client plant in Gujarat.',
    category: 'Pallet Wrapping',
    client: 'Gujarat Industrial Client Plant',
  },
  {
    id: 'g-shubhalakshmi',
    src: '/images/gallery/gallery-strapping-shubhalakshmi.webp',
    title: 'Automatic Conveyor Strapping Line',
    caption: 'High-speed automated carton strapping integration on powered roller conveyor for Shubhalakshmi Polyesters Ltd.',
    category: 'Strapping',
    client: 'Shubhalakshmi Polyesters Ltd',
  },
  {
    id: 'g-agl-tiles',
    src: '/images/gallery/gallery-strapping-agl-tiles.webp',
    title: 'AGL Tiles Packaging Line Strapping Station',
    caption: 'Heavy-duty automatic strapping machine securing ceramic tile boxes with precision tensioning in daily shift operations.',
    category: 'Strapping',
    client: 'AGL Tiles Packaging Unit',
  },
  {
    id: 'g-conveyor-warehouse',
    src: '/images/gallery/gallery-conveyor-warehouse-line.webp',
    title: 'Customized Heavy-Duty Powered Roller Conveyor System',
    caption: 'Fabricated motorized roller conveyor line facilitating uninterrupted carton flow between carton sealing and strapping stages.',
    category: 'Conveyors',
    client: 'Industrial Warehouse & Logistics Hub',
  },
  {
    id: 'g-strapping-workshop',
    src: '/images/gallery/gallery-strapping-shrink-workshop.webp',
    title: 'Semi-Auto Strapping & Shrink Packaging Cell',
    caption: 'Dual packaging setup featuring semi-automatic box strapping table alongside continuous heat shrink tunnel.',
    category: 'Strapping',
    client: 'Manufacturing Packing Floor',
  },
  {
    id: 'g-press-assembly',
    src: '/images/gallery/gallery-strapping-press-assembly.webp',
    title: 'Low Table Strapping Machine with Pneumatic Press',
    caption: 'Assembly and quality calibration of overhead pneumatic compression cylinder strapping machine at our Kathwada workshop.',
    category: 'Factory',
    client: 'Honey Packaging Kathwada Workshop',
  },
  {
    id: 'g-box-wrapper',
    src: '/images/gallery/gallery-box-wrapper-station.webp',
    title: 'Box Stretch Wrapping Station with Top Platen Clamp',
    caption: 'Compact turntable stretch wrapper with overhead pneumatic stabilization clamp for lightweight, tall carton boxes.',
    category: 'Pallet Wrapping',
    client: 'Export Packaging Assembly',
  },
  {
    id: 'g-carton-quality',
    src: '/images/gallery/gallery-strapped-carton-quality.webp',
    title: 'Finished Load Reinforcement with Virgin PP Strapping',
    caption: 'Cross-strapped corrugated carton demonstration showing high break-load weld integrity and uniform edge tension.',
    category: 'Quality',
    client: 'Quality Verification Test',
  },
  {
    id: 'g-internal-drive',
    src: '/images/gallery/gallery-strapping-internal-motor.webp',
    title: 'Precision Mechanical Drive Mechanism',
    caption: 'Direct-drive high-torque motor and electronic control module inside our heavy-duty semi-automatic strapping unit.',
    category: 'Factory',
    client: 'Engineering & Fabrication Detail',
  },
];

const categories = ['All', 'Strapping', 'Pallet Wrapping', 'Conveyors', 'Factory', 'Quality'];

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeModal, setActiveModal] = useState<GalleryItem | null>(null);

  // Close modal on Escape key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModal) {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const filteredItems =
    selectedCat === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCat);

  return (
    <main className="page-main">
      <SEO
        title="Plant Installations & Machine Gallery | Honey Packaging"
        description="View real photographs and video stills of packaging machine installations, automatic strapping lines, pallet wrappers, and custom conveyors across Gujarat factories."
        path="/gallery"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Field Proven Performance</span>
          <h1 className="page-title">
            Machines in the<br />
            <em>Real World.</em>
          </h1>
          <p className="page-lead">
            Authentic photographs and documentation from actual client factory floors across Gujarat, including AGL Tiles, Shubhalakshmi Polyesters, and our Kathwada workshop.
          </p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gallery-filter-tabs" role="tablist" aria-label="Gallery filters">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCat === cat}
                className={`gallery-filter-tab ${selectedCat === cat ? 'active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <article
                className="gallery-item"
                key={item.id}
                onClick={() => setActiveModal(item)}
                tabIndex={0}
                role="button"
                aria-label={`View photo of ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModal(item);
                  }
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-top">
                    <span className="gallery-cat">{item.category}</span>
                    <span className="gallery-zoom-icon" aria-hidden="true">
                      <ZoomIn size={16} />
                    </span>
                  </div>
                  <h4>{item.title}</h4>
                  {item.client && <span className="gallery-client-badge">{item.client}</span>}
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-empty">
              <div className="gallery-empty-icon">
                <ImageIcon size={44} />
              </div>
              <h3>No items in this category yet</h3>
              <p>Check back soon as we upload more installation photos from our field visits.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enlarged Modal View */}
      {activeModal && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeModal.title}
        >
          <div className="gallery-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="gallery-modal-media">
              <img
                src={activeModal.src}
                alt={activeModal.title}
                className="gallery-modal-img"
              />
            </div>
            <div className="gallery-modal-info">
              <span className="modal-cat-tag">{activeModal.category}</span>
              <h2>{activeModal.title}</h2>
              {activeModal.client && (
                <p className="modal-client-line">
                  <strong>Location / Deployment:</strong> {activeModal.client}
                </p>
              )}
              <p className="modal-caption-text">{activeModal.caption}</p>

              <div className="modal-actions">
                <Link
                  to={`/contact?need=${encodeURIComponent(activeModal.title)}`}
                  className="button button-primary"
                  onClick={() => setActiveModal(null)}
                >
                  Inquire About This Setup <ArrowRight size={15} />
                </Link>
                <a
                  href={`https://wa.me/919909922785?text=${encodeURIComponent(
                    `Hello Honey Packaging, I saw the "${activeModal.title}" in your gallery and would like a quote.`
                  )}`}
                  className="button button-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} /> WhatsApp Discussion
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <section className="page-cta-strip">
        <div className="container page-cta-inner">
          <div>
            <h3>Want to see videos of our machines in operation?</h3>
            <p>Connect with our engineering team on WhatsApp for video walkthroughs and technical specs.</p>
          </div>
          <div className="cta-button-group">
            <Link to="/contact" className="button button-primary">
              Request Machinery Video <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919909922785"
              className="button button-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp +91 99099 22785
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
