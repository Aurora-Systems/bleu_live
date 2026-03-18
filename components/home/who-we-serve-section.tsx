import Link from 'next/link'
import { Building2, User, ArrowRight, CheckCircle2 } from 'lucide-react'

export function WhoWeServeSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 h-px w-1/2 bg-gradient-to-r from-primary/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Who We Serve
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Solutions for every need
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Businesses Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-8 md:p-10 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Building2 className="h-7 w-7" />
              </div>
              
              <h3 className="mt-6 font-display text-2xl font-bold md:text-3xl">
                Businesses & Startups
              </h3>
              
              <p className="mt-4 text-white/80 leading-relaxed">
                Access capital and financial advisory services designed for African businesses. No traditional collateral required for most loans.
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  Working capital loans
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  Financial advisory services
                </li>
                <li className="flex items-center gap-3 text-sm text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  Investor network access
                </li>
              </ul>
              
              <Link
                href="/business"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-white/90 hover:gap-3"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Individuals Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-white to-secondary p-8 md:p-10">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <User className="h-7 w-7 text-primary" />
              </div>
              
              <div className="mt-6 flex items-center gap-3">
                <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  Individuals
                </h3>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                  Coming Soon
                </span>
              </div>
              
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Personal loan access for emergencies, education, and more. Currently available to a select group — join the waitlist for early access.
              </p>
              
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Emergency loans
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  No collateral required
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Fast disbursement
                </li>
              </ul>
              
              <Link
                href="#waitlist"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:gap-3"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
