import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { TOUR_STYLES, SITE } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Plan Your Private Ethiopia Tour | Contact Sawla Tours',
  description: 'Contact Sawla Tours to start planning your private Ethiopia journey. Our Addis Ababa team responds within 24 hours. No packages — only tailor-made trips.',
  openGraph: { title: 'Plan Your Ethiopia Journey | Sawla Tours' },
}

const enquireSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://www.sawlatours.com/enquire/#contactpage',
      url: 'https://www.sawlatours.com/enquire/',
      name: 'Contact Sawla Tours',
      description: 'Plan a private, tailor-made Ethiopia journey with Sawla Tours — an Addis Ababa-based tour operator.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sawlatours.com/enquire/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a complete itinerary before contacting Sawla Tours?', acceptedAnswer: { '@type': 'Answer', text: 'No. You can contact Sawla Tours with only a rough idea — travel month, days available, group size, and main interests. The team will help shape the right route from there.' } },
        { '@type': 'Question', name: 'How quickly does Sawla Tours respond to enquiries?', acceptedAnswer: { '@type': 'Answer', text: 'Sawla Tours responds within 24 hours on business days (Addis Ababa time, EAT UTC+3). Complex tailor-made proposals take 2–3 business days.' } },
        { '@type': 'Question', name: 'Can Sawla Tours design a fully private Ethiopia tour?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Sawla Tours specialises in private, tailor-made journeys for couples, families, solo travelers, photographers, researchers, film teams, and specialist groups.' } },
      ],
    },
  ],
}

const faqs = [
  { q: 'Do I need a complete itinerary before contacting Sawla Tours?', a: 'No. You can contact us with only a rough idea — your travel month, number of days, group size, and main interests. Our team will help you understand which destinations fit your time, what route makes sense, and what should be adjusted based on current access and season.' },
  { q: 'How quickly does Sawla Tours respond to enquiries?', a: 'We aim to reply to all enquiries within 24 hours on business days (Addis Ababa time, EAT UTC+3). For complex tailor-made itineraries, our first response outlines a proposed route and may ask follow-up questions before preparing a full proposal, which typically takes 2–3 business days.' },
  { q: 'Can Sawla Tours design a fully private Ethiopia tour?', a: 'Yes. Sawla Tours specialises in private and tailor-made Ethiopia journeys for couples, families, friends, solo travelers, photographers, researchers, film teams, and special-interest groups.' },
  { q: 'What information should I include in my enquiry?', a: 'The most useful details are your preferred travel dates, number of travelers, trip duration, interests, accommodation style, and budget level. Even a few sentences is enough to begin.' },
  { q: 'Can Sawla Tours help with domestic flights and logistics?', a: 'Yes. Sawla Tours can coordinate domestic flights, vehicles, guides, accommodations, transfers, and permits as part of a confirmed itinerary.' },
  { q: 'Is Ethiopia suitable for first-time visitors?', a: 'Ethiopia can be deeply rewarding for first-time visitors when planned carefully. Many travelers begin with Addis Ababa, Lalibela, Gondar, Bahir Dar, the Simien Mountains, or Bale Mountains.' },
]

export default function EnquirePage() {
  return (
    <>
      <SchemaScript schema={enquireSchema} />

      {/* HERO */}
      <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden min-h-[360px] flex items-end">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename="contact-hero-specialist-planning.jpg" width={1920} height={800} category="home" fill />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 container-max text-ivory">
          <span className="label-eyebrow text-gold">Start planning with local experts</span>
          <h1 className="heading-display text-display-xl text-ivory mt-2">Plan Your Private Ethiopia Journey</h1>
          <p className="text-ivory/80 text-body-lg mt-4 max-w-2xl">
            Tell us what brings you to Ethiopia. Our Addis Ababa-based team will help shape your ideas into a thoughtful, tailor-made journey.
          </p>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-charcoal border-b border-white/10">
        <div className="container-max py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              t: 'Ethiopia-based team', s: 'Local planning, not remote',
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
              t: 'Tailor-made planning', s: 'No package pressure',
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>,
              t: 'Local field knowledge', s: 'Ground-checked routes',
            },
            {
              icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
              t: 'Response within 24 hrs', s: 'Business days, EAT',
            },
          ].map(item => (
            <div key={item.t} className="flex items-center gap-3">
              <span className="text-gold flex-shrink-0">{item.icon}</span>
              <div>
                <div className="text-ivory text-[13px] font-medium">{item.t}</div>
                <div className="text-ivory/50 text-xs">{item.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN: FORM + CONTACT */}
      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── FORM ── */}
          <div className="lg:col-span-2">
            <h2 className="heading-display text-display-sm text-charcoal mb-2">Start With What You Know</h2>
            <p className="text-warmgrey mb-8">You don&apos;t need a complete itinerary. Even a rough idea is enough to begin.</p>

            {/* DEVELOPER: Wire form to CRM/email handler, add honeypot, configure auto-reply */}
            <form
              action="/api/enquire"
              method="POST"
              className="space-y-6"
              aria-label="Ethiopia tour enquiry form"
            >
              {/* Hidden spam trap */}
              <input type="text" name="_honey" className="hidden" aria-hidden="true" tabIndex={-1} />

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
                    {['Historic & cultural', 'Lalibela, Gondar, Axum', 'Omo Valley', 'Simien Mountains trekking', 'Bale Mountains wildlife', 'Danakil expedition', 'Photography tour', 'Birding & wildlife', 'Festival tours', 'Coffee & food', 'Mobile tented camps', 'Not sure yet'].map(interest => (
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
                      <option>Boutique & character lodges</option>
                      <option>Luxury where available</option>
                      <option>Adventure & remote</option>
                      <option>Cultural immersion</option>
                      <option>Slow & relaxed pace</option>
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

              <button type="submit" className="btn-primary w-full justify-center text-[13px] py-4">
                Send My Enquiry →
              </button>
              <p className="text-xs text-warmgrey text-center">No pressure. No generic package. Just a careful first conversation with an Ethiopia-based travel team.</p>
            </form>
          </div>

          {/* ── CONTACT SIDEBAR ── */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Direct contact */}
              <div className="bg-charcoal rounded-card p-7 text-ivory">
                <h3 className="font-display text-xl font-light mb-4">Prefer to speak first?</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-ivory/50 text-xs uppercase tracking-wider mb-1">Email</div>
                    <a href={`mailto:${SITE.email}`} className="text-gold hover:text-amber transition-colors">{SITE.email}</a>
                  </div>
                  <div>
                    <div className="text-ivory/50 text-xs uppercase tracking-wider mb-1">WhatsApp / Phone</div>
                    <a href={`tel:${SITE.phoneE164}`} className="text-ivory hover:text-gold transition-colors">{SITE.phone}</a>
                  </div>
                  <div>
                    <div className="text-ivory/50 text-xs uppercase tracking-wider mb-1">Office</div>
                    <div className="text-ivory/70">{SITE.address}</div>
                    <div className="text-ivory/50 text-xs mt-1">Mon–Fri 09:00–17:30 · Sat 10:00–13:00 (EAT)</div>
                  </div>
                </div>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn-ghost-light w-full justify-center block text-center text-xs"
                >
                  Message on WhatsApp
                </a>
              </div>

              {/* Experience cards */}
              <div className="border border-sand rounded-card p-5">
                <div className="label-eyebrow mb-4">Not sure where to start?</div>
                <div className="space-y-3">
                  {TOUR_STYLES.slice(0, 4).map(ts => (
                    <Link key={ts.slug} href={`/tours-by-experience/${ts.slug}`} className="flex items-center justify-between text-sm group">
                      <span className="text-charcoal group-hover:text-gold transition-colors">{ts.name}</span>
                      <span className="text-gold text-xs">→</span>
                    </Link>
                  ))}
                  <Link href="/tours-by-experience" className="text-gold text-xs hover:underline">All tour styles →</Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding-sm bg-sand/20">
        <div className="container-max max-w-4xl mx-auto">
          <h2 className="heading-display text-display-sm text-charcoal mb-10 text-center">From First Message to Tailor-Made Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '1', t: 'We read your request carefully', b: 'A specialist reviews your details and may ask follow-up questions before suggesting a route.' },
              { n: '2', t: 'We recommend the best route', b: 'We suggest an itinerary that fits your time, travel style, and current ground conditions.' },
              { n: '3', t: 'We prepare a tailor-made proposal', b: 'Custom route with accommodations, transport, guiding, and practical planning notes.' },
              { n: '4', t: 'You refine, confirm, and travel', b: 'Most journeys improve through conversation. Adjust until it feels right. Then we coordinate everything.' },
            ].map(step => (
              <div key={step.n}>
                <div className="w-10 h-10 rounded-full border-2 border-gold/40 flex items-center justify-center mb-4">
                  <span className="font-display text-gold font-light">{step.n}</span>
                </div>
                <h3 className="font-display text-charcoal text-lg font-normal mb-2">{step.t}</h3>
                <p className="text-warmgrey text-sm">{step.b}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/how-we-work" className="text-sm text-gold hover:underline">Read more about how we plan →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-ivory">
        <div className="container-max max-w-3xl mx-auto">
          <h2 className="heading-display text-display-sm text-charcoal mb-10 text-center">Questions Before You Enquire</h2>
          <div className="space-y-4" role="list">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-sand rounded-card group" role="listitem">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-body font-500 text-charcoal text-sm hover:text-gold transition-colors">
                  {faq.q}
                  <span className="ml-3 text-gold text-lg transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-warmgrey text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative section-padding overflow-hidden text-center">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename="contact-cta-coffee-ceremony.jpg" width={1920} height={600} category="home" fill />
          <div className="absolute inset-0 bg-charcoal/65" />
        </div>
        <div className="relative z-10 container-max">
          <h2 className="heading-display text-display-md text-ivory mb-4">Ready to Begin?</h2>
          <p className="text-ivory/70 max-w-lg mx-auto mb-8">Your Ethiopia journey doesn&apos;t need to start with a perfect plan. It can start with a question.</p>
          <a href="#name" className="btn-primary inline-flex">Send Your Enquiry</a>
        </div>
      </section>
    </>
  )
}
