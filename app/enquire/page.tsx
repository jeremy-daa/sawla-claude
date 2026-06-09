'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

// NOTE: move metadata to a separate server component wrapper if needed
// export const metadata: Metadata = {
//   title: 'Plan Your Ethiopia Journey | Sawla Tours',
//   description: 'Tell us what you want to feel. We\'ll build your Ethiopia journey from scratch and come back within 24 hours. No booking fees. No obligation.',
// }

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TOUR_STYLES = [
  'Heritage Pilgrimage — Lalibela, Axum, Gondar, Tigray',
  'Tribal Encounters — Omo Valley',
  'Frontier Adventure — Danakil Depression',
  'Wildlife & Birding — Ethiopian wolf, gelada',
  'Festival Immersion — Timkat, Meskel, Irreecha',
  'Cinematic Journey — with Sawla Films',
  'Not sure yet — help me choose',
]

const DURATIONS = ['7–10 days', '10–14 days', '14–21 days', '21+ days', 'Flexible']
const PARTY_SIZES = ['Solo', '2 people', '3–4 people', '5–8 people', 'Group 9+']
const BUDGETS = ['USD 2,000–4,000 pp', 'USD 4,000–7,000 pp', 'USD 7,000–12,000 pp', 'USD 12,000+ pp', 'Flexible / not sure']

export default function EnquirePage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', country: '',
    style: '', duration: '', partySize: '', budget: '',
    travelDates: '', message: '', honeypot: '',
  })

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async () => {
    if (form.honeypot) return // spam trap
    setLoading(true)
    try {
      await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please email us at explore@sawlatours.com')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-volcanic flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-gold mb-6">Received</div>
          <h1 className="font-display font-light text-display-lg text-ivory mb-6">
            Thank you, {form.firstName}.
          </h1>
          <p className="font-body text-[0.9375rem] text-ivory/60 leading-[1.85] mb-8">
            We'll come back to you within 24 hours with a first conversation, not a brochure. In the meantime, explore our destinations or read a story from the field.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link href="/ethiopias-popular-destinations" className="btn-primary-ivory">Explore Destinations</Link>
            <Link href="/sawla-moments" className="btn-ghost-light group flex items-center gap-2">
              Sawla Moments <Arrow />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-volcanic pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — context */}
          <div>
            <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Start here</p>
            <h1 className="font-display font-light text-display-lg text-ivory mb-6">
              Every journey begins<br />with <em className="italic text-ivory/42">one question</em>
            </h1>
            <p className="font-body text-[0.9375rem] text-ivory/52 leading-[1.85] mb-10">
              Tell us what you're looking for. We'll come back within 24 hours with a first conversation — not a brochure, not a price list. A real response from a specialist who knows Ethiopia.
            </p>

            <div className="space-y-4 mb-12">
              {[
                'No booking fees. No obligation.',
                'Response within 24 hours, every day.',
                'Direct line to a specialist — no call centres.',
                'WhatsApp available: +251 970 578 306',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-body text-[0.8125rem] text-ivory/55">{item}</span>
                </div>
              ))}
            </div>

            {/* Testimonial pull-quote */}
            <div className="border-l-2 border-gold/40 pl-6">
              <p className="font-display italic font-light text-[1.125rem] text-ivory/70 leading-[1.65] mb-3">
                "Sawla Tours spent two hours on the phone with me before we booked. That conversation produced the best trip of my life."
              </p>
              <p className="font-body text-[0.75rem] text-ivory/40">Laura W. — United States · 2025</p>
            </div>
          </div>

          {/* Right — 2-step form */}
          <div className="border border-ivory/10 bg-ivory/[0.04] p-8 md:p-10">
            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-8">
              {[1, 2].map(s => (
                <button
                  key={s}
                  onClick={() => s < step && setStep(s)}
                  className={`w-8 h-8 rounded-full font-body text-[0.75rem] flex items-center justify-center border transition-all duration-300 ${
                    step === s
                      ? 'bg-gold border-gold text-volcanic'
                      : step > s
                      ? 'bg-ivory/10 border-ivory/20 text-ivory/60 cursor-pointer'
                      : 'bg-transparent border-ivory/20 text-ivory/30'
                  }`}
                >
                  {s}
                </button>
              ))}
              <span className="font-body text-[0.6875rem] text-ivory/40">
                {step === 1 ? 'About you' : 'About your journey'}
              </span>
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">First name *</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={e => set('firstName', e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Last name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={e => set('lastName', e.target.value)}
                      placeholder="Last name"
                      className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Email address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Country *</label>
                  <input
                    type="text"
                    value={form.country}
                    onChange={e => set('country', e.target.value)}
                    placeholder="Where you're based"
                    className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                    required
                  />
                </div>
                {/* Honeypot — hidden from users */}
                <input
                  type="text"
                  value={form.honeypot}
                  onChange={e => set('honeypot', e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <button
                  onClick={() => form.firstName && form.email && form.country && setStep(2)}
                  className="w-full bg-ivory/10 hover:bg-ivory/15 text-ivory font-body text-[0.6875rem] tracking-[0.14em] uppercase border border-ivory/20 py-4 cursor-pointer transition-colors duration-300 mt-2"
                >
                  Continue →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Travel style</label>
                  <select
                    value={form.style}
                    onChange={e => set('style', e.target.value)}
                    className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory/70 outline-none focus:border-gold transition-colors duration-300 appearance-none"
                  >
                    <option value="">Select or leave blank</option>
                    {TOUR_STYLES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Duration</label>
                    <select value={form.duration} onChange={e => set('duration', e.target.value)} className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory/70 outline-none focus:border-gold transition-colors appearance-none">
                      <option value="">Select</option>
                      {DURATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Party size</label>
                    <select value={form.partySize} onChange={e => set('partySize', e.target.value)} className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory/70 outline-none focus:border-gold transition-colors appearance-none">
                      <option value="">Select</option>
                      {PARTY_SIZES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Approximate travel dates</label>
                  <input
                    type="text"
                    value={form.travelDates}
                    onChange={e => set('travelDates', e.target.value)}
                    placeholder="e.g. January 2027, or flexible"
                    className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Tell us what matters *</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    placeholder="What do you want to feel? What have you already seen? What's non-negotiable?"
                    className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300 resize-none"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-shrink-0 bg-transparent border border-ivory/20 text-ivory/60 font-body text-[0.6875rem] tracking-[0.14em] uppercase px-6 py-4 cursor-pointer hover:border-ivory/40 transition-colors duration-300"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.message}
                    className="flex-1 bg-gold hover:bg-gold-light disabled:opacity-50 text-volcanic font-body text-[0.6875rem] tracking-[0.14em] uppercase border-none py-4 cursor-pointer transition-colors duration-300"
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
