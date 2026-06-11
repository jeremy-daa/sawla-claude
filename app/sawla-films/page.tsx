import type { Metadata } from 'next'
import Link from 'next/link'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import SchemaScript from '@/components/ui/SchemaScript'
import { AnimateIn, AnimateStagger } from '@/components/ui/AnimateIn'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Sawla Films | Ethiopia Documentary Film Division',
  description: 'Sawla Films is the in-house documentary division of Sawla Tours — filming Ethiopia\'s landscapes, ceremonies, wildlife, and communities since 2009.',
  alternates: { canonical: 'https://www.sawlatours.com/sawla-films' },
  openGraph: {
    title: 'Sawla Films | Ethiopia Documentary Division',
    description: 'An in-house film team embedded within Sawla Tours — the only Ethiopia tour operator with its own documentary division.',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Sawla Films | Sawla Tours' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([
      { name: 'Home', url: 'https://www.sawlatours.com' },
      { name: 'Sawla Films', url: 'https://www.sawlatours.com/sawla-films' },
    ]),
    {
      '@type': 'Organization',
      name: 'Sawla Films',
      description: 'In-house documentary film division of Sawla Tours, producing films about Ethiopia\'s landscapes, cultures, wildlife, and communities.',
      parentOrganization: { '@type': 'TravelAgency', name: 'Sawla Tours', url: 'https://www.sawlatours.com' },
      url: 'https://www.sawlatours.com/sawla-films',
      sameAs: ['https://www.youtube.com/@sawlafilms'],
    },
  ],
}

const capabilities = [
  {
    title: 'Location Intelligence',
    description: 'Fifteen years of access to ceremonies, communities, wildlife corridors, and remote landscapes that no foreign fixer can replicate.',
  },
  {
    title: 'Permit & Protocol Management',
    description: 'Film permits, community consent, religious authority coordination, and governmental clearances — handled in-house.',
  },
  {
    title: 'Ground Logistics',
    description: 'Vehicles, guides, fixers, translators, interpreters, and camp support designed for film crews, not standard tourists.',
  },
  {
    title: 'Wildlife & Cultural Access',
    description: 'Gelada monkey habituated zones, Ethiopian wolf packs, Omo Valley community partnerships, Timkat ceremony access.',
  },
  {
    title: 'Production Support',
    description: 'On-ground production coordination for documentaries, travel series, commercial shoots, and editorial assignments.',
  },
  {
    title: 'Sawla Tours Integration',
    description: 'Every film project draws on the full infrastructure of Sawla Tours — guides, vehicles, camps, and specialist knowledge built over 15 years.',
  },
]

const filmTypes = [
  { type: 'Documentary Features', examples: ['Wildlife documentaries', 'Cultural and tribal films', 'Religious ceremony films', 'Landscape and environmental films'] },
  { type: 'Travel Series', examples: ['Destination travel series', 'Culinary and food travel', 'Adventure and expedition films', 'Human interest stories'] },
  { type: 'Commercial Production', examples: ['Tourism board campaigns', 'Airline and hospitality content', 'NGO and development reporting', 'Editorial photography and video'] },
  { type: 'Private Journeys', examples: ['Family expedition films', 'Photography tour documentation', 'Corporate and incentive content', 'Personal travel films'] },
]

export default function SawlaFilmsPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* CINEMATIC HERO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-end">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename="sawla-films-hero-cinema.jpg" width={1920} height={1080} category="home" fill className="object-center" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,39,36,0.95) 0%, rgba(42,39,36,0.3) 60%, rgba(42,39,36,0.1) 100%)' }} />
        </div>
        <div className="relative z-10 container-max pb-20 text-ivory">
          <AnimateIn>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-body">
                <li><Link href="/" className="text-ivory/40 hover:text-gold transition-colors">Home</Link></li>
                <li className="text-ivory/25">/</li>
                <li className="text-ivory/60">Sawla Films</li>
              </ol>
            </nav>
            <span className="label-eyebrow text-gold block mb-4">In-house documentary division</span>
            <h1 className="heading-display text-ivory mb-6" style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', lineHeight: '1.04' }}>
              Ethiopia, Seen from the Inside
            </h1>
            <p className="text-ivory/70 font-body max-w-2xl mb-10" style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
              Sawla Films is the only in-house documentary division operated by an Ethiopia tour company. For fifteen years, our team has filmed the country&apos;s landscapes, ceremonies, wildlife, and communities — not as visitors, but as people who live here.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@sawlafilms"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Watch on YouTube
              </a>
              <Link href="/enquire" className="btn-outline-ivory">
                Plan a Film Journey
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* WHAT MAKES SAWLA FILMS DIFFERENT */}
      <section className="py-section bg-ivory">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn>
              <span className="label-eyebrow text-gold block mb-4">The advantage</span>
              <h2 className="heading-display text-display-md text-volcanic mb-6">
                What No Foreign Fixer Can Offer
              </h2>
              <div className="space-y-5 text-warmgrey font-body leading-relaxed">
                <p>
                  Most documentary filmmakers who come to Ethiopia spend months finding local fixers, negotiating community access, and working around logistical obstacles. Sawla Films removes all of that friction.
                </p>
                <p>
                  Our team has spent years building trust in the communities we film — with Omo Valley tribal leaders, with the Ethiopian Orthodox Church, with park rangers and wildlife researchers, with coffee farmers and festival organisers. That trust cannot be hired for a single project.
                </p>
                <p>
                  When you work with Sawla Films, you are not contracting a fixer. You are tapping into fifteen years of on-the-ground relationships, logistical infrastructure, and deep local knowledge — embedded within a company that has been operating private journeys across Ethiopia since 2009.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/enquire" className="btn-primary">
                  Discuss Your Film Project
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="relative rounded-card overflow-hidden aspect-[4/3]">
                <PlaceholderImage filename="sawla-films-crew-omo.jpg" width={800} height={600} category="moments" fill />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-section bg-volcanic text-ivory">
        <div className="container-max">
          <AnimateIn>
            <h2 className="heading-display text-display-md text-ivory text-center mb-4">
              What Sawla Films Provides
            </h2>
            <p className="text-ivory/60 text-center font-body max-w-xl mx-auto mb-14">
              Full-spectrum production support for documentary, editorial, commercial, and private film projects.
            </p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(cap => (
              <div key={cap.title} className="border border-white/10 rounded-card p-7 hover:border-gold/40 transition-colors duration-300">
                <h3 className="font-display text-xl text-gold font-light mb-3">{cap.title}</h3>
                <p className="text-ivory/65 font-body text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* FILM TYPES */}
      <section className="py-section bg-ivory">
        <div className="container-max">
          <AnimateIn>
            <h2 className="heading-display text-display-sm text-volcanic text-center mb-12">
              Projects We Support
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filmTypes.map(ft => (
              <div key={ft.type} className="bg-white border border-sand rounded-card p-8">
                <h3 className="font-display text-2xl font-light text-volcanic mb-5">{ft.type}</h3>
                <ul className="space-y-2">
                  {ft.examples.map(ex => (
                    <li key={ex} className="flex items-center gap-3 text-warmgrey font-body text-sm">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* YOUTUBE CTA */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="relative rounded-card overflow-hidden aspect-video bg-volcanic/50">
                <PlaceholderImage filename="sawla-films-youtube-preview.jpg" width={800} height={450} category="moments" fill />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <span className="label-eyebrow text-gold block mb-4">Watch our work</span>
              <h2 className="heading-display text-display-sm text-ivory mb-5">
                Films from Ethiopia&apos;s Most Remote Places
              </h2>
              <p className="text-ivory/65 font-body leading-relaxed mb-8">
                Our YouTube channel carries fifteen years of footage from across Ethiopia — Danakil expeditions, Omo Valley portraits, gelada monkey mornings in the Simien, Timkat processions in Lalibela. All filmed by people who know these places.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@sawlafilms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Watch on YouTube
                </a>
                <Link href="/enquire" className="btn-outline-ivory">
                  Enquire About Film Support
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
