import Link from 'next/link'
import { Container, ImageSlot } from '@/components/site'
import { photos } from '@/lib/images'

const STATS = [
  { value: '500+', label: 'Loans\ndisbursed' },
  { value: '4', label: 'Countries\nserved' },
  { value: '24hrs', label: 'Typical\ndecision' },
]

export function HeroSection() {
  return (
    <section className="pb-10 pt-14 sm:pt-[72px]">
      <Container className="grid grid-cols-1 items-center gap-[52px] lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-2 bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="font-sans text-[13px] font-semibold leading-none text-body">
              Now serving businesses across Africa
            </span>
          </div>

          <h1 className="m-0 mb-[22px] font-display text-[38px] font-normal leading-[1.04] text-ink sm:text-[52px] lg:text-[62px]">
            Money and guidance to help your business{' '}
            <span className="text-brand">grow.</span>
          </h1>

          <p className="m-0 mb-8 max-w-[480px] text-pretty font-sans text-[19px] font-medium leading-[1.65] text-body">
            Bleu gives African businesses fast loans, honest advice, and real
            access to capital, built for the way the continent actually works.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-[14px]">
            <Link
              href="/business"
              className="rounded-lg bg-brand px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:bg-brand-dark"
            >
              Explore business loans
            </Link>
            <Link
              href="/#waitlist"
              className="rounded-lg border-[1.5px] border-line-2 bg-transparent px-[26px] py-4 font-sans text-[15px] font-bold leading-none text-ink transition-colors hover:border-ink"
            >
              Join the waitlist
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-4 sm:gap-9">
            {STATS.map((s, i) => (
              <div key={s.value} className="flex items-center gap-6 sm:gap-9">
                {i > 0 && <div className="hidden h-9 w-px bg-line-2 sm:block" />}
                <div>
                  <div className="font-display text-[26px] font-normal leading-none text-ink sm:text-[34px]">
                    {s.value}
                  </div>
                  <div className="mt-[5px] whitespace-pre-line font-sans text-[13px] font-medium leading-[1.35] text-caption">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ImageSlot
          src={photos.businesswoman}
          alt="A business owner smiling in her workspace"
          className="aspect-square rounded-[18px]"
        />
      </Container>
    </section>
  )
}
