import { Zap, Shield } from 'lucide-react'
import { Container } from '@/components/site'
import { WaitlistForm } from '@/components/waitlist-form'

const BENEFITS = [
  { Icon: Zap, title: 'Priority access', body: 'Be first in line when we open to individuals.' },
  { Icon: Shield, title: 'Exclusive benefits', body: 'Special rates and perks for early members.' },
]

export function WaitlistSection() {
  return (
    <section id="waitlist" className="pb-20 pt-[52px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 rounded-[24px] bg-[linear-gradient(120deg,#143C93,#1A4FBF_55%,#2E63D6)] px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1fr_.9fr]">
          <div className="text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-sans text-[13px] font-semibold leading-none text-white/90">
              Limited early access
            </div>
            <h2 className="m-0 mb-[14px] font-display text-[30px] font-normal leading-[1.08] sm:text-[42px]">
              Get early access to Bleu.
            </h2>
            <p className="m-0 mb-8 max-w-[440px] font-sans text-[17px] font-medium leading-[1.6] text-white/85">
              Bleu is open to businesses today. Individuals can join the
              waitlist, and we&apos;ll let you know the moment the app is ready.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {BENEFITS.map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/12 text-brand-soft">
                    <Icon size={19} />
                  </div>
                  <div>
                    <p className="m-0 font-sans text-[15px] font-bold leading-tight text-white">
                      {title}
                    </p>
                    <p className="m-0 mt-1 font-sans text-[13px] font-medium leading-snug text-white/75">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WaitlistForm />
        </div>
      </Container>
    </section>
  )
}
