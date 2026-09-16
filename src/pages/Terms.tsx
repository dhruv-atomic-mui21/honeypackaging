import SEO from '@/components/SEO';
import { FileText, Mail, Phone, MapPin } from 'lucide-react';

export default function Terms() {
  return (
    <main className="page-main">
      <SEO
        title="Terms & Conditions | Honey Packaging"
        description="Commercial terms and conditions for industrial machinery supply, customization, and warranty by Honey Packaging Ahmedabad."
        path="/terms"
      />

      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="section-kicker light">Commercial Agreement</span>
          <h1 className="page-title">Terms &amp;<br /><em>Conditions.</em></h1>
          <p className="page-lead">
            Standard terms governing website usage, machine quotations, customized conveyor manufacturing, and equipment supply.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="container legal-container">
          <div className="legal-card">
            <div className="legal-header">
              <FileText size={28} className="text-gold" />
              <div>
                <h2>Commercial Terms of Supply &amp; Service</h2>
                <p className="legal-meta">Effective: September 2026 · Honey Packaging, Ahmedabad, Gujarat · GSTIN: 24BIVPP5437N1ZD</p>
              </div>
            </div>

            <article className="legal-body">
              <section>
                <h3>1. Agreement Scope</h3>
                <p>
                  These Terms and Conditions apply to all inquiries, quotations, purchase orders, customization specifications, and machine supply agreements executed between <strong>Honey Packaging</strong> (&quot;Supplier&quot;) and the procuring business entity (&quot;Buyer&quot;). By browsing this website or submitting a quote request, you agree to comply with these terms.
                </p>
              </section>

              <section>
                <h3>2. Quotations and Commercial Offers</h3>
                <ul>
                  <li>Any formal machinery proposal or quotation issued by Honey Packaging remains valid for <strong>30 days</strong> from the date of issuance unless explicitly stated otherwise in writing.</li>
                  <li>Quotations are based on the specific carton dimensions, line speed, material weight, and electrical power specifications provided by the Buyer. Any alteration in technical requirements may necessitate a revised commercial quotation.</li>
                  <li>All machine prices quoted exclude Goods and Services Tax (GST) unless specified. Applicable GST (under code 24BIVPP5437N1ZD) and freight/logistics charges will be charged on the final invoice.</li>
                </ul>
              </section>

              <section>
                <h3>3. Machine Customization &amp; Site Readiness</h3>
                <p>
                  For customized conveyor systems, online strapping lines, and automated pallet stretch wrappers:
                </p>
                <ul>
                  <li>The Buyer is responsible for ensuring factory floor layout dimensions, power supply (voltage, phase, frequency), and pneumatic compressed air lines match the technical data sheet agreed upon prior to dispatch.</li>
                  <li>Honey Packaging engineers provide on-site installation, line integration, and operator training within Gujarat and across designated Indian industrial belts as outlined in the commercial contract.</li>
                </ul>
              </section>

              <section>
                <h3>4. Payment Terms &amp; Dispatch</h3>
                <p>
                  Standard manufacturing payment terms are defined on each proforma invoice (typically an advance payment upon order confirmation and the balance prior to factory dispatch or upon proof of inspection). Title to supplied machinery passes to the Buyer only upon receipt of full payment.
                </p>
              </section>

              <section>
                <h3>5. Warranty &amp; After-Sales Support</h3>
                <ul>
                  <li>All industrial packaging machines supplied by Honey Packaging carry a standard <strong>12-month manufacturer warranty</strong> covering manufacturing defects in workmanship and core mechanical components.</li>
                  <li>Warranty does not cover normal wear-and-tear items (such as heating elements, cutter blades, belts, and silicone rollers), nor damage caused by electrical surges, operational negligence, or unauthorized modifications.</li>
                  <li>Genuine spare parts, maintenance support, and consumables (polypropylene strapping rolls, shrink film, tape) are available directly from our Kathwada, Ahmedabad facility.</li>
                </ul>
              </section>

              <section>
                <h3>6. Intellectual Property</h3>
                <p>
                  All machine photographs, technical diagrams, trademarks (including the Honey Packaging brand mark and registered insignia), and website content published on <strong>honeypackaging.in</strong> are the exclusive intellectual property of Honey Packaging. Unauthorized duplication or reproduction for commercial misuse is strictly prohibited.
                </p>
              </section>

              <section>
                <h3>7. Limitation of Liability &amp; Force Majeure</h3>
                <p>
                  Honey Packaging shall not be liable for secondary, indirect, or consequential production losses arising from equipment downtime. Delivery and installation schedules are subject to force majeure conditions including extreme weather, grid failures, supply chain disruptions, or statutory transport restrictions.
                </p>
              </section>

              <section>
                <h3>8. Governing Law &amp; Jurisdiction</h3>
                <p>
                  These terms and all commercial transactions shall be construed and governed in accordance with the laws of the Republic of India. Any legal claims or disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong>Ahmedabad, Gujarat, India</strong>.
                </p>
              </section>

              <section>
                <h3>9. Contact Information</h3>
                <div className="legal-contact-box">
                  <p><strong>Honey Packaging — Commercial Desk</strong></p>
                  <p><MapPin size={14} /> Factory: A/106, Shrinath Industrial Estate Park, Nr. Hingalag mata Mandir, Opp. Sharnam Estate, Kathwada, Ahmedabad – 382430, Gujarat</p>
                  <p><Phone size={14} /> Phone: +91 99099 22785</p>
                  <p><Mail size={14} /> Email: <a href="mailto:honeypackaging2007@gmail.com">honeypackaging2007@gmail.com</a></p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
