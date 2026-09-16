import SEO from '@/components/SEO';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="page-main">
      <SEO
        title="Privacy Policy | Honey Packaging"
        description="Privacy policy and data protection terms for Honey Packaging, manufacturer of packaging machinery in Ahmedabad, Gujarat."
        path="/privacy-policy"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Legal &amp; Transparency</span>
          <h1 className="page-title">Privacy<br /><em>Policy.</em></h1>
          <p className="page-lead">
            How Honey Packaging collects, protects, and handles your information when you request quotes or communicate with our team.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container legal-container">
          <div className="legal-card">
            <div className="legal-header">
              <ShieldCheck size={28} className="text-gold" />
              <div>
                <h2>Honey Packaging Privacy Statement</h2>
                <p className="legal-meta">Last Updated: September 2026 · Registered in Gujarat (GSTIN: 24BIVPP5437N1ZD)</p>
              </div>
            </div>

            <article className="legal-body">
              <section>
                <h3>1. Introduction</h3>
                <p>
                  Honey Packaging (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), founded in 2007 by Jasapal Puvar and headquartered in Kathwada, Ahmedabad, Gujarat, is committed to respecting and protecting the privacy of our website visitors, clients, and partners. This Privacy Policy details how we collect, store, use, and protect personal and business information submitted through <strong>honeypackaging.in</strong>.
                </p>
              </section>

              <section>
                <h3>2. Information We Collect</h3>
                <p>We only collect information necessary to fulfill your technical packaging requirements, provide equipment quotes, and provide after-sales assistance. This includes:</p>
                <ul>
                  <li><strong>Contact Details:</strong> Your full name, telephone/mobile number, and business email address.</li>
                  <li><strong>Company Information:</strong> Organization name, industry vertical, and factory or warehouse location.</li>
                  <li><strong>Machinery Specifications:</strong> Details regarding your packaging line requirements (carton dimensions, production speeds, pallet sizes, and throughput volumes).</li>
                  <li><strong>Technical Usage Data:</strong> Non-personally identifiable diagnostic data such as browser type, operating system, and IP address for security, rate-limiting, and fraud prevention.</li>
                </ul>
              </section>

              <section>
                <h3>3. How We Use Your Information</h3>
                <p>Your details are used exclusively for legitimate commercial operations:</p>
                <ul>
                  <li>Responding to quote requests with technical machinery proposals and pricing.</li>
                  <li>Scheduling site assessments at your manufacturing facility in Ahmedabad, Himatnagar, or across Gujarat.</li>
                  <li>Coordinating machine installation, commissioning, warranty, and operator training.</li>
                  <li>Sending transaction notices, invoicing, and service updates.</li>
                  <li>Preventing abusive automated submissions and ensuring website security.</li>
                </ul>
                <p><strong>We do not sell, rent, trade, or monetize your contact information with any external marketing agencies or third parties.</strong></p>
              </section>

              <section>
                <h3>4. Email Communications &amp; Resend API</h3>
                <p>
                  Quote requests submitted through our website are securely transmitted to our administrative offices via encrypted API integration (Resend). If an email address is provided, an automated confirmation message is returned to acknowledge your inquiry. You will never receive unsolicited marketing campaigns from us.
                </p>
              </section>

              <section>
                <h3>5. Cookies and Local Storage</h3>
                <p>
                  We utilize lightweight, essential cookies and browser local storage solely to remember user preferences (such as cookie consent choices) and maintain site functionality. We do not use intrusive third-party cross-site behavioral tracking cookies.
                </p>
              </section>

              <section>
                <h3>6. Data Retention and Security</h3>
                <p>
                  We implement robust technical and procedural safeguards to prevent unauthorized access, alteration, or disclosure of your business inquiries. Commercial correspondence is retained only as long as necessary to support machinery service warranties, statutory tax record-keeping (under Indian GST regulations), and ongoing customer support.
                </p>
              </section>

              <section>
                <h3>7. Your Rights</h3>
                <p>
                  Under applicable Indian information technology and data protection regulations, you have the right to request access to the data we hold regarding your business inquiries, request correction of erroneous records, or request deletion of obsolete communications.
                </p>
              </section>

              <section>
                <h3>8. Contact Us Regarding Privacy</h3>
                <p>For any privacy-related inquiries, data modification requests, or questions regarding our operational compliance:</p>
                <div className="legal-contact-box">
                  <p><strong>Honey Packaging — Grievance &amp; Privacy Officer</strong></p>
                  <p><MapPin size={14} /> Factory: A/106, Shrinath Ind. Estate Park, Nr. Hingalag mata Mandir, Opp. Sharnam Estate, Kathwada, Ahmedabad – 382430, Gujarat</p>
                  <p><Phone size={14} /> Direct: +91 99099 22785</p>
                  <p><Mail size={14} /> Email: <a href="mailto:honeypackaging2007@gmail.com">honeypackaging2007@gmail.com</a> / <a href="mailto:honeypackaging1978@gmail.com">honeypackaging1978@gmail.com</a></p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
