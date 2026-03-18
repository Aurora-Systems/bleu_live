import Image from 'next/image'

const steps = [
  { 
    number: '01', 
    title: 'Apply online',
    description: 'Complete our simple online application in under 10 minutes. No paperwork required.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  { 
    number: '02', 
    title: 'Get assessed',
    description: 'Our team reviews your application and provides feedback within 24 hours.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  { 
    number: '03', 
    title: 'Receive funds',
    description: 'Once approved, funds are disbursed directly to your account within 48 hours.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
]

export function HowItWorksSection() {
  return (
    <section className="gradient-section py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-48 w-48 rounded-full bg-accent/5 blur-2xl" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Simple. Transparent. Fast.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting access to capital shouldn&apos;t be complicated. We&apos;ve streamlined the process.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-16 h-full w-0.5 bg-gradient-to-b from-primary/30 to-primary/5" />
                )}
                
                {/* Step number */}
                <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono-display text-sm text-primary/60">{step.number}</span>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <Image
                src="https://bleubank.sirv.com/splash-and-theme-view.png"
                alt="Bleu App splash and theme views"
                width={450}
                height={550}
                className="phone-glow max-w-sm"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
              />
              {/* Decorative frame */}
              <div className="absolute -inset-4 -z-10 rounded-3xl border border-primary/10" />
              <div className="absolute -inset-8 -z-20 rounded-3xl border border-primary/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
