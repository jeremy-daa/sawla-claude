'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const INTERESTS = [
  'Historic & cultural', 'Lalibela, Gondar, Axum', 'Omo Valley', 'Simien Mountains trekking',
  'Bale Mountains wildlife', 'Danakil expedition', 'Photography tour', 'Birding & wildlife',
  'Festival tours', 'Coffee & food', 'Mobile tented camps', 'Not sure yet',
]

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = {}
    for (const [key, value] of data.entries()) {
      if (typeof value === 'string') {
        payload[key] = payload[key] ? `${payload[key]}, ${value}` : value
      }
    }

    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(json.error ?? 'Something went wrong. Please email us directly at explore@sawlatours.com')
        setStatus('error')
        return
      }
      form.reset()
      setStatus('success')
      // Scroll the confirmation into view on mobile
      requestAnimationFrame(() => {
        document.getElementById('enquiry-confirmation')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    } catch {
      setError('Network error. Please check your connection or email us at explore@sawlatours.com')
      setStatus('error')
    }
  }

  // ── Success state ──
  if (status === 'success') {
    return (
      <div id="enquiry-confirmation" className="border border-gold/30 bg-gold-faint rounded-card p-8 md:p-10 text-center" role="status" aria-live="polite">
        <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l5 5L19 7" stroke="#c9941a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-charcoal mb-3" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
          Thank you — your enquiry is on its way.
        </h3>
        <p className="text-warmgrey font-body leading-relaxed max-w-md mx-auto mb-6">
          An Ethiopia specialist from our Addis Ababa team will reply within 24 hours on business days. If your trip is time-sensitive, message us on WhatsApp for the fastest response.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-gold hover:text-charcoal transition-colors font-body font-medium cursor-pointer"
          style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  // ── Form ──
  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Ethiopia tour enquiry form">
      {/* Hidden spam trap */}
      <input type="text" name="_honey" className="hidden" aria-hidden="true" tabIndex={-1} autoComplete="off" />

      {/* STEP 1 — REQUIRED */}
      <fieldset className="space-y-5">
        <legend className="text-[11px] uppercase tracking-wider text-gold font-500 mb-4">Step 1 — Your basics</legend>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-500 text-charcoal mb-1.5">Full name <span className="text-gold">*</span></label>
            <input id="name" name="name" type="text" required placeholder="Your name" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal placeholder-warmgrey/50 focus:outline-none focus:border-gold text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-500 text-charcoal mb-1.5">Email address <span className="text-gold">*</span></label>
            <input id="email" name="email" type="email" required placeholder="name@example.com" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal placeholder-warmgrey/50 focus:outline-none focus:border-gold text-sm" />
          </div>
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-500 text-charcoal mb-1.5">WhatsApp / phone number <span className="text-gold">*</span></label>
          <input id="whatsapp" name="whatsapp" type="tel" required placeholder="+1 202 555 0100 (include country code)" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal placeholder-warmgrey/50 focus:outline-none focus:border-gold text-sm" />
          <p className="text-xs text-warmgrey mt-1">WhatsApp is often the easiest way for us to reach you quickly.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="dates" className="block text-sm font-500 text-charcoal mb-1.5">When are you planning to travel? <span className="text-gold">*</span></label>
            <input id="dates" name="dates" type="text" required placeholder="e.g. October 2026, or 15–28 November" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal placeholder-warmgrey/50 focus:outline-none focus:border-gold text-sm" />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-500 text-charcoal mb-1.5">Trip duration <span className="text-gold">*</span></label>
            <select id="duration" name="duration" required className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal focus:outline-none focus:border-gold text-sm">
              <option value="">Select trip length</option>
              <option>1–3 days</option>
              <option>4–7 days</option>
              <option>8–12 days</option>
              <option>13–18 days</option>
              <option>19+ days</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* STEP 2 — OPTIONAL */}
      <fieldset className="space-y-5 pt-6 border-t border-sand">
        <legend className="text-[11px] uppercase tracking-wider text-gold font-500 mb-4">Step 2 — Your preferences (optional but helpful)</legend>

        <div>
          <label htmlFor="travelers" className="block text-sm font-500 text-charcoal mb-1.5">Number of travelers</label>
          <input id="travelers" name="travelers" type="text" placeholder="e.g. 2 adults, or 2 adults + 1 child (age 10)" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal placeholder-warmgrey/50 focus:outline-none focus:border-gold text-sm" />
        </div>

        <div>
          <label className="block text-sm font-500 text-charcoal mb-2">Main interests (select all that apply)</label>
          <div className="grid grid-cols-2 gap-2">
            {INTERESTS.map(interest => (
              <label key={interest} className="flex items-center gap-2 text-sm text-charcoal cursor-pointer">
                <input type="checkbox" name="interests" value={interest} className="accent-gold w-4 h-4" />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="style" className="block text-sm font-500 text-charcoal mb-1.5">Travel style</label>
            <select id="style" name="style" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal focus:outline-none focus:border-gold text-sm">
              <option value="">Select a style</option>
              <option>Comfortable mid-range</option>
              <option>Boutique &amp; character lodges</option>
              <option>Luxury where available</option>
              <option>Adventure &amp; remote</option>
              <option>Cultural immersion</option>
              <option>Slow &amp; relaxed pace</option>
              <option>Photography-focused</option>
              <option>Family-friendly</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-500 text-charcoal mb-1.5">Approximate budget per person</label>
            <select id="budget" name="budget" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal focus:outline-none focus:border-gold text-sm">
              <option>I prefer to discuss</option>
              <option>Up to $2,000 USD</option>
              <option>$2,000–$3,500 USD</option>
              <option>$3,500–$5,000 USD</option>
              <option>$5,000–$8,000 USD</option>
              <option>$8,000+ USD</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-500 text-charcoal mb-1.5">Anything else we should know?</label>
          <textarea id="message" name="message" rows={5} placeholder="Tell us about your Ethiopia trip idea — destinations, special interests, mobility needs, dietary requirements, or anything that matters for planning." className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal placeholder-warmgrey/50 focus:outline-none focus:border-gold text-sm resize-none" />
        </div>

        <div>
          <label htmlFor="source" className="block text-sm font-500 text-charcoal mb-1.5">How did you find us? (optional)</label>
          <select id="source" name="source" className="w-full px-4 py-3 border border-sand rounded-sm bg-ivory text-charcoal focus:outline-none focus:border-gold text-sm">
            <option value="">Select</option>
            <option>Google search</option>
            <option>AI search (ChatGPT, Gemini, Perplexity)</option>
            <option>Referral from friend or past guest</option>
            <option>Social media</option>
            <option>Travel article or blog</option>
            <option>Previous guest returning</option>
            <option>Other</option>
          </select>
        </div>
      </fieldset>

      {/* Error message */}
      {status === 'error' && error && (
        <div className="border border-red-200 bg-red-50 rounded-sm px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full justify-center text-[13px] py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending…' : 'Send My Enquiry →'}
      </button>
      <p className="text-xs text-warmgrey text-center">No pressure. No generic package. Just a careful first conversation with an Ethiopia-based travel team.</p>
    </form>
  )
}
