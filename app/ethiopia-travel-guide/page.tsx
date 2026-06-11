import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import HeroVideo from "@/components/ui/HeroVideo"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import { FIELD_GUIDE_SLUGS } from "@/data/siteData"
import { itemListSchema, breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Ethiopia Travel Guide | Planning Resources | Sawla Tours",
  description: "Ethiopia travel guide from Sawla Tours — when to visit, visas, safety, packing, budgeting, wildlife, photography, and planning advice from a local team.",
  alternates: { canonical: "https://www.sawlatours.com/ethiopia-travel-guide" },
  openGraph: {
    title: "Ethiopia Travel Guide | Sawla Tours",
    description: "15 practical guides to planning an Ethiopia trip — written by a team that lives here.",
    url: "https://www.sawlatours.com/ethiopia-travel-guide",
  },
}

const GUIDES: Record<string, { title:string; excerpt:string; cat:string; time:string; star:boolean }> = {
  "when-to-visit-ethiopia":{title:"When to Visit Ethiopia",excerpt:"Month-by-month seasons, festivals, wildlife, and road conditions.",cat:"Planning",time:"8 min",star:true},
  "how-to-plan-your-trip":{title:"How to Plan an Ethiopia Trip",excerpt:"Routes, timing, domestic flights, and structuring a private itinerary.",cat:"Planning",time:"12 min",star:true},
  "safety-in-ethiopia":{title:"Safety in Ethiopia for Travelers",excerpt:"Current safety information — safe regions, honest risk assessment, practical advice.",cat:"Safety",time:"6 min",star:true},
  "ethiopia-visa-guide":{title:"Ethiopia Visa and Entry Requirements",excerpt:"eVisa process, costs, requirements, and entry for international travelers.",cat:"Essentials",time:"5 min",star:true},
  "what-to-pack-for-ethiopia":{title:"What to Pack for Ethiopia",excerpt:"Packing for the historic north, Danakil, Omo Valley, and Simien trekking.",cat:"Essentials",time:"7 min",star:false},
  "ethiopia-travel-costs":{title:"Ethiopia Travel Costs and Budgeting",excerpt:"How much an Ethiopia trip costs and what drives pricing at each level.",cat:"Planning",time:"8 min",star:false},
  "ethiopian-food-coffee":{title:"Ethiopian Food, Coffee, and Cuisine",excerpt:"Injera, coffee ceremonies, tej — the essential eating and drinking experiences.",cat:"Culture",time:"6 min",star:false},
  "ethiopia-photography-guide":{title:"Photography in Ethiopia",excerpt:"Light, timing, permissions, respectful practice, and technical settings.",cat:"Photography",time:"10 min",star:false},
  "ethiopia-travel-circuits":{title:"Ethiopia Travel Circuits Explained",excerpt:"Northern Historic, Southern Cultural, Wildlife — how to combine regions.",cat:"Planning",time:"9 min",star:true},
  "how-to-get-to-ethiopia":{title:"How to Get to Ethiopia",excerpt:"International airports, airlines, connections, and getting from Addis to your first stop.",cat:"Essentials",time:"5 min",star:false},
  "hotels-lodges-ethiopia":{title:"Hotels and Lodges in Ethiopia",excerpt:"Best accommodation across all regions — honest about what best available means remotely.",cat:"Accommodation",time:"9 min",star:false},
  "ethiopia-safaris":{title:"Planning an Ethiopia Safari",excerpt:"National parks, endemic species, logistics — how Ethiopia differs from East African safaris.",cat:"Wildlife",time:"8 min",star:false},
  "popular-wildlife-ethiopia":{title:"Wildlife to See in Ethiopia",excerpt:"Ethiopian wolf, gelada monkey, Walia ibex — where to find them.",cat:"Wildlife",time:"7 min",star:false},
  "why-visit-ethiopia":{title:"Why Visit Ethiopia",excerpt:"Ancient history, endemic wildlife, dramatic landscapes, coffee origin.",cat:"Inspiration",time:"5 min",star:false},
  "general-travel-tips":{title:"Ethiopia Travel Tips and Practical Advice",excerpt:"Health, altitude, currency, communications, cultural etiquette, ground realities.",cat:"Essentials",time:"8 min",star:false},
}

const schema=[
  itemListSchema({
    name:"Ethiopia Travel Guide — Sawla Tours",
    url:"https://www.sawlatours.com/ethiopia-travel-guide",
    items: FIELD_GUIDE_SLUGS.map(slug=>({ name:GUIDES[slug]?.title??slug, url:"https://www.sawlatours.com/ethiopia-travel-guide/"+slug, description:GUIDES[slug]?.excerpt })),
  }),
  breadcrumbSchema([{name:"Home",url:"https://www.sawlatours.com"},{name:"Ethiopia Travel Guide",url:"https://www.sawlatours.com/ethiopia-travel-guide"}]),
]

export default function FieldGuidesHub() {
  const starred=FIELD_GUIDE_SLUGS.filter(s=>GUIDES[s]?.star)
  const rest=FIELD_GUIDE_SLUGS.filter(s=>!GUIDES[s]?.star)
  return (
    <>
      {schema.map((s,i)=><SchemaScript key={i} schema={s}/>)}
      <div className="sr-only">Sawla Tours Ethiopia travel guide. 15 practical resources written by a local team.</div>
      <section className="relative overflow-hidden" style={{minHeight:"460px",paddingTop:"8rem",paddingBottom:"5rem"}} aria-labelledby="guide-heading">
        <HeroVideo poster="guide-hub-hero.jpg" posterCategory="guide" overlayClassName="bg-volcanic/70" objectPosition="center" />
        <div className="relative z-10 container-max">
          <AnimateIn className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="mb-5"><ol className="flex items-center gap-2 font-body" style={{fontSize:"11.5px",letterSpacing:"0.1em",textTransform:"uppercase"}}><li><Link href="/" className="text-ivory/50 hover:text-gold transition-colors cursor-pointer">Home</Link></li><li className="text-ivory/30">&#47;</li><li className="text-ivory/80">Travel Guide</li></ol></nav>
            <span className="label-eyebrow text-gold">Planning Resources</span>
            <h1 id="guide-heading" className="heading-display text-ivory mt-2" style={{fontSize:"clamp(2.5rem,5.5vw,5rem)"}}>Ethiopia Travel Guide</h1>
            <p className="text-ivory/70 font-body max-w-xl mt-5 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.2rem)"}}>Practical planning resources written by a team based in Addis Ababa. Not generic advice — specific information from people who live here.</p>
            <div className="flex items-center gap-4 mt-8">
              {["15 guides","Free to read","Updated 2025"].map((s,i)=>(<span key={i} className="text-ivory/60 font-body" style={{fontSize:"11px",letterSpacing:"0.12em",textTransform:"uppercase"}}>{i>0&&<span className="mr-4 text-white/20">|</span>}{s}</span>))}
            </div>
          </AnimateIn>
        </div>
      </section>
      <section className="section-padding bg-ivory" aria-labelledby="featured-guides-heading">
        <div className="container-max">
          <AnimateIn className="mb-10"><span className="label-eyebrow">Start Here</span><h2 id="featured-guides-heading" className="heading-display text-volcanic mt-1" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>Essential Planning Guides</h2></AnimateIn>
          <AnimateStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {starred.map(slug=>{ const g=GUIDES[slug]; if(!g) return null; return (
              <div key={slug}><Link href={"/ethiopia-travel-guide/"+slug} className="group block bg-white rounded-card overflow-hidden border border-sand/60 card-hover">
                <div className="relative overflow-hidden" style={{aspectRatio:"16/9"}}>
                  <PlaceholderImage filename={"guide-"+slug+"-hero.jpg"} width={600} height={337} category="guide" fill className="group-hover:scale-105 transition-transform duration-600" />
                  <div className="absolute top-3 left-3"><span className="bg-gold text-ivory font-body font-medium px-3 py-1 rounded-full" style={{fontSize:"10px",letterSpacing:"0.1em",textTransform:"uppercase"}}>{g.cat}</span></div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-volcanic font-normal group-hover:text-gold transition-colors leading-snug mb-2" style={{fontSize:"clamp(1.125rem,1.75vw,1.375rem)"}}>{g.title}</h3>
                  <p className="text-warmgrey font-body leading-relaxed mb-4" style={{fontSize:"0.875rem"}}>{g.excerpt}</p>
                  <div className="flex items-center justify-between"><span className="text-warmgrey font-body" style={{fontSize:"11.5px"}}>{g.time} read</span><span className="text-gold font-body font-medium" style={{fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase"}}>Read guide &#x2192;</span></div>
                </div>
              </Link></div>
            )})}
          </AnimateStagger>
        </div>
      </section>
      <section className="section-padding-sm bg-volcanic" aria-labelledby="all-guides-heading">
        <div className="container-max">
          <AnimateIn className="mb-10"><span className="label-eyebrow text-gold">Full Library</span><h2 id="all-guides-heading" className="heading-display text-ivory mt-1" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>All 15 Ethiopia Travel Guides</h2></AnimateIn>
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.04}>
            {rest.map(slug=>{ const g=GUIDES[slug]; if(!g) return null; return (
              <div key={slug}>
                <Link href={"/ethiopia-travel-guide/"+slug} className="group flex items-start gap-4 p-4 rounded-[12px] border border-white/10 hover:border-gold/40 hover:bg-white/5 transition-all duration-300 cursor-pointer">
                  <div className="flex-1 min-w-0">
                    <div className="text-gold/70 font-body mb-1" style={{fontSize:"10px",letterSpacing:"0.12em",textTransform:"uppercase"}}>{g.cat}</div>
                    <h3 className="font-display text-ivory font-light group-hover:text-gold transition-colors leading-snug" style={{fontSize:"clamp(1rem,1.5vw,1.2rem)"}}>{g.title}</h3>
                    <p className="text-ivory/45 font-body mt-1 line-clamp-2" style={{fontSize:"12px"}}>{g.excerpt}</p>
                  </div>
                  <svg className="flex-shrink-0 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            )})}
          </AnimateStagger>
        </div>
      </section>
      <section className="section-padding-sm bg-gold-faint border-t border-sand/60">
        <div className="container-max"><AnimateIn className="grid md:grid-cols-2 gap-10 items-center">
          <div><span className="label-eyebrow">Ready to Plan?</span><h2 className="heading-display text-volcanic mt-2" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>Turn Research Into a Real Journey</h2><p className="text-warmgrey font-body leading-relaxed mt-4" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>Every guide was written to help you understand Ethiopia before you book. When ready, our specialists will design the right journey around what you learned.</p></div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-4"><Link href="/enquire" className="btn-primary">Start Planning Your Journey</Link><Link href="/ethiopias-popular-destinations" className="btn-ghost">Explore Destinations</Link></div>
        </AnimateIn></div>
      </section>
    </>
  )
}
