'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteData } from '@/data/siteData'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between transition-all duration-500
          ${scrolled
            ? 'bg-volcanic/96 backdrop-blur-md py-4 px-12'
            : 'bg-transparent py-7 px-12'
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display font-light text-[1.375rem] tracking-[0.1em] text-ivory uppercase">
            Sawla
          </span>
          <span className="font-body text-[0.55rem] tracking-[0.25em] uppercase text-gold mt-0.5">
            Ethiopia
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-9 list-none">
          {[
            { label: 'Destinations', href: '/ethiopias-popular-destinations' },
            { label: 'Journeys',     href: '/tours-by-experience' },
            { label: 'Wildlife',     href: '/ethiopia-wildlife/endemic-species' },
            { label: 'Sawla Films',  href: 'https://www.ethiopiafilmfixer.com' },
            { label: 'About',        href: '/about-us' },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-body text-[0.6875rem] tracking-[0.13em] uppercase text-ivory/65 hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-6">
          <Link
            href="/enquire"
            className="hidden lg:inline-block font-body text-[0.6875rem] tracking-[0.13em] uppercase text-ivory border border-ivory/35 px-5 py-2 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-volcanic"
          >
            Plan a Journey
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-ivory transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[199] bg-volcanic flex flex-col justify-center px-8 transition-all duration-500 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="list-none flex flex-col gap-8">
          {[
            { label: 'Destinations', href: '/ethiopias-popular-destinations' },
            { label: 'Journeys',     href: '/tours-by-experience' },
            { label: 'Wildlife',     href: '/ethiopia-wildlife/endemic-species' },
            { label: 'Sawla Films',  href: 'https://www.ethiopiafilmfixer.com' },
            { label: 'About',        href: '/about-us' },
            { label: 'Plan a Journey', href: '/enquire' },
          ].map((item, i) => (
            <li
              key={item.label}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
              className={`transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-display font-light text-display-sm text-ivory hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-16 pt-8 border-t border-ivory/10">
          <p className="font-body text-xs text-ivory/40 tracking-[0.14em] uppercase">+251 970 578 306 · explore@sawlatours.com</p>
        </div>
      </div>
    </>
  )
}
