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
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #0f172a; padding: 32px 16px;">
        <div style="max-width: 680px; margin: 0 auto; background-color: #0b1220; border-radius: 24px; box-shadow: 0 24px 80px rgba(15, 23, 42, 0.85); overflow: hidden; border: 1px solid #1e293b;">
          <div style="padding: 18px 24px; border-bottom: 1px solid #1f2937; background: radial-gradient(circle at top left, #facc15 0, #0b1120 55%); color: #f9fafb;">
            <div style="font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.9;">Mosun Website</div>
            <div style="font-size: 20px; font-weight: 700; margin-top: 6px;">New contact form message</div>
            <a href="https://mosunowoodusi.com" style="font-size: 13px; color: #e5e7eb; text-decoration: underline; text-decoration-color: #facc15; text-underline-offset: 3px; margin-top: 4px; display: inline-block;">mosunowoodusi.com</a>
          </div>
          <div style="padding: 20px 24px 18px; background: linear-gradient(180deg, #020617 0, #020617 32px, #020617 100%);">
            <p style="margin: 0 0 14px; font-size: 14px; color: #e5e7eb;">You have received a new message from the website contact form.</p>
            <div style="margin-bottom: 18px; padding: 12px 14px; border-radius: 14px; background: radial-gradient(circle at top left, rgba(250,204,21,0.08), rgba(15,23,42,0.95)); border: 1px solid rgba(148,163,184,0.7); font-size: 13px; color: #e5e7eb;">
              <div style="margin-bottom: 4px;"><strong style="color:#facc15;">Name:</strong> <span style="color:#e5e7eb;">${name}</span></div>
              <div style="margin-bottom: 4px;"><strong style="color:#facc15;">Email:</strong> <a href="mailto:${email}" style="color:#38bdf8; text-decoration:none;">${email}</a></div>
              <div><strong style="color:#facc15;">Subject:</strong> <span style="color:#e5e7eb;">${subject}</span></div>
            </div>
            <div style="margin-bottom: 6px; font-size: 13px; font-weight: 600; color: #e5e7eb;">Message</div>
            <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.7; color: #e5e7eb; border-radius: 14px; background: linear-gradient(135deg, rgba(250,204,21,0.06), rgba(15,23,42,1)); border: 1px solid rgba(250,204,21,0.5); padding: 14px 16px;">
              ${message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>
          <div style="padding: 12px 24px 18px; border-top: 1px solid #1f2937; background-color: #020617; font-size: 12px; color: #9ca3af;">
            This notification was sent from <a href="https://mosunowoodusi.com" style="font-weight: 600; color: #e5e7eb; text-decoration:none;">mosunowoodusi.com</a>. Replying to this email will reach <a href="mailto:paulopackager@gmail.com" style="font-weight: 600; color: #e5e7eb; text-decoration:none;">paulopackager@gmail.com</a>.
          </div>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'Mosun Website <noreply@mosunowoodusi.com>',
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
