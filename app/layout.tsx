import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sawlatours.com'),
  title: {
    default: 'Sawla Tours — Boutique Ethiopia Travel Specialists Since 2009',
    template: '%s | Sawla Tours Ethiopia',
  },
  description: 'Private, tailor-made journeys through Ethiopia designed by specialists who have spent their lives here. From Lalibela to the Danakil Depression, Omo Valley to the Simien Mountains.',
  keywords: ['Ethiopia tours', 'Ethiopia travel', 'Ethiopian tour operator', 'Lalibela tours', 'Omo Valley', 'Simien Mountains', 'Danakil Depression', 'Ethiopia wildlife', 'boutique Ethiopia travel'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sawlatours.com',
    siteName: 'Sawla Tours',
    title: 'Sawla Tours — Boutique Ethiopia Travel Specialists Since 2009',
    description: 'Private, tailor-made journeys through Ethiopia. Designed by specialists who have spent their lives here.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Sawla Tours Ethiopia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sawla Tours — Boutique Ethiopia Travel',
    description: 'Private, tailor-made journeys through Ethiopia. Since 2009.',
  },
  alternates: { canonical: 'https://www.sawlatours.com' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
