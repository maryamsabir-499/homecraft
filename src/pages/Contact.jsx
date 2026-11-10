import { useState } from 'react'
import SEO from '../components/SEO'

// Replace with your own Formspree form ID (see instructions)
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'mt-2 w-full rounded border border-secondary/40 bg-white px-4 py-3 text-sm outline-none focus:border-accent'

  return (
    <>
      <SEO
        title="Contact HomeCraft | Get in Touch"
        description="Have a question, suggestion or collaboration idea? Contact the HomeCraft team using our simple contact form."
        path="/contact"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="mt-3 max-w-2xl text-text/80">
          Have a question, a suggestion or an idea for an article? Send us a message and we
          will get back to you as soon as we can.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2" noValidate={false}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-primary">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="text-sm font-medium text-primary">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-secondary disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="mt-4 rounded bg-green-50 p-3 text-sm text-green-800" role="status">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 rounded bg-red-50 p-3 text-sm text-red-800" role="alert">
                Something went wrong. Please try again in a moment.
              </p>
            )}
          </form>

          {/* Info */}
          <aside className="rounded-lg border border-secondary/30 bg-white p-6">
            <h2 className="text-xl font-semibold text-primary">Good to know</h2>
            <ul className="mt-4 space-y-3 text-sm text-text/80">
              <li>We read every message.</li>
              <li>We usually reply within a few working days.</li>
              <li>Article ideas and feedback are always welcome.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}