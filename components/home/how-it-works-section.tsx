import Link from 'next/link'
import { Container, ImageSlot } from '@/components/site'
import { mockups } from '@/lib/images'

const STEPS = [
  { n: '01', title: 'Tell us about your business', body: 'Get early access and share a few details about how you sell today.' },
  { n: '02', title: 'Get verified', body: 'Verify your ID and business documents online in minutes, securely through Didit.' },
  { n: '03', title: 'Connect your channels', body: 'Add the Bleu checkout to your website or set up POS payments in store.' },
  { n: '04', title: 'Start getting paid', body: 'Customers pay with mobile money or card, and every payment builds the history that unlocks Bleu loans.' },
]

export function HowItWorksSection() {
  return (
    <section className="py-[52px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <div className="rounded-[20px] border border-line bg-surface px-6 py-12 sm:px-11">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="m-0 font-display text-[26px] font-normal leading-[1.1] text-ink sm:text-[34px]">
                Start accepting payments in four steps
              </h2>
              <Link
                href="/contact"
                className="hidden shrink-0 font-sans text-[14px] font-bold leading-none text-brand sm:block"
              >
                Talk to us →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {STEPS.map((s) => (
                <div key={s.n}>
                  <div className="mb-3 font-display text-[24px] font-normal leading-none text-brand sm:text-[30px]">
                    {s.n}
                  </div>
                  <div className="mb-1.5 font-sans text-[16px] font-bold leading-[1.3] text-ink">
                    {s.title}
                  </div>
                  <p className="m-0 font-sans text-[14px] font-medium leading-[1.55] text-body-2">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ImageSlot
            src={mockups.home}
            alt="Bleu app home dashboard showing a balance and payment history"
            fit="contain"
            className="min-h-[320px] rounded-[20px] border border-line bg-tint p-4"
          />
        </div>
      </Container>
    </section>
  )
}
