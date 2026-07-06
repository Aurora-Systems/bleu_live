"use client"

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero, SectionHeading } from '@/components/site'
import { Laptop, BarChart3, Globe2, Coins, Check } from 'lucide-react'

const BENEFITS = [
  { Icon: Laptop, title: 'Lending Platform', body: 'Digitise your loan disbursement and repayment.' },
  { Icon: BarChart3, title: 'Risk & Credit Tools', body: 'Access Bleu’s credit scoring and assessment.' },
  { Icon: Globe2, title: 'Wider Reach', body: 'Connect with borrowers beyond your geography.' },
  { Icon: Coins, title: 'Revenue Share', body: 'Earn on every loan processed on the network.' },
]

const WHO = [
  'Microfinance institutions',
  'Community lenders and SACCOs',
  'Credit unions',
  'NGOs with financial services arms',
]

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_person: '',
    email: '',
    country: '',
    description: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Something went wrong.')
      }

      setIsSuccess(true)
      setFormData({ organization_name: '', contact_person: '', email: '', country: '', description: '' })
    } catch (err) {
      console.error('Partner form error:', err)
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
          eyebrow="For partners"
          title="Join Bleu’s lending network"
          subtitle="We invite microfinance institutions and lenders across Africa to power more loans using Bleu’s infrastructure, without replacing what you’ve built."
        />

        {/* Opportunity */}
        <section className="py-[52px]">
          <Container className="max-w-[820px] text-center">
            <SectionHeading center title="The opportunity" />
            <p className="mt-6 font-sans text-[18px] font-medium leading-[1.65] text-body">
              Bleu is building shared financial infrastructure for Africa. We
              partner with local microfinance companies, credit unions and
              community lenders to expand loan access using our technology, risk
              models and platform.
            </p>
          </Container>
        </section>

        {/* What partners get */}
        <section className="py-[52px]">
          <Container>
            <SectionHeading center title="What partners get" />
            <div className="mt-[34px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-line bg-surface p-6 py-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-tint text-brand">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 className="m-0 mb-1.5 font-display text-[19px] font-normal leading-[1.15] text-ink">
                    {title}
                  </h3>
                  <p className="m-0 font-sans text-[14px] font-medium leading-[1.55] text-body-2">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Who should apply */}
        <section className="py-[52px]">
          <Container className="max-w-[820px]">
            <SectionHeading center title="Who should apply" />
            <div className="mt-[34px] grid grid-cols-1 gap-4 sm:grid-cols-2">
              {WHO.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4">
                  <Check size={18} className="shrink-0 text-brand" />
                  <span className="font-sans text-[15px] font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Partnership form */}
        <section className="pb-20 pt-[52px]">
          <Container className="max-w-[720px]">
            <SectionHeading center title="Interested in joining the Bleu network?" />
            <div className="mt-8">
              {isSuccess ? (
                <div className="rounded-2xl border border-line bg-surface p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tint text-brand">
                    <Check size={28} />
                  </div>
                  <h3 className="m-0 font-display text-[20px] font-normal text-ink">Thank you</h3>
                  <p className="m-0 mt-2 font-sans text-[15px] font-medium text-body-2">
                    A member of our team will be in touch within 3 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 rounded-2xl border border-line bg-surface p-6 md:p-8"
                >
                  <div>
                    <label htmlFor="organization_name" className="block font-sans text-[14px] font-semibold text-ink">
                      Organisation name
                    </label>
                    <input
                      type="text"
                      id="organization_name"
                      required
                      value={formData.organization_name}
                      onChange={(e) => setFormData({ ...formData, organization_name: e.target.value })}
                      className={inputClass}
                      placeholder="Your organisation name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact_person" className="block font-sans text-[14px] font-semibold text-ink">
                      Contact person
                    </label>
                    <input
                      type="text"
                      id="contact_person"
                      required
                      value={formData.contact_person}
                      onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="partner_email" className="block font-sans text-[14px] font-semibold text-ink">
                      Email
                    </label>
                    <input
                      type="email"
                      id="partner_email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="you@organisation.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block font-sans text-[14px] font-semibold text-ink">
                      Country of operation
                    </label>
                    <input
                      type="text"
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className={inputClass}
                      placeholder="e.g. Zimbabwe, Kenya, Ghana"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block font-sans text-[14px] font-semibold text-ink">
                      Brief description of your lending activity
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your organisation and lending activities…"
                    />
                  </div>

                  {error && <p className="m-0 font-sans text-[14px] text-destructive">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-brand px-6 py-4 font-sans text-[15px] font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Submitting…' : 'Express interest'}
                  </button>
                </form>
              )}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
