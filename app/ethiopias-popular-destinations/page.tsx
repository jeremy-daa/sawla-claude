import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import HeroVideo from "@/components/ui/HeroVideo"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import { DESTINATIONS } from "@/data/siteData"
import { itemListSchema, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Ethiopia Destinations | All 16 Regions | Sawla Tours",
  description: "Explore all 16 Ethiopia destinations with Sawla Tours. Lalibela, Simien Mountains, Danakil Depression, Omo Valley, Bale Mountains, Gondar, Harar, Tigray and more.",
  alternates: { canonical: "https://www.sawlatours.com/ethiopias-popular-destinations" },
}

const DIFF_COLORS: Record<string, string> = {
  Easy:        "text-green-700 bg-green-50 border-green-200",
  Moderate:    "text-amber-700 bg-amber-50 border-amber-200",
  Challenging: "text-red-700 bg-red-50 border-red-200",
}

export default function DestinationsHubPage() {
  const featured  = DESTINATIONS.filter(d => d.featured)
  const secondary = DESTINATIONS.filter(d => !d.featured)

  const schemas = [
    itemListSchema({
      name: "Ethiopia Travel Destinations",
      url: "https://www.sawlatours.com/ethiopias-popular-destinations",
      items: DESTINATIONS.map(d => ({ name: d.name, url: "https://www.sawlatours.com/ethiopias-popular-destinations/" + d.slug })),
    }),
    breadcrumbSchema([
      { name: "Home", url: "https://www.sawlatours.com" },
      { name: "Destinations", url: "https://www.sawlatours.com/ethiopias-popular-destinations" },
    ]),
  ]

  return (
    <>
      {schemas.map((s, i) => <SchemaScript key={i} schema={s} />)}

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <HeroVideo poster="destinations-hub-hero.jpg" posterCategory="destination" overlayClassName="bg-volcanic/72" />
        <div className="relative z-10 container-max text-center text-ivory">
          <AnimateIn>
            <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
              <ol className="flex items-center gap-2 font-body" style={{fontSize:"11.5px",letterSpacing:"0.1em",textTransform:"uppercase"}}>
                <li><Link href="/" className="text-ivory/50 hover:text-gold transition-colors cursor-pointer">Home</Link></li>
                <li className="text-ivory/30">&#47;</li>
                <li className="text-gold">Destinations</li>
              </ol>
            </nav>
            <span className="label-eyebrow text-gold">Explore Ethiopia</span>
            <h1 className="heading-display text-ivory mt-2" style={{fontSize:"clamp(2.5rem,6vw,5rem)"}}>
              16 Destinations.
              <em className="block text-gold" style={{fontStyle:"italic"}}>Each One Unrepeatable.</em>
            </h1>
            <p className="text-ivory/70 font-body max-w-2xl mx-auto mt-6 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
              Ethiopia holds more than most travelers expect. These are not stops on a checklist.
              Each destination offers something found nowhere else on earth.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── FEATURED 6 ── */}
      <section className="section-padding bg-ivory" aria-labelledby="featured-heading">
        <div className="container-max">
          <AnimateIn className="mb-12">
            <span className="label-eyebrow">Featured</span>
            <h2 id="featured-heading" className="heading-display text-volcanic mt-1" style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>Start Here</h2>
            <p className="text-warmgrey font-body mt-3 max-w-2xl" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>The six destinations that define a first — or fifth — journey to Ethiopia.</p>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {featured.map(dest => (
              <div key={dest.slug}>
                <Link href={"/ethiopias-popular-destinations/" + dest.slug}
                  className="group relative overflow-hidden rounded-card block card-hover" aria-label={dest.name}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <PlaceholderImage filename={"dest-" + dest.slug + "-hero.jpg"}
                      width={600} height={450} category="destination" fill
                      className="group-hover:scale-105 transition-transform duration-700" />
                    <div className="image-overlay" />
                    <div className="absolute top-4 right-4">
                      <span className={"font-body font-medium border rounded-full px-3 py-1 " + (DIFF_COLORS[dest.difficulty] ?? "")} style={{fontSize:"11px",letterSpacing:"0.08em"}}>
                        {dest.difficulty}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="label-eyebrow text-gold !mb-1" style={{fontSize:"10px"}}>{dest.region}</span>
                      <h3 className="font-display text-ivory font-light leading-tight" style={{fontSize:"clamp(1.25rem,2.5vw,1.75rem)"}}>{dest.name}</h3>
                      <p className="text-ivory/70 font-body mt-1.5 leading-snug" style={{fontSize:"0.8125rem"}}>{dest.tagline}</p>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
                        <span className="text-ivory/60 font-body" style={{fontSize:"11.5px"}}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline mr-1.5" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 3.5V6l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                          {dest.duration}
                        </span>
                        <span className="text-ivory/60 font-body" style={{fontSize:"11.5px"}}>
                          {dest.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── ALL DESTINATIONS — dark list ── */}
      <section className="section-padding bg-volcanic" aria-labelledby="all-heading">
        <div className="container-max">
          <AnimateIn className="mb-12">
            <span className="label-eyebrow text-gold">Every Destination</span>
            <h2 id="all-heading" className="heading-display text-ivory mt-1" style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>All 16 Ethiopia Destinations</h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" staggerDelay={0.04}>
            {secondary.map(d => (
              <div key={d.slug}>
                <Link href={"/ethiopias-popular-destinations/" + d.slug}
                  className="group flex items-center gap-4 p-4 rounded-[12px] border border-white/10 hover:border-gold/50 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <PlaceholderImage filename={"dest-" + d.slug + "-thumb.jpg"} width={56} height={56} category="destination" fill
                      className="group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-gold font-body" style={{fontSize:"9.5px",letterSpacing:"0.14em",textTransform:"uppercase"}}>{d.region}</div>
                    <div className="font-display text-ivory group-hover:text-gold transition-colors font-light leading-tight mt-0.5" style={{fontSize:"clamp(1rem,1.5vw,1.2rem)"}}>{d.name}</div>
                    <div className="text-ivory/45 font-body mt-0.5" style={{fontSize:"11px"}}>{d.difficulty} &middot; {d.duration}</div>
                  </div>
                  <svg className="flex-shrink-0 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── ROUTE CONTEXT ── */}
      <section className="section-padding-sm bg-gold-faint border-t border-sand/60">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn>
            <span className="label-eyebrow">How We Plan</span>
            <h2 className="heading-display text-volcanic mt-1 mb-5" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>Most Journeys Combine 3 to 5 Regions</h2>
            <p className="text-warmgrey font-body leading-relaxed mb-6" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>Ethiopia is large and each region requires different logistics and climate timing. Our planning team builds routes that make geographic and experiential sense.</p>
            <div className="space-y-3">
              {[
                { label: "Northern Historical Circuit",  route: "Addis Ababa &rarr; Gondar &rarr; Lalibela &rarr; Axum" },
                { label: "Southern Wildlife Route",      route: "Bale Mountains &rarr; Yabello &rarr; Omo Valley" },
                { label: "Eastern Frontier",            route: "Harar &rarr; Rift Valley Lakes" },
                { label: "Remote Expeditions",          route: "Danakil Depression &rarr; Simien Mountains" },
              ].map(r => (
                <div key={r.label} className="flex gap-3 p-4 bg-ivory rounded-[10px] border border-sand/60">
                  <svg className="text-gold flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1C5.343 1 4 2.343 4 4c0 3.5 3 8 3 8s3-4.5 3-8c0-1.657-1.343-3-3-3z" stroke="currentColor" strokeWidth="1.3" fill="none"/><circle cx="7" cy="4" r="1.2" fill="currentColor"/></svg>
                  <div>
                    <div className="font-body font-medium text-volcanic" style={{fontSize:"13.5px"}}>{r.label}</div>
                    <div className="text-warmgrey font-body mt-0.5" style={{fontSize:"12px"}} dangerouslySetInnerHTML={{__html:r.route}} />
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2} className="rounded-card overflow-hidden aspect-square bg-sand/30 relative">
            <PlaceholderImage filename="ethiopia-map-regions.jpg" width={600} height={600} category="destination" fill />
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <Link href="/enquire" className="btn-gold">Plan My Route</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename="destinations-cta-bg.jpg" width={1920} height={600} category="destination" fill />
          <div className="absolute inset-0 bg-volcanic/72" />
        </div>
        <div className="relative z-10 container-max">
          <AnimateIn>
            <span className="label-eyebrow text-gold">Not Sure Where to Start?</span>
            <h2 className="heading-display text-ivory mt-4 mb-6 max-w-3xl mx-auto" style={{fontSize:"clamp(1.75rem,4vw,3rem)"}}>
              Tell Us What You Want to Feel.
              <em className="block" style={{fontStyle:"italic"}}>We Will Find the Right Destination.</em>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquire" className="btn-gold py-4 px-10">Start Planning</Link>
              <Link href="/tours-by-experience" className="btn-ghost-light">Explore by Tour Style</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
