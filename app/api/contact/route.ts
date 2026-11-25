import { neon } from '@neondatabase/serverless'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { full_name, email, phone, user_type, subject, message } = await request.json()

    if (!full_name || !email || !user_type || !subject || !message) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)
    await sql`
      INSERT INTO contact_submissions (full_name, email, phone, user_type, subject, message)
      VALUES (${full_name}, ${email}, ${phone ?? null}, ${user_type}, ${subject}, ${message})
    `

    const { error: emailError } = await resend.emails.send({
      from: 'Bleu <noreply@updates.bleu.co.zw>',
      to: 'inquiries@bleubank.xyz',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${full_name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || 'Not provided'}</td></tr>
          <tr><td><strong>Type</strong></td><td style="text-transform:capitalize">${user_type}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${subject}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })
    // Resend returns send failures (e.g. an unverified domain) instead of throwing.
    if (emailError) console.error('Contact notification email failed:', emailError)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Contact form API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
