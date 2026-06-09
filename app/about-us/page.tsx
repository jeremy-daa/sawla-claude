'use client'
import Link from 'next/link'
import type { Metadata } from 'next'
import { useEffect, useRef } from 'react'

const timeline = [
  { year: '2009', title: 'Founded as Ethio Renaissance Tours', desc: 'Bemnet Alemu launches the company in Addis Ababa, built on the conviction that Ethiopia deserves a tour operator that matches the country\'s extraordinary character.' },
  { year: '2012', title: 'First Sawla Films production', desc: 'The in-house documentary production division begins. First major documentary — a 45-minute film on the rock churches of Lalibela — wins a regional broadcast slot.' },
  { year: '2015', title: 'Omo Valley specialist status', desc: 'Sawla becomes the first Ethiopian operator to develop a code of ethics for Omo Valley tribal tourism, in collaboration with community leaders.' },
  { year: '2018', title: 'Rebranded as Sawla Tours', desc: 'The company rebrands, consolidating its positioning as Ethiopia\'s premier boutique specialist. The Sawla name — from the town in Southern Ethiopia — anchors the brand in the country.' },
  { year: '2020', title: 'Bale Mountains wolf programme', desc: 'Sawla Tours becomes a financial supporter of the Ethiopian Wolf Conservation Programme, funding the domestic dog vaccination campaign in villages surrounding Bale Mountains.' },
  { year: '2023', title: 'Sawla Films goes international', desc: 'ethiopiafilmfixer.com launches as a dedicated production services platform. International clients include BBC, Deutsche Welle, and Al Jazeera documentary units.' },
  { year: '2026', title: 'Complete site redesign', desc: 'Sawla Tours launches its most comprehensive digital presence to date — 96 pages, encyclopedic destination content, and Sawla Films video integrated throughout.' },
]

const values = [
  { title: 'Ethiopia first', desc: 'Every guide, driver, and specialist on our team is Ethiopian. This is not a staffing policy — it is a recognition that the deepest knowledge of a country lives inside it, not outside looking in.' },
  { title: 'Depth over breadth', desc: 'We would rather show you three destinations well than seven quickly. Every day in an itinerary has a reason. We build in time for the unexpected — the conversation that changes the trip.' },
  { title: 'Film as evidence', desc: 'Sawla Films documents Ethiopia because the country deserves to be documented. When our footage appears on our website, it is not marketing — it is the record of real encounters.' },
  { title: 'Honest about what we are', desc: 'We are a small, founder-led company with 17 years of ground-level knowledge. We are not a call centre. We are not a booking platform. We are specialists who will answer your email personally.' },
]

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden flex flex-col justify-end bg-volcanic">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #1A1208 0%, #2A1E0E 50%, #1A1208 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-container mx-auto w-full">
          <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Our story</p>
          <h1 className="font-display font-light text-display-xl text-ivory">About Sawla Tours</h1>
        </div>
      </section>

      {/* Founder narrative */}
      <section className="bg-ivory py-24 px-6 md:px-12">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="label-eyebrow">Founded 2009</p>
            <h2 className="font-display font-light text-display-lg text-charcoal mb-8">
              We started with a simple<br /><em className="italic text-warmgrey">conviction</em>
            </h2>
            <div className="space-y-5 font-body text-body-md text-warmgrey leading-[1.85]">
              <p>Ethiopia deserves a tour operator that matches the country's extraordinary character. Not a company that shows visitors the highlights and moves on — but one that helps people understand what they're seeing, where they are, and why it matters.</p>
              <p>Sawla Tours was founded in Addis Ababa in 2009 by Bemnet Alemu. The company grew from years of watching international visitors come to Ethiopia and leave with a fraction of what was available to them — not because the experiences weren't there, but because nobody had organised them in a way that matched Ethiopia's actual depth.</p>
              <p>Seventeen years later, we are still based in Addis Ababa, still led by Ethiopians, and still operating on the same premise: that the most important thing we can offer is genuine insider knowledge, accumulated over lifetimes of living in this country.</p>
            </div>
          </div>
          {/* Founder portrait placeholder */}
          <div className="aspect-[3/4] bg-volcanic relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #2A1E0E, #1A1208)' }} />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="font-display font-light text-xl text-ivory mb-1">Bemnet Alemu</div>
              <div className="font-body text-xs tracking-widest uppercase text-gold">Founder · Sawla Tours</div>
            </div>
            {/* DEVELOPER: Replace with <Image src="/images/about/about-bemnet-portrait.jpg" fill className="object-cover" /> */}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-24 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="label-eyebrow">What we stand for</p>
            <h2 className="font-display font-light text-display-lg text-charcoal">
              Four things that don't<br /><em className="italic text-warmgrey">change</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand/50">
            {values.map(({ title, desc }) => (
              <div key={title} className="bg-ivory p-10">
                <h3 className="font-display font-[400] text-display-sm text-charcoal mb-4">{title}</h3>
                <p className="font-body text-body-md text-warmgrey leading-[1.82]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sawla Films moat */}
      <section className="bg-volcanic py-24 px-6 md:px-12">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>The Sawla Films advantage</p>
            <h2 className="font-display font-light text-display-lg text-ivory mb-6">
              The only operator in Ethiopia<br /><em className="italic text-ivory/42">with its own film crew</em>
            </h2>
            <p className="font-body text-body-md text-ivory/55 leading-[1.85] mb-6">Sawla Films is our in-house documentary production division. We have filmed across all 12 regional states of Ethiopia. The footage archive is genuine — not sourced from stock libraries, not borrowed from other productions. When you see a video on this website, our team made it.</p>
            <p className="font-body text-body-md text-ivory/55 leading-[1.85] mb-8">This means our guides carry the same visual knowledge as documentary filmmakers. They know where the light falls at dawn on the Simien escarpment. They know which Web Valley hillside the Ethiopian wolves use at 7am. They have filmed it.</p>
            <Link href="https://www.ethiopiafilmfixer.com" className="btn-ghost-light group inline-flex items-center gap-2">
              Visit Sawla Films <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[{ n: '89', l: 'Films produced' }, { n: '12', l: 'Regional states filmed' }, { n: '4K', l: 'All footage' }, { n: '17', l: 'Years operating' }, { n: '16', l: 'Destinations' }, { n: '80%', l: 'Repeat clients' }].map(({ n, l }) => (
              <div key={l} className="text-center">
                <div className="font-display font-light text-[2rem] text-ivory leading-none mb-1">{n}</div>
                <div className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-ivory/35">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory py-24 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <div className="mb-16">
            <p className="label-eyebrow">History</p>
            <h2 className="font-display font-light text-display-lg text-charcoal">
              17 years in the field
            </h2>
          </div>
          <div className="space-y-px bg-sand">
            {timeline.map(({ year, title, desc }) => (
              <div key={year} className="bg-ivory grid grid-cols-[80px_1fr] gap-8 p-8 items-start">
                <div className="font-display font-light text-[1.5rem] text-gold leading-none pt-1">{year}</div>
                <div>
                  <h3 className="font-display font-[400] text-[1.125rem] text-charcoal mb-2">{title}</h3>
                  <p className="font-body text-body-sm text-warmgrey leading-[1.75]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-volcanic py-20 px-6 md:px-12 text-center">
        <div className="max-w-xl mx-auto">
          <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Start here</p>
          <h2 className="font-display font-light text-display-lg text-ivory mb-6">
            Ready to plan your<br /><em className="italic text-ivory/42">Ethiopia journey?</em>
          </h2>
          <Link href="/enquire" className="btn-primary-ivory inline-block">Plan a Journey</Link>
        </div>
      </section>
    </>
  )
}
