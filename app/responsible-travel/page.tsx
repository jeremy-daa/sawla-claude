import type { Metadata } from "next"
import Link from "next/link"
import PlaceholderImage from "@/components/ui/PlaceholderImage"
import SchemaScript from "@/components/ui/SchemaScript"
import { AnimateIn } from "@/components/ui/AnimateIn"
import { breadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Responsible Travel in Ethiopia | Sawla Tours Policy",
  description: "Sawla Tours responsible travel commitments — community engagement, wildlife conservation, fair employment, and low-impact practices on every private Ethiopia journey.",
  alternates: { canonical: "https://www.sawlatours.com/responsible-travel" },
}

const schema = breadcrumbSchema([{name:"Home",url:"https://www.sawlatours.com"},{name:"Responsible Travel",url:"https://www.sawlatours.com/responsible-travel"}])

const COMMITMENTS = [
  { n:"01", title:"Ethiopian ownership and employment", body:"Sawla Tours is Ethiopian-owned. Every guide, driver, specialist, and logistics coordinator in our team is Ethiopian. When you travel with us, the money you spend goes directly to Ethiopian professionals, not through an international intermediary. This is the most direct form of community benefit that tourism can provide." },
  { n:"02", title:"Community photography that respects consent", body:"In the Omo Valley and other community areas, we require photography consent before any images are taken. Payment for photography goes directly to the individual being photographed, not to an intermediary. We do not work with communities that have been so commercialised that genuine encounter is no longer possible." },
  { n:"03", title:"Wildlife principles — observe, do not disturb", body:"Our wildlife itineraries are designed around observation, not pursuit. We do not approach Ethiopian wolves when they are actively hunting. We do not enter gelada sleeping areas on cliff faces. We observe from positions that cause no behavioral change and brief every traveler on expectations before any wildlife encounter." },
  { n:"04", title:"Low-impact camping and waste management", body:"Mobile camp operations follow leave-no-trace principles. All waste — food waste, packaging, grey water — is carried out of remote areas. We do not light open fires except in established fire pits. Camp positions are chosen to minimise vegetation impact and to avoid wildlife corridors." },
  { n:"05", title:"Honest information about conditions", body:"We will not send travelers to a destination when conditions — security, access, community relations — make us uncomfortable. This sometimes costs us bookings. It maintains the integrity of every trip we run and the relationships we have built with communities and environments over 15 years." },
]

export default function ResponsibleTravelPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <section className="relative overflow-hidden" style={{height:"55vh",minHeight:"380px"}} aria-labelledby="resp-heading">
        <PlaceholderImage filename="responsible-hero.jpg" width={1920} height={900} category="about" fill />
        <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(42,39,36,0.88) 0%, rgba(42,39,36,0.15) 60%, transparent 100%)"}} />
        <div className="absolute inset-x-0 bottom-0 pb-14"><div className="container-max"><AnimateIn>
          <span className="label-eyebrow text-gold">Travel with Purpose</span>
          <h1 id="resp-heading" className="heading-display text-ivory mt-2" style={{fontSize:"clamp(2rem,5vw,4.5rem)"}}>Responsible Travel</h1>
          <p className="text-ivory/70 font-body max-w-2xl mt-4 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.2rem)"}}>Ethiopian-owned. Community-first. Low-impact. These are not marketing claims — they are the operating principles that shape every decision we make when designing and running your journey.</p>
        </AnimateIn></div></div>
      </section>
      <section className="section-padding bg-ivory">
        <div className="container-max">
          <div className="space-y-0">
            {COMMITMENTS.map((c,i)=>(
              <AnimateIn key={c.n} delay={i*0.06} className="grid md:grid-cols-[80px_1fr] gap-6 py-10 border-b border-sand/60 last:border-b-0">
                <div className="font-display text-gold/30 font-light" style={{fontSize:"clamp(2.5rem,5vw,4rem)"}}>{c.n}</div>
                <div>
                  <h2 className="font-display text-volcanic font-normal leading-snug mb-4" style={{fontSize:"clamp(1.25rem,2vw,1.625rem)"}}>{c.title}</h2>
                  <p className="text-warmgrey font-body leading-relaxed" style={{fontSize:"clamp(1rem,1.1vw,1.0625rem)"}}>{c.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-volcanic py-16 text-center"><div className="container-max"><AnimateIn>
        <h2 className="heading-display text-ivory mb-5" style={{fontSize:"clamp(1.75rem,3.5vw,2.75rem)"}}>Travel That Leaves Things Better</h2>
        <p className="text-ivory/65 font-body max-w-xl mx-auto mb-8 leading-relaxed" style={{fontSize:"clamp(1rem,1.25vw,1.125rem)"}}>The best thing you can do for Ethiopia as a traveler is go there, spend your money with Ethiopian people, and come back understanding more than you did when you left.</p>
        <Link href="/enquire" className="btn-gold">Plan Your Journey</Link>
      </AnimateIn></div></section>
    </>
  )
}
