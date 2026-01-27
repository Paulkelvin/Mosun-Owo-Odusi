import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json(
      { ok: false, error: 'Email service is not configured. Please try again later.' },
      { status: 500 }
    )
  }

  try {
    const { name, about } = await req.json()

    if (!about || typeof about !== 'string' || !about.trim()) {
      return NextResponse.json(
        { ok: false, error: 'About text is required.' },
        { status: 400 }
      )
    }

    const cleanedAbout = about.trim()
    const cleanedName = typeof name === 'string' ? name.trim() : ''

    const textBody = `${cleanedName ? `Client name/organization: ${cleanedName}\n\n` : ''}About content submitted from the About page form on mosunowoodusi.com:\n\n${cleanedAbout}`

    const { data, error } = await resend.emails.send({
      from: 'Mosun Website <contact@mosunowoodusi.com>',
      to: ['paulopackager@gmail.com'],
      replyTo: 'paulopackager@gmail.com',
      subject: 'New message from mosunowoodusi.com about form',
      text: textBody,
    })

    if (error) {
      console.error('Resend error (client-about)', error)
      const message = typeof error === 'string' ? error : (error as Error).message || 'Email service failed to send message.'
      return NextResponse.json({ ok: false, error: message }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (error) {
    console.error('Client About form error', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to send About text. Please try again later.' },
      { status: 500 }
    )
  }
}
