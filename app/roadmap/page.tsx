import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero } from '@/components/site'
import { APP_URL, PAYMENTS_CTA_HREF } from '@/lib/site'
import { Check, Lock } from 'lucide-react'

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Lending & Advisory',
    status: 'Live',
    isActive: true,
    body: 'Bleu lends directly to businesses and individuals 18 or older, and provides financial advisory to SMEs and startups.',
    features: [
      { text: 'Business loan disbursement', done: true },
      { text: 'Personal loans for individuals', done: true },
      { text: 'ID and KYC verification with Didit', done: true },
      { text: 'Financial advisory for startups', done: true },
      { text: 'Collateral-free lending', done: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Bleu Payments',
    status: 'Coming soon',
    isActive: false,
    body: 'One checkout for every mobile money wallet, ZimSwitch, Visa and Mastercard, so Zimbabwean businesses can get paid online, in store and on their websites.',
    features: [
      { text: 'Unified online checkout', done: false },
      { text: 'Mobile money, ZimSwitch, Visa and Mastercard acceptance', done: false },
      { text: 'POS payments', done: false },
      { text: 'E-commerce integration', done: false },
      { text: 'Merchant platform and mobile app', done: false },
      { text: 'Loans based on your Bleu transaction history', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Bleu Wallet',
    status: 'On the horizon',
    isActive: false,
    body: 'A digital wallet for individuals and businesses. Store, send and receive money.',
    features: [
      { text: 'Mobile wallet for individuals', done: false },
      { text: 'Business accounts', done: false },
      { text: 'Send and receive money across Zimbabwe', done: false },
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
          subtitle="Bleu is building the payments and finance layer for Zimbabwean business, one stage at a time."
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
                  href={PAYMENTS_CTA_HREF}
                  className="rounded-lg bg-white px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
                >
                  Get early access
                </Link>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-[1.5px] border-white/50 px-[28px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:border-white"
                >
                  Apply for a loan
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
