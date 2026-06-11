// app/tours-by-experience/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import HeroVideo from '@/components/ui/HeroVideo'
import { TOUR_STYLES } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Ethiopia Tours by Experience | 36 Itineraries | Sawla Tours',
  description: 'Choose your Ethiopia journey by experience — Historic, Cultural, Wildlife, Adventure, Festival, and Photography tours. 36 tailor-made itineraries from Sawla Tours.',
}

export default function ToursHubPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
        <HeroVideo poster="tours-hub-hero.jpg" posterCategory="tour" overlayClassName="bg-volcanic/72" />
        <div className="relative z-10 container-max text-ivory max-w-4xl">
          <span className="label-eyebrow text-gold">All Experiences</span>
          <h1 className="heading-display text-display-xl text-ivory mt-2">Ethiopia Tours by Experience</h1>
          <p className="text-ivory/70 text-body-lg mt-4 max-w-2xl">Six ways into Ethiopia — 36 itineraries, all private, all tailor-made. Every journey starts with what you care about.</p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOUR_STYLES.map(style => (
              <Link key={style.slug} href={`/tours-by-experience/${style.slug}`} className="group flex gap-6 bg-white rounded-card border border-sand p-6 card-hover">
                <div className="relative w-1/3 flex-shrink-0 rounded-lg overflow-hidden aspect-[4/3]">
                  <PlaceholderImage filename={`tour-hub-${style.slug}.jpg`} width={400} height={300} category="tour" fill className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <div className="label-eyebrow text-gold mb-1">{style.name}</div>
                  <h2 className="font-display text-charcoal text-2xl font-normal mb-2 group-hover:text-gold transition-colors leading-tight">{style.tagline}</h2>
                  <p className="text-warmgrey text-sm leading-relaxed line-clamp-2">{style.description}</p>
                  <span className="inline-block mt-4 text-xs tracking-wider uppercase text-gold/80">Explore itineraries →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-charcoal text-center">
        <div className="container-max">
          <h2 className="font-display text-ivory text-display-sm mb-4">Not Sure Which Style?</h2>
          <p className="text-ivory/60 mb-8 max-w-md mx-auto">Tell us what draws you to Ethiopia and we will suggest the right combination of experiences.</p>
          <Link href="/enquire" className="btn-primary">Talk to a specialist →</Link>
        </div>
      </section>
    </>
  )
}
