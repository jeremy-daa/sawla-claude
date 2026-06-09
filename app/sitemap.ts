import type { MetadataRoute } from 'next'
import { siteData } from '@/data/siteData'

const BASE = 'https://www.sawlatours.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/enquire`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/why-travel-with-sawla-tours`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/how-we-work`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/meet-our-travel-specialists`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/meet-our-guides`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/meet-our-drivers`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/mobile-tented-camps-ethiopia`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/responsible-travel`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/ethiopias-popular-destinations`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/tours-by-experience`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/ethiopia-travel-guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/ethiopia-wildlife/endemic-species`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/sawla-moments`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]

  // Destination pages
  const destinationPages: MetadataRoute.Sitemap = siteData.destinations.map(d => ({
    url: `${BASE}/ethiopias-popular-destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: d.featured ? 0.85 : 0.75,
  }))

  // Tour style pages
  const tourStylePages: MetadataRoute.Sitemap = siteData.tourStyles.map(s => ({
    url: `${BASE}/tours-by-experience/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Species pages
  const speciesPages: MetadataRoute.Sitemap = siteData.species.map(sp => ({
    url: `${BASE}/ethiopia-wildlife/${sp.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Moments articles
  const momentPages: MetadataRoute.Sitemap = siteData.moments.map(m => ({
    url: `${BASE}/sawla-moments/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...destinationPages,
    ...tourStylePages,
    ...speciesPages,
    ...momentPages,
  ]
}
