import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn, AnimateStagger } from "@/components/ui/AnimateIn"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Mobile Tented Camps Ethiopia | Sawla Tours Expeditions",
  description: "Sawla Tours mobile tented camps for remote Ethiopia expeditions — Danakil, Simien, Omo Valley. Private camp setup, full cook crew, and logistics for off-grid journeys.",
  alternates: { canonical: "https://www.sawlatours.com/mobile-tented-camps-ethiopia" },
}

const schema = breadcrumbSchema([{name:"Home",url:"https://www.sawlatours.com"},{name:"Mobile Camps",url:"https://www.sawlatours.com/mobile-tented-camps-ethiopia"}])

const FEATS = [
  { title:"Private Setup", body:"Your camp is set up before you arrive and broken down after you leave. You never see the logistics, only the result. Private camps for 2-12 travelers." },
  { title:"Cook and Kitchen", body:"A full cook crew prepares meals from fresh ingredients, adjusted for dietary requirements. Camp cooking in Ethiopia is not camping food." },
  { title:"Solar and Safety", body:"Mobile camps use solar lighting and maintain radio contact with Sawla Tours base. First aid equipment and emergency protocols are standard on every camp." },
  { title:"Right for the Location", body:"Each camp is chosen for its position. Escarpment edge in Simien, crater base at Erta Ale, riverine cover in Omo. The camp is part of the experience." },
]

const LOCS = [
  { name:"Danakil Depression", notes:"Camps at Erta Ale base and Dallol approach. The only way to stay overnight in this landscape.", img:"camp-danakil.jpg" },
  { name:"Simien Mountains", notes:"Trek camps along the Sankaber-Chenek route. Stars at 3,600m are extraordinary.", img:"camp-simien.jpg" },
  { name:"Omo Valley", notes:"Mobile camps between Hamar, Karo, and Daasanach visits. Reach areas no lodge can access.", img:"camp-omo.jpg" },
  { name:"Bale Mountains", notes:"Sanetti Plateau camps for multi-day Ethiopian wolf tracking. Afroalpine camping.", img:"camp-bale.jpg" },
]

export default function MobileCampsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <section className="relative overflow-hidden" style={{height:"65vh",minHeight:"460px"}} aria-labelledby="camps-heading">
        <PlaceholderImage filename="camps-hero.jpg" width={1920} height={1080} category="camp" fill />
        <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(42,39,36,0.88) 0%, rgba(42,39,36,0.2) 55%, transparent 100%)"}} />
        <div className="absolute inset-x-0 bottom-0 pb-16"><div className="container-max"><AnimateIn>
          <span className="label-eyebrow text-gold">Remote Expeditions</span>
          <h1 id="camps-heading" className="heading-display text-ivory mt-2" style={{fontSize:"clamp(2rem,5.5vw,5rem)"}}>Ethiopia Mobile Tented Camps</h1>
          <p className="text-ivory/70 font-body max-w-2xl mt-5 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.2rem)"}}>Access the most remote corners of Ethiopia with private mobile camps that bring comfort to places where there are no lodges.</p>
        </AnimateIn></div></div>
      </section>
      <section className="section-padding bg-ivory"><div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <AnimateIn><span className="label-eyebrow">The Sawla Tours Camp</span><h2 className="heading-display text-volcanic mt-2 mb-6" style={{fontSize:"clamp(1.5rem,3vw,2.25rem)"}}>Private. Positioned. Properly Done.</h2><p className="text-warmgrey font-body leading-relaxed mb-4" style={{fontSize:"clamp(1rem,1.1vw,1.0625rem)"}}>Mobile tented camping is the only way to reach certain parts of Ethiopia. The Danakil Depression, Erta Ale crater, and deep Simien sections have no permanent accommodation. A mobile camp is not a compromise — it is the access.</p><p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"clamp(1rem,1.1vw,1.0625rem)"}}>Sawla Tours mobile camps use expedition tents with camp beds, real mattresses, and bedding. A cook crew prepares meals from fresh ingredients. Solar lighting, first aid equipment, and emergency protocols are standard.</p></AnimateIn>
          <AnimateIn delay={0.15} className="rounded-card overflow-hidden aspect-[4/3]"><PlaceholderImage filename="camp-setup-overview.jpg" width={700} height={525} category="camp" fill /></AnimateIn>
        </div>
        <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.07}>
          {FEATS.map(f=>(<div key={f.title} className="border-t-2 border-gold/30 pt-6"><h3 className="font-display text-volcanic font-normal mb-3" style={{fontSize:"clamp(1rem,1.5vw,1.25rem)"}}>{f.title}</h3><p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"0.875rem"}}>{f.body}</p></div>))}
        </AnimateStagger>
      </div></section>
      <section className="section-padding bg-volcanic"><div className="container-max">
        <AnimateIn className="text-center mb-12"><span className="label-eyebrow text-gold">Camp Locations</span><h2 className="heading-display text-ivory mt-1" style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>Where We Camp</h2></AnimateIn>
        <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.07}>
          {LOCS.map(c=>(<div key={c.name} className="rounded-card overflow-hidden"><div className="relative aspect-[3/2] overflow-hidden"><PlaceholderImage filename={c.img} width={400} height={267} category="camp" fill className="hover:scale-105 transition-transform duration-700" /></div><div className="p-4 bg-white/5 border border-white/10 border-t-0"><h3 className="font-display text-ivory font-light mb-2" style={{fontSize:"clamp(1rem,1.5vw,1.2rem)"}}>{c.name}</h3><p className="text-ivory/55 font-body" style={{fontSize:"12.5px"}}>{c.notes}</p></div></div>))}
        </AnimateStagger>
      </div></section>
      <section className="bg-ivory py-16 text-center border-t border-sand/60"><div className="container-max"><AnimateIn>
        <h2 className="heading-display text-volcanic mb-5" style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>Design Your Remote Ethiopia Expedition</h2>
        <p className="text-warmgrey font-body max-w-xl mx-auto mb-8 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>Tell us your destination, group size, and dates. We will design the right mobile camp itinerary.</p>
        <Link href="/enquire" className="btn-primary">Plan a Camp Journey</Link>
      </AnimateIn></div></section>
    </>
  )
}
