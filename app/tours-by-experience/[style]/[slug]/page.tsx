import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import { breadcrumbSchema, tourSchema } from "@/lib/schema"
import { TOUR_STYLES, TESTIMONIALS, SITE } from "@/data/siteData"
import { getItinerary, getItinerariesByStyle } from "@/data/itineraryData"

interface Props { params: Promise<{ style: string; slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, style } = await params
  const itin = getItinerary(slug)
  const name = itin?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  const titleName = itin?.name ?? name
  const shortTitle = titleName.length > 42 ? titleName.slice(0, 40).trimEnd() + "…" : titleName
  const metaDesc = itin?.overview
    ? itin.overview.slice(0, 155).trimEnd() + (itin.overview.length > 155 ? "…" : "")
    : "Private, tailor-made " + name + " with Sawla Tours. Expert Ethiopian guides, full in-country support."
  return {
    title: shortTitle + " | Sawla Tours",
    description: metaDesc,
    alternates: { canonical: "https://www.sawlatours.com/tours-by-experience/" + style + "/" + slug },
    openGraph: { title: titleName + " | Sawla Tours", description: metaDesc },
    twitter: { card: "summary_large_image", title: titleName + " | Sawla Tours" },
  }
}

const DIFF_COLORS: Record<string, string> = {
  Easy:        "text-green-700 bg-green-50 border-green-100",
  Moderate:    "text-amber-700 bg-amber-50 border-amber-100",
  Challenging: "text-red-700 bg-red-50 border-red-100",
}

// Derive who this journey suits based on itinerary metadata
function getSuitability(itin: NonNullable<ReturnType<typeof getItinerary>>) {
  const suits: string[] = []
  const notFor: string[] = []

  if (itin.difficulty === "Easy")        { suits.push("First-time visitors to Ethiopia") }
  if (itin.difficulty === "Moderate")    { suits.push("Travelers comfortable with varied terrain and long drives") }
  if (itin.difficulty === "Challenging") { suits.push("Adventurous travelers in good physical condition") }
  if (itin.difficulty === "Challenging") { notFor.push("Travelers with limited mobility or health restrictions") }

  if (itin.duration <= 7)  { suits.push("Travelers with limited time who want a focused experience") }
  if (itin.duration >= 12) { suits.push("Travelers who want depth rather than a highlights sweep") }
  if (itin.duration >= 14) { suits.push("Independent travelers returning to Ethiopia or specialists") }
  if (itin.duration <= 5)  { notFor.push("Travelers hoping to cover multiple remote regions") }

  if (itin.bestFor.toLowerCase().includes("photo"))      { suits.push("Photographers and visual storytellers") }
  if (itin.bestFor.toLowerCase().includes("wild"))       { suits.push("Nature enthusiasts and wildlife specialists") }
  if (itin.bestFor.toLowerCase().includes("cultural"))   { suits.push("Travelers interested in living cultures and history") }
  if (itin.bestFor.toLowerCase().includes("couple"))     { suits.push("Couples looking for a meaningful private experience") }
  if (itin.bestFor.toLowerCase().includes("family"))     { suits.push("Families with children aged 10+") }

  notFor.push("Travelers expecting resort-style comfort throughout")
  notFor.push("Those who prefer fully scripted group tour experiences")

  return { suits: suits.slice(0, 4), notFor: notFor.slice(0, 3) }
}

const WA_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default async function ItineraryPage({ params }: Props) {
  const { style, slug } = await params
  const tourStyle = TOUR_STYLES.find(s => s.slug === style)
  const itin = getItinerary(slug)
  const name = itin?.name ?? slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

  // Related itineraries from same style, excluding current
  const relatedItins = getItinerariesByStyle(style)
    .filter(i => i.slug !== slug)
    .slice(0, 3)

  // Testimonial matched to tour style
  const testimonial = TESTIMONIALS.find(t =>
    t.useOn?.some(u => u.includes(style.split("-")[0]) || u.includes(style.split("-")[1] ?? "x"))
  ) ?? TESTIMONIALS[0]

  const suitability = itin ? getSuitability(itin) : null

  const schemas = [
    tourSchema({ name, url: "https://www.sawlatours.com/tours-by-experience/" + style + "/" + slug, description: itin?.overview ?? name, image: tourStyle?.heroImage ?? "", duration: itin?.durationLabel }),
    breadcrumbSchema([
      { name: "Home", url: "https://www.sawlatours.com" },
      { name: "Tours", url: "https://www.sawlatours.com/tours-by-experience" },
      { name: tourStyle?.name ?? style, url: "https://www.sawlatours.com/tours-by-experience/" + style },
      { name, url: "https://www.sawlatours.com/tours-by-experience/" + style + "/" + slug },
    ]),
  ]

  return (
    <>
      {schemas.map((s, i) => <SchemaScript key={i} schema={s} />)}

      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-[78vh] min-h-[560px] overflow-hidden" aria-labelledby="itin-heading">
        <PlaceholderImage filename={"tour-" + slug + "-hero.jpg"} width={1920} height={1080} category="tour" fill className="object-center" />
        <div className="image-overlay" style={{ background: "linear-gradient(to top, rgba(42,39,36,0.92) 0%, rgba(42,39,36,0.28) 52%, rgba(42,39,36,0.22) 100%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <div className="container-max text-ivory">
            <AnimateIn>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-2 font-body" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  <li><Link href="/" className="text-ivory/45 hover:text-gold transition-colors">Home</Link></li>
                  <li className="text-ivory/25">/</li>
                  <li><Link href="/tours-by-experience" className="text-ivory/45 hover:text-gold transition-colors">Tours</Link></li>
                  <li className="text-ivory/25">/</li>
                  {tourStyle && (
                    <><li><Link href={"/tours-by-experience/" + style} className="text-ivory/45 hover:text-gold transition-colors">{tourStyle.name}</Link></li><li className="text-ivory/25">/</li></>
                  )}
                  <li className="text-ivory/70">{name}</li>
                </ol>
              </nav>
              {tourStyle && <span className="label-eyebrow text-gold">{tourStyle.name}</span>}
              <h1 id="itin-heading" className="heading-display text-ivory mt-2" style={{ fontSize: "clamp(2.25rem, 5vw, 4.75rem)" }}>{name}</h1>

              {/* At-a-glance pills */}
              <div className="flex flex-wrap gap-2.5 mt-6">
                {itin && (
                  <span className="border border-white/30 text-ivory/90 rounded-full px-4 py-1.5 font-body font-medium" style={{ fontSize: "12.5px" }}>
                    {itin.durationLabel}
                  </span>
                )}
                {itin && (
                  <span className={"border rounded-full px-4 py-1.5 font-body font-medium " + (DIFF_COLORS[itin.difficulty] ?? "border-white/30 text-ivory/90")} style={{ fontSize: "12.5px" }}>
                    {itin.difficulty}
                  </span>
                )}
                {itin?.priceFrom && (
                  <span className="border border-gold/55 text-gold rounded-full px-4 py-1.5 font-body font-medium" style={{ fontSize: "12.5px" }}>
                    {itin.priceFrom}
                  </span>
                )}
                {itin?.bestMonths && (
                  <span className="border border-white/20 text-ivory/65 rounded-full px-4 py-1.5 font-body" style={{ fontSize: "12.5px" }}>
                    {itin.bestMonths}
                  </span>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── LEFT: Content column ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              {itin?.overview && (
                <AnimateIn>
                  <span className="label-eyebrow">Overview</span>
                  <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "clamp(1.0625rem,1.4vw,1.1875rem)", lineHeight: "1.85" }}>
                    {itin.overview}
                  </p>
                </AnimateIn>
              )}

              {/* Journey Highlights */}
              {itin?.highlights && itin.highlights.length > 0 && (
                <AnimateIn>
                  <h2 className="font-display text-volcanic font-normal mb-6" style={{ fontSize: "clamp(1.375rem,2.5vw,1.875rem)" }}>
                    Journey Highlights
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {itin.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gold-faint rounded-[10px] border border-gold/15">
                        <svg className="text-gold flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-volcanic font-body" style={{ fontSize: "0.9375rem" }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </AnimateIn>
              )}

              {/* Day by Day */}
              {itin?.days && itin.days.length > 0 && (
                <AnimateIn>
                  <h2 className="font-display text-volcanic font-normal mb-6" style={{ fontSize: "clamp(1.375rem,2.5vw,1.875rem)" }}>
                    Day by Day
                  </h2>
                  <div className="space-y-2">
                    {itin.days.map((day, i) => (
                      <details key={i} className="border border-sand rounded-card overflow-hidden group" open={i === 0}>
                        <summary className="flex items-center gap-4 px-5 py-4 cursor-pointer list-none hover:bg-gold-faint/40 transition-colors">
                          <span className="font-display text-gold font-light flex-shrink-0" style={{ fontSize: "1.125rem", minWidth: "3.5rem" }}>
                            Day {day.day}
                          </span>
                          <span className="font-body font-medium text-volcanic flex-1 leading-snug" style={{ fontSize: "14px" }}>
                            {day.title}
                          </span>
                          <span className="ml-auto text-gold text-xl leading-none group-open:rotate-45 transition-transform duration-200 flex-shrink-0 summary-icon">+</span>
                        </summary>
                        <div className="px-5 pb-5 pt-1 border-t border-sand/60">
                          <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                            {day.description}
                          </p>
                          {day.overnight && (
                            <p className="mt-3 flex items-center gap-1.5 text-warmgrey font-body" style={{ fontSize: "12px" }}>
                              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path d="M10 6A4 4 0 1 1 6 2c0 .8.3 1.6.8 2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                              </svg>
                              Overnight: <strong className="text-volcanic font-medium">{day.overnight}</strong>
                            </p>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </AnimateIn>
              )}

              {/* No data fallback */}
              {!itin && (
                <AnimateIn className="p-8 bg-gold-faint rounded-card border border-gold/20 text-center">
                  <h2 className="font-display text-volcanic font-normal mb-3" style={{ fontSize: "clamp(1.25rem,2vw,1.625rem)" }}>{name}</h2>
                  <p className="text-warmgrey font-body leading-relaxed mb-6" style={{ fontSize: "1rem" }}>
                    Full itinerary details for this journey are available on enquiry. Contact our Ethiopia specialists for a complete day-by-day proposal.
                  </p>
                  <Link href="/enquire" className="btn-primary">Request Full Itinerary</Link>
                </AnimateIn>
              )}

              {/* Good to Know */}
              {itin?.goodToKnow && itin.goodToKnow.length > 0 && (
                <AnimateIn>
                  <h3 className="font-display text-volcanic font-normal mb-5" style={{ fontSize: "clamp(1.125rem,1.75vw,1.375rem)" }}>
                    Good to Know
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {itin.goodToKnow.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-warmgrey font-body" style={{ fontSize: "0.9375rem" }}>
                        <svg className="text-gold flex-shrink-0 mt-1" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
                          <path d="M7 4.5v3l1.5 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimateIn>
              )}

              {/* ── WHO THIS JOURNEY SUITS (Expert Africa benchmark) ── */}
              {suitability && (
                <AnimateIn>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Suits */}
                    <div className="p-6 bg-green-50/60 border border-green-100 rounded-card">
                      <div className="flex items-center gap-2 mb-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="7" stroke="#16a34a" strokeWidth="1.3"/>
                          <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="font-body font-medium text-green-800" style={{ fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          This Journey Suits
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {suitability.suits.map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-green-900 font-body" style={{ fontSize: "13.5px" }}>
                            <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Might Not Suit */}
                    <div className="p-6 bg-amber-50/60 border border-amber-100 rounded-card">
                      <div className="flex items-center gap-2 mb-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="7" stroke="#d97706" strokeWidth="1.3"/>
                          <path d="M8 5v4M8 11v.5" stroke="#d97706" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                        <span className="font-body font-medium text-amber-800" style={{ fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          May Not Suit
                        </span>
                      </div>
                      <ul className="space-y-2.5">
                        {suitability.notFor.map((s, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-amber-900 font-body" style={{ fontSize: "13.5px" }}>
                            <span className="text-amber-600 mt-0.5 flex-shrink-0">–</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 text-warmgrey font-body" style={{ fontSize: "12.5px" }}>
                    Not sure if this journey is right for you?{" "}
                    <Link href="/enquire" className="text-gold hover:underline">
                      Ask our specialists — no commitment required.
                    </Link>
                  </p>
                </AnimateIn>
              )}

              {/* Inclusions CTA */}
              {itin && (
                <AnimateIn>
                  <div className="p-7 bg-volcanic rounded-card text-ivory">
                    <div className="grid sm:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="font-display text-ivory font-light mb-3" style={{ fontSize: "clamp(1.25rem,2vw,1.625rem)" }}>
                          What&apos;s Included?
                        </h3>
                        <p className="text-ivory/65 font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                          Every Sawla Tours journey is private and tailor-made — exact inclusions are confirmed with your personalised quote. Request it within 24 hours.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link href="/enquire" className="btn-gold justify-center">
                          Request Full Inclusions &amp; Quote
                        </Link>
                        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 border border-white/20 rounded-sm text-ivory/70 hover:border-[#25D366] hover:text-[#25D366] transition-colors font-body cursor-pointer"
                          style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          {WA_ICON} WhatsApp Instead
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>

            {/* ── RIGHT: Sticky sidebar ── */}
            <aside className="lg:col-span-1">
              <div className="sidebar-sticky space-y-5">

                {/* Main enquiry card */}
                <div className="bg-volcanic rounded-card p-7 text-ivory">
                  <div className="label-eyebrow text-gold mb-2">Plan This Journey</div>
                  {itin?.priceFrom && (
                    <div className="font-display text-gold font-light mb-1" style={{ fontSize: "clamp(1.375rem,2.25vw,1.875rem)" }}>
                      {itin.priceFrom}
                    </div>
                  )}
                  <p className="text-ivory/45 font-body mb-5" style={{ fontSize: "11.5px" }}>
                    Per person · private, tailor-made
                  </p>
                  <p className="text-ivory/65 font-body leading-relaxed mb-6" style={{ fontSize: "0.9375rem" }}>
                    This itinerary is a starting point. Dates, pace, accommodation, and group size are all adapted for you.
                  </p>
                  <Link href="/enquire" className="btn-gold w-full justify-center mb-3">
                    Enquire About This Tour
                  </Link>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 border border-white/20 rounded-sm text-ivory/70 hover:border-[#25D366] hover:text-[#25D366] transition-colors font-body cursor-pointer"
                    style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {WA_ICON} WhatsApp
                  </a>
                </div>

                {/* Quick facts */}
                {itin && (
                  <div className="border border-sand rounded-card p-5 bg-white">
                    <div className="label-eyebrow mb-4">At a Glance</div>
                    <dl className="space-y-4">
                      {[
                        { l: "Duration", v: itin.durationLabel },
                        { l: "Difficulty", v: itin.difficulty },
                        { l: "Best Months", v: itin.bestMonths },
                        { l: "Best For", v: itin.bestFor },
                      ].map(item => (
                        <div key={item.l}>
                          <dt className="text-warmgrey font-body" style={{ fontSize: "10.5px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            {item.l}
                          </dt>
                          <dd className="font-body font-medium text-volcanic mt-0.5" style={{ fontSize: "13.5px" }}>
                            {item.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                {/* Tour style info */}
                {tourStyle && (
                  <div className="border border-gold/20 rounded-card p-5 bg-gold-faint/40">
                    <div className="label-eyebrow mb-1">Tour Style</div>
                    <div className="font-display text-volcanic font-normal mb-2 leading-snug" style={{ fontSize: "1.0625rem" }}>
                      {tourStyle.name}
                    </div>
                    <p className="text-warmgrey font-body mb-4" style={{ fontSize: "13.5px", lineHeight: "1.65" }}>
                      {tourStyle.tagline}
                    </p>
                    <Link href={"/tours-by-experience/" + style}
                      className="inline-flex items-center gap-1.5 text-gold hover:text-volcanic transition-colors font-body font-medium"
                      style={{ fontSize: "11.5px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      All {tourStyle.name} Tours
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                )}

                {/* Trust signals */}
                <div className="border border-sand rounded-card p-5 space-y-3 bg-white">
                  <div className="label-eyebrow">Why Book With Us</div>
                  {[
                    "Ethiopia-based team — not a remote agent",
                    "Private journey, designed for you alone",
                    "No booking fee to enquire",
                    "Response within 24 hours",
                    "In-country support throughout",
                  ].map(t => (
                    <div key={t} className="flex items-start gap-2.5">
                      <svg className="text-gold flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-warmgrey font-body" style={{ fontSize: "13px" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-volcanic py-14">
        <div className="container-max">
          <AnimateIn className="mb-8">
            <span className="label-eyebrow text-gold">From the Field</span>
            <h2 className="heading-display text-ivory mt-1" style={{ fontSize: "clamp(1.375rem,2.5vw,2rem)" }}>
              What This Journey Looks Like
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-2 md:grid-cols-4 gap-3" staggerDelay={0.06}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={"relative overflow-hidden rounded-[12px] " + (i === 1 ? "col-span-2 aspect-square" : "aspect-[4/3]")}>
                <PlaceholderImage
                  filename={"tour-" + slug + "-gallery-" + i + ".jpg"}
                  width={i === 1 ? 800 : 400} height={i === 1 ? 800 : 300}
                  category="tour" fill
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── HOW THIS JOURNEY IS PLANNED ── */}
      <section className="section-padding-sm bg-ivory border-t border-sand/60">
        <div className="container-max max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <span className="label-eyebrow">Before You Book</span>
            <h2 className="heading-display text-volcanic mt-1" style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}>
              How This Journey Is Designed for You
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { n: "01", t: "You tell us your dates and priorities", b: "This itinerary is a well-tested starting point. Your actual journey is adapted to your travel dates, group size, pace, and what matters most to you." },
              { n: "02", t: "We design your version", b: "Our specialists refine the route, suggest accommodation that matches your comfort level, and flag any seasonal considerations or access changes." },
              { n: "03", t: "You travel with full support", b: "Private guide, private 4WD vehicle, 24/7 in-country contact. All internal logistics coordinated before you arrive in Ethiopia." },
            ].map(step => (
              <div key={step.n} className="border-t-2 border-gold/20 pt-6">
                <div className="font-display text-gold/25 font-light mb-4 leading-none" style={{ fontSize: "3rem" }}>{step.n}</div>
                <h3 className="font-display text-volcanic font-normal mb-3 leading-snug" style={{ fontSize: "clamp(1.0625rem,1.5vw,1.25rem)" }}>{step.t}</h3>
                <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>{step.b}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      {testimonial && (
        <section className="bg-gold-faint/40 py-16 border-t border-sand/60">
          <div className="container-max max-w-3xl mx-auto text-center">
            <AnimateIn>
              <div className="flex gap-1 justify-center mb-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c9941a" aria-hidden="true">
                    <path d="M7 1l1.68 3.4 3.75.55-2.71 2.64.64 3.73L7 9.77 3.64 11.32l.64-3.73L1.57 4.95l3.75-.55L7 1z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="font-display text-volcanic italic font-light leading-relaxed" style={{ fontSize: "clamp(1.125rem,2.25vw,1.625rem)" }}>
                &ldquo;{testimonial.fullQuote}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-center gap-3 mt-7">
                <div className="w-9 h-9 rounded-full bg-sand/60 flex items-center justify-center text-coffee text-sm font-body font-medium flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="text-left">
                  <div className="font-body font-medium text-volcanic" style={{ fontSize: "13.5px" }}>
                    {testimonial.name} {testimonial.countryFlag}
                  </div>
                  <div className="text-warmgrey font-body" style={{ fontSize: "12px" }}>{testimonial.tripType}</div>
                </div>
              </footer>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ── RELATED ITINERARIES ── */}
      {relatedItins.length > 0 && (
        <section className="section-padding bg-ivory">
          <div className="container-max">
            <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="label-eyebrow">Continue Exploring</span>
                <h2 className="heading-display text-volcanic mt-1" style={{ fontSize: "clamp(1.375rem,2.5vw,2rem)" }}>
                  Other {tourStyle?.name ?? "Ethiopia"} Itineraries
                </h2>
              </div>
              <Link href={"/tours-by-experience/" + style} className="btn-ghost flex-shrink-0">
                All {tourStyle?.name ?? ""} Tours
              </Link>
            </AnimateIn>
            <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
              {relatedItins.map(r => (
                <div key={r.slug}>
                  <Link href={"/tours-by-experience/" + style + "/" + r.slug}
                    className="group block bg-white border border-sand rounded-card overflow-hidden card-hover">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <PlaceholderImage filename={"tour-" + r.slug + "-hero.jpg"} width={600} height={375} category="tour" fill className="group-hover:scale-105 transition-transform duration-700" />
                      <div className="image-overlay-light" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-warmgrey font-body" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {r.durationLabel}
                        </span>
                        <span className="text-sand">·</span>
                        <span className="text-warmgrey font-body" style={{ fontSize: "11px" }}>{r.difficulty}</span>
                      </div>
                      <h3 className="font-display text-volcanic font-normal leading-snug group-hover:text-gold transition-colors mb-2" style={{ fontSize: "clamp(1rem,1.5vw,1.1875rem)" }}>
                        {r.name}
                      </h3>
                      {r.priceFrom && (
                        <div className="text-gold font-body font-medium" style={{ fontSize: "12.5px" }}>{r.priceFrom}</div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </AnimateStagger>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      <section className="relative py-28 text-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <PlaceholderImage filename={"tour-" + slug + "-cta.jpg"} width={1920} height={600} category="tour" fill />
          <div className="absolute inset-0 bg-volcanic/75" />
        </div>
        <div className="relative z-10 container-max">
          <AnimateIn>
            <span className="label-eyebrow text-gold">Your Version of This Journey</span>
            <h2 className="heading-display text-ivory mt-4 mb-6 max-w-2xl mx-auto" style={{ fontSize: "clamp(1.875rem,4vw,3.25rem)" }}>
              Ready to Start Planning?
            </h2>
            <p className="text-ivory/70 font-body max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontSize: "clamp(1rem,1.25vw,1.125rem)" }}>
              Tell us your travel dates and what matters most. We will design your private version of {name} — adapted to your pace, group, and what you want to feel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/enquire" className="btn-gold py-4 px-10">Enquire Now</Link>
              <Link href="/tours-by-experience" className="btn-ghost-light">All Tour Styles</Link>
            </div>
            <p className="text-ivory/30 font-body" style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              No booking fee to enquire · Response within 24 hours · Ethiopia-based team
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
