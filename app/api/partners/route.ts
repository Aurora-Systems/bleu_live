import { neon } from '@neondatabase/serverless'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const { organization_name, contact_person, email, country, description } = await request.json()

    if (!organization_name || !contact_person || !email || !country || !description) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const sql = neon(process.env.DATABASE_URL!)
    await sql`
      INSERT INTO partners_interest (organization_name, contact_person, email, country, description)
      VALUES (${organization_name}, ${contact_person}, ${email}, ${country}, ${description})
    `

    await resend.emails.send({
      from: 'Bleu <noreply@updates.bleubank.xyz>',
      to: 'inquiries@bleubank.xyz',
      replyTo: email,
      subject: `New Partner Interest: ${organization_name}`,
      html: `
        <h2>New Partner Interest Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Organisation</strong></td><td>${organization_name}</td></tr>
          <tr><td><strong>Contact Person</strong></td><td>${contact_person}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Country</strong></td><td>${country}</td></tr>
        </table>
        <h3>Description</h3>
        <p style="white-space:pre-wrap">${description}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Partners API error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
