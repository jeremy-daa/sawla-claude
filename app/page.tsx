'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { siteData } from '@/data/siteData'

// ─── Scroll reveal hook ───────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Arrow icon ───────────────────────────────────────────────────────────
const Arrow = ({ className = '' }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  useReveal()

  return (
    <>
      {/* 1 ── HERO */}
      <section className="relative h-screen min-h-[720px] flex flex-col justify-end overflow-hidden">
        {/* Background — swap with Sawla Films <video> when ready */}
        <div className="absolute inset-0">
          {/*
            VIDEO SWAP INSTRUCTIONS:
            Replace this div with:
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src="/videos/sawla-hero-desktop.mp4" type="video/mp4" media="(min-width:768px)" />
              <source src="/videos/sawla-hero-mobile.mp4" type="video/mp4" />
            </video>
          */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 60% 40%, #3D2E1A 0%, transparent 70%),
                radial-gradient(ellipse 50% 40% at 20% 70%, #1A1208 0%, transparent 60%),
                linear-gradient(180deg, #0D0A07 0%, #2A1E0E 30%, #3D2A14 55%, #1C1510 100%)
              `
            }}
          />
          {/* Film grain */}
          <div className="film-grain" />
          {/* Horizon glow */}
          <div
            className="absolute z-[3] h-px left-0 right-0"
            style={{
              bottom: '34%',
              background: 'linear-gradient(90deg, transparent, rgba(201,148,26,0.12), rgba(201,148,26,0.28), rgba(201,148,26,0.12), transparent)',
              animation: 'fadeIn 2s cubic-bezier(0.16,1,0.3,1) 1.5s both',
            }}
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0 z-[4]"
            style={{ background: 'linear-gradient(180deg, rgba(10,8,6,0.18) 0%, transparent 30%, transparent 45%, rgba(10,8,6,0.6) 80%, rgba(10,8,6,0.88) 100%)' }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 px-12 pb-20 max-w-[860px]" style={{ paddingLeft: '3rem' }}>
          <p
            className="font-body text-[0.6875rem] tracking-[0.18em] uppercase text-gold mb-6"
            style={{ opacity: 0, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.8s forwards' }}
          >
            Ethiopia · Since 2009
          </p>
          <h1 className="font-display font-light text-display-xl text-ivory mb-7">
            {["Ethiopia isn't", "a destination.", <em key="em" className="italic text-ivory/72">It&apos;s an encounter.</em>].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="block" style={{ opacity: 0, transform: 'translateY(105%)', animation: `lineUp 1.1s cubic-bezier(0.16,1,0.3,1) ${0.9 + i * 0.15}s forwards` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p
            className="font-body text-body-md text-ivory/58 max-w-[460px] mb-10"
            style={{ opacity: 0, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.4s forwards' }}
          >
            Seventeen days through the roof of Africa, from the rock churches of Lalibela to the wolves of the Bale Mountains. Every journey built from scratch.
          </p>
          <div
            className="flex items-center gap-6"
            style={{ opacity: 0, animation: 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 1.6s forwards' }}
          >
            <Link href="/enquire" className="btn-primary-ivory">Start Planning</Link>
            <Link href="https://www.ethiopiafilmfixer.com" className="btn-ghost-light group">
              Watch the film <Arrow className="transition-transform duration-400 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* Stats — right edge */}
        <div
          className="absolute right-12 bottom-20 z-10 flex flex-col gap-7 text-right"
          style={{ opacity: 0, animation: 'fadeIn 1s cubic-bezier(0.16,1,0.3,1) 2s forwards' }}
        >
          {[
            { num: '16',  label: 'Destinations' },
            { num: '36+', label: 'Itineraries' },
            { num: '80%', label: 'Repeat clients' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display font-light text-[2.25rem] text-ivory leading-none tracking-[-0.02em]">{num}</div>
              <div className="font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: 'fadeIn 1s cubic-bezier(0.16,1,0.3,1) 2.3s forwards' }}
        >
          <div className="relative w-px h-11 bg-ivory/20 overflow-hidden">
            <div
              className="absolute top-[-100%] left-0 w-full h-full bg-gold"
              style={{ animation: 'scrollDrop 2.2s cubic-bezier(0.16,1,0.3,1) 2.6s infinite' }}
            />
          </div>
          <span className="font-body text-[0.55rem] tracking-[0.22em] uppercase text-ivory/28">Explore</span>
        </div>
      </section>

      {/* 2 ── TRUST BAR */}
      <div className="bg-charcoal border-t border-ivory/[0.08] py-5 px-12">
        <div className="flex items-center justify-center flex-wrap gap-6">
          {['Operating since 2009', 'Licensed Ethiopian tour operator', 'In-house documentary production', '100% tailor-made journeys', 'Addis Ababa based team'].map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gold/60" />}
              <span className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-ivory/38">{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3 ── TOUR STYLES */}
      <section className="bg-ivory py-32 px-12">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20 reveal">
            <div>
              <p className="label-eyebrow">Six ways to travel</p>
              <h2 className="font-display font-light text-display-lg text-charcoal">
                Choose your<br /><em className="italic text-warmgrey">Ethiopia</em>
              </h2>
            </div>
            <p className="font-body text-body-md text-warmgrey leading-[1.82] self-end">
              Every journey is built around a single question: what do you want to feel? From ancient civilisations to endemic wolves to the world&apos;s hottest place — we design the entry point that matches you.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-sand reveal">
            {siteData.tourStyles.map((style) => (
              <Link
                key={style.slug}
                href={`/tours-by-experience/${style.slug}`}
                className="group relative overflow-hidden aspect-[3/4] bg-charcoal"
              >
                {/* Placeholder bg — swap with next/image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.color} transition-transform duration-700 ease-luxury group-hover:scale-105`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="font-display text-[0.75rem] italic text-ivory/30 mb-2 tracking-[0.08em]">{style.number}</div>
                  <div className="font-display font-light text-display-sm text-ivory mb-2 leading-[1.18]">{style.name}</div>
                  <div className="font-body text-[0.75rem] leading-[1.65] text-ivory/52 mb-4 opacity-0 translate-y-2.5 transition-all duration-450 ease-luxury group-hover:opacity-100 group-hover:translate-y-0">
                    {style.desc}
                  </div>
                  <div className="flex items-center gap-1.5 font-body text-[0.6rem] tracking-[0.18em] uppercase text-gold transition-[gap] duration-350 group-hover:gap-2.5">
                    Explore <Arrow />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── DESTINATIONS */}
      <section className="bg-volcanic py-32 px-12">
        <div className="max-w-container mx-auto">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Where we go</p>
              <h2 className="font-display font-light text-display-lg text-ivory">
                16 destinations,<br /><em className="italic text-ivory/45">one country</em>
              </h2>
            </div>
            <Link href="/ethiopias-popular-destinations" className="group flex items-center gap-1.5 font-body text-[0.6875rem] tracking-[0.13em] uppercase text-ivory/45 hover:text-gold transition-colors duration-300 pb-1.5">
              All destinations <Arrow className="transition-transform duration-350 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/[0.06] reveal">
            {/* Feature destination */}
            <Link href="/ethiopias-popular-destinations/lalibela" className="group relative overflow-hidden col-span-2 min-h-[460px] bg-charcoal">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A0808] via-[#3D1A10] to-[#200A08] transition-transform duration-800 ease-luxury group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-body text-[0.55rem] tracking-[0.18em] uppercase text-ivory/38 mb-1.5">Northern Ethiopia</div>
                <div className="font-display font-light text-[1.75rem] text-ivory leading-[1.2]">Lalibela</div>
                <div className="font-body text-[0.6rem] tracking-[0.12em] uppercase text-gold mt-1 opacity-0 translate-y-1.5 transition-all duration-400 ease-luxury group-hover:opacity-100 group-hover:translate-y-0">
                  Rock-hewn churches · UNESCO
                </div>
              </div>
            </Link>

            {siteData.destinations.slice(1, 7).map((dest) => (
              <Link
                key={dest.slug}
                href={`/ethiopias-popular-destinations/${dest.slug}`}
                className="group relative overflow-hidden aspect-[2/3] bg-charcoal"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-volcanic to-charcoal transition-transform duration-800 ease-luxury group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-body text-[0.55rem] tracking-[0.18em] uppercase text-ivory/38 mb-1">{dest.region}</div>
                  <div className="font-display font-light text-[1.125rem] text-ivory leading-[1.2]">{dest.name}</div>
                  <div className="font-body text-[0.6rem] tracking-[0.12em] uppercase text-gold mt-1 opacity-0 translate-y-1.5 transition-all duration-400 ease-luxury group-hover:opacity-100 group-hover:translate-y-0">
                    {dest.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── SPECIES */}
      <section className="bg-charcoal py-28 px-12">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <p className="label-eyebrow">Endemic wildlife</p>
            <h2 className="font-display font-light text-display-lg text-ivory">
              A natural world<br /><em className="italic text-ivory/45">found nowhere else</em>
            </h2>
            <p className="font-body text-[0.9375rem] text-ivory/50 leading-[1.82] mt-5">
              Ethiopia has more endemic mammals and birds than almost any African nation. We know where to find them, and when.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ivory/[0.06] reveal">
            {siteData.species.map((sp) => (
              <Link
                key={sp.slug}
                href={`/ethiopia-wildlife/${sp.slug}`}
                className="group relative overflow-hidden aspect-square bg-charcoal"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-volcanic to-charcoal transition-transform duration-700 ease-luxury group-hover:scale-[1.07]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="font-display font-light text-[1.125rem] text-ivory mb-0.5">{sp.name}</div>
                  <div className="font-display italic text-[0.75rem] text-ivory/35">{sp.latin}</div>
                  <div className="inline-block font-body text-[0.55rem] tracking-[0.14em] uppercase bg-gold/15 text-gold px-2 py-0.5 mt-1.5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    Endemic
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-ivory/10 reveal">
            {[
              { num: '850+', label: 'Bird species\nrecorded' },
              { num: '18',   label: 'Endemic bird\nspecies' },
              { num: '13',   label: 'Endemic mammal\nspecies' },
            ].map(({ num, label }) => (
              <div key={num}>
                <div className="font-display font-light text-[3rem] text-ivory leading-none">{num}</div>
                <div className="font-body text-[0.6875rem] text-ivory/40 mt-1 whitespace-pre-line">{label}</div>
              </div>
            ))}
            <Link href="/ethiopia-wildlife/endemic-species" className="group flex items-center gap-1.5 font-body text-[0.6875rem] tracking-[0.13em] uppercase text-gold hover:gap-3 transition-[gap] duration-350">
              Full species guide <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 6 ── TESTIMONIALS */}
      <section className="bg-ivory py-32 px-12">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="reveal">
              <p className="label-eyebrow">Client journeys</p>
              <h2 className="font-display font-light text-display-lg text-charcoal mb-8">
                What travellers<br /><em className="italic text-warmgrey">remember</em>
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <div className="font-display font-light text-[3rem] text-charcoal leading-none">4.9</div>
                <div>
                  <div className="text-gold text-sm tracking-widest">★★★★★</div>
                  <div className="font-body text-[0.75rem] text-warmgrey leading-[1.6] mt-0.5">
                    Based on verified reviews<br />Trustpilot · SafariBookings
                  </div>
                </div>
              </div>
              <Link href="/why-travel-with-sawla-tours" className="group flex items-center gap-1.5 font-body text-[0.6875rem] tracking-[0.13em] uppercase text-warmgrey hover:text-gold transition-colors duration-300">
                All testimonials <Arrow className="transition-transform duration-350 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-sand reveal">
              {siteData.testimonials.slice(0, 4).map((t) => (
                <div key={t.id} className="bg-ivory p-8">
                  <p className="font-display font-light text-[1.125rem] leading-[1.65] text-charcoal italic mb-6">
                    <span className="text-gold text-2xl leading-none align-[-0.4em] mr-0.5">&ldquo;</span>
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center font-body text-[0.6875rem] font-medium text-warmgrey flex-shrink-0">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-body text-[0.8125rem] font-medium text-charcoal">{t.name}</div>
                      <div className="font-body text-[0.6875rem] text-warmgrey">{t.country} · {t.year}</div>
                      <div className="inline-block font-body text-[0.6rem] tracking-[0.14em] uppercase text-gold bg-gold/8 px-2 py-0.5 mt-1">{t.tour}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 ── SAWLA FILMS */}
      <section className="bg-volcanic py-36 px-12 relative overflow-hidden">
        <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Sawla Films</p>
            <h2 className="font-display font-light text-display-lg text-ivory mb-6">
              We don&apos;t just show<br />you Ethiopia.<br /><em className="italic text-ivory/42">We document it.</em>
            </h2>
            <p className="font-body text-[0.9375rem] text-ivory/52 leading-[1.85] mb-8">
              The only tour operator in Ethiopia with in-house documentary production. Every destination on this site was filmed by our own team. No stock footage. No Unsplash. When you travel with us, you travel with the people who made the films.
            </p>
            <div className="flex gap-10 py-7 border-t border-b border-ivory/10 mb-8">
              {[
                { num: '89',  label: 'Films produced' },
                { num: '12',  label: 'Regional states' },
                { num: '4K',  label: 'All footage' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display font-light text-[2rem] text-ivory leading-none">{num}</div>
                  <div className="font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/35 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <Link href="https://www.ethiopiafilmfixer.com" className="group flex items-center gap-1.5 font-body text-[0.6875rem] tracking-[0.13em] uppercase text-ivory/60 hover:text-gold transition-colors duration-300">
              Visit Sawla Films <Arrow className="transition-transform duration-350 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="reveal">
            {/* SWAP with actual Sawla Films embed/video when ready */}
            <div className="relative aspect-video bg-charcoal">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#2A1E0E] to-[#1A1208]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
                <a
                  href="https://www.ethiopiafilmfixer.com"
                  className="w-[52px] h-[52px] rounded-full border border-ivory/28 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" className="ml-0.5">
                    <polygon points="6,3 15,9 6,15" fill="rgba(248,246,241,0.75)" />
                  </svg>
                </a>
                <span className="font-body text-[0.6rem] tracking-[0.22em] uppercase text-ivory/20">Sawla Films showreel 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 ── HOW WE WORK */}
      <section className="bg-sand py-32 px-12">
        <div className="max-w-container mx-auto">
          <div className="text-center max-w-[560px] mx-auto mb-20 reveal">
            <p className="label-eyebrow">The process</p>
            <h2 className="font-display font-light text-display-lg text-charcoal">
              How a Sawla journey<br /><em className="italic text-warmgrey">comes together</em>
            </h2>
            <p className="font-body text-[0.9375rem] text-warmgrey leading-[1.8] mt-5">
              From first enquiry to departure, four steps. We handle every detail — you arrive ready to be present.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 relative reveal">
            {/* Connecting line — desktop only */}
            <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-warmgrey/20 hidden lg:block" />

            {[
              { n: '01', title: 'You tell us what matters', desc: 'A short conversation. We listen for what you want to feel, not just what you want to see. This shapes everything.' },
              { n: '02', title: 'We design your journey',   desc: 'A specialist builds a bespoke itinerary — no templates, no group departures. Every day has a reason.' },
              { n: '03', title: 'You refine, we perfect',   desc: 'Two or three iterations. You ask questions. We adjust. The journey becomes yours before you\'ve left home.' },
              { n: '04', title: 'You arrive, we\'re there', desc: 'Our team meets you at Bole Airport. From that moment, Ethiopia is handled. You focus on experiencing it.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="px-6 text-center">
                <div className="w-14 h-14 rounded-full border border-warmgrey/30 flex items-center justify-center mx-auto mb-6 bg-sand relative z-10">
                  <span className="font-display font-light text-charcoal">{n}</span>
                </div>
                <h3 className="font-display font-[400] text-[1.125rem] text-charcoal mb-3">{title}</h3>
                <p className="font-body text-[0.8125rem] text-warmgrey leading-[1.75]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 ── SAWLA MOMENTS */}
      <section className="bg-ivory py-32 px-12">
        <div className="max-w-container mx-auto">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="label-eyebrow">Sawla Moments</p>
              <h2 className="font-display font-light text-display-lg text-charcoal">From the field</h2>
            </div>
            <Link href="/sawla-moments" className="group flex items-center gap-1.5 font-body text-[0.6875rem] tracking-[0.13em] uppercase text-warmgrey hover:text-gold transition-colors duration-300 pb-1.5">
              All stories <Arrow className="transition-transform duration-350 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-sand reveal">
            {/* Feature article */}
            <Link href={`/sawla-moments/${siteData.moments[0].slug}`} className="group relative overflow-hidden lg:col-span-1 min-h-[480px] bg-charcoal">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1A08] via-[#1A3A14] to-[#0A1A0A] transition-transform duration-700 ease-luxury group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-gold mb-3">{siteData.moments[0].category}</div>
                <h3 className="font-display font-light text-[1.875rem] text-ivory leading-[1.2] mb-3">{siteData.moments[0].title}</h3>
                <div className="font-body text-[0.6875rem] text-ivory/38">{siteData.moments[0].readTime} read · {siteData.moments[0].location}</div>
                <div className="flex items-center gap-1.5 font-body text-[0.6rem] tracking-[0.16em] uppercase text-gold mt-3 opacity-0 translate-y-1.5 transition-all duration-400 ease-luxury group-hover:opacity-100 group-hover:translate-y-0">
                  Read story <Arrow />
                </div>
              </div>
            </Link>

            {/* Secondary articles */}
            <div className="lg:col-span-2 flex flex-col gap-px">
              {siteData.moments.slice(1).map((m) => (
                <Link
                  key={m.slug}
                  href={`/sawla-moments/${m.slug}`}
                  className="group relative overflow-hidden min-h-[240px] flex-1 bg-charcoal"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-volcanic to-charcoal transition-transform duration-700 ease-luxury group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-gold mb-2">{m.category}</div>
                    <h3 className="font-display font-light text-[1.25rem] text-ivory leading-[1.2] mb-2">{m.title}</h3>
                    <div className="font-body text-[0.6875rem] text-ivory/38">{m.readTime} read</div>
                    <div className="flex items-center gap-1.5 font-body text-[0.6rem] tracking-[0.16em] uppercase text-gold mt-2 opacity-0 translate-y-1.5 transition-all duration-400 ease-luxury group-hover:opacity-100 group-hover:translate-y-0">
                      Read story <Arrow />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 ── ENQUIRY */}
      <section id="enquire" className="bg-volcanic py-36 px-12 relative overflow-hidden">
        <div className="absolute top-1/2 -left-[20%] w-[40%] pb-[40%] rounded-full -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,148,26,0.04) 0%, transparent 70%)' }} />
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <p className="label-eyebrow" style={{ color: 'rgba(201,148,26,0.8)' }}>Start here</p>
            <h2 className="font-display font-light text-display-lg text-ivory mb-6">
              Every journey<br />begins with<br /><em className="italic text-ivory/42">one question</em>
            </h2>
            <p className="font-body text-[0.9375rem] text-ivory/50 leading-[1.85] mb-8">
              Tell us what you&apos;re looking for. We&apos;ll come back within 24 hours with a first conversation, not a brochure.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'No booking fees. No obligation.',
                'Response within 24 hours, always.',
                'Speak directly with a specialist — not a call centre.',
                'WhatsApp: +251 970 578 306',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 font-body text-[0.8125rem] text-ivory/50">
                  <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="border border-ivory/10 bg-ivory/[0.04] p-10 reveal">
            <h3 className="font-display font-light text-[1.5rem] text-ivory mb-1">Plan your journey</h3>
            <p className="font-body text-[0.8125rem] text-ivory/42 mb-8">A first conversation, not a form submission.</p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'First name', type: 'text', placeholder: 'Your name' },
                  { label: 'Country', type: 'text', placeholder: 'Where you\'re from' },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Travel style</label>
                <select className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory/70 outline-none focus:border-gold transition-colors duration-300 appearance-none">
                  <option value="">Select a style</option>
                  {siteData.tourStyles.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Duration</label>
                  <select className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory/70 outline-none focus:border-gold transition-colors duration-300 appearance-none">
                    <option>Select</option>
                    <option>7–10 days</option>
                    <option>10–14 days</option>
                    <option>14–21 days</option>
                    <option>21+ days</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Party size</label>
                  <select className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory/70 outline-none focus:border-gold transition-colors duration-300 appearance-none">
                    <option>Select</option>
                    <option>Solo</option>
                    <option>2 people</option>
                    <option>3–5 people</option>
                    <option>Group 6+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-body text-[0.6rem] tracking-[0.16em] uppercase text-ivory/40 mb-2">Tell us what matters</label>
                <textarea
                  rows={4}
                  placeholder="What do you want to feel? What have you already seen? What's non-negotiable?"
                  className="w-full bg-ivory/[0.06] border border-ivory/15 px-4 py-3 font-body text-[0.875rem] text-ivory placeholder:text-ivory/25 outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-gold hover:bg-gold-light text-volcanic font-body text-[0.6875rem] tracking-[0.14em] uppercase border-none py-4 cursor-pointer transition-colors duration-300 mt-1"
              >
                Send Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Keyframe styles */}
      <style jsx global>{`
        @keyframes fadeIn  { from { opacity: 0 }                         to { opacity: 1 } }
        @keyframes fadeUp  { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes lineUp  { from { opacity: 0; transform: translateY(105%) } to { opacity: 1; transform: translateY(0) } }
        @keyframes scrollDrop { 0% { top: -100% } 60%, 100% { top: 110% } }
      `}</style>
    </>
  )
}
