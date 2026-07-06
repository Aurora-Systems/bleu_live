import { Container } from '@/components/site'

const POINTS = ['No hidden fees', 'Fast decisions', 'No collateral on most loans']

export function StatsBar() {
  return (
    <section className="pb-10 pt-[14px]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[14px] bg-ink px-8 py-[22px] text-cloud">
          <span className="font-sans text-[15px] font-semibold leading-[1.4] text-white">
            Built for Africa&apos;s financial reality
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[14px] font-semibold leading-none text-cloud">
            {POINTS.map((p) => (
              <span key={p}>✓ {p}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
