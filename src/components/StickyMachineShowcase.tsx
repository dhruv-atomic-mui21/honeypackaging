import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  MoveRight,
  ShieldCheck,
  Zap,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ShowcaseItem {
  id: string;
  category: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  inquiryName: string;
  categorySlug: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'strapping-systems',
    category: 'Box Strapping Machinery',
    code: 'SYS-STR-01',
    title: 'Automatic & Semi-Auto Box Strapping Systems',
    tagline: 'High-speed friction heat welding for industrial carton stabilization',
    description:
      'Engineered for rigorous daily factory shifts across Gujarat. Features heavy-gauge steel chassis, high-torque direct feed motors, and instant thermal friction welding. Available in standalone foot-pedal tables, multi-directional ball-roller tops for heavy cartons, and fully motorized conveyor online systems.',
    image: '/images/catalog/strapping-semi-auto-mst-n.webp',
    alt: 'Semi-automatic and automated box strapping machinery',
    badge: 'HEAVY INDUSTRIAL DUTY',
    categorySlug: 'strapping',
    specs: [
      { label: 'Strap Width', value: '5 mm – 15 mm' },
      { label: 'Cycle Speed', value: '1.5 – 2.0 sec / cycle' },
      { label: 'Seal Mechanism', value: 'Thermal Friction Weld' },
      { label: 'Tension Range', value: '15 – 45 kgf adjustable' },
      { label: 'Power Supply', value: '220V / 50Hz AC' },
      { label: 'Operation Mode', value: 'Tabletop & In-Line Automation' },
    ],
    highlights: [
      'Zero strap jamming mechanism with auto strap loop ejector',
      'Instant 5-second warm-up heating blade for rapid shift starts',
      'Wear-resistant alloy worktable tested for heavy 50kg+ cartons',
      'Dual presence support with genuine spares from Kathwada, Ahmedabad',
    ],
    inquiryName: 'Box Strapping Machine',
  },
  {
    id: 'pallet-wrapping',
    category: 'Pallet',
    code: 'SYS-PLT-02',
    title: 'M-Type & Turntable Pallet Stretch Wrappers',
    tagline: 'Moisture-tight stability with up to 250% power pre-stretch film yield',
    description:
      'Turnkey pallet wrapping machinery preventing transit damage, moisture ingress, and load collapse for export and domestic transit. Features M-Type drive-in cutouts for hand pallet trucks without ramps, automatic optical photo-eyes for pallet height detection, and heavy-duty 2,000 kg turntable capacities.',
    image: '/images/products/pallet-wrapper-ntype.webp',
    alt: 'M-Type Pallet Stretch Wrapper with hand pallet truck driveway cutout turntable',
    badge: 'EXPORT CONTAINER CERTIFIED',
    categorySlug: 'pallet',
    specs: [
      { label: 'Turntable Design', value: 'M-Type Cutout & Standard Turntable' },
      { label: 'Max Pallet Load', value: 'Up to 2,000 kg' },
      { label: 'Pre-Stretch Ratio', value: 'Up to 250% – 300%' },
      { label: 'Turntable Speed', value: '0 – 12 RPM (VFD variable)' },
      { label: 'Mast Height', value: 'Standard 2,400 mm (Custom up to 3,000 mm)' },
      { label: 'Film Roll Size', value: 'Width 500 mm, Dia 250 mm' },
    ],
    highlights: [
      'M-Type turntable allows hand-pallet trucks to roll right in without a ramp',
      'Power pre-stretch film carriage slashes consumable film usage by 50%',
      'Precision top and bottom reinforcement wrap counters (1–9 cycles)',
      'Infrared safety photo-eye auto-detects variable pallet heights',
    ],
    inquiryName: 'Pallet Wrapping Machine M-Type',
  },
  {
    id: 'carton-sealing',
    category: 'Carton Sealing Machines',
    code: 'SYS-CSL-03',
    title: 'Top & Bottom Drive and Random Carton Sealers',
    tagline: 'Flawless BOPP tape application with automatic 4-flap folding',
    description:
      'Continuous-line carton sealers engineered to eliminate manual tape packaging bottlenecks. Synchronous dual top and bottom drive belts guarantee smooth travel for tall, unstable, or heavy cartons. Available in standard batch height setups or pneumatic auto-sensing random sealers with automatic flap folding.',
    image: '/images/products/auto-random-carton.webp',
    alt: 'Automatic random carton sealer with pneumatic flap closing mechanism',
    badge: 'CONTINUOUS LINE PACKAGING',
    categorySlug: 'sealer',
    specs: [
      { label: 'Sealing Speed', value: 'Up to 25 meters/minute' },
      { label: 'Tape Width', value: '48 mm, 60 mm, 72 mm BOPP' },
      { label: 'Drive Type', value: 'Synchronous Top & Bottom Belts' },
      { label: 'Flap Closure', value: 'Automatic Pneumatic 4-Flap' },
      { label: 'Air Pressure', value: '6 Bar (for pneumatic models)' },
      { label: 'Frame Material', value: 'Powder-coated Carbon Steel' },
    ],
    highlights: [
      'Tension-controlled tape dispensing heads prevent tape breakage and wrinkle',
      'Self-centering pneumatic side guides adapt instantaneously to box size',
      'Integrated infeed and outfeed roller extensions for easy manual transfer',
      'Low noise operation under 75dB suitable for indoor packing bays',
    ],
    inquiryName: 'Auto Random Carton Sealing with Flap Closure',
  },
  {
    id: 'shrink-packaging',
    category: 'Shrink Packaging & Tunnels',
    code: 'SYS-SHR-04',
    title: 'Continuous Heat Shrink Tunnels & Web Sealers',
    tagline: '360° uniform recirculating hot-air contraction for tamper-proof retail bundling',
    description:
      'High-throughput heat shrink systems for cans, bottles, pharmaceutical multipacks, and consumer goods. Incorporates precision digital PID temperature management, high-volume hot-air blower chambers, and continuous silicone-sleeved roller conveyor drives for impeccable POF, PVC, and PE wrap finishes.',
    image: '/images/products/web-sealer-shrink.webp',
    alt: 'Web sealer with continuous heat shrink tunnel',
    badge: '360° UNIFORM CONDUCTION',
    categorySlug: 'shrink',
    specs: [
      { label: 'Tunnel Temp', value: '100°C – 220°C PID controlled' },
      { label: 'Conveyor Speed', value: '0 – 15 m/min adjustable' },
      { label: 'Film Compatibility', value: 'POF, PVC, PE Shrink Film' },
      { label: 'Heating Elements', value: 'Stainless Quartz Tubes' },
      { label: 'Blower System', value: 'Dual High-Velocity Recirculation' },
      { label: 'Cooling Section', value: 'Integrated Outfeed Air Blast' },
    ],
    highlights: [
      'Dual-layer thermal insulation minimizes factory floor heat dissipation',
      'Variable-speed heat-resistant Teflon mesh or steel roller bed',
      'Teflon-coated cutter blade ensures clean, smoke-free weld seams',
      'Custom tunnel height apertures built to match oversized product cartons',
    ],
    inquiryName: 'Web Sealer with Shrink Tunnel',
  },
  {
    id: 'custom-conveyors',
    category: 'Custom Conveyor Automation',
    code: 'SYS-CNV-05',
    title: 'Motorized Belt & Gravity Roller Conveyor Lines',
    tagline: 'Fabricated to your plant floor blueprint, production elevation, and speed',
    description:
      'Custom-engineered conveyor systems built in Kathwada, Ahmedabad to synchronize your entire packing sequence. From stainless washdown food lines to heavy-duty motorized belt conveyors with VFD speed regulation and gravity roller transfer tables, we integrate your packing stations into one bottleneck-free circuit.',
    image: '/images/products/belt-conveyor.webp',
    alt: 'Motorized industrial belt conveyor system',
    badge: 'TAILORED PLANT INTEGRATION',
    categorySlug: 'conveyors',
    specs: [
      { label: 'Conveyor Types', value: 'Motorized Belt / Roller / Incline' },
      { label: 'Bed Width', value: '300 mm – 1,200 mm custom' },
      { label: 'Length Range', value: '1 meter – 50+ meters linked' },
      { label: 'Motor Drive', value: 'Geared Motor with VFD' },
      { label: 'Construction', value: 'Mild Steel / SS304 Food Grade' },
      { label: 'Roller Pitch', value: '50 mm – 150 mm ball bearing' },
    ],
    highlights: [
      'Fabricated directly to client plant drawings and floor constraints',
      'Seamless in-line integration with strapping arches and carton sealers',
      'Heavy-duty adjustable leveling castors and vibration dampers',
      'Rapid commissioning and on-site alignment by Honey Packaging engineers',
    ],
    inquiryName: 'Belt Conveyor',
  },
];

export default function StickyMachineShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Setup GSAP Pinned Horizontal Translation for desktop / tablet
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Use gsap.matchMedia for clean responsive handling
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      // Calculate total horizontal distance to travel
      const getScrollAmount = () => {
        return track.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const prog = self.progress;
            setProgressPercent(Math.round(prog * 100));
            const idx = Math.min(
              showcaseItems.length - 1,
              Math.floor(prog * showcaseItems.length)
            );
            setActiveIdx(idx);
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger ?? null;

      return () => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // Jump to specific card on clicking pill nav
  const jumpToSlide = (index: number) => {
    setActiveIdx(index);
    if (window.innerWidth < 768) {
      // On mobile, scroll horizontally inside mobile container
      if (trackRef.current) {
        const targetCard = trackRef.current.children[index] as HTMLElement;
        if (targetCard) {
          targetCard.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          });
        }
      }
    } else if (scrollTriggerRef.current) {
      // On desktop, scroll the page window to the exact ScrollTrigger progress
      const st = scrollTriggerRef.current;
      const targetProgress = index / (showcaseItems.length - 1);
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  // Mobile horizontal scroll spy
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMobileScroll = () => {
      if (window.innerWidth >= 768) return;
      const scrollLeft = track.scrollLeft;
      const cardWidth = track.firstElementChild ? (track.firstElementChild as HTMLElement).offsetWidth : 300;
      const current = Math.min(
        showcaseItems.length - 1,
        Math.round(scrollLeft / (cardWidth + 16))
      );
      setActiveIdx(current);
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll > 0) {
        setProgressPercent(Math.round((scrollLeft / maxScroll) * 100));
      }
    };

    track.addEventListener('scroll', handleMobileScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleMobileScroll);
  }, []);

  return (
    <section className="hscroll-section" id="machinery-showcase" ref={sectionRef}>
      {/* Background Subtle Grid Pattern */}
      <div className="hscroll-bg-grid" aria-hidden="true" />

      {/* Sticky Header Banner Bar */}
      <div className="hscroll-header-bar">
        <div className="container hscroll-header-inner">
          <div className="hscroll-title-column">
            <div className="hscroll-badge-row">
              <span className="hscroll-mono-badge">
                <span className="hscroll-pulse-dot" />
                SYSTEM SHOWCASE // DUAL GUJARAT PRESENCE
              </span>
              <span className="hscroll-location-tag">
                <MapPin size={12} className="text-orange" />
                KATHWADA · AHMEDABAD · HIMATNAGAR
              </span>
            </div>
            <h2 className="hscroll-main-title">
              Engineering That Powers{' '}
              <span className="text-orange-gradient">The Packaging Line.</span>
            </h2>
          </div>

          {/* Telemetry Progress & Quick Jump Indicators */}
          <div className="hscroll-controls-column">
            <div className="hscroll-telemetry-pill">
              <span className="hscroll-tele-code">
                {showcaseItems[activeIdx]?.code || 'SYS-01'}
              </span>
              <span className="hscroll-tele-sep">|</span>
              <span className="hscroll-tele-count">
                0{activeIdx + 1} / 0{showcaseItems.length}
              </span>
            </div>

            <div className="hscroll-pills-nav" role="tablist" aria-label="Machine navigation">
              {showcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activeIdx === idx}
                  className={`hscroll-pill-btn ${activeIdx === idx ? 'hscroll-pill-active' : ''}`}
                  onClick={() => jumpToSlide(idx)}
                >
                  <span className="hscroll-pill-num">0{idx + 1}</span>
                  <span className="hscroll-pill-label">{item.category.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Progress Bar Scrub Line */}
        <div className="hscroll-progress-line-track">
          <div
            className="hscroll-progress-line-bar"
            style={{ width: `${Math.max(5, progressPercent)}%` }}
          />
        </div>
      </div>

      {/* Horizontal Cards Viewport & Translating Track */}
      <div className="hscroll-viewport">
        <div className="hscroll-track" ref={trackRef}>
          {showcaseItems.map((item, idx) => (
            <article
              key={item.id}
              className={`hscroll-card ${activeIdx === idx ? 'hscroll-card-active' : ''}`}
            >
              {/* Visual Frame Column (Prominent Machine Photo Viewfinder) */}
              <div className="hscroll-card-visual">
                <div className="hscroll-vf-topbar">
                  <div className="hscroll-vf-identity">
                    <span className="hscroll-vf-status-dot" />
                    <span className="hscroll-vf-code">{item.code}</span>
                  </div>
                  <span className="hscroll-vf-index">
                    SYSTEM 0{idx + 1}
                  </span>
                </div>

                <div className="hscroll-viewfinder-photo-wrap">
                  <div className="hscroll-ch ch-tl">+</div>
                  <div className="hscroll-ch ch-tr">+</div>
                  <div className="hscroll-ch ch-bl">+</div>
                  <div className="hscroll-ch ch-br">+</div>

                  <img
                    src={item.image}
                    alt={item.alt}
                    width="520"
                    height="360"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="hscroll-machine-image"
                  />

                  <div className="hscroll-visual-badge">
                    <Zap size={13} className="text-orange" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                <div className="hscroll-vf-footer">
                  <Sparkles size={13} className="text-orange" />
                  <span>SAME-DAY DISPATCH FROM KATHWADA WORKS · DIRECT SPARES</span>
                </div>
              </div>

              {/* Data & Engineering Details Column */}
              <div className="hscroll-card-data">
                {/* Header Information */}
                <div className="hscroll-card-header">
                  <div className="hscroll-cat-lockup">
                    <span className="hscroll-cat-tag">{item.category}</span>
                    <span className="hscroll-badge-ghost">{item.badge}</span>
                  </div>
                  <h3 className="hscroll-card-title">{item.title}</h3>
                  <p className="hscroll-card-tagline">{item.tagline}</p>
                  <p className="hscroll-card-desc">{item.description}</p>
                </div>

                {/* Engineering Advantage Checklist */}
                <div className="hscroll-highlights-container">
                  <div className="hscroll-section-label">
                    <ShieldCheck size={14} className="text-orange" />
                    <span>HONEY PACKAGING ENGINEERING ADVANTAGE</span>
                  </div>
                  <ul className="hscroll-highlights-list">
                    {item.highlights.map((h) => (
                      <li key={h}>
                        <CheckCircle2 size={15} className="hscroll-hl-icon text-orange" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Footprint */}
                <div className="hscroll-cta-bar">
                  <Link
                    to={`/contact?need=${encodeURIComponent(item.inquiryName)}`}
                    className="button button-gold hscroll-cta-btn"
                  >
                    <span>Request Technical Quote</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={`https://wa.me/919909922785?text=${encodeURIComponent(
                      `Hello Honey Packaging, I want to inquire about specs and pricing for ${item.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp hscroll-cta-btn"
                    aria-label={`Inquire about ${item.title} on WhatsApp`}
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Engineer</span>
                  </a>

                  <Link
                    to={`/?category=${item.categorySlug}#products`}
                    className="button button-ghost-light hscroll-cta-btn"
                  >
                    <span>View Technical Specs</span>
                    <MoveRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile Hint / Navigation Arrow Bar */}
      <div className="hscroll-mobile-dock">
        <button
          type="button"
          className="hscroll-dock-btn"
          onClick={() => jumpToSlide(Math.max(0, activeIdx - 1))}
          disabled={activeIdx === 0}
          aria-label="Previous machine system"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        <span className="hscroll-dock-counter">
          0{activeIdx + 1} / 0{showcaseItems.length}
        </span>

        <button
          type="button"
          className="hscroll-dock-btn"
          onClick={() => jumpToSlide(Math.min(showcaseItems.length - 1, activeIdx + 1))}
          disabled={activeIdx === showcaseItems.length - 1}
          aria-label="Next machine system"
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
