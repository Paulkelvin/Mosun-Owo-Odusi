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

    const plainText = `New message from mosunowoodusi.com contact form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12); overflow: hidden;">
          <div style="padding: 16px 20px; border-bottom: 1px solid #e5e7eb; background: linear-gradient(90deg, #1f2937, #111827); color: #f9fafb;">
            <div style="font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.9;">Mosun Website</div>
            <div style="font-size: 18px; font-weight: 600; margin-top: 4px;">New contact form message</div>
            <div style="font-size: 12px; opacity: 0.8; margin-top: 2px;">mosunowoodusi.com</div>
          </div>
          <div style="padding: 20px 20px 16px;">
            <p style="margin: 0 0 12px; font-size: 14px; color: #111827;">You have received a new message from the website contact form.</p>
            <div style="margin-bottom: 16px; padding: 12px 14px; border-radius: 12px; background-color: #f9fafb; border: 1px solid #e5e7eb; font-size: 13px; color: #111827;">
              <div style="margin-bottom: 4px;"><strong style="color:#374151;">Name:</strong> ${name}</div>
              <div style="margin-bottom: 4px;"><strong style="color:#374151;">Email:</strong> ${email}</div>
              <div><strong style="color:#374151;">Subject:</strong> ${subject}</div>
            </div>
            <div style="margin-bottom: 6px; font-size: 13px; font-weight: 600; color: #111827;">Message</div>
            <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #111827; border-radius: 12px; background-color: #fefce8; border: 1px solid #facc15; padding: 14px 16px;">
              ${message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>
          <div style="padding: 12px 20px 16px; border-top: 1px solid #e5e7eb; background-color: #f9fafb; font-size: 12px; color: #6b7280;">
            This notification was sent from <span style="font-weight: 600; color: #111827;">mosunowoodusi.com</span>. Replying to this email will reach <span style="font-weight: 600; color: #111827;">paulopackager@gmail.com</span>.
          </div>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'Mosun Website <contact@mosunowoodusi.com>',
      to: ['paulopackager@gmail.com'],
      replyTo: 'paulopackager@gmail.com',
      subject: 'New message from mosunowoodusi.com contact form',
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
