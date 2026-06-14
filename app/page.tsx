import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import HeroSection from "@/components/home/HeroSection"
import TripWizard from "@/components/home/TripWizard"
import { homepageSchema } from "@/lib/schema"
import { TOUR_STYLES, TESTIMONIALS, MOMENTS_ARTICLES, SITE } from "@/data/siteData"
import { PREMIUM_DESTINATIONS } from "@/data/destinationsPremium"

export const metadata: Metadata = {
  title: "Private Ethiopia Tours by Local Experts | Sawla Tours",
  description: "Sawla Tours designs private Ethiopia journeys across Lalibela, Simien, Omo Valley, Danakil, and 16 destinations. Ethiopian team, 15+ years. No packages.",
  alternates: { canonical: "https://www.sawlatours.com" },
}

const featuredDests = PREMIUM_DESTINATIONS.filter(d => d.featured)
const homeTestimonials = TESTIMONIALS.filter(t => ["andrew-bart-usa","keith-blodgett","maureen-mason-au"].includes(t.id))

/* ── SVG Icons (no emoji) ──────────────────────── */
const IconEthiopia = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4"/><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>)
const IconStar     = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 14.27l-4.77 2.44.91-5.32L2.27 7.62l5.34-.78L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>)
const IconCalendar = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2.5" y="4" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M2.5 8h15M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>)
const IconFilm     = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="4.5" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><path d="M8 7.5l5 2.5-5 2.5V7.5z" fill="currentColor" opacity=".6"/></svg>)
const IconArrow    = () => (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>)

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homepageSchema} />

      {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ══ 2. TRUST BAR ══════════════════════════════════════════════════ */}
      <section className="bg-volcanic border-b border-white/8" aria-label="About Sawla Tours">
        <div className="container-max py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { Icon: IconEthiopia, title: "Ethiopia-based",  sub: "Local team, in-country expertise" },
              { Icon: IconStar,     title: "Highly rated",    sub: "Trusted through referrals" },
              { Icon: IconCalendar, title: "Est. 2009",       sub: "15+ years designing journeys" },
              { Icon: IconFilm,     title: "Sawla Films",     sub: "In-house documentary division" },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 py-2">
                <span className="text-gold/70 flex-shrink-0"><Icon /></span>
                <div>
                  <div className="text-ivory text-[13px] font-medium font-body tracking-wide">{title}</div>
                  <div className="text-ivory/45 text-xs font-body leading-snug">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIO Entity Block - crawler visible, screen-reader only */}
      <div className="sr-only" aria-hidden="false">
        <p>Sawla Tours is an Addis Ababa-based Ethiopia tour operator founded in 2009, specialising in private, tailor-made Ethiopia journeys. The company designs cultural, historic, wildlife, birding, photography, tribal, festival, and adventure tours. Local specialists, experienced Ethiopian guides, trusted drivers, and Sawla Films in-house documentary division.</p>
      </div>

      {/* ══ 3. DECLARATION ════════════════════════════════════════════════ */}
      <section className="section-padding bg-ivory" aria-labelledby="declaration-heading">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <AnimateIn delay={0}><span className="label-eyebrow">Our Approach</span></AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 id="declaration-heading" className="heading-display text-volcanic"
                style={{ fontSize: "clamp(2.5rem,6vw,5.5rem)", marginBottom: "2.5rem" }}>
                Ethiopia Is Not One Journey.
                <span className="block text-gold">It&apos;s Hundreds.</span>
              </h2>
            </AnimateIn>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <AnimateIn delay={0.2} className="space-y-5 text-warmgrey font-body leading-relaxed" style={{ fontSize: "clamp(1rem,1.25vw,1.125rem)" }}>
                <p>There is no single Ethiopia. There is the Ethiopia of ancient churches carved from living rock. The Ethiopia of highland wolves and endemic birds found nowhere else on earth. The Ethiopia of tribes, ceremonies, and coffee rituals stretching back millennia.</p>
                <p>We are Sawla Tours — an Ethiopia-based team of travel specialists, guides, drivers, and field crews who know all of them. Since 2009, we have designed private journeys for travelers who want more than a highlight reel.</p>
                <Link href="/about-us" className="inline-flex items-center gap-2 text-gold hover:text-volcanic transition-colors text-[12px] font-body tracking-[0.1em] uppercase font-medium mt-2 group cursor-pointer">
                  Meet Our Team <span className="group-hover:translate-x-1 transition-transform"><IconArrow /></span>
                </Link>
              </AnimateIn>
              <AnimateIn delay={0.35}>
                <blockquote className="pull-quote">
                  &ldquo;We do not have a catalogue.
                  <br />We have a conversation.&rdquo;
                </blockquote>
                <div className="divider-gold" />
                <div className="grid grid-cols-3 gap-6 mt-2">
                  {[["16+","Destinations"],["36+","Itineraries"],["15+","Years"]].map(([n,l]) => (
                    <div key={l}>
                      <div className="font-display text-volcanic font-light" style={{fontSize:"clamp(1.75rem,3.5vw,2.5rem)",letterSpacing:"-0.02em"}}>{n}</div>
                      <div className="text-warmgrey font-body mt-1" style={{fontSize:"0.75rem",letterSpacing:"0.12em",textTransform:"uppercase"}}>{l}</div>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. FEATURED DESTINATIONS ══════════════════════════════════════ */}
      <section className="section-padding bg-volcanic" aria-labelledby="destinations-heading">
        <div className="container-max">
          <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="label-eyebrow text-gold">Destinations</span>
              <h2 id="destinations-heading" className="heading-display text-ivory mt-1"
                style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
                Six Places That Define Ethiopia
              </h2>
            </div>
            <Link href="/ethiopias-popular-destinations"
              className="btn-ghost-light flex-shrink-0">All 16 Destinations</Link>
          </AnimateIn>

          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {featuredDests.map(dest => (
              <div key={dest.slug} style={{...({} as object)}}>
                <Link href={"/ethiopias-popular-destinations/" + dest.slug}
                  className="group relative overflow-hidden rounded-card aspect-[4/3] block card-hover"
                  aria-label={dest.name + " — " + dest.tagline}>
                  <PlaceholderImage
                    filename={"dest-" + dest.slug + "-hero.jpg"}
                    width={600} height={450} category="destination" fill
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="image-overlay" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="label-eyebrow text-gold !mb-1 text-[10px]">{dest.region}</span>
                    <h3 className="font-display text-ivory font-light leading-tight"
                      style={{fontSize:"clamp(1.25rem,2.5vw,1.75rem)"}}>{dest.name}</h3>
                    <p className="text-ivory/65 font-body mt-1.5 leading-snug"
                      style={{fontSize:"0.8125rem"}}>{dest.tagline}</p>
                    <div className="flex items-center gap-1.5 mt-3 text-gold"
                      style={{fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase"}}>
                      Explore <IconArrow />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ══ 5. TOUR STYLES ════════════════════════════════════════════════ */}
      <section className="section-padding bg-ivory" aria-labelledby="tour-styles-heading">
        <div className="container-max">
          <AnimateIn className="text-center mb-14">
            <span className="label-eyebrow">Experiences</span>
            <h2 id="tour-styles-heading" className="heading-display text-volcanic mt-1"
              style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
              What Brings You to Ethiopia?
            </h2>
            <p className="text-warmgrey font-body mt-4 max-w-2xl mx-auto"
              style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
              Every journey starts with one of these entry points — and almost always becomes something more.
            </p>
          </AnimateIn>

          <AnimateStagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5" staggerDelay={0.07}>
            {TOUR_STYLES.map(style => (
              <div key={style.slug}>
                <Link href={"/tours-by-experience/" + style.slug}
                  className="group relative overflow-hidden rounded-card aspect-[4/3] block"
                  aria-label={style.name}>
                  <PlaceholderImage
                    filename={"home-style-" + style.slug + ".jpg"}
                    width={600} height={450} category="tour" fill
                    className="group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="image-overlay-center group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <span className="label-eyebrow text-gold !mb-1 text-[10px]">{style.name}</span>
                    <p className="text-ivory/75 font-body leading-snug" style={{fontSize:"0.8125rem"}}>{style.tagline}</p>
                  </div>
                </Link>
              </div>
            ))}
          </AnimateStagger>

          <AnimateIn delay={0.2} className="text-center mt-10">
            <Link href="/tours-by-experience" className="btn-ghost">See all 36 itineraries</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══ 6. TRIP WIZARD ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-gold-faint" aria-labelledby="wizard-heading">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <AnimateIn className="text-center mb-12">
              <span className="label-eyebrow">Plan Your Journey</span>
              <h2 id="wizard-heading" className="heading-display text-volcanic mt-1"
                style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
                Plan Your Ethiopia Journey in 5 Steps
              </h2>
              <p className="text-warmgrey font-body mt-4" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
                Tell us what matters. We will do the rest.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15} className="bg-ivory rounded-card p-8 md:p-12 border border-sand/60">
              <TripWizard />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══ 7. WHY SAWLA ══════════════════════════════════════════════════ */}
      <section className="section-padding bg-ivory" aria-labelledby="why-heading">
        <div className="container-max">
          <AnimateIn className="text-center mb-14">
            <span className="label-eyebrow">Why Travel with Us</span>
            <h2 id="why-heading" className="heading-display text-volcanic mt-1"
              style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
              Three Reasons Sawla Travelers Come Back
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.12}>
            {[
              { n:"01", title:"Locally rooted, not remotely managed", body:"Every specialist, guide, and driver on your journey is Ethiopian. People who grew up with this country, studied it, and return to it daily.", link:"/meet-our-travel-specialists", label:"Meet our specialists" },
              { n:"02", title:"Sawla Films: the evidence is already shot", body:"We operate an in-house documentary division. The only Ethiopian tour company that does. We can show you what a journey with us actually looks like before you book.", link:"/tours-by-experience/ethiopia-photography-tours", label:"Photography tours" },
              { n:"03", title:"Your itinerary starts with a conversation", body:"We do not start planning by choosing from a menu. We start by asking what you care about, how you travel, and what you want to feel. The route comes after.", link:"/how-we-work", label:"How we work" },
            ].map(card => (
              <article key={card.n} className="group relative border-t border-sand pt-8">
                <div className="font-display text-gold/25 font-light leading-none mb-5" style={{fontSize:"clamp(3rem,6vw,5rem)"}}>{card.n}</div>
                <h3 className="font-display text-volcanic font-normal leading-snug mb-4" style={{fontSize:"clamp(1.25rem,2vw,1.625rem)"}}>{card.title}</h3>
                <p className="text-warmgrey font-body leading-relaxed mb-6" style={{fontSize:"1rem"}}>{card.body}</p>
                <Link href={card.link} className="inline-flex items-center gap-2 text-gold hover:text-volcanic transition-colors font-body font-medium group cursor-pointer" style={{fontSize:"11.5px",letterSpacing:"0.1em",textTransform:"uppercase"}}>
                  {card.label} <span className="group-hover:translate-x-1 transition-transform"><IconArrow /></span>
                </Link>
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ══ 8. SAWLA FILMS ════════════════════════════════════════════════ */}
      <section className="section-padding bg-volcanic relative overflow-hidden" aria-labelledby="films-heading">
        <div className="absolute inset-0 opacity-[0.035]" style={{backgroundImage:"radial-gradient(ellipse 80% 60% at 50% 50%, #c9941a 0%, transparent 100%)"}} aria-hidden="true" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn>
              <span className="label-eyebrow text-gold">Sawla Films</span>
              <h2 id="films-heading" className="heading-display text-ivory mt-1 mb-6"
                style={{fontSize:"clamp(2rem,4vw,3.5rem)"}}>
                We Don&apos;t Just Plan Ethiopia.
                <span className="block">We Document It.</span>
              </h2>
              <p className="text-ivory/65 font-body leading-relaxed mb-5" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
                Sawla Films is our in-house documentary division — an asset no other Ethiopian tour operator has. Years of filming landscapes, ceremonies, wildlife, and communities that define this country.
              </p>
              <p className="text-ivory/65 font-body leading-relaxed mb-8" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
                For travelers who want to film their own journey, our team joins as production support — handling permissions, locations, local knowledge, and equipment logistics.
              </p>
              <blockquote className="border-l-2 border-gold/50 pl-5 text-gold font-display font-light italic mb-10 leading-relaxed" style={{fontSize:"clamp(1.125rem,2vw,1.375rem)"}}>
                &ldquo;The only Ethiopian tour company with an in-house documentary division.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">Watch Sawla Films</a>
                <Link href="/tours-by-experience/ethiopia-photography-tours" className="btn-ghost-light">Photography Tours</Link>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2} className="relative rounded-card overflow-hidden aspect-video bg-white/5 border border-white/10">
              <PlaceholderImage filename="home-sawla-films-hero.jpg" width={1280} height={720} category="moments" fill />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-white/12 backdrop-blur-sm border border-white/25 flex items-center justify-center hover:bg-white/22 transition-all duration-300 group cursor-pointer"
                  aria-label="Watch Sawla Films on YouTube">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="white" aria-hidden="true" className="ml-1 group-hover:scale-110 transition-transform">
                    <path d="M8 4.5l11 6.5-11 6.5V4.5z"/>
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══ 9. HOW IT WORKS ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-ivory" aria-labelledby="process-heading">
        <div className="container-max">
          <AnimateIn className="max-w-2xl mx-auto text-center mb-16">
            <span className="label-eyebrow">The Process</span>
            <h2 id="process-heading" className="heading-display text-volcanic mt-1"
              style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
              Planning a Sawla Tour: Four Steps
            </h2>
            <p className="text-warmgrey font-body mt-4" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
              No forms to fill in, no packages to choose. Just a conversation.
            </p>
          </AnimateIn>
          <div className="relative">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-sand" aria-hidden="true" />
            <AnimateStagger className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {[
                { n:"1", t:"You tell us what matters", b:"What to see, feel, understand. How you travel. Send a message and we take it from there." },
                { n:"2", t:"We design your route", b:"A bespoke itinerary built around what you told us, with honest trade-offs and reasons for each choice." },
                { n:"3", t:"We refine it together", b:"Most journeys improve through conversation. Adjust pace, accommodation, destinations. Typically 2-3 refinements." },
                { n:"4", t:"You travel with local support", b:"Your guide, driver, and planning specialist are all reachable. If conditions change, we adapt." },
              ].map(step => (
                <div key={step.n} className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
                  <div className="w-14 h-14 rounded-full border border-gold/35 bg-ivory flex items-center justify-center mb-6 flex-shrink-0">
                    <span className="font-display text-gold font-light" style={{fontSize:"1.25rem"}}>{step.n}</span>
                  </div>
                  <h3 className="font-display text-volcanic font-normal leading-snug mb-3" style={{fontSize:"clamp(1.125rem,1.75vw,1.375rem)"}}>{step.t}</h3>
                  <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"0.875rem"}}>{step.b}</p>
                </div>
              ))}
            </AnimateStagger>
          </div>
          <AnimateIn delay={0.2} className="text-center mt-14">
            <Link href="/enquire" className="btn-primary">Start a Conversation</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══ 10. TESTIMONIALS ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-gold-faint/50" aria-labelledby="testimonials-heading">
        <div className="container-max">
          <AnimateIn className="text-center mb-14">
            <span className="label-eyebrow">What Travelers Say</span>
            <h2 id="testimonials-heading" className="heading-display text-volcanic mt-1"
              style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
              In Their Own Words
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {homeTestimonials.map(tm => (
              <blockquote key={tm.id} className="bg-ivory rounded-card p-8 border border-sand/70 flex flex-col card-hover">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c9941a" aria-hidden="true">
                      <path d="M7 1l1.68 3.4 3.75.55-2.71 2.64.64 3.73L7 9.77 3.64 11.32l.64-3.73L1.57 4.95l3.75-.55L7 1z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-warmgrey font-body italic leading-relaxed flex-1" style={{fontSize:"1rem"}}>{tm.fullQuote}</p>
                <footer className="mt-8 flex items-center gap-3 pt-6 border-t border-sand/60">
                  <div className="w-10 h-10 rounded-full bg-sand/70 flex items-center justify-center text-coffee text-sm font-body font-medium flex-shrink-0">{tm.initials}</div>
                  <div>
                    <div className="font-body font-medium text-volcanic" style={{fontSize:"13.5px"}}>{tm.name} {tm.countryFlag}</div>
                    <div className="text-warmgrey font-body mt-0.5" style={{fontSize:"12px"}}>{tm.tripType}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </AnimateStagger>
          <AnimateIn delay={0.2} className="text-center mt-10">
            <Link href="/testimonials" className="btn-ghost">Read all traveller stories</Link>
          </AnimateIn>
        </div>
      </section>

      {/* ══ 11. SAWLA MOMENTS ══════════════════════════════════════════════ */}
      <section className="section-padding bg-ivory" aria-labelledby="moments-heading">
        <div className="container-max">
          <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="label-eyebrow">Sawla Moments</span>
              <h2 id="moments-heading" className="heading-display text-volcanic mt-1"
                style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>
                From Our Field Notes
              </h2>
            </div>
            <Link href="/sawla-moments" className="btn-ghost flex-shrink-0">All Moments</Link>
          </AnimateIn>
          <AnimateStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {MOMENTS_ARTICLES.map(article => (
              <div key={article.slug}>
                <Link href={"/sawla-moments/" + article.slug}
                  className="group bg-white rounded-card overflow-hidden border border-sand/60 card-hover block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-sand/30">
                    <PlaceholderImage filename={article.heroImage} width={600} height={337} category="moments" fill
                      className="group-hover:scale-105 transition-transform duration-600" />
                  </div>
                  <div className="p-6">
                    <span className="label-eyebrow text-gold !mb-2">{article.category}</span>
                    <h3 className="font-display text-volcanic font-normal leading-snug mb-3 group-hover:text-gold transition-colors duration-200"
                      style={{fontSize:"clamp(1.125rem,1.75vw,1.375rem)"}}>
                      {article.title}
                    </h3>
                    <p className="text-warmgrey font-body mb-5 leading-relaxed" style={{fontSize:"0.875rem"}}>{article.teaser}</p>
                    <span className="inline-flex items-center gap-1.5 text-gold font-body font-medium group-hover:gap-2.5 transition-all"
                      style={{fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase"}}>
                      {article.readingTime} min read <IconArrow />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ══ 12. FINAL CTA ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32 md:py-44" aria-labelledby="cta-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename="home-cta-background.jpg" width={1920} height={900} category="home" fill />
          <div className="absolute inset-0 bg-volcanic/72" />
        </div>
        <div className="relative z-10 container-max text-center">
          <AnimateIn>
            <span className="label-eyebrow text-gold">Begin Your Journey</span>
            <h2 id="cta-heading" className="heading-display text-ivory mt-4 mb-6 max-w-3xl mx-auto"
              style={{fontSize:"clamp(2rem,4.5vw,4rem)"}}>
              Your Ethiopia Journey Starts With a Conversation
            </h2>
            <p className="text-ivory/70 font-body max-w-xl mx-auto mb-10 leading-relaxed"
              style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>
              Tell us what draws you to Ethiopia. Our specialists will take it from there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/enquire" className="btn-gold py-4 px-10">Start Planning Now</Link>
              <Link href="/tours-by-experience" className="btn-ghost-light">Explore Itineraries</Link>
            </div>
            <p className="mt-10 text-ivory/35 font-body" style={{fontSize:"11.5px",letterSpacing:"0.14em",textTransform:"uppercase"}}>
              Ethiopia-based team &middot; Private tailor-made journeys &middot; No booking fees to enquire
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
