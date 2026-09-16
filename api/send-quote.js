import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAILS = [
  process.env.OWNER_EMAIL || 'honeypackaging2007@gmail.com',
  'honeypackaging1978@gmail.com',
];
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, phone, email, need, message, hp_trap, website_url } = req.body || {};

    // 1. Honeypot check (anti-bot trap)
    if (hp_trap || website_url) {
      console.warn(`[AntiSpam] Blocked automated bot submission`);
      // Return 200 to fool bot without sending email
      return res.status(200).json({ success: true, note: 'ok' });
    }

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Please provide a valid name.' });
    }
    if (!company || typeof company !== 'string' || company.trim().length < 1) {
      return res.status(400).json({ error: 'Please provide your company name.' });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
      return res.status(400).json({ error: 'Please provide a valid contact telephone number.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ error: 'Please include your carton or machinery requirement details.' });
    }

    const sanitizedName = name.replace(/<[^>]*>?/gm, '').trim();
    const sanitizedCompany = company.replace(/<[^>]*>?/gm, '').trim();
    const sanitizedPhone = phone.replace(/<[^>]*>?/gm, '').trim();
    const sanitizedEmail = email && typeof email === 'string' ? email.replace(/<[^>]*>?/gm, '').trim() : '';
    const sanitizedNeed = need && typeof need === 'string' ? need.replace(/<[^>]*>?/gm, '').trim() : 'General Machinery Requirement';
    const sanitizedMessage = message.replace(/<[^>]*>?/gm, '').trim();

    const htmlOwner = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#152230;background:#f8fafc;padding:24px;border-radius:6px">
        <div style="background:#152230;padding:22px 28px;border-radius:6px 6px 0 0;border-bottom:3px solid #f3b438">
          <span style="color:#ffffff;font-weight:700;font-size:20px;letter-spacing:-.02em">HONEY PACKAGING</span>
          <span style="display:block;color:#f3b438;font-size:11px;letter-spacing:1px;margin-top:4px">NEW MACHINERY QUOTE INQUIRY</span>
        </div>
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-top:0;padding:28px;border-radius:0 0 6px 6px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:10px 0;color:#64748b;width:140px;font-weight:500">Contact Name</td><td style="padding:10px 0;font-weight:600;color:#0f172a">${sanitizedName}</td></tr>
            <tr style="border-top:1px solid #f1f5f9"><td style="padding:10px 0;color:#64748b;font-weight:500">Company</td><td style="padding:10px 0;font-weight:600;color:#0f172a">${sanitizedCompany}</td></tr>
            <tr style="border-top:1px solid #f1f5f9"><td style="padding:10px 0;color:#64748b;font-weight:500">Phone</td><td style="padding:10px 0"><a href="tel:${sanitizedPhone}" style="color:#2563eb;text-decoration:none;font-weight:600">${sanitizedPhone}</a></td></tr>
            ${sanitizedEmail ? `<tr style="border-top:1px solid #f1f5f9"><td style="padding:10px 0;color:#64748b;font-weight:500">Email</td><td style="padding:10px 0"><a href="mailto:${sanitizedEmail}" style="color:#2563eb;text-decoration:none">${sanitizedEmail}</a></td></tr>` : ''}
            <tr style="border-top:1px solid #f1f5f9"><td style="padding:10px 0;color:#64748b;font-weight:500">Machine Needed</td><td style="padding:10px 0;font-weight:600;color:#b45309">${sanitizedNeed}</td></tr>
            <tr style="border-top:1px solid #f1f5f9"><td style="padding:10px 0;color:#64748b;font-weight:500;vertical-align:top">Requirement Details</td><td style="padding:10px 0;line-height:1.6;color:#334155">${sanitizedMessage}</td></tr>
          </table>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8;display:flex;justify-content:space-between">
            <span>Source: honeypackaging.in</span>
            <span>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</span>
          </div>
        </div>
      </div>
    `;

    // Dispatch to both official company inboxes
    await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAILS,
      subject: `New Machine Inquiry — ${sanitizedCompany} (${sanitizedNeed})`,
      html: htmlOwner,
    });

    // Send customer auto-reply if email was provided
    if (sanitizedEmail) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: sanitizedEmail,
        subject: 'Quotation Request Received — Honey Packaging Ahmedabad',
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;color:#152230;background:#ffffff;border:1px solid #e2e8f0;border-radius:6px">
            <div style="background:#152230;padding:24px 28px;border-radius:6px 6px 0 0;border-bottom:3px solid #f3b438">
              <span style="color:#ffffff;font-weight:700;font-size:18px">HONEY PACKAGING</span>
              <p style="color:#a9b5ba;margin:4px 0 0;font-size:12px">All Type Customize Packaging Solutions</p>
            </div>
            <div style="padding:28px">
              <p style="margin:0 0 14px;font-size:16px;color:#0f172a">Hello <strong>${sanitizedName}</strong>,</p>
              <p style="margin:0 0 14px;color:#475569;font-size:14px;line-height:1.65">
                Thank you for contacting Honey Packaging regarding your requirement for <strong>${sanitizedNeed}</strong>. Our engineering desk in Kathwada, Ahmedabad has received your inquiry.
              </p>
              <p style="margin:0 0 20px;color:#475569;font-size:14px;line-height:1.65">
                A technical representative will connect with you within one business day with machine options and technical specifications.
              </p>
              <div style="background:#f8fafc;border:1px solid #e2e8f0;padding:16px 20px;border-radius:4px;font-size:13px;color:#334155;margin-bottom:20px">
                <strong>Need immediate assistance or a site inspection?</strong><br />
                Call: <a href="tel:+919909922785" style="color:#2563eb;font-weight:600">+91 99099 22785</a><br />
                WhatsApp: <a href="https://wa.me/919909922785" style="color:#16a34a;font-weight:600">Chat with Jasapal Puvar</a>
              </div>
              <p style="margin:0;font-size:12px;color:#94a3b8">
                Factory: A/106, Shrinath Ind. Estate Park, Kathwada, Ahmedabad – 382430<br />
                Head Office: 93, Maruti Avenue, Opp. Sabar Dairy, Himatnagar – 383001
              </p>
            </div>
          </div>
        `,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Resend Error]', err);
    return res.status(500).json({
      error: 'Unable to deliver your quote request at this moment. Please call +91 99099 22785 or message us on WhatsApp.',
    });
  }
}
