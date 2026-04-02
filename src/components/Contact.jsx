import { useState } from 'react'

// ── Contact details ───────────────────────────────────────────
const CONTACT_INFO = {
  phone:   '(602) 996-8885',
  email:   'info@dusseaumakris.com',  // TODO: Replace with real email address
  address: '3519 E Shea Blvd #122\nPhoenix, AZ 85028',
}

// ── Office hours ──────────────────────────────────────────────
const HOURS = [
  { day: 'Monday',    hours: '8:00 AM – 4:00 PM' },
  { day: 'Tuesday',   hours: '8:00 AM – 4:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 4:00 PM' },
  { day: 'Thursday',  hours: '8:00 AM – 4:00 PM' },
  { day: 'Friday',    hours: '8:00 AM – 4:00 PM' },
  { day: 'Saturday',  hours: 'Closed'             },
  { day: 'Sunday',    hours: 'Closed'             },
]

// ── Form subject options ──────────────────────────────────────
const SUBJECT_OPTIONS = [
  'Tax Preparation',
  'Bookkeeping',
  'Payroll Support',
  'Financial Reporting',
  'Business Accounting',
  'General Inquiry',
]

// ── Validation helpers ────────────────────────────────────────
function validateForm(fields) {
  const errors = {}

  if (!fields.name.trim())
    errors.name = 'Full name is required.'

  if (!fields.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (fields.phone && !/^[\d\s().+\-]{7,20}$/.test(fields.phone))
    errors.phone = 'Please enter a valid phone number.'

  if (!fields.subject)
    errors.subject = 'Please select a subject.'

  if (!fields.message.trim())
    errors.message = 'Message is required.'
  else if (fields.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.'

  return errors
}

const INITIAL_FIELDS = {
  name:    '',
  email:   '',
  phone:   '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [fields,     setFields]     = useState(INITIAL_FIELDS)
  const [errors,     setErrors]     = useState({})
  const [formStatus, setFormStatus] = useState(null) // null | 'success' | 'error'
  const [submitting, setSubmitting] = useState(false)

  // ── Field change handler ────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    // Clear field-level error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  // ── Form submit ─────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus(null)

    const validationErrors = validateForm(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)

    try {
      // ────────────────────────────────────────────────────────
      // FORM SUBMISSION — connect your preferred service here.
      //
      // Option A: Formspree
      //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      //     body: JSON.stringify(fields),
      //   })
      //   if (!res.ok) throw new Error('Formspree error')
      //
      // Option B: EmailJS
      //   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')
      //
      // Option C: Your own backend API
      //   const res = await fetch('/api/contact', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(fields),
      //   })
      //   if (!res.ok) throw new Error('API error')
      //
      // ── Temporary simulation (remove when wired up) ─────────
      await new Promise(resolve => setTimeout(resolve, 800))
      // ────────────────────────────────────────────────────────

      setFormStatus('success')
      setFields(INITIAL_FIELDS)
      setErrors({})
    } catch {
      setFormStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-layout">

          {/* ── Left: info column ─────────────────────────── */}
          <div className="contact-info">
            <span className="contact-label">Contact Us</span>
            <h2>Get in Touch</h2>
            <p>
              Have a question or ready to get started? Fill out the form and a
              member of our team will get back to you promptly.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon-box" aria-hidden="true">📞</div>
                <div className="detail-text">
                  <div className="detail-label">Phone</div>
                  {CONTACT_INFO.phone}
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box" aria-hidden="true">✉️</div>
                <div className="detail-text">
                  <div className="detail-label">Email</div>
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box" aria-hidden="true">📍</div>
                <div className="detail-text">
                  <div className="detail-label">Office</div>
                  {CONTACT_INFO.address.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < CONTACT_INFO.address.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon-box" aria-hidden="true">🕐</div>
                <div className="detail-text">
                  <div className="detail-label">Office Hours</div>
                  <table className="hours-table">
                    <tbody>
                      {HOURS.map(({ day, hours }) => (
                        <tr key={day}>
                          <td className="hours-day">{day}</td>
                          <td className={`hours-time${hours === 'Closed' ? ' closed' : ''}`}>
                            {hours}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form ───────────────────────────────── */}
          <div className="contact-form-wrapper">

            {/* Status banner */}
            {formStatus === 'success' && (
              <div className="form-status success" role="alert">
                Thank you for reaching out! We will be in touch with you shortly.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-status error" role="alert">
                Something went wrong. Please try again or contact us directly by phone or email.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

              {/* Name + Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={fields.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="field-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="field-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone + Subject */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 000-0000"
                    value={fields.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="field-error" role="alert">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  >
                    <option value="">Select a topic…</option>
                    {SUBJECT_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.subject && (
                    <span id="subject-error" className="field-error" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you…"
                  value={fields.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="field-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={submitting}
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
