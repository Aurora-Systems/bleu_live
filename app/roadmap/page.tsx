import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero } from '@/components/site'
import { Check, Lock } from 'lucide-react'

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Lending & Advisory',
    status: 'Live',
    isActive: true,
    body: 'We are actively disbursing business loans and providing financial advisory services to SMEs and startups across Africa.',
    features: [
      { text: 'Business loan disbursement', done: true },
      { text: 'Financial advisory for startups', done: true },
      { text: 'Capital access facilitation', done: true },
      { text: 'Collateral-free lending', done: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Bleu Wallet',
    status: 'Coming soon',
    isActive: false,
    body: 'A digital wallet for individuals and businesses. Store, send and receive money across Africa.',
    features: [
      { text: 'Mobile wallet for individuals', done: false },
      { text: 'Business accounts', done: false },
      { text: 'Cross-border transfers', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Peer-to-Peer Lending & Investing',
    status: 'On the horizon',
    isActive: false,
    body: 'Open up the Bleu network so individuals and institutions can lend to and invest in each other directly.',
    features: [
      { text: 'P2P lending marketplace', done: false },
      { text: 'Micro-investment tools', done: false },
      { text: 'Community lending pools', done: false },
    ],
  },
]

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Roadmap"
          title="Where we’re going"
          subtitle="Bleu is building the financial layer for Africa, one stage at a time."
        />

        {/* Timeline */}
        <section className="py-[52px]">
          <Container className="max-w-[860px]">
            <div className="space-y-6">
              {PHASES.map((p) => (
                <div
                  key={p.phase}
                  className={`rounded-[20px] p-8 transition-colors ${
                    p.isActive
                      ? 'border border-brand bg-surface shadow-[0_0_0_1px_#1A4FBF,0_18px_44px_rgba(26,79,191,0.14)]'
                      : 'border border-dashed border-line-2 bg-surface-2'
                  }`}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-caption">
                      {p.phase}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-sans text-[11px] font-bold uppercase leading-none tracking-[0.06em] ${
                        p.isActive ? 'bg-brand text-white' : 'bg-tint text-brand'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <h3 className="m-0 mb-2.5 font-display text-[24px] font-normal leading-[1.1] text-ink">
                    {p.title}
                  </h3>
                  <p className="m-0 mb-6 font-sans text-[15px] font-medium leading-[1.6] text-body-2">
                    {p.body}
                  </p>

                  <ul className="m-0 flex flex-col gap-3 p-0">
                    {p.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        {f.done ? (
                          <Check size={18} className="shrink-0 text-brand" />
                        ) : (
                          <Lock size={16} className="shrink-0 text-caption" />
                        )}
                        <span
                          className={`font-sans text-[15px] font-medium ${
                            f.done ? 'text-ink' : 'text-caption'
                          }`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA band */}
        <section className="pb-20 pt-[52px]">
          <Container>
            <div className="rounded-[24px] bg-[linear-gradient(120deg,#143C93,#1A4FBF_55%,#2E63D6)] px-8 py-14 text-center text-white sm:px-12">
              <h2 className="m-0 mb-7 font-display text-[30px] font-normal leading-[1.05] sm:text-[42px]">
                Want to be part of this journey?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#waitlist"
                  className="rounded-lg bg-white px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
                >
                  Join the waitlist
                </Link>
                <Link
                  href="/partners"
                  className="rounded-lg border-[1.5px] border-white/50 px-[28px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:border-white"
                >
                  Partner with us
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
