import { neon } from '@neondatabase/serverless'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { full_name, email, phone, user_type } = await request.json()

    if (!full_name || !email || !phone || !user_type) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)
    await sql`
      INSERT INTO waitlist (full_name, email, phone, user_type)
      VALUES (${full_name}, ${email}, ${phone}, ${user_type})
    `

    await resend.emails.send({
      from: 'Bleu <noreply@updates.bleubank.xyz>',
      to: 'inquiries@bleubank.xyz',
      subject: `New Waitlist Sign-up: ${full_name}`,
      html: `
        <h2>New Waitlist Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${full_name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Type</strong></td><td style="text-transform:capitalize">${user_type}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err: unknown) {
    const isDuplicate =
      err instanceof Error && err.message.includes('unique constraint')
    if (isDuplicate) {
      return NextResponse.json({ error: 'This email is already on the waitlist.' }, { status: 409 })
    }
    console.error('Waitlist API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
