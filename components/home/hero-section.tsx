import Link from 'next/link'
import { Container, ImageSlot } from '@/components/site'
import { photos } from '@/lib/images'
import { APP_URL, PAYMENTS_CTA_HREF } from '@/lib/site'

const STATS = [
  { value: 'All', label: 'Mobile money\nwallets' },
  { value: '3', label: 'Card networks\naccepted' },
  { value: '1', label: 'Checkout for\nevery channel' },
]

export function HeroSection() {
  return (
    <section className="pb-10 pt-14 sm:pt-[72px]">
      <Container className="grid grid-cols-1 items-center gap-[52px] lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line-2 bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="font-sans text-[13px] font-semibold leading-none text-body">
              Payments launching soon, loans live now
            </span>
          </div>

          <h1 className="m-0 mb-[22px] font-display text-[38px] font-normal leading-[1.04] text-ink sm:text-[52px] lg:text-[62px]">
            Accept every way Zimbabwe{' '}
            <span className="text-brand">pays.</span>
          </h1>

          <p className="m-0 mb-8 max-w-[480px] text-pretty font-sans text-[19px] font-medium leading-[1.65] text-body">
            One checkout for every mobile money wallet, ZimSwitch, Visa and
            Mastercard. Take payments online, in store or on your website, and let your payment
            history unlock loans from Bleu.
          </p>

          <div className="mb-10 flex flex-wrap items-center gap-[14px]">
            <Link
              href={PAYMENTS_CTA_HREF}
              className="rounded-lg bg-brand px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:bg-brand-dark"
            >
              Get early access
            </Link>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-[1.5px] border-line-2 bg-transparent px-[26px] py-4 font-sans text-[15px] font-bold leading-none text-ink transition-colors hover:border-ink"
            >
              Apply for a loan
            </a>
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
