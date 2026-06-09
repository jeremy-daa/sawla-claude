import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How We Work — The Sawla Tours Process | Ethiopia',
  description: 'Four steps from first conversation to departure. No templates, no group tours. Every Sawla journey is built around one question: what do you want to feel?',
  alternates: { canonical: 'https://www.sawlatours.com/how-we-work' },
}

const steps = [
  {
    n: '01', title: 'You tell us what matters',
    body: 'A short conversation. Fifteen minutes on the phone or a few messages. We ask about past trips, what you enjoyed, what frustrated you, and what kind of traveller you are. We ask what you want to feel, not just what you want to see. This conversation is the most important part of the process — everything else follows from it.',
    time: '15–30 minutes',
  },
  {
    n: '02', title: 'We design your journey',
    body: 'One of our specialists builds a bespoke itinerary. No templates. No group departure schedules. The document explains the reasoning for every choice: why this lodge, not that one. Why three nights in Bale, not two. Why the Tigray rock churches are worth the extra day.',
    time: '3–5 days',
  },
  {
    n: '03', title: 'You refine, we perfect',
    body: 'Two or three rounds of iteration. You ask questions. We adjust. You might want to cut a destination to slow the pace. You might want to add a festival. Each iteration brings the journey closer to being specifically yours. We have found that clients who engage with this process produce the best journeys.',
    time: '1–2 weeks',
  },
  {
    n: '04', title: 'You arrive, we are there',
    body: 'Our team meets you at Bole International Airport. From that moment, Ethiopia is handled. Your guide has the itinerary, the contacts, the emergency protocols, and — more importantly — 17 years of ground-level knowledge. You focus on experiencing Ethiopia. We focus on everything else.',
    time: 'From departure',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex flex-col justify-end bg-volcanic">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #0A0D1A 0%, #1A2040 50%, #0A1020 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
        <div className="relative z-10 px-6 md:px-12 pb-16 max-w-container mx-auto w-full">
          <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>The process</p>
          <h1 className="font-display font-light text-display-xl text-ivory">How We Work</h1>
        </div>
      </section>

      <section className="bg-ivory py-24 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <div className="max-w-xl mb-16">
            <p className="label-eyebrow">Four steps</p>
            <h2 className="font-display font-light text-display-lg text-charcoal mb-5">
              From first enquiry to<br /><em className="italic text-warmgrey">departure</em>
            </h2>
            <p className="font-body text-body-md text-warmgrey leading-[1.82]">We handle every detail — you arrive ready to be present.</p>
          </div>

          <div className="space-y-px bg-sand">
            {steps.map(({ n, title, body, time }) => (
              <div key={n} className="bg-ivory grid grid-cols-1 lg:grid-cols-[100px_1fr_160px] gap-8 p-10 items-start">
                <div className="font-display italic font-light text-[3rem] text-gold/35 leading-none">{n}</div>
                <div>
                  <h3 className="font-display font-[400] text-display-sm text-charcoal mb-4">{title}</h3>
                  <p className="font-body text-body-md text-warmgrey leading-[1.82]">{body}</p>
                </div>
                <div className="text-right">
                  <div className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-warmgrey/60 mb-1">Typical timeline</div>
                  <div className="font-body text-[0.8125rem] font-medium text-charcoal">{time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-volcanic py-20 px-6 md:px-12">
        <div className="max-w-container mx-auto max-w-2xl">
          <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Our philosophy</p>
          <blockquote className="font-display italic font-light text-display-md text-ivory/75 leading-[1.3] mt-4 mb-8">
            &ldquo;Every journey begins with a question. Our job is to find the right question — and then build the answer.&rdquo;
          </blockquote>
          <p className="font-body text-[0.8125rem] text-ivory/40 tracking-[0.1em] uppercase">Bemnet Alemu, Founder</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-20 px-6 md:px-12 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-light text-display-lg text-charcoal mb-8">
            Ready to start<br /><em className="italic text-warmgrey">the conversation?</em>
          </h2>
          <Link href="/enquire" className="btn-primary inline-block">Plan a Journey</Link>
        </div>
      </section>
    </>
  )
}
