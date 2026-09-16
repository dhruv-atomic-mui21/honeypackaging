import { FormEvent, useState, useEffect } from 'react';
import { Check, Loader2, Quote, Send, AlertCircle } from 'lucide-react';
import { categories } from '@/data/products';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  need: string;
  message: string;
  website_url: string; // Honeypot spam trap
}

interface ValidationErrors {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const empty: FormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  need: '',
  message: '',
  website_url: '',
};

export default function QuoteForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [data, setData] = useState<FormData>(empty);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
    // Clear field-level error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const errs: ValidationErrors = {};

    // 1. Name
    const trimmedName = data.name.trim();
    if (!trimmedName) {
      errs.name = 'Please provide your full name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    // 2. Company
    const trimmedCompany = data.company.trim();
    if (!trimmedCompany) {
      errs.company = 'Please enter your company or business name.';
    }

    // 3. Phone (India 10 digits or international 8-15 digits)
    const cleanPhone = data.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^[+]?[0-9]{8,15}$/;
    if (!cleanPhone) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid phone number (e.g. +91 99099 22785).';
    }

    // 4. Email (optional, but if provided, must be valid)
    if (data.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email.trim())) {
        errs.email = 'Please enter a valid business email address.';
      }
    }

    // 5. Message
    const trimmedMessage = data.message.trim();
    if (!trimmedMessage) {
      errs.message = 'Please briefly describe your requirement.';
    } else if (trimmedMessage.length < 5) {
      errs.message = 'Please provide a bit more detail about your packaging need.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const reset = () => {
    setState('idle');
    setErrMsg('');
    setErrors({});
    setData(empty);
    setFormLoadTime(Date.now());
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Honeypot anti-spam check
    if (data.website_url) {
      // Silently pretend success to fool malicious bot scripts
      setState('success');
      return;
    }

    // 2. Speed bot check (under 1.2 seconds from render to submit)
    const elapsed = Date.now() - formLoadTime;
    if (elapsed < 1200) {
      setState('error');
      setErrMsg('Submission too fast. Please take a moment and try again.');
      return;
    }

    // 3. Client-side field validation
    if (!validate()) {
      setState('error');
      setErrMsg('Please correct the highlighted fields before submitting.');
      return;
    }

    setState('loading');
    setErrMsg('');

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name.trim(),
          company: data.company.trim(),
          phone: data.phone.trim(),
          email: data.email.trim() || undefined,
          need: data.need || 'General Packaging Inquiry',
          message: data.message.trim(),
          hp_trap: data.website_url, // passed to server for double verification
        }),
      });

      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json.error || 'Unable to deliver your message. Please call or WhatsApp us.');
        }
      } else {
        if (!res.ok) {
          throw new Error('Server connection error. Please call +91 99099 22785 or try again later.');
        }
      }

      setState('success');
      setData(empty);
      setErrors({});
    } catch (err: unknown) {
      setState('error');
      setErrMsg(
        err instanceof Error
          ? err.message
          : 'Failed to send quotation request. Please try calling +91 99099 22785.'
      );
    }
  };

  if (state === 'success') {
    return (
      <div className="success-state" role="status" aria-live="polite">
        <div className="success-icon">
          <Check size={28} />
        </div>
        <h3>Quotation Request Received</h3>
        <p>
          Thank you. Our technical engineering team will review your requirements and respond within one business day with a suitable machine recommendation.
        </p>
        <p className="success-urgent">
          Need urgent advice? Call our Kathwada team directly at{' '}
          <a href="tel:+919909922785" className="font-semibold text-navy">
            +91 99099 22785
          </a>.
        </p>
        <button type="button" className="button button-dark mt-4" onClick={reset}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="quote-form-element" noValidate>
      <div className="form-heading">
        <div>
          <span className="form-kicker">QUICK QUOTE &amp; CONSULTATION</span>
          <h3>Get Machine Recommendation</h3>
        </div>
        <Quote size={22} className="text-gold" />
      </div>

      {/* Honeypot Spam Trap (hidden from human visitors) */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0 }} aria-hidden="true">
        <label htmlFor="website_url">Website URL (leave blank)</label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={data.website_url}
          onChange={change}
        />
      </div>

      <div className="form-row">
        <label className={errors.name ? 'form-field-error' : ''}>
          <span>Your Name <strong className="req">*</strong></span>
          <input
            name="name"
            required
            placeholder="e.g. Rajesh Shah"
            value={data.name}
            onChange={change}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="field-err-text">{errors.name}</span>}
        </label>

        <label className={errors.company ? 'form-field-error' : ''}>
          <span>Company Name <strong className="req">*</strong></span>
          <input
            name="company"
            required
            placeholder="Your enterprise or factory"
            value={data.company}
            onChange={change}
            aria-invalid={!!errors.company}
          />
          {errors.company && <span className="field-err-text">{errors.company}</span>}
        </label>
      </div>

      <div className="form-row">
        <label className={errors.phone ? 'form-field-error' : ''}>
          <span>Mobile / Phone <strong className="req">*</strong></span>
          <input
            name="phone"
            required
            type="tel"
            placeholder="+91 99099 22785"
            value={data.phone}
            onChange={change}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <span className="field-err-text">{errors.phone}</span>}
        </label>

        <label className={errors.email ? 'form-field-error' : ''}>
          <span>Email Address (Optional)</span>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            value={data.email}
            onChange={change}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="field-err-text">{errors.email}</span>}
        </label>
      </div>

      <label>
        <span>Required Machine Solution</span>
        <select name="need" value={data.need} onChange={change} aria-label="Required machine solution">
          <option value="">Select packaging solution</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Complete Packaging Line Solution">Complete Packaging Line Solution</option>
          <option value="Custom Conveyor System">Custom Conveyor System</option>
          <option value="Not sure yet — need engineer recommendation">Not sure yet — need recommendation</option>
        </select>
      </label>

      <label className={errors.message ? 'form-field-error' : ''}>
        <span>Carton / Product Details &amp; Location <strong className="req">*</strong></span>
        <textarea
          name="message"
          required
          placeholder="e.g. Carton box dimensions, daily production volume, factory location in Gujarat..."
          rows={3}
          value={data.message}
          onChange={change}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span className="field-err-text">{errors.message}</span>}
      </label>

      {state === 'error' && (
        <div className="form-error" role="alert">
          <AlertCircle size={16} />
          <span>{errMsg}</span>
        </div>
      )}

      <button
        type="submit"
        className="button button-primary full-width"
        disabled={state === 'loading'}
        aria-busy={state === 'loading'}
      >
        {state === 'loading' ? (
          <>
            <Loader2 size={16} className="spin" /> Sending Quote Request…
          </>
        ) : (
          <>
            Request Custom Quotation <Send size={16} />
          </>
        )}
      </button>

      <div className="form-privacy-note">
        <small>
          🔒 Your details are kept confidential. Sent directly to our Gujarat engineering desk.
        </small>
      </div>
    </form>
  );
}
