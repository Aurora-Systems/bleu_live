import { Zap, Scale, Globe2 } from 'lucide-react'
import { Container } from '@/components/site'

const REASONS = [
  {
    Icon: Zap,
    title: 'Fast decisions',
    body: 'A quick, honest answer, often in hours rather than weeks. We know timing is everything when you are running a business.',
  },
  {
    Icon: Scale,
    title: 'Fair & transparent',
    body: 'Clear terms and no hidden fees. You always know exactly what you will repay before you commit to anything.',
  },
  {
    Icon: Globe2,
    title: 'Built for Africa',
    body: 'We assess your business, not just your paperwork, using models designed around local market realities.',
  },
]

export function WhyBleuSection() {
  return (
    <section className="py-[52px]">
      <Container>
        <h2 className="m-0 mb-[34px] text-center font-display text-[28px] font-normal leading-[1.08] text-ink sm:text-[34px] lg:text-[40px]">
          Why borrow from Bleu
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
