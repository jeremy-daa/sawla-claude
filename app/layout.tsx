import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import "./globals.css"
import Header       from "@/components/layout/Header"
import Footer       from "@/components/layout/Footer"
import WhatsAppButton from "@/components/layout/WhatsAppButton"
import ScrollToTop  from "@/components/ui/ScrollToTop"
import SchemaScript from "@/components/ui/SchemaScript"
import { homepageSchema } from "@/lib/schema"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  style: ["normal","italic"],
  variable: "--font-cormorant",
  display: "swap",
})
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2a2724",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sawlatours.com"),
  title: {
    default: "Sawla Tours | Private Ethiopia Tours Crafted by Local Experts",
    template: "%s | Sawla Tours",
  },
  description: "Sawla Tours is an Ethiopia-based tour operator designing private, tailor-made journeys across Lalibela, Simien, Omo Valley, Bale, Danakil, festivals, wildlife, and cultural regions.",
  alternates: { canonical: "https://www.sawlatours.com" },
  openGraph: {
    type: "website", locale: "en_US",
    url: "https://www.sawlatours.com",
    siteName: "Sawla Tours",
    title: "Sawla Tours | Private Ethiopia Tours Crafted by Local Experts",
    description: "Ethiopia-based tour operator designing private, tailor-made journeys.",
    images: [{ url: "/images/og-home.jpg", width: 1200, height: 630, alt: "Sawla Tours" }],
  },
  twitter: { card: "summary_large_image", title: "Sawla Tours | Private Ethiopia Tours" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cormorant.variable + " " + dmSans.variable}>
      <head>
        <SchemaScript schema={homepageSchema} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  )
}