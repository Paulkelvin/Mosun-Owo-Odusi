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
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const plainText = `New message from a visitor on your website mosunowoodusi.com\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`

    const escapedName = String(name).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const escapedEmail = String(email).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const escapedSubject = String(subject).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    const escapedMessage = String(message).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 28px 16px;">
        <div style="max-width: 680px; margin: 0 auto; background-color: #ffffff; border-radius: 22px; box-shadow: 0 20px 60px rgba(15, 23, 42, 0.16); overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="padding: 18px 24px; background: linear-gradient(90deg, #1e3a8a, #1d4ed8, #0ea5e9); color: #f9fafb;">
            <div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.9;">Mosun Owo-Odusi</div>
            <div style="font-size: 20px; font-weight: 700; margin-top: 6px;">New message from a visitor on your website mosunowoodusi.com</div>
            <a href="https://mosunowoodusi.com" style="font-size: 13px; color: #e5e7eb; text-decoration: underline; text-decoration-color: rgba(248, 250, 252, 0.7); text-underline-offset: 3px; margin-top: 4px; display: inline-block;">mosunowoodusi.com</a>
          </div>
          <div style="padding: 20px 24px 18px; background-color: #f9fafb;">
            <div style="margin-bottom: 16px; padding: 14px 16px; border-radius: 14px; background-color: #ffffff; border: 1px solid #e5e7eb; font-size: 13px; color: #111827;">
              <div style="margin-bottom: 6px;"><span style="font-weight:600; color:#4b5563;">Name:</span> <span>${escapedName}</span></div>
              <div style="margin-bottom: 6px;"><span style="font-weight:600; color:#4b5563;">Email:</span> <a href="mailto:${escapedEmail}" style="color:#1d4ed8; text-decoration:none;">${escapedEmail}</a></div>
              <div><span style="font-weight:600; color:#4b5563;">Subject:</span> <span>${escapedSubject}</span></div>
            </div>
            <div style="margin-bottom: 6px; font-size: 13px; font-weight: 600; color: #374151;">Message</div>
            <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.7; color: #111827; border-radius: 14px; background-color: #ffffff; border: 1px solid #e5e7eb; padding: 14px 16px;">
              ${escapedMessage}
            </div>
          </div>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'Mosun Website <contact@mosunowoodusi.com>',
      to: ['mowoodusi@gmail.com'],
      bcc: ['paulopackager@gmail.com'],
      replyTo: 'paulopackager@gmail.com',
      subject: 'New message from a visitor on your website mosunowoodusi.com',
      text: plainText,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error', error)
      const message = typeof error === 'string' ? error : (error as Error).message || 'Email service failed to send message.'
      return NextResponse.json({ ok: false, error: message }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (error) {
    console.error('Contact form error', error)
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 })
  }
}
