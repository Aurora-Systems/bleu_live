import Link from 'next/link'
import { Container } from '@/components/site'
import { APP_URL, PAYMENTS_CTA_HREF } from '@/lib/site'

type CtaLink = { label: string; href: string; external?: boolean }

const COPY: Record<
  'payments' | 'loans',
  { pill: string; title: string; body: string; primary: CtaLink; secondary: CtaLink }
> = {
  payments: {
    pill: 'Bleu Payments, launching soon',
    title: 'One checkout. Every way to pay.',
    body: 'Be among the first businesses to accept every mobile money wallet and card with Bleu. Need finance today? Bleu loans are open to anyone 18 or older on the Bleu app.',
    primary: { label: 'Get early access', href: PAYMENTS_CTA_HREF },
    secondary: { label: 'Apply for a loan', href: APP_URL, external: true },
  },
  loans: {
    pill: 'Personal & business loans, now live',
    title: 'Apply for a loan in minutes.',
    body: 'Loans straight from Bleu, open to anyone 18 or older: fast decisions, fair terms, and no hidden fees.',
    primary: { label: 'Open the Bleu app', href: APP_URL, external: true },
    secondary: { label: 'Explore business loans', href: '/business' },
  },
}

function CtaButton({ link, className }: { link: CtaLink; className: string }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    )
  }
  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  )
}

/** Closing gradient CTA band. `focus` picks payments (default) or loans copy. */
export function AppCtaSection({ focus = 'payments' }: { focus?: 'payments' | 'loans' }) {
  const copy = COPY[focus]
  return (
    <section id="app" className="pb-20 pt-[52px]">
      <Container>
        <div className="rounded-[24px] bg-[linear-gradient(120deg,#143C93,#1A4FBF_55%,#2E63D6)] px-8 py-14 text-center text-white sm:px-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 font-sans text-[13px] font-semibold leading-none text-white/90">
            {copy.pill}
          </div>
          <h2 className="m-0 mb-3.5 font-display text-[30px] font-normal leading-[1.05] sm:text-[42px]">
            {copy.title}
          </h2>
          <p className="mx-auto m-0 mb-8 max-w-[540px] font-sans text-[17px] font-medium leading-[1.6] text-white/85">
            {copy.body}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CtaButton
              link={copy.primary}
              className="rounded-lg bg-white px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
            />
            <CtaButton
              link={copy.secondary}
              className="rounded-lg border-[1.5px] border-white/50 px-[28px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:border-white"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
