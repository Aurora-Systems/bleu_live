import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-40 right-10 h-96 w-96 rounded-full bg-primary-light/10 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/4 h-48 w-48 rounded-full bg-accent/10 blur-2xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-36 sm:px-6 lg:px-8 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">Now serving businesses across Africa</span>
            </div>
            
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-white">Financial Access</span>
              <br />
              <span className="text-white">for Every</span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">African</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/40 -rotate-1" />
              </span>
            </h1>
            
            <p className="mt-8 text-lg leading-relaxed text-white/80 sm:text-xl max-w-xl mx-auto lg:mx-0">
              Bleu provides loans, financial advice, and access to capital — without the traditional barriers. Built for Africa&apos;s reality.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/business"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all hover:shadow-2xl"
              >
                <span className="relative z-10">For Businesses</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/10 to-transparent transition-transform group-hover:translate-x-0" />
              </Link>
              <Link
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
              >
                Join the Waitlist
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-2 text-white/70">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No hidden fees</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Fast decisions</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No collateral</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating phone */}
              <div className="animate-float">
                <Image
                  src="https://bleubank.sirv.com/home-and-loan-view.png"
                  alt="Bleu App showing home and loan views"
                  width={500}
                  height={600}
                  className="phone-glow relative z-10 max-w-md"
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm" />
              
              {/* Floating stats card */}
              <div className="absolute -left-8 top-1/4 glass-card-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                    <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono-display text-lg font-bold text-white">500+</p>
                    <p className="text-xs text-white/70">Loans Disbursed</p>
                  </div>
                </div>
              </div>
              
              {/* Floating approval badge */}
              <div className="absolute -right-4 bottom-1/4 glass-card-white rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light/20">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Approved</p>
                    <p className="text-xs text-white/70">24hr turnaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
