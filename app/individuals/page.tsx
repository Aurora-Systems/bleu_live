import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WaitlistForm } from '@/components/waitlist-form'
import Image from 'next/image'
import { AlertCircle, Shield, Zap, Download, UserCheck, FileText, Banknote } from 'lucide-react'

const features = [
  {
    icon: AlertCircle,
    title: 'Emergency Loans',
    description: 'Access funds for unexpected expenses — medical bills, school fees, urgent repairs',
  },
  {
    icon: Shield,
    title: 'No Collateral',
    description: 'We assess your ability to repay, not what you own',
  },
  {
    icon: Zap,
    title: 'Fast Disbursement',
    description: 'From application to funds in your account — quickly and transparently',
  },
]

const steps = [
  { icon: Download, number: '01', title: 'Download the Bleu app' },
  { icon: UserCheck, number: '02', title: 'Complete your profile' },
  { icon: FileText, number: '03', title: 'Apply for a loan' },
  { icon: Banknote, number: '04', title: 'Receive funds' },
]

export default function IndividualsPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative gradient-section pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              Coming soon for individuals — join the waitlist
            </div>
            <h1 className="font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
              A Financial Safety Net — When You Need It
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl text-pretty">
              Bleu is building personal loan access for individuals across Africa. No unnecessary hoops. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            What&apos;s Coming
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card-blue rounded-2xl p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockups Section */}
      <section className="gradient-section py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              The Bleu App
            </h2>
            <p className="mt-4 text-muted-foreground">Currently in select access</p>
          </div>
          
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Left mockup */}
            <div className="absolute left-1/2 -translate-x-[120%] opacity-60 hidden md:block">
              <Image
                src="https://bleubank.sirv.com/splash-and-theme-view.png"
                alt="Bleu App splash screen"
                width={280}
                height={400}
                className="phone-glow -rotate-12"
                style={{ width: 'auto', height: 'auto' }}
                loading="lazy"
              />
            </div>
            
            {/* Center mockup */}
            <div className="relative z-10">
              <Image
                src="https://bleubank.sirv.com/home-and-loan-view.png"
                alt="Bleu App home and loan views"
                width={350}
                height={500}
                className="phone-glow"
                style={{ width: 'auto', height: 'auto' }}
                loading="lazy"
              />
            </div>
            
            {/* Right mockup */}
            <div className="absolute left-1/2 translate-x-[20%] opacity-60 hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app%20bleu-fXCA2321GTczhLXQP7knvWpglTm7S2.png"
                alt="Bleu App features"
                width={280}
                height={400}
                className="phone-glow rotate-12"
                style={{ width: 'auto', height: 'auto' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-center text-balance">
            How It Will Work
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 font-serif font-semibold text-foreground">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="gradient-hero py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
                Be among the first to access Bleu
              </h2>
              <p className="mt-4 text-lg text-white/80 text-pretty">
                We are currently selecting from our waitlist. Sign up now to secure your place.
              </p>
            </div>
            <div>
              <WaitlistForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
