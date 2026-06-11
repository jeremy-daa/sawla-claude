import { NextRequest, NextResponse } from 'next/server'

interface EnquiryPayload {
  name: string; email: string; phone?: string; country?: string
  travelMonth?: string; travelers?: string; duration?: string
  interests?: string; message: string
}

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return ''
  return str.trim().slice(0, 2000).replace(/[<>]/g, '')
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Partial<EnquiryPayload>
    const name    = sanitize(body.name)
    const email   = sanitize(body.email)
    const message = sanitize(body.message)

    if (!name || name.length < 2)
      return NextResponse.json({ error: 'Please provide your name.' }, { status: 400 })
    if (!email || !isValidEmail(email))
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
    if (!message || message.length < 10)
      return NextResponse.json({ error: 'Please tell us a little about your trip.' }, { status: 400 })

    const payload = {
      name, email,
      phone:       sanitize(body.phone),
      country:     sanitize(body.country),
      travelMonth: sanitize(body.travelMonth),
      travelers:   sanitize(body.travelers),
      duration:    sanitize(body.duration),
      interests:   sanitize(body.interests),
      message,
      submittedAt: new Date().toISOString(),
    }

    // ── Wire your email provider here (e.g. Resend) ──
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from: '...', to: 'explore@sawlatours.com', ... })

    console.log('[Sawla Tours Enquiry]', payload)

    return NextResponse.json(
      { success: true, message: 'Thank you — we will be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please email us directly at explore@sawlatours.com' },
      { status: 500 }
    )
  }
}
