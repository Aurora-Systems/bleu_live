import { WaitlistForm } from '@/components/waitlist-form'
import { Bell, Zap, Shield } from 'lucide-react'

export function WaitlistSection() {
  return (
    <section id="waitlist" className="gradient-hero py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary-light/10 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm mb-6">
              <Bell className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">Limited early access</span>
            </span>
            
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Get Early Access to Bleu
            </h2>
            
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Bleu is currently open to businesses. Individuals can join our waitlist — we&apos;ll notify you when the app is ready for you.
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 text-left">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Priority Access</p>
                  <p className="text-sm text-white/70">Be first in line when we launch</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-white">Exclusive Benefits</p>
                  <p className="text-sm text-white/70">Special rates for early members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <WaitlistForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
