import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Factory,
  Headset,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveRight,
  PackageCheck,
  Phone,
  Quote,
  ScanLine,
  Send,
  Settings2,
  ShieldCheck,
  Tag,
  X,
  Zap,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/18631424/pexels-photo-18631424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const products = [
  { name: 'Strapping machines', detail: 'Secure cartons in seconds', icon: Boxes, tone: 'gold' },
  { name: 'Carton sealing', detail: 'Consistent top & bottom sealing', icon: PackageCheck, tone: 'blue' },
  { name: 'Stretch wrapping', detail: 'Stable, protected pallets', icon: CircleDot, tone: 'green' },
  { name: 'Shrink packaging', detail: 'Clean finish for every pack', icon: Settings2, tone: 'orange' },
  { name: 'Coding & marking', detail: 'Traceable product identity', icon: ScanLine, tone: 'red' },
  { name: 'Labelling machines', detail: 'Fast, accurate application', icon: Tag, tone: 'teal' },
  { name: 'Conveyors', detail: 'Move product with ease', icon: MoveRight, tone: 'navy' },
];

const benefits = [
  { icon: Settings2, title: 'Right-fit machinery', text: 'Practical recommendations based on your product, pace and packing line.' },
  { icon: ShieldCheck, title: 'Built for industry', text: 'Dependable equipment selected for daily production environments.' },
  { icon: Headset, title: 'Support that stays close', text: 'From installation to technical guidance, our team is a call away.' },
  { icon: Zap, title: 'Faster decisions', text: 'Share your requirement and get a clear machine recommendation quickly.' },
];

const industries = ['Food & beverage', 'FMCG & consumer goods', 'Pharmaceuticals', 'Warehouses & e-commerce', 'Agro products', 'Engineering & manufacturing'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Industrial packaging & printing solutions</span>
          <div className="topbar-links">
            <a href="mailto:honeypackaging2007@gmail.com"><Mail size={14} /> honeypackaging2007@gmail.com</a>
            <a href="tel:+919909922785"><Phone size={14} /> +91 99099 22785</a>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark"><span>H</span><i>p</i></span>
            <span><strong>HONEY</strong><b>PACKAGING</b></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#about" onClick={closeMenu}>Why Honey</a>
            <a href="#industries" onClick={closeMenu}>Industries</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#quote" onClick={closeMenu}>Get a quote <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Ahmedabad · Gujarat · India</div>
              <h1>Pack smarter.<br /><em>Move faster.</em></h1>
              <p className="hero-lead">Industrial packaging machines and printing solutions for manufacturers who keep India moving.</p>
              <div className="hero-actions">
                <a href="#quote" className="button button-primary">Find your machine <ArrowRight size={17} /></a>
                <a href="https://wa.me/919909922785" className="button button-ghost"><MessageCircle size={17} /> WhatsApp us</a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars"><span>HP</span><span>IN</span><span>24</span></div>
                <p><strong>Serving manufacturers across Gujarat</strong><br />with responsive, practical support.</p>
              </div>
            </div>
            <div className="hero-visual">
              <div className="image-frame"><img src={heroImage} alt="Automated bottles moving through a factory conveyor" /></div>
              <div className="visual-stamp"><BadgeCheck size={20} /><span>End-to-end<br /><strong>line solutions</strong></span></div>
              <div className="visual-note"><span className="pulse" /> Machines that<br /><strong>work as hard as you do.</strong></div>
              <div className="hero-line" />
            </div>
          </div>
          <div className="scroll-cue"><span /> Scroll to explore</div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-intro"><span className="section-kicker">One partner</span><strong>From first pack<br />to final dispatch.</strong></div>
            <div className="trust-item"><Factory size={22} /><span>Ahmedabad based<br /><b>industrial expertise</b></span></div>
            <div className="trust-item"><PackageCheck size={22} /><span>Complete end-of-line<br /><b>packaging systems</b></span></div>
            <div className="trust-item"><Clock3 size={22} /><span>Fast response<br /><b>local support</b></span></div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="section-kicker">The machine room</span><h2>Everything your<br /><em>line needs next.</em></h2></div>
              <div className="heading-side"><p>Choose the right equipment for your product, volume and workflow. We help you make the confident call.</p><a className="text-link" href="#quote">View all solutions <ArrowRight size={16} /></a></div>
            </div>
            <div className="product-grid">
              {products.map(({ name, detail, icon: Icon, tone }) => (
                <a className={`product-card ${tone}`} href="#quote" key={name}>
                  <div className="product-icon"><Icon size={25} /></div>
                  <div><h3>{name}</h3><p>{detail}</p></div>
                  <ArrowRight className="card-arrow" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-section" id="about">
          <div className="container about-grid">
            <div className="about-art"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>HP</span><small>EST. 2007</small></div><div className="art-label label-one">SEAL</div><div className="art-label label-two">PRINT</div><div className="art-label label-three">MOVE</div></div>
            <div className="about-copy"><span className="section-kicker light">The Honey difference</span><h2>Less guesswork.<br /><em>More throughput.</em></h2><p>For more than a decade, Honey Packaging has helped businesses across Gujarat bring order, speed and consistency to the way they pack.</p><div className="benefit-list">{benefits.map(({ icon: Icon, title, text }) => <div className="benefit" key={title}><div className="benefit-icon"><Icon size={18} /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
          </div>
        </section>

        <section className="section solutions-section" id="solutions">
          <div className="container solution-grid">
            <div className="solution-copy"><span className="section-kicker">Built around your output</span><h2>Not just a machine.<br /><em>A better rhythm.</em></h2><p>From the first carton to the final pallet, we help you create a smoother packing flow with equipment that fits your floor, team and ambition.</p><div className="check-list"><span><Check size={16} /> Machine selection for your application</span><span><Check size={16} /> Installation and technical assistance</span><span><Check size={16} /> Reliable Gujarat-based support</span></div><a href="#quote" className="button button-dark">Talk to an expert <ArrowRight size={17} /></a></div>
            <div className="flow-card"><div className="flow-header"><span>PACKING FLOW / 01</span><span className="live"><i /> LIVE READY</span></div><div className="flow-visual"><div className="flow-machine machine-one"><div className="machine-screen" /><div className="machine-leg" /></div><div className="flow-belt"><span /><span /><span /><span /></div><div className="flow-machine machine-two"><div className="machine-top" /><div className="machine-leg" /></div><div className="flow-box box-one" /><div className="flow-box box-two" /></div><div className="flow-footer"><span><strong>04</strong> connected stages</span><span><strong>01</strong> clearer workflow</span></div></div>
          </div>
        </section>

        <section className="section industries-section" id="industries">
          <div className="container industries-grid"><div><span className="section-kicker">Made for making</span><h2>Wherever products<br /><em>need to move.</em></h2></div><div className="industry-list">{industries.map((industry, index) => <div className="industry-item" key={industry}><span>0{index + 1}</span><strong>{industry}</strong><ArrowRight size={16} /></div>)}</div></div>
        </section>

        <section className="quote-section" id="quote">
          <div className="container quote-grid"><div className="quote-intro"><span className="section-kicker light">Start a conversation</span><h2>Tell us what<br /><em>you’re packing.</em></h2><p>We’ll help you find the right machine for your product, production and place.</p><div className="contact-details"><a href="tel:+919909922785"><Phone size={17} /> +91 99099 22785</a><a href="mailto:honeypackaging2007@gmail.com"><Mail size={17} /> honeypackaging2007@gmail.com</a><span><MapPin size={17} /> Kathwada, Ahmedabad · Himatnagar</span></div></div><div className="quote-form-card">{submitted ? <div className="success-state"><div className="success-icon"><Check size={26} /></div><h3>Requirement received.</h3><p>Thank you. Our team will get back to you shortly with a suitable machine recommendation.</p><button className="button button-dark" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form onSubmit={submitQuote}><div className="form-heading"><span>QUICK QUOTE</span><Quote size={19} /></div><div className="form-row"><label><span>Your name</span><input required placeholder="e.g. Arjun Patel" /></label><label><span>Company name</span><input required placeholder="Your company" /></label></div><div className="form-row"><label><span>Phone number</span><input required type="tel" placeholder="+91" /></label><label><span>What do you need?</span><select defaultValue=""><option value="" disabled>Select a solution</option><option>Strapping machine</option><option>Carton sealing machine</option><option>Stretch wrapping machine</option><option>Coding or labelling</option><option>Conveyor system</option><option>Not sure yet</option></select></label></div><label><span>Tell us about your requirement</span><textarea required placeholder="Product, production volume, location..." rows={3} /></label><button type="submit" className="button button-primary full-width">Request my recommendation <Send size={16} /></button><small>We respect your inbox. No unnecessary follow-ups.</small></form>}</div></div>
        </section>
      </main>

      <footer className="footer" id="contact"><div className="container footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><span>H</span><i>p</i></span><span><strong>HONEY</strong><b>PACKAGING</b></span></a><p>Industrial packaging & printing solutions for a moving India.</p><div className="social-row"><a href="https://wa.me/919909922785" aria-label="WhatsApp"><MessageCircle size={17} /></a><a href="mailto:honeypackaging2007@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="tel:+919909922785" aria-label="Phone"><Phone size={17} /></a></div></div><div className="footer-column"><span>Explore</span><a href="#products">Products</a><a href="#solutions">Solutions</a><a href="#about">Why Honey</a><a href="#industries">Industries</a></div><div className="footer-column wide"><span>Visit us</span><p><b>Factory</b><br />A/106, Shrinath Industrial Estate Park,<br />Kathwada, Ahmedabad – 382430</p><p><b>Head office</b><br />93, Maruti Avenue, Himatnagar,<br />Sabarkantha – 383001</p></div></div><div className="container footer-bottom"><span>© 2024 Honey Packaging. All rights reserved.</span><span>Designed for better packing.</span></div></footer>
      <a className="floating-whatsapp" href="https://wa.me/919909922785" aria-label="Chat on WhatsApp"><MessageCircle size={22} /><span>Chat with us</span></a>
    </div>
  );
}

export default App;
