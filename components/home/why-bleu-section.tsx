import { Zap, Scale, TrendingUp } from 'lucide-react'
import { Container } from '@/components/site'

const REASONS = [
  {
    Icon: Zap,
    title: 'One integration',
    body: 'Connect once and accept every Zimbabwean mobile money wallet, ZimSwitch, Visa and Mastercard, instead of managing a separate setup for each provider.',
  },
  {
    Icon: TrendingUp,
    title: 'Payments that unlock credit',
    body: 'We lend directly, based on how money moves through your Bleu account. The more you transact, the better we can back you.',
  },
  {
    Icon: Scale,
    title: 'Fair & transparent',
    body: 'Clear pricing on payments and clear terms on loans, so you always know exactly what you are paying before you commit.',
  },
]

export function WhyBleuSection() {
  return (
    <section className="py-[52px]">
      <Container>
        <h2 className="m-0 mb-[34px] text-center font-display text-[28px] font-normal leading-[1.08] text-ink sm:text-[34px] lg:text-[40px]">
          Why businesses choose Bleu
        </h2>
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {REASONS.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-surface-2 px-[30px] py-[34px]"
            >
              <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-[12px] bg-tint text-brand">
                <Icon size={24} strokeWidth={1.7} />
              </div>
              <h3 className="m-0 mb-2.5 font-display text-[22px] font-normal leading-[1.12] text-ink">
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
  )
}
