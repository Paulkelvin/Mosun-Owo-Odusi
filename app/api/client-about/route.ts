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

    const escapedName = cleanedName.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || 'Not provided'
    const escapedAbout = cleanedAbout.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f3f4f6; padding: 28px 16px;">
        <div style="max-width: 680px; margin: 0 auto; background-color: #ffffff; border-radius: 22px; box-shadow: 0 20px 60px rgba(15, 23, 42, 0.16); overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="padding: 18px 24px; background: linear-gradient(90deg, #065f46, #059669, #22c55e); color: #f9fafb;">
            <div style="font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.9;">Mosun Owo-Odusi</div>
            <div style="font-size: 20px; font-weight: 700; margin-top: 6px;">New About page submission</div>
            <a href="https://mosunowoodusi.com" style="font-size: 13px; color: #e5e7eb; text-decoration: underline; text-decoration-color: rgba(248, 250, 252, 0.7); text-underline-offset: 3px; margin-top: 4px; display: inline-block;">mosunowoodusi.com</a>
          </div>
          <div style="padding: 20px 24px 18px; background-color: #f9fafb;">
            <p style="margin: 0 0 14px; font-size: 14px; color: #4b5563;">A visitor has submitted content from the About page form.</p>
            <div style="margin-bottom: 16px; padding: 14px 16px; border-radius: 14px; background-color: #ffffff; border: 1px solid #e5e7eb; font-size: 13px; color: #111827;">
              <div><span style="font-weight:600; color:#4b5563;">Client name/organization:</span> <span>${escapedName}</span></div>
            </div>
            <div style="margin-bottom: 6px; font-size: 13px; font-weight: 600; color: #374151;">Submitted text</div>
            <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.7; color: #111827; border-radius: 14px; background-color: #ffffff; border: 1px solid #e5e7eb; padding: 14px 16px;">
              ${escapedAbout}
            </div>
          </div>
          <div style="padding: 12px 24px 16px; border-top: 1px solid #e5e7eb; background-color: #f3f4f6; font-size: 12px; color: #6b7280;">
            This notification was sent from <a href="https://mosunowoodusi.com" style="font-weight: 600; color: #111827; text-decoration:none;">mosunowoodusi.com</a>. Replying to this email will reach <a href="mailto:paulopackager@gmail.com" style="font-weight: 600; color: #111827; text-decoration:none;">paulopackager@gmail.com</a>.
          </div>
        </div>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'Mosun Website <contact@mosunowoodusi.com>',
      to: ['paulopackager@gmail.com'],
      replyTo: 'paulopackager@gmail.com',
      subject: 'New message from mosunowoodusi.com about form',
      text: textBody,
      html: htmlBody,
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
