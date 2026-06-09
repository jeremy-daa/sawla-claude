import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="max-w-container mx-auto px-6 md:px-12 pt-20 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-ivory/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display font-light text-2xl tracking-[0.1em] text-ivory uppercase mb-1">Sawla Tours</div>
            <p className="font-body text-sm leading-relaxed text-ivory/40 max-w-[280px] mt-3 mb-6">
              Ethiopia's premier boutique tour operator. Tailor-made journeys since 2009. Based in Addis Ababa, known everywhere.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:explore@sawlatours.com" className="font-body text-[0.8125rem] text-ivory/50 hover:text-gold transition-colors duration-300">explore@sawlatours.com</a>
              <a href="tel:+251705783060" className="font-body text-[0.8125rem] text-ivory/50 hover:text-gold transition-colors duration-300">+251 705 783 06</a>
              <a href="https://wa.me/251970578306" className="font-body text-[0.8125rem] text-ivory/50 hover:text-gold transition-colors duration-300">WhatsApp +251 970 578 306</a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-ivory/35 mb-5">Explore</div>
            <ul className="flex flex-col gap-3 list-none">
              {[
                ['All Destinations', '/ethiopias-popular-destinations'],
                ['Tour Styles', '/tours-by-experience'],
                ['All Itineraries', '/tours-by-experience'],
                ['Ethiopia Wildlife', '/ethiopia-wildlife/endemic-species'],
                ['Travel Guide', '/ethiopia-travel-guide'],
                ['FAQ', '/faq'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[0.8125rem] text-ivory/50 hover:text-ivory transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-ivory/35 mb-5">Company</div>
            <ul className="flex flex-col gap-3 list-none">
              {[
                ['About Sawla', '/about-us'],
                ['Meet the Team', '/meet-our-travel-specialists'],
                ['How We Work', '/how-we-work'],
                ['Why Travel With Us', '/why-travel-with-sawla-tours'],
                ['Responsible Travel', '/responsible-travel'],
                ['Sawla Films', 'https://www.ethiopiafilmfixer.com'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[0.8125rem] text-ivory/50 hover:text-ivory transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plan */}
          <div>
            <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-ivory/35 mb-5">Plan</div>
            <ul className="flex flex-col gap-3 list-none">
              {[
                ['Start Planning', '/enquire'],
                ['Mobile Tented Camps', '/mobile-tented-camps-ethiopia'],
                ['Sawla Moments', '/sawla-moments'],
                ['Contact Us', '/enquire'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[0.8125rem] text-ivory/50 hover:text-ivory transition-colors duration-300">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-2">
              <div className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-ivory/35 mb-3">Follow</div>
              <a href="https://www.instagram.com/sawlatours" className="font-body text-[0.8125rem] text-ivory/50 hover:text-gold transition-colors">Instagram</a>
              <a href="https://www.facebook.com/sawlatours" className="font-body text-[0.8125rem] text-ivory/50 hover:text-gold transition-colors">Facebook</a>
              <a href="https://www.youtube.com/@sawlafilms" className="font-body text-[0.8125rem] text-ivory/50 hover:text-gold transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <span className="font-body text-[0.6875rem] text-ivory/28">
            © 2026 Sawla Tours. All rights reserved. Licensed Ethiopian tour operator.
          </span>
          <div className="flex items-center gap-4">
            {['Est. 2009', 'Addis Ababa', 'Sawla Films'].map((cert) => (
              <span key={cert} className="font-body text-[0.6rem] tracking-[0.14em] uppercase text-ivory/25 border border-ivory/12 px-2.5 py-1">{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
