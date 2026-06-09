import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { siteData } from '@/data/siteData'
import SchemaScript from '@/components/ui/SchemaScript'
import { generateDestinationSchema, generateBreadcrumbSchema } from '@/lib/schema'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return siteData.destinations.map(d => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = siteData.destinations.find(d => d.slug === slug)
  if (!dest) return {}
  return {
    title: `${dest.name}, Ethiopia — Travel Guide & Tours | Sawla Tours`,
    description: dest.excerpt,
    alternates: { canonical: `https://www.sawlatours.com/ethiopias-popular-destinations/${dest.slug}` },
    openGraph: {
      title: `${dest.name}, Ethiopia | Sawla Tours`,
      description: dest.excerpt,
      images: [{ url: dest.heroImage }],
    },
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = siteData.destinations.find(d => d.slug === slug)
  if (!dest) notFound()

  // Related destinations (same region or just next 3)
  const related = siteData.destinations
    .filter(d => d.slug !== dest.slug)
    .slice(0, 3)

  // Related tours for this destination
  const relatedTours = siteData.tourStyles.slice(0, 3)

  const destSchema = generateDestinationSchema({
    name: dest.name,
    slug: dest.slug,
    description: dest.excerpt,
    image: `https://www.sawlatours.com${dest.heroImage}`,
    region: dest.region,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'Destinations', url: 'https://www.sawlatours.com/ethiopias-popular-destinations' },
    { name: dest.name, url: `https://www.sawlatours.com/ethiopias-popular-destinations/${dest.slug}` },
  ])

  return (
    <>
      <SchemaScript schema={destSchema} />
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden flex flex-col justify-end">
        {/*
          DEVELOPER: Replace gradient with:
          <Image src={dest.heroImage} alt={`${dest.name}, Ethiopia`} fill className="object-cover" priority />
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-volcanic via-charcoal to-volcanic" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative z-10 px-6 md:px-12 pb-12 max-w-container mx-auto w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-6 font-body text-[0.6rem] tracking-[0.14em] uppercase text-ivory/40">
            <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ethiopias-popular-destinations" className="hover:text-ivory transition-colors">Destinations</Link>
            <span>/</span>
            <span className="text-ivory/70">{dest.name}</span>
          </nav>
          <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>{dest.region}</p>
          <h1 className="font-display font-light text-display-xl text-ivory mb-4">{dest.name}</h1>
          <p className="font-body text-body-lg text-ivory/65 max-w-xl">{dest.excerpt}</p>
        </div>
      </section>

      {/* Quick facts strip */}
      <div className="bg-charcoal border-b border-ivory/10 py-4 px-6 md:px-12">
        <div className="max-w-container mx-auto flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-ivory/40">Best time</span>
            <span className="font-body text-[0.8125rem] text-ivory">{dest.bestTime}</span>
          </div>
          <span className="w-px h-4 bg-ivory/20" />
          <div className="flex items-center gap-3">
            <span className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-ivory/40">Recommended stay</span>
            <span className="font-body text-[0.8125rem] text-ivory">{dest.duration}</span>
          </div>
          <span className="w-px h-4 bg-ivory/20 hidden sm:block" />
          <Link href="/enquire" className="ml-auto font-body text-[0.6875rem] tracking-[0.13em] uppercase text-gold hover:text-gold-light transition-colors">
            Plan a journey here →
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="bg-ivory py-20 px-6 md:px-12">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Article body — left 2 cols */}
          <article className="lg:col-span-2">
            {/* DEVELOPER: Render MDX content here from /content/destinations/[slug].mdx */}
            {/* Or copy/paste content from 02_DESTINATIONS/All_16_Destinations_Complete.md */}
            <div className="prose-sawla">
              <p className="font-body text-body-lg text-warmgrey leading-[1.82] mb-8">{dest.excerpt}</p>

              <h2 className="font-display font-light text-display-md text-charcoal mb-6">Highlights</h2>
              <ul className="space-y-3 mb-12">
                {dest.highlights.map(h => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-3" />
                    <span className="font-body text-body-md text-warmgrey">{h}</span>
                  </li>
                ))}
              </ul>

              {/* DEVELOPER: full long-form content goes here */}
              <div className="bg-sand/50 border border-sand rounded-card p-8 mt-8">
                <p className="font-body text-[0.8125rem] text-warmgrey italic">
                  Full destination article content — see /content/destinations/{dest.slug}.md
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Enquiry CTA */}
            <div className="bg-volcanic p-8">
              <p className="font-body text-[0.6rem] tracking-[0.16em] uppercase text-gold mb-3">Plan this journey</p>
              <h3 className="font-display font-light text-[1.375rem] text-ivory mb-4">Interested in {dest.name}?</h3>
              <p className="font-body text-[0.8125rem] text-ivory/55 mb-6 leading-[1.7]">
                Tell us what you're looking for. We'll design a journey around {dest.name} and the rest of Ethiopia that matches you specifically.
              </p>
              <Link href={`/enquire?destination=${dest.slug}`} className="block text-center bg-gold hover:bg-gold-light text-volcanic font-body text-[0.6875rem] tracking-[0.14em] uppercase py-4 transition-colors duration-300">
                Start Planning
              </Link>
              <a href="https://wa.me/251970578306" className="block text-center mt-3 font-body text-[0.6rem] tracking-[0.14em] uppercase text-ivory/40 hover:text-ivory transition-colors">
                Or WhatsApp us
              </a>
            </div>

            {/* Quick facts */}
            <div className="border border-sand p-6">
              <p className="font-body text-[0.6rem] tracking-[0.16em] uppercase text-warmgrey mb-5">Quick facts</p>
              <div className="space-y-4">
                {[
                  { label: 'Region', value: dest.region },
                  { label: 'Best time', value: dest.bestTime },
                  { label: 'Stay', value: dest.duration },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between">
                    <span className="font-body text-[0.75rem] text-warmgrey">{label}</span>
                    <span className="font-body text-[0.75rem] font-medium text-charcoal">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related tours */}
      <section className="bg-sand py-20 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <p className="label-eyebrow">Journeys to {dest.name}</p>
          <h2 className="font-display font-light text-display-md text-charcoal mb-12">
            Itineraries that include this destination
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand/50">
            {relatedTours.map(tour => (
              <Link
                key={tour.slug}
                href={`/tours-by-experience/${tour.slug}`}
                className="group bg-ivory p-8 hover:bg-sand/30 transition-colors duration-300"
              >
                <p className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-gold mb-3">{tour.number}</p>
                <h3 className="font-display font-[400] text-[1.125rem] text-charcoal mb-2">{tour.name}</h3>
                <p className="font-body text-[0.8125rem] text-warmgrey leading-[1.65] mb-4">{tour.tagline}</p>
                <span className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-gold group-hover:gap-3 flex items-center gap-1.5 transition-all">
                  Explore journeys <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#C9941A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related destinations */}
      <section className="bg-ivory py-20 px-6 md:px-12">
        <div className="max-w-container mx-auto">
          <h2 className="font-display font-light text-display-md text-charcoal mb-12">
            Other destinations to explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand">
            {related.map(r => (
              <Link
                key={r.slug}
                href={`/ethiopias-popular-destinations/${r.slug}`}
                className="group relative overflow-hidden aspect-[4/3] bg-charcoal"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-volcanic to-charcoal transition-transform duration-700 group-hover:scale-[1.05]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-[0.55rem] tracking-[0.16em] uppercase text-ivory/38 mb-1">{r.region}</p>
                  <h3 className="font-display font-light text-[1.125rem] text-ivory">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
