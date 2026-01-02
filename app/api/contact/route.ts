import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Mosun Portfolio <contact@mosun-owo-odusi.com>',
      to: 'paulopackager@gmail.com',
      replyTo: email,
      subject: `New contact form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 })
  }
}
