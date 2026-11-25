import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero, SectionHeading, ImageSlot } from '@/components/site'
import { mockups } from '@/lib/images'
import { AppCtaSection } from '@/components/home/app-cta-section'
import { APP_URL } from '@/lib/site'
import { AlertCircle, UserCheck, TrendingUp } from 'lucide-react'

const FEATURES = [
  {
    Icon: AlertCircle,
    title: 'Emergency Loans',
    body: 'Access funds for the unexpected: medical bills, school fees, urgent repairs.',
  },
  {
    Icon: UserCheck,
    title: 'Open to Everyone',
    body: 'Anyone 18 or older can apply. Verify your ID online in minutes with Didit.',
  },
  {
    Icon: TrendingUp,
    title: 'Credit That Grows',
    body: 'Move money through Bleu and that history can unlock bigger loans over time.',
  },
]

const STEPS = [
  { n: '01', title: 'Sign up on the Bleu app' },
  { n: '02', title: 'Verify your ID with Didit' },
  { n: '03', title: 'Apply for a loan' },
  { n: '04', title: 'Receive funds' },
]

export default function IndividualsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          pill="Personal loans, now live"
          title="A financial safety net, for when you need it"
          subtitle="Bleu lends directly to anyone 18 or older, whether or not you use Bleu Payments. No collateral, no unnecessary hoops, no hidden fees. Just help when it matters."
        />

        <section className="pb-4 pt-2">
          <Container className="flex justify-center">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:bg-brand-dark"
            >
              Apply on the Bleu app
            </a>
          </Container>
        </section>

        {/* What you get */}
        <section className="py-[52px]">
          <Container>
            <SectionHeading center title="What you get" />
            <div className="mt-[34px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
              {FEATURES.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-line bg-surface px-8 py-9">
                  <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-[12px] bg-tint text-brand">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3 className="m-0 mb-2.5 font-display text-[21px] font-normal leading-[1.12] text-ink">
                    {title}
                  </h3>
                  <p className="m-0 font-sans text-[15px] font-medium leading-[1.6] text-body-2">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* App preview placeholders */}
        <section className="py-[52px]">
          <Container>
            <SectionHeading center title="The Bleu app" />
            <p className="mx-auto mt-3 max-w-[520px] text-center font-sans text-[16px] font-medium leading-[1.6] text-body-2">
              Everything you need to apply, track and repay, all in one place.
            </p>
            <div className="mt-[34px] grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                { src: mockups.splash, alt: 'Bleu app splash screen' },
                { src: mockups.loan, alt: 'Bleu app loan screen showing the amount slider, repayment terms and disbursement options' },
                { src: mockups.home, alt: 'Bleu app home dashboard with virtual card and payment history' },
              ].map((s) => (
                <ImageSlot
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  fit="contain"
                  className="aspect-[9/16] rounded-[20px] border border-line bg-tint p-3"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* How it will work */}
        <section className="py-[52px]">
          <Container>
            <div className="rounded-[20px] border border-line bg-surface px-6 py-12 sm:px-11">
              <SectionHeading center title="How it works" />
              <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((s) => (
                  <div key={s.n} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tint font-display text-[18px] font-normal text-brand">
                      {s.n}
                    </div>
                    <h3 className="m-0 font-sans text-[15px] font-bold leading-[1.3] text-ink">
                      {s.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <AppCtaSection focus="loans" />
      </main>
      <Footer />
    </>
  )
}
