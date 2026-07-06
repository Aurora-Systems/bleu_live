import Link from 'next/link'
import { Container } from '@/components/site'
import { APP_URL } from '@/lib/site'

export function AppCtaSection() {
  return (
    <section id="app" className="pb-20 pt-[52px]">
      <Container>
        <div className="rounded-[24px] bg-[linear-gradient(120deg,#143C93,#1A4FBF_55%,#2E63D6)] px-8 py-14 text-center text-white sm:px-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-sans text-[13px] font-semibold leading-none text-white/90">
            Personal &amp; business loans, now live
          </div>
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-normal leading-[1.05] sm:text-[42px]">
            Apply for a loan in minutes.
          </h2>
          <p className="mx-auto m-0 mb-8 max-w-[540px] font-sans text-[17px] font-medium leading-[1.6] text-white/85">
            Personal and business loans on the Bleu app: fast decisions, fair
            terms, and no hidden fees.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
            >
              Open the Bleu app
            </a>
            <Link
              href="/business"
              className="rounded-lg border-[1.5px] border-white/50 px-[28px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:border-white"
            >
              Explore business loans
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
