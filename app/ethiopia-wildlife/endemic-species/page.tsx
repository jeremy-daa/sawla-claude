// app/ethiopia-wildlife/endemic-species/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { SPECIES } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Ethiopian Endemic Species | Wildlife Library | Sawla Tours',
  description: 'Ethiopia\'s endemic species — Ethiopian wolf, gelada monkey, Walia ibex, mountain nyala, and endemic birds found nowhere else on earth. A wildlife guide by Sawla Tours.',
}

export default function SpeciesHubPage() {
  const mammals = SPECIES.filter(s => s.type === 'Mammal')
  const birds = SPECIES.filter(s => s.type === 'Bird')

  return (
    <>
      <section className="relative h-[50vh] min-h-[380px] overflow-hidden pt-20">
        <PlaceholderImage filename="species-hub-hero.jpg" width={1920} height={1080} category="species" fill />
        <div className="image-overlay" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="container-max text-ivory">
            <span className="label-eyebrow text-gold">Endemic Species</span>
            <h1 className="heading-display text-display-xl text-ivory mt-2">Ethiopian Wildlife Library</h1>
            <p className="text-ivory/80 text-body-lg mt-3 max-w-2xl">Ethiopia has 31 endemic mammal species and over 20 endemic birds — found nowhere else on earth.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-max">
          <h2 className="heading-display text-display-md text-charcoal mb-10">Endemic Mammals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
            {mammals.map(sp => (
              <Link key={sp.slug} href={`/ethiopia-wildlife/${sp.slug}`} className="group bg-white rounded-card overflow-hidden border border-sand card-hover block">
                <div className="relative aspect-square">
                  <PlaceholderImage filename={`species-${sp.slug}-portrait.jpg`} width={400} height={400} category="species" fill className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-charcoal text-lg font-normal group-hover:text-gold transition-colors">{sp.commonName}</h3>
                  <p className="text-warmgrey text-xs italic mt-0.5">{sp.scientificName}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] bg-amber/20 text-coffee px-2 py-0.5 rounded">{sp.conservationStatus}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="heading-display text-display-md text-charcoal mb-10">Endemic Birds</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {birds.map(sp => (
              <Link key={sp.slug} href={`/ethiopia-wildlife/${sp.slug}`} className="group bg-white rounded-card overflow-hidden border border-sand card-hover block">
                <div className="relative aspect-square">
                  <PlaceholderImage filename={`species-${sp.slug}-portrait.jpg`} width={400} height={400} category="species" fill className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-charcoal text-lg font-normal group-hover:text-gold transition-colors">{sp.commonName}</h3>
                  <p className="text-warmgrey text-xs italic mt-0.5">{sp.scientificName}</p>
                  <div className="mt-2">
                    <span className="text-[10px] bg-amber/20 text-coffee px-2 py-0.5 rounded">{sp.conservationStatus}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-charcoal text-center">
        <div className="container-max">
          <h2 className="font-display text-ivory text-display-sm mb-4">Plan a Wildlife Journey</h2>
          <p className="text-ivory/60 mb-8 max-w-md mx-auto">Tell us which species you most want to see and we will design the right route.</p>
          <Link href="/enquire" className="btn-primary">Start planning →</Link>
        </div>
      </section>
    </>
  )
}
