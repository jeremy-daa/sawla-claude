import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-volcanic flex items-center justify-center px-6 text-center">
      <div>
        <div className="font-display font-light text-[8rem] text-ivory/10 leading-none mb-4">404</div>
        <p className="label-eyebrow mb-4" style={{ color: 'rgba(201,148,26,0.8)' }}>Page not found</p>
        <h1 className="font-display font-light text-display-lg text-ivory mb-6">
          This path doesn't exist —<br /><em className="italic text-ivory/45">but Ethiopia does.</em>
        </h1>
        <p className="font-body text-body-md text-ivory/50 max-w-md mx-auto mb-10">
          The page you're looking for may have moved. Try starting from the homepage or exploring our destinations.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="btn-primary-ivory">Back to Home</Link>
          <Link href="/ethiopias-popular-destinations" className="btn-ghost-light inline-flex items-center gap-2">
            Explore Destinations <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
