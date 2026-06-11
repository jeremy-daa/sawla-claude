/** @type {import("next").NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 128, 256, 384, 512],
  },

  async redirects() {
    return [
      { source: "/contact",      destination: "/enquire",                       permanent: true },
      { source: "/contact-us",   destination: "/enquire",                       permanent: true },
      { source: "/tours",        destination: "/tours-by-experience",            permanent: true },
      { source: "/destinations", destination: "/ethiopias-popular-destinations", permanent: true },
      { source: "/blog",         destination: "/sawla-moments",                 permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "X-Frame-Options",         value: "DENY" },
          { key: "X-XSS-Protection",        value: "1; mode=block" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        // Immutable cache for static image assets
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Videos: cached for 7 days, served with range request support
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control",       value: "public, max-age=604800, stale-while-revalidate=86400" },
          { key: "Accept-Ranges",       value: "bytes" },
          { key: "Content-Type",        value: "video/mp4" },
        ],
      },
    ]
  },
}
module.exports = nextConfig