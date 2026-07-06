import Link from 'next/link'
import { Container, ImageSlot } from '@/components/site'
import { mockups } from '@/lib/images'

const STEPS = [
  { n: '01', title: 'Apply online', body: 'A short application you can finish in minutes, with no paperwork pile.' },
  { n: '02', title: 'Share your details', body: 'Tell us about your business so we can understand the full picture.' },
  { n: '03', title: 'Get a decision', body: 'A fast, transparent answer from our team, usually within a day.' },
  { n: '04', title: 'Receive funds', body: 'Once approved, money lands in your account so you can move.' },
]

export function HowItWorksSection() {
  return (
    <section className="py-[52px]">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.35fr_.65fr]">
          <div className="rounded-[20px] border border-line bg-surface px-6 py-12 sm:px-11">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="m-0 font-display text-[26px] font-normal leading-[1.1] text-ink sm:text-[34px]">
                Approved in four simple steps
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
            src={mockups.loan}
            alt="Bleu app loan screen showing the amount slider, repayment terms and disbursement options"
            fit="contain"
            className="min-h-[320px] rounded-[20px] border border-line bg-tint p-4"
          />
        </div>
      </Container>
    </section>
  )
}
