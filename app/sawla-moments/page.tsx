import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { MOMENTS_ARTICLES, MOMENTS_CATEGORIES } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Ethiopia Travel Stories & Field Notes | Sawla Moments',
  description: 'Read Ethiopia travel stories, field notes, planning insights, wildlife articles, cultural guides, and photography inspiration from Sawla Tours local experts.',
}

const momentsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.sawlatours.com/sawla-moments/#collectionpage',
      url: 'https://www.sawlatours.com/sawla-moments/',
      name: 'Sawla Moments: Ethiopia Travel Stories & Field Notes',
      description: 'Sawla Moments is the editorial hub of Sawla Tours, featuring Ethiopia travel stories, field notes, planning advice, cultural insights, wildlife articles, and photography inspiration.',
    },
    {
      '@type': 'Blog',
      '@id': 'https://www.sawlatours.com/sawla-moments/#blog',
      name: 'Sawla Moments',
      url: 'https://www.sawlatours.com/sawla-moments/',
    },
  ],
}

export default function SawlaMomentsHub() {
  return (
    <>
      <SchemaScript schema={momentsSchema} />

      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden pt-20">
        <PlaceholderImage filename="moments-hub-hero.jpg" width={1920} height={800} category="moments" fill />
        <div className="image-overlay" />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-max text-ivory text-center max-w-3xl mx-auto">
            <span className="label-eyebrow text-gold">Field Notes from Ethiopia</span>
            <h1 className="heading-display text-display-xl text-ivory mt-3">Sawla Moments</h1>
            <p className="text-ivory/80 text-body-lg mt-4">
              Stories, guides, and practical insights from the places we know best — written for travelers who want to understand Ethiopia before they arrive.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="#articles" className="btn-primary">Explore the Stories</Link>
              <Link href="/enquire" className="btn-ghost-light">Start Planning →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING STATEMENT */}
      <section className="section-padding-sm bg-ivory">
        <div className="container-max max-w-3xl mx-auto text-center">
          <h2 className="heading-display text-display-sm text-charcoal mb-5">Before You Travel, Understand the Place</h2>
          <p className="text-warmgrey text-body-lg leading-relaxed">
            Ethiopia is not a destination to rush through. Sawla Moments is where we share what does not always fit into an itinerary: the feeling of standing among geladas in the Simien Mountains, the patience required for good photography, the etiquette of entering a church, and the choices that make a trip more respectful, comfortable, and meaningful.
          </p>
          <p className="text-warmgrey text-body-md leading-relaxed mt-4">
            These are field notes from Ethiopia — shaped by local guides, travel planners, and storytellers who work with the country every day.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section id="articles" className="section-padding bg-sand/20" aria-labelledby="featured-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="label-eyebrow">Featured Field Notes</span>
            <h2 id="featured-heading" className="heading-display text-display-md text-charcoal">Start Here</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {MOMENTS_ARTICLES.map((article, i) => (
              <Link
                key={article.slug}
                href={`/sawla-moments/${article.slug}`}
                className={`group bg-ivory rounded-card overflow-hidden border border-sand card-hover block ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
                  <PlaceholderImage
                    filename={article.heroImage}
                    width={i === 0 ? 1200 : 600}
                    height={i === 0 ? 600 : 375}
                    category="moments"
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <span className="label-eyebrow text-gold">{article.category}</span>
                  <h3 className={`font-display text-charcoal font-normal leading-snug mt-2 group-hover:text-gold transition-colors ${i === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {article.title}
                  </h3>
                  <p className="text-warmgrey text-body-sm mt-3 mb-4 line-clamp-2">{article.teaser}</p>
                  <span className="text-[11px] font-body tracking-wider uppercase text-gold/80">{article.readingTime} min read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE BY INTEREST */}
      <section className="section-padding bg-ivory" aria-labelledby="categories-heading">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="label-eyebrow">Explore by Interest</span>
            <h2 id="categories-heading" className="heading-display text-display-md text-charcoal">What Kind of Ethiopia Are You Looking For?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {MOMENTS_CATEGORIES.map(cat => (
              <Link
                key={cat.slug}
                href={`/sawla-moments/category/${cat.slug}`}
                className="group relative rounded-card overflow-hidden aspect-[4/3] block"
              >
                <PlaceholderImage filename={cat.image} width={600} height={450} category="moments" fill className="group-hover:scale-105 transition-transform duration-500" />
                <div className="image-overlay group-hover:bg-charcoal/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="font-display text-ivory text-xl font-light">{cat.name}</div>
                  <p className="text-ivory/70 text-xs font-body mt-1 line-clamp-2 hidden md:block">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SAWLA FILMS BLOCK */}
      <section className="section-padding bg-charcoal" aria-labelledby="films-heading">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label-eyebrow text-gold">Sawla Films</span>
            <h2 id="films-heading" className="heading-display text-display-md text-ivory mt-4 mb-5">Stories We Have Seen Through the Lens</h2>
            <p className="text-ivory/70 text-body-lg mb-6">Sawla Films gives our editorial work a rare advantage. Some stories begin with a guide&apos;s memory. Others begin with a frame from a documentary shoot, a road conversation, or a festival morning that revealed a different way to understand a place.</p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@sawlafilms" target="_blank" rel="noopener noreferrer" className="btn-ghost-light">Watch Sawla Films →</a>
              <Link href="/tours-by-experience/ethiopia-photography-tours" className="btn-ghost-light">Photography Tours</Link>
            </div>
          </div>
          <div className="rounded-card overflow-hidden aspect-video">
            <PlaceholderImage filename="moments-hub-sawla-films.jpg" width={1280} height={720} category="moments" />
          </div>
        </div>
      </section>

      {/* CONVERSION — INSPIRED BY A STORY */}
      <section className="section-padding bg-ivory" aria-labelledby="inspired-heading">
        <div className="container-max">
          <div className="text-center mb-10">
            <span className="label-eyebrow">From Story to Journey</span>
            <h2 id="inspired-heading" className="heading-display text-display-sm text-charcoal">Inspired by Something You Read?</h2>
            <p className="text-warmgrey mt-3 max-w-xl mx-auto">If something in Sawla Moments sparked your curiosity, our team can help turn it into a private Ethiopia itinerary designed around exactly that interest.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Wildlife & endemic species', href: '/tours-by-experience/ethiopia-wildlife-tours' },
              { title: 'History & culture', href: '/tours-by-experience/historic-and-cultural-tours' },
              { title: 'Omo Valley & communities', href: '/tours-by-experience/tribal-cultural-ethiopia-tours' },
              { title: 'Photography & filming', href: '/tours-by-experience/ethiopia-photography-tours' },
              { title: 'Danakil & remote journeys', href: '/tours-by-experience/ethiopia-adventure-tours' },
            ].map(card => (
              <Link key={card.href} href={card.href} className="bg-sand/40 rounded-card p-5 text-center hover:bg-sand/70 hover:shadow-sm transition-all border border-sand group">
                <div className="font-body text-sm font-500 text-charcoal group-hover:text-gold transition-colors">{card.title}</div>
                <div className="text-gold text-sm mt-2">Explore →</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/enquire" className="btn-ghost">Start a conversation →</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="section-padding-sm bg-charcoal text-center">
        <div className="container-max max-w-lg mx-auto">
          <span className="label-eyebrow text-gold">Field Notes by Email</span>
          <h2 className="heading-display text-display-sm text-ivory mt-3 mb-3">Receive Occasional Notes From Ethiopia</h2>
          <p className="text-ivory/60 mb-7 text-sm">Selected Ethiopia travel stories, planning insights, and new field notes from our Addis Ababa team.</p>
          {/* DEVELOPER: Connect to Kit/ConvertKit or Mailchimp */}
          <form className="flex gap-3 max-w-sm mx-auto" >
            <input type="email" placeholder="Your email address" required className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold text-sm" />
            <button type="submit" className="btn-primary whitespace-nowrap text-sm px-5">Send Me Field Notes</button>
          </form>
          <p className="text-ivory/30 text-xs mt-4">No spam. Just occasional Ethiopia travel insight. Unsubscribe any time.</p>
        </div>
      </section>
    </>
  )
}
