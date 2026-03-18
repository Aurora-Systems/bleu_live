"use client"

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { createClient } from '@/lib/supabase/client'
import { Laptop, BarChart3, Globe, Coins } from 'lucide-react'

const benefits = [
  {
    icon: Laptop,
    title: "Bleu's Lending Platform",
    description: 'Digitize your loan disbursement and repayment',
  },
  {
    icon: BarChart3,
    title: 'Risk & Credit Assessment',
    description: "Access Bleu's credit scoring and assessment tools",
  },
  {
    icon: Globe,
    title: 'Wider Reach',
    description: 'Connect with borrowers beyond your current geography',
  },
  {
    icon: Coins,
    title: 'Revenue Share',
    description: 'Earn through every loan processed on the network',
  },
]

const whoShouldApply = [
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
      const supabase = createClient()
      const { error: supabaseError } = await supabase
        .from('partners_interest')
        .insert([formData])

      if (supabaseError) throw supabaseError

      setIsSuccess(true)
      setFormData({
        organization_name: '',
        contact_person: '',
        email: '',
        country: '',
        description: '',
      })
    } catch (err) {
      console.error('Partner form error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
              Join Bleu&apos;s Lending Network
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl text-pretty">
              We invite microfinance institutions and lenders across Africa to power more loans using Bleu&apos;s infrastructure.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* The Opportunity */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            The Opportunity
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-center text-pretty">
            Bleu is building a shared financial infrastructure for Africa. We&apos;re partnering with local microfinance companies, credit unions, and community lenders to expand loan access using our technology, risk models, and platform — without replacing what you&apos;ve built.
          </p>
        </div>
      </section>

      {/* What Partners Get */}
      <section className="gradient-section py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            What Partners Get
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card-blue rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            Who Should Apply
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {whoShouldApply.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-xl bg-primary/5 p-4">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="gradient-hero py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
              Interested in joining the Bleu network?
            </h2>
          </div>

          {isSuccess ? (
            <div className="glass-card-white rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Thank you</h3>
              <p className="mt-2 text-white/80">
                A member of our team will be in touch within 3 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card-white rounded-2xl p-6 md:p-8 space-y-4">
              <div>
                <label htmlFor="organization_name" className="block text-sm font-medium text-white">
                  Organisation Name
                </label>
                <input
                  type="text"
                  id="organization_name"
                  required
                  value={formData.organization_name}
                  onChange={(e) => setFormData({ ...formData, organization_name: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Your organisation name"
                />
              </div>

              <div>
                <label htmlFor="contact_person" className="block text-sm font-medium text-white">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="contact_person"
                  required
                  value={formData.contact_person}
                  onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="partner_email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="partner_email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="you@organisation.com"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-white">
                  Country of Operation
                </label>
                <input
                  type="text"
                  id="country"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="e.g., Nigeria, Kenya, Ghana"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white">
                  Brief description of your lending activity
                </label>
                <textarea
                  id="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 backdrop-blur-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white resize-none"
                  placeholder="Tell us about your organisation and lending activities..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-300">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Express Interest'}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
