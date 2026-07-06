import Link from 'next/link'
import { Building2, User, ArrowRight, Check } from 'lucide-react'
import { Container, Eyebrow } from '@/components/site'
import { APP_URL } from '@/lib/site'

const BUSINESS_POINTS = [
  'Working capital loans',
  'Financial advisory services',
  'Access to an investor network',
]

const INDIVIDUAL_POINTS = [
  'Emergency and personal loans',
  'No collateral required',
  'Fast, transparent disbursement',
]

export function WhoWeServeSection() {
  return (
    <section className="py-[52px]">
      <Container>
        <div className="mb-[34px] text-center">
          <Eyebrow className="mb-3">Who we serve</Eyebrow>
          <h2 className="m-0 font-display text-[28px] font-normal leading-[1.08] text-ink sm:text-[34px] lg:text-[40px]">
            Solutions for every stage
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Businesses: dark brand card */}
          <div className="rounded-[20px] bg-ink px-8 py-[42px] text-cloud sm:px-11">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-soft">
              <Building2 size={26} strokeWidth={1.6} />
            </div>
            <h3 className="m-0 mb-3 font-display text-[26px] font-normal leading-[1.1] text-white">
              Businesses &amp; startups
            </h3>
            <p className="m-0 mb-6 max-w-[420px] font-sans text-[15px] font-medium leading-[1.6] text-cloud">
              Access capital and financial advisory designed for African
              businesses, with no traditional collateral required on most loans.
            </p>
            <ul className="m-0 mb-8 flex flex-col gap-3 p-0">
              {BUSINESS_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 font-sans text-[14px] font-medium text-cloud">
                  <Check size={18} className="shrink-0 text-brand-soft" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-sans text-[14px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          {/* Individuals: light card */}
          <div className="rounded-[20px] border border-line bg-surface px-8 py-[42px] sm:px-11">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-tint text-brand">
              <User size={26} strokeWidth={1.6} />
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <h3 className="m-0 font-display text-[26px] font-normal leading-[1.1] text-ink">
                Individuals
              </h3>
              <span className="rounded-full bg-brand px-2.5 py-1 font-sans text-[11px] font-bold uppercase leading-none tracking-[0.06em] text-white">
                Now live
              </span>
            </div>
            <p className="m-0 mb-6 max-w-[420px] font-sans text-[15px] font-medium leading-[1.6] text-body-2">
              Personal loan access for emergencies, education and more, now
              live. Apply in minutes on the Bleu app.
            </p>
            <ul className="m-0 mb-8 flex flex-col gap-3 p-0">
              {INDIVIDUAL_POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 font-sans text-[14px] font-medium text-body">
                  <Check size={18} className="shrink-0 text-brand" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-sans text-[14px] font-bold leading-none text-white transition-colors hover:bg-brand-dark"
            >
              Apply on the app <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
