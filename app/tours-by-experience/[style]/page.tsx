import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { breadcrumbSchema } from '@/lib/schema'
import { TOUR_STYLES, TESTIMONIALS } from '@/data/siteData'
 import { getItinerariesByStyle } from '@/data/itineraryData'

interface Props { params: Promise<{ style: string }> }

export async function generateStaticParams() {
  return TOUR_STYLES.map(s => ({ style: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { style } = await params
  const ts = TOUR_STYLES.find(s => s.slug === style)
  if (!ts) return {}
  return {
    title: `${ts.name} | Ethiopia Tours | Sawla Tours`,
    description: `${ts.tagline}. Private, tailor-made Ethiopia ${ts.name.toLowerCase()} with Sawla Tours — local specialists since 2009.`,
  }
}

export default async function TourStylePage({ params }: Props) {
  const { style } = await params
  const tourStyle = TOUR_STYLES.find(s => s.slug === style)
  if (!tourStyle) notFound()

  const itineraries = getItinerariesByStyle(style)
  const relatedTestimonial = TESTIMONIALS.find(t => t.useOn.some(u => u.includes(style.split('-')[0])))

  const schema = breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Tour Styles', url: 'https://www.sawlatours.com/tours-by-experience' },
    { name: tourStyle.name, url: `https://www.sawlatours.com/tours-by-experience/${style}` },
  ])

  return (
    <>
      <SchemaScript schema={schema} />

      {/* HERO */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden pt-20">
        <PlaceholderImage filename={`tour-hub-${style}.jpg`} width={1920} height={1080} category="tour" fill />
        <div className="image-overlay" />
        <div className="absolute inset-0 flex items-end pb-14">
          <div className="container-max text-ivory">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex gap-2 text-ivory/60 text-xs uppercase tracking-wider">
                <li><Link href="/" className="hover:text-gold">Home</Link></li>
                <li>/</li>
                <li><Link href="/tours-by-experience" className="hover:text-gold">Tours</Link></li>
                <li>/</li>
                <li className="text-ivory">{tourStyle.name}</li>
              </ol>
            </nav>
            <span className="label-eyebrow text-gold">{tourStyle.name}</span>
            <h1 className="heading-display text-display-xl text-ivory mt-2">{tourStyle.tagline}</h1>
            <p className="text-ivory/80 text-body-lg mt-3 max-w-2xl">{tourStyle.description}</p>
          </div>
        </div>
      </section>

      {/* ITINERARIES GRID */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="label-eyebrow">Itineraries</span>
            <h2 className="heading-display text-display-md text-charcoal">Choose Your Journey</h2>
            <p className="text-warmgrey mt-3 max-w-xl mx-auto">Every itinerary is a starting point — we adjust dates, pace, accommodation, and route for your specific trip.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itineraries.map(itin => (
              <Link
                key={itin.slug}
                href={`/tours-by-experience/${style}/${itin.slug}`}
                className="group bg-white rounded-card overflow-hidden border border-sand card-hover block"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <PlaceholderImage filename={`tour-${itin.slug}-hero.jpg`} width={600} height={375} category="tour" fill className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="label-eyebrow text-gold">{tourStyle.name}</div>
                    <div className="text-warmgrey text-xs">{itin.duration} days</div>
                  </div>
                  <h3 className="font-display text-charcoal text-xl font-normal group-hover:text-gold transition-colors mb-2">{itin.name}</h3>
                  <p className="text-warmgrey text-sm mb-4">{itin.highlights.slice(0,3).join(" · ")}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal text-sm font-500">{itin.priceFrom}</span>
                    <span className="text-gold text-xs tracking-wider uppercase">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center bg-sand/40 rounded-card p-8">
            <h3 className="font-display text-charcoal text-2xl mb-3">Don&apos;t see what you&apos;re looking for?</h3>
            <p className="text-warmgrey mb-6">These are starting points. We build entirely custom itineraries around your dates, interests, and style of travel.</p>
            <Link href="/enquire" className="btn-primary">Design your own journey →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {relatedTestimonial && (
        <section className="section-padding-sm bg-sand/20">
          <div className="container-max max-w-3xl mx-auto text-center">
            <div className="font-display text-gold text-5xl leading-none mb-4">&ldquo;</div>
            <blockquote className="font-display text-charcoal text-2xl font-light italic">{relatedTestimonial.fullQuote}</blockquote>
            <footer className="mt-4 text-warmgrey text-sm">— {relatedTestimonial.name}, {relatedTestimonial.country}</footer>
          </div>
        </section>
      )}

      <section className="section-padding-sm bg-charcoal text-center">
        <div className="container-max">
          <h2 className="font-display text-ivory text-display-sm mb-4">Start Your Ethiopia Journey</h2>
          <Link href="/enquire" className="btn-primary">Start planning →</Link>
        </div>
      </section>
    </>
  )
}
