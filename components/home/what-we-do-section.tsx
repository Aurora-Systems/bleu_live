import { Building2, LineChart, Users } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Business Loans',
    description: 'Capital for SMEs without the collateral requirement. Fast decisions, transparent terms.',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: LineChart,
    title: 'Financial Advisory',
    description: 'Expert guidance for startups and growing businesses. Strategic planning that works.',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: Users,
    title: 'Individual Loans',
    description: 'Access to emergency funds when you need them most. Coming soon to individuals.',
    color: 'bg-amber-500/10 text-amber-600',
  },
]

export function WhatWeDoSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Built for Africa&apos;s financial reality
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We understand the unique challenges African businesses and individuals face. Our solutions are designed specifically for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group glass-card-blue rounded-2xl p-8 transition-all hover-lift"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
              <div className="mt-6 flex items-center text-primary font-medium">
                <span className="text-sm">Learn more</span>
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
