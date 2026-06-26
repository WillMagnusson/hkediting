import { useState } from 'react';
import type { Lang } from '../i18n/translations';
import { translations } from '../i18n/translations';

// Web3Forms — sign up at web3forms.com with your Gmail to get an access key.
// Submissions land directly in your inbox, unlimited free tier.
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY';

const CHEVRON = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236E675C' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`;

type Fields = {
  name: string;
  email: string;
  project: string;
  message: string;
};

type Errors = Partial<Fields>;

interface Props {
  lang: Lang;
}

export default function Contact({ lang }: Props) {
  const t = translations[lang].contact.form;

  function validate(fields: Fields): Errors {
    const errs: Errors = {};
    if (!fields.name.trim()) errs.name = t.errName;
    if (!fields.email.trim()) errs.email = t.errEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = t.errEmailInvalid;
    if (!fields.message.trim()) errs.message = t.errMessage;
    return errs;
  }

  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    project: t.projectOptions[0],
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  function update(key: keyof Fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    setServerError('');

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New enquiry from ${fields.name} — HK Editing`,
        ...fields,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setServerError(t.errServer);
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Source Serif 4', Georgia, serif",
    fontSize: '17px',
    color: '#2C2A27',
    background: 'rgba(255,255,255,0.6)',
    border: '1px solid rgba(155,163,145,0.6)',
    borderRadius: '2px',
    padding: '14px 16px',
    outline: 'none',
    width: '100%',
  };

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '9px',
  };

  const labelTextStyle: React.CSSProperties = {
    fontFamily: "'Work Sans', system-ui, sans-serif",
    fontSize: '11.5px',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: '#6E675C',
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "'Work Sans', system-ui, sans-serif",
    fontSize: '12px',
    color: '#9C5C4E',
    marginTop: '4px',
  };

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '48px 24px',
        border: '1px solid rgba(155,163,145,0.5)',
        borderRadius: '3px',
        background: 'rgba(255,255,255,0.5)',
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '48px',
          lineHeight: 1,
          color: '#B5935A',
          marginBottom: '16px',
        }}>✦</div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: '32px',
          color: '#2C2A27',
          marginBottom: '10px',
        }}>
          {t.successTitle}
        </h3>
        <p style={{ color: '#6E675C', fontSize: '18px' }}>
          {t.successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      {/* Name + Email row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '22px',
      }}>
        <div>
          <label style={labelStyle}>
            <span style={labelTextStyle}>{t.nameLbl}</span>
            <input
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              value={fields.name}
              onChange={(e) => update('name', e.target.value)}
              style={{
                ...inputStyle,
                borderColor: errors.name ? '#9C5C4E' : 'rgba(155,163,145,0.6)',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#B5935A')}
              onBlur={(e) => (e.target.style.borderColor = errors.name ? '#9C5C4E' : 'rgba(155,163,145,0.6)')}
            />
          </label>
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        <div>
          <label style={labelStyle}>
            <span style={labelTextStyle}>{t.emailLbl}</span>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              value={fields.email}
              onChange={(e) => update('email', e.target.value)}
              style={{
                ...inputStyle,
                borderColor: errors.email ? '#9C5C4E' : 'rgba(155,163,145,0.6)',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#B5935A')}
              onBlur={(e) => (e.target.style.borderColor = errors.email ? '#9C5C4E' : 'rgba(155,163,145,0.6)')}
            />
          </label>
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>
      </div>

      {/* Project type */}
      <label style={labelStyle}>
        <span style={labelTextStyle}>{t.projectLbl}</span>
        <select
          name="project"
          value={fields.project}
          onChange={(e) => update('project', e.target.value)}
          style={{
            ...inputStyle,
            appearance: 'none',
            backgroundImage: CHEVRON,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            cursor: 'pointer',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#B5935A')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(155,163,145,0.6)')}
        >
          {t.projectOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </label>

      {/* Message */}
      <div>
        <label style={labelStyle}>
          <span style={labelTextStyle}>{t.messageLbl}</span>
          <textarea
            name="message"
            rows={5}
            placeholder={t.messagePlaceholder}
            value={fields.message}
            onChange={(e) => update('message', e.target.value)}
            style={{
              ...inputStyle,
              resize: 'vertical',
              lineHeight: '1.6',
              borderColor: errors.message ? '#9C5C4E' : 'rgba(155,163,145,0.6)',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#B5935A')}
            onBlur={(e) => (e.target.style.borderColor = errors.message ? '#9C5C4E' : 'rgba(155,163,145,0.6)')}
          />
        </label>
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      {serverError && (
        <p style={{ ...errorStyle, fontSize: '14px' }}>{serverError}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        style={{
          alignSelf: 'flex-start',
          fontFamily: "'Work Sans', system-ui, sans-serif",
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#F7F3EE',
          background: submitting ? '#9BA391' : '#2C2A27',
          border: 'none',
          padding: '17px 40px',
          borderRadius: '2px',
          cursor: submitting ? 'wait' : 'pointer',
          transition: 'background 0.25s ease, transform 0.25s ease',
        }}
        onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.background = '#B5935A'; }}
        onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.background = '#2C2A27'; }}
        onMouseDown={(e) => { if (!submitting) e.currentTarget.style.transform = 'translateY(-2px)'; }}
        onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      >
        {submitting ? t.submitting : t.submit}
      </button>
    </form>
  );
}
