import Link from 'next/link'
import { CreditCard, Store, ShoppingCart, Banknote } from 'lucide-react'
import { Container, Eyebrow } from '@/components/site'

const PRODUCTS = [
  {
    href: '/business',
    Icon: CreditCard,
    title: 'Online Checkout',
    body: 'One checkout where your customers pay with any mobile money wallet, ZimSwitch, Visa or Mastercard.',
    dark: true,
  },
  {
    href: '/business',
    Icon: Store,
    title: 'POS Payments',
    body: 'Take mobile money and card payments at the counter, in store or on the move.',
  },
  {
    href: '/business',
    Icon: ShoppingCart,
    title: 'E-commerce Payments',
    body: 'Run an online store? Plug in Bleu once and accept every local payment method.',
  },
  {
    href: '/business',
    Icon: Banknote,
    title: 'Bleu Loans',
    body: 'Loans straight from Bleu, sized by how money moves through your account. Open to anyone 18 or older.',
  },
]

export function WhatWeDoSection() {
  return (
    <section className="py-[52px]">
      <Container>
        <div className="mb-[34px] flex items-end justify-between gap-6">
          <div>
            <Eyebrow className="mb-3">What we do</Eyebrow>
            <h2 className="m-0 font-display text-[28px] font-normal leading-[1.08] text-ink sm:text-[34px] lg:text-[40px]">
              Get paid, then grow.
            </h2>
          </div>
          <Link
            href="/business"
            className="hidden shrink-0 font-sans text-[14px] font-bold leading-none text-brand sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map(({ href, Icon, title, body, dark }) => (
            <Link
              key={title}
              href={href}
              className={`block rounded-2xl border p-6 py-7 transition-colors ${
                dark
                  ? 'border-ink bg-ink hover:bg-ink-2'
                  : 'border-line bg-surface hover:border-brand'
              }`}
            >
              <div className={`mb-4 ${dark ? 'text-brand-soft' : 'text-brand'}`}>
                <Icon size={28} strokeWidth={1.6} />
              </div>
              <div
                className={`mb-2 font-display text-[22px] font-normal leading-[1.12] ${
                  dark ? 'text-white' : 'text-ink'
                }`}
              >
                {title}
              </div>
              <p
                className={`m-0 mb-4 font-sans text-[14px] font-medium leading-[1.55] ${
                  dark ? 'text-cloud' : 'text-body-2'
                }`}
              >
                {body}
              </p>
              <span
                className={`font-sans text-[13px] font-bold leading-none ${
                  dark ? 'text-brand-soft' : 'text-brand'
                }`}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
