import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Check, Lock } from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Lending & Advisory',
    status: 'LIVE',
    isActive: true,
    description: 'We are actively disbursing business loans and providing financial advisory services to SMEs and startups across Africa.',
    features: [
      { text: 'Business loan disbursement', completed: true },
      { text: 'Financial advisory for startups', completed: true },
      { text: 'Capital access facilitation', completed: true },
      { text: 'Collateral-free lending', completed: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Bleu Wallet',
    status: 'COMING SOON',
    isActive: false,
    description: 'A digital wallet for individuals and businesses — store, send, and receive money across Africa.',
    features: [
      { text: 'Mobile wallet for individuals', completed: false },
      { text: 'Business accounts', completed: false },
      { text: 'Cross-border transfers', completed: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Peer-to-Peer Lending & Investing',
    status: 'ON THE HORIZON',
    isActive: false,
    description: 'Open up the Bleu network so individuals and institutions can lend to and invest in each other directly.',
    features: [
      { text: 'P2P lending marketplace', completed: false },
      { text: 'Micro-investment tools', completed: false },
      { text: 'Community lending pools', completed: false },
    ],
  },
]

export default function RoadmapPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
              Where We&apos;re Going
            </h1>
            <p className="mt-6 text-lg text-white/80 sm:text-xl text-pretty">
              Bleu is building the financial layer for Africa, one stage at a time.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`rounded-2xl p-8 transition-all ${
                  phase.isActive
                    ? 'roadmap-active glass-card-blue'
                    : 'border-2 border-dashed border-gray-200 bg-gray-50/50 opacity-70'
                }`}
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {phase.phase}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      phase.isActive
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{phase.description}</p>

                <ul className="mt-6 space-y-3">
                  {phase.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.completed ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <Lock className="h-5 w-5 text-gray-400" />
                      )}
                      <span
                        className={
                          feature.completed ? 'text-foreground' : 'text-gray-400'
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Connector line */}
                {index < phases.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="h-8 w-0.5 bg-primary/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
            Want to be part of this journey?
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#waitlist"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/partners"
              className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
