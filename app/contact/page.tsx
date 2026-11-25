"use client"

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero } from '@/components/site'
import { Mail, Globe, Instagram, Check } from 'lucide-react'

const CONTACT_INFO = [
  { Icon: Mail, label: 'Email', value: 'hello@bleu.co.zw', href: 'mailto:hello@bleu.co.zw' },
  { Icon: Globe, label: 'Website', value: 'bleu.co.zw', href: 'https://bleu.co.zw' },
]

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bleu.access/' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    user_type: 'business',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong.')
      }

      setIsSuccess(true)
      setFormData({ full_name: '', email: '', phone: '', user_type: 'business', subject: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'mt-2 block w-full rounded-xl border border-line-2 bg-surface px-4 py-3.5 font-sans text-[15px] text-ink placeholder:text-caption transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15'

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let’s talk"
          subtitle="Want early access to Bleu Payments, or have a question about a loan? We’re here to help."
        />

        <section className="pb-20 pt-[34px]">
          <Container className="max-w-[980px]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[.8fr_1.2fr]">
              {/* Contact info */}
              <div className="flex flex-col gap-6">
                {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 text-body transition-colors hover:text-brand"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-brand">
                      <Icon size={19} />
                    </div>
                    <div>
                      <p className="m-0 font-sans text-[13px] font-medium text-caption">{label}</p>
                      <p className="m-0 font-sans text-[15px] font-semibold text-ink">{value}</p>
                    </div>
                  </a>
                ))}

                <div>
                  <p className="m-0 mb-3 font-sans text-[13px] font-medium text-caption">Follow us</p>
                  <div className="flex gap-3">
                    {SOCIALS.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-tint text-brand transition-colors hover:bg-brand hover:text-white"
                      >
                        <Icon size={19} />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="m-0 font-sans text-[14px] font-medium leading-[1.6] text-body-2">
                  We typically respond within 1–2 business days.
                </p>
              </div>

              {/* Contact form */}
              <div>
                {isSuccess ? (
                  <div className="rounded-2xl border border-line bg-surface p-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tint text-brand">
                      <Check size={28} />
                    </div>
                    <h3 className="m-0 font-display text-[20px] font-normal text-ink">Message sent</h3>
                    <p className="m-0 mt-2 font-sans text-[15px] font-medium text-body-2">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 rounded-2xl border border-line bg-surface p-6 md:p-8"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="full_name" className="block font-sans text-[14px] font-semibold text-ink">
                          Full name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          required
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          className={inputClass}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact_email" className="block font-sans text-[14px] font-semibold text-ink">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="contact_email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={inputClass}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact_phone" className="block font-sans text-[14px] font-semibold text-ink">
                          Phone number <span className="font-medium text-caption">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="contact_phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={inputClass}
                          placeholder="+263 000 000 000"
                        />
                      </div>
                      <div>
                        <label htmlFor="user_type" className="block font-sans text-[14px] font-semibold text-ink">
                          I am a
                        </label>
                        <select
                          id="user_type"
                          value={formData.user_type}
                          onChange={(e) => setFormData({ ...formData, user_type: e.target.value })}
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="business">Business / merchant</option>
                          <option value="individual">Individual</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block font-sans text-[14px] font-semibold text-ink">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={inputClass}
                        placeholder="e.g. Early access to Bleu Payments"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-sans text-[14px] font-semibold text-ink">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder="Your message…"
                      />
                    </div>

                    {error && <p className="m-0 font-sans text-[14px] text-destructive">{error}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-brand px-6 py-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? 'Sending…' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
