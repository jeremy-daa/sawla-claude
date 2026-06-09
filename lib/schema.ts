// SAWLA TOURS — JSON-LD SCHEMA LIBRARY
// lib/schema.ts
// Usage: import { generateTourSchema, generateDestinationSchema } from '@/lib/schema'

const BASE_URL = 'https://www.sawlatours.com'
const ORG_ID   = `${BASE_URL}/#organization`

// ─── Organization (shared across all pages) ───────────────────────────────
export const organizationSchema = {
  '@type': ['TravelAgency', 'LocalBusiness', 'Organization'],
  '@id': ORG_ID,
  name: 'Sawla Tours',
  url: BASE_URL,
  logo: `${BASE_URL}/images/sawla-tours-logo.png`,
  telephone: '+251705783060',
  email: 'explore@sawlatours.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 9.032, longitude: 38.7469 },
  foundingDate: '2009',
  areaServed: { '@type': 'Country', name: 'Ethiopia' },
  priceRange: '$$$',
}

// ─── Tour / Itinerary schema ───────────────────────────────────────────────
export function generateTourSchema({
  name,
  description,
  slug,
  style,
  duration,
  priceFrom,
  destinations,
  image,
}: {
  name: string
  description: string
  slug: string
  style: string
  duration: string
  priceFrom: number
  destinations: string[]
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${BASE_URL}/tours-by-experience/${style}/${slug}`,
    name,
    description,
    url: `${BASE_URL}/tours-by-experience/${style}/${slug}`,
    image,
    touristType: 'Cultural Tourism, Wildlife Tourism, Adventure Tourism',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: destinations.map((dest, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: dest,
      })),
    },
    offers: {
      '@type': 'Offer',
      price: priceFrom,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
    },
    provider: { '@id': ORG_ID },
  }
}

// ─── Destination schema ────────────────────────────────────────────────────
export function generateDestinationSchema({
  name,
  slug,
  description,
  image,
  region,
}: {
  name: string
  slug: string
  description: string
  image: string
  region: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${BASE_URL}/ethiopias-popular-destinations/${slug}`,
    name: `${name}, Ethiopia`,
    description,
    url: `${BASE_URL}/ethiopias-popular-destinations/${slug}`,
    image,
    geo: { '@type': 'GeoCoordinates' }, // fill with actual coords per destination
    containedInPlace: {
      '@type': 'Country',
      name: 'Ethiopia',
      '@id': 'https://www.wikidata.org/wiki/Q115',
    },
    touristType: ['Heritage Tourism', 'Cultural Tourism', 'Wildlife Tourism'],
  }
}

// ─── Species / Wildlife page schema ───────────────────────────────────────
export function generateSpeciesSchema({
  commonName,
  latinName,
  slug,
  description,
  image,
  iucnStatus,
}: {
  commonName: string
  latinName: string
  slug: string
  description: string
  image: string
  iucnStatus: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/ethiopia-wildlife/${slug}`,
    headline: `${commonName} (${latinName}) — Ethiopia Endemic Wildlife Guide`,
    description,
    url: `${BASE_URL}/ethiopia-wildlife/${slug}`,
    image,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    about: {
      '@type': 'Taxon',
      name: latinName,
      vernacularName: commonName,
      taxonRank: 'Species',
    },
    keywords: `${commonName}, ${latinName}, Ethiopia endemic wildlife, ${iucnStatus}`,
  }
}

// ─── Article / Moments schema ──────────────────────────────────────────────
export function generateArticleSchema({
  title,
  slug,
  description,
  image,
  datePublished,
  dateModified,
}: {
  title: string
  slug: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/sawla-moments/${slug}`,
    headline: title,
    description,
    url: `${BASE_URL}/sawla-moments/${slug}`,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${BASE_URL}/sawla-moments/${slug}`,
  }
}

// ─── FAQ schema ────────────────────────────────────────────────────────────
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

// ─── Field Guide (HowTo / Article) schema ─────────────────────────────────
export function generateGuideSchema({
  title,
  slug,
  description,
  image,
}: {
  title: string
  slug: string
  description: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/ethiopia-travel-guide/${slug}`,
    headline: title,
    description,
    url: `${BASE_URL}/ethiopia-travel-guide/${slug}`,
    image,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    about: { '@type': 'Country', name: 'Ethiopia' },
  }
}

// ─── Breadcrumb schema ─────────────────────────────────────────────────────
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: url,
    })),
  }
}
