import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Banknote, LineChart, Network, Shield, Clock, FileCheck, Globe } from 'lucide-react'

const audiences = [
  {
    title: 'SMEs',
    description: 'We provide working capital and term loans for small and medium enterprises. No collateral required for most loans.',
  },
  {
    title: 'Startups',
    description: 'Early-stage? We offer financial advisory, investor connections, and access to capital to help you get off the ground.',
  },
]

const offerings = [
  {
    icon: Banknote,
    title: 'Business Loans',
    description: 'Fast, collateral-free financing',
  },
  {
    icon: LineChart,
    title: 'Financial Advisory',
    description: 'Strategic planning and financial modeling',
  },
  {
    icon: Network,
    title: 'Access to Capital',
    description: 'Investor network and grant guidance',
  },
  {
    icon: Shield,
    title: 'No Collateral Required',
    description: 'We assess your business, not your assets',
  },
]

const trustPoints = [
  {
    icon: Clock,
    title: 'Fast Decisions',
    description: 'Get funding decisions quickly',
  },
  {
    icon: FileCheck,
    title: 'Transparent Terms',
    description: 'No hidden fees or surprises',
  },
  {
    icon: Globe,
    title: 'Built for Africa',
    description: 'Understanding local market realities',
  },
]

export default function BusinessPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative min-h-[70vh] gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
              Capital and Clarity for African Businesses
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl text-pretty">
              Whether you&apos;re a startup or an established SME, Bleu gives you the tools and funds to grow.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Apply for Funding
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            Who This Is For
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.title} className="glass-card-blue rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {audience.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="gradient-section py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            What We Offer
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offering) => (
              <div key={offering.title} className="glass-card-blue rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <offering.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bleu */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            Why Bleu
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <point.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockup Strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-section">
        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center">
            <Image
              src="https://bleubank.sirv.com/home-and-loan-view.png"
              alt="Bleu App business features"
              width={700}
              height={500}
              className="phone-glow w-full max-w-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
            Ready to grow your business?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Not sure yet? Contact us and we&apos;ll guide you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
