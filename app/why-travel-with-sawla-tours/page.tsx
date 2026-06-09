import type { Metadata } from 'next'
import Link from 'next/link'
import { siteData } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Why Travel With Sawla Tours | Ethiopia Specialists Since 2009',
  description: '17 years operating in Ethiopia. In-house Sawla Films production. 80% repeat clients. No call centres — speak directly with a specialist who knows the country.',
  alternates: { canonical: 'https://www.sawlatours.com/why-travel-with-sawla-tours' },
}

const reasons = [
  {
    num: '01',
    title: 'We are Ethiopian',
    body: 'Sawla Tours is not a foreign company operating in Ethiopia. We are an Ethiopian company, led by an Ethiopian team, with guides who are nationals of the regions they work in. A guide from Lalibela explaining the theology of the rock churches is different from a guide who studied about them. A driver from the Omo Valley navigating the road to Turmi is different from one who learned the route from a map.',
  },
  {
    num: '02',
    title: 'We work at a different depth',
    body: 'Our clients are typically not first-time Africa travellers. They are people who have been to Kenya or Tanzania and are looking for something different — depth, not breadth. Sawla Tours is designed for this kind of traveller. Our itineraries are built around understanding, with guides who can answer difficult questions and time built in for the unexpected.',
  },
  {
    num: '03',
    title: 'Sawla Films changes everything',
    body: 'The in-house documentary production capability of Sawla Films is not a marketing advantage — it is a genuine difference in how we experience Ethiopia. When Sawla Films films the Ethiopian wolf, the footage is informed by hours of prior observation. Our wildlife guides know individual animals. This accumulated knowledge is what they carry into the field with you.',
  },
  {
    num: '04',
    title: 'We are honest about what we are',
    body: 'We are a small, founder-led company. We are not a call centre. When you send an enquiry, a specialist responds — not a sales agent reading from a script. We will tell you when a destination is not right for your timing. We will tell you when an itinerary is too ambitious for what you want.',
  },
  {
    num: '05',
    title: '17 years and counting',
    body: 'We have been operating in Ethiopia since 2009. We have guided clients through festival seasons and quiet months, through changing road conditions and political shifts. That accumulated experience is why 80% of our clients return — and why nearly all new clients come through referrals from people who have travelled with us.',
  },
]

export default function WhyTravelPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex flex-col justify-end bg-volcanic">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #0D1A10 0%, #1A3020 50%, #0A1A12 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-container mx-auto w-full">
          <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>The difference</p>
          <h1 className="font-display font-light text-display-xl text-ivory">Why Travel With Sawla Tours</h1>
        </div>
      </section>

      {/* 5 reasons */}
      <section className="bg-ivory py-24 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="label-eyebrow">Five honest reasons</p>
            <h2 className="font-display font-light text-display-lg text-charcoal">
              What makes Sawla<br /><em className="italic text-warmgrey">different</em>
            </h2>
          </div>
          <div className="space-y-px bg-sand">
            {reasons.map(({ num, title, body }) => (
              <div key={num} className="bg-ivory grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 p-10 items-start">
                <div className="font-display italic font-light text-[2.5rem] text-gold/40 leading-none">{num}</div>
                <div>
                  <h3 className="font-display font-[400] text-display-sm text-charcoal mb-4">{title}</h3>
                  <p className="font-body text-body-md text-warmgrey leading-[1.82] max-w-2xl">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="bg-sand py-20 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <p className="label-eyebrow mb-12">What clients say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand/50">
            {siteData.testimonials.slice(0, 3).map(t => (
              <div key={t.id} className="bg-ivory p-8">
                <p className="font-display italic font-light text-[1.0625rem] text-charcoal leading-[1.65] mb-6">
                  <span className="text-gold text-xl leading-none align-[-0.3em] mr-0.5">&ldquo;</span>{t.text}
                </p>
                <div>
                  <div className="font-body text-[0.8125rem] font-medium text-charcoal">{t.name}</div>
                  <div className="font-body text-[0.6875rem] text-warmgrey">{t.country} · {t.year}</div>
                  <div className="inline-block font-body text-[0.6rem] tracking-[0.14em] uppercase text-gold bg-gold/8 px-2 py-0.5 mt-1.5">{t.tour}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 px-6 md:px-12 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-light text-display-lg text-ivory mb-8">
            Convinced?<br /><em className="italic text-ivory/42">Let's talk.</em>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link href="/enquire" className="btn-primary-ivory">Start Planning</Link>
            <Link href="/how-we-work" className="btn-ghost-light inline-flex items-center gap-2">
              How we work <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
