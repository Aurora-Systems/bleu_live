import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero, SectionHeading, ImageSlot } from '@/components/site'
import { PaymentLogos } from '@/components/payment-logos'
import { photos } from '@/lib/images'
import { APP_URL, PAYMENTS_CTA_HREF } from '@/lib/site'
import { CreditCard, Store, ShoppingCart, Banknote, Layers, FileCheck, Globe2 } from 'lucide-react'

const AUDIENCES = [
  {
    title: 'Shops & SMEs',
    body: 'Take mobile money and card payments at the counter with Bleu POS, and let those sales unlock working capital from Bleu.',
    image: photos.thriftEntrepreneur,
    alt: 'A small-business owner preparing stock in their shop',
  },
  {
    title: 'Online stores & startups',
    body: 'Add one checkout to your website and accept every local payment method, with Bleu loans and financial advisory as you scale.',
    image: photos.suitedFounder,
    alt: 'A founder checking their phone',
  },
]

const OFFERINGS = [
  { Icon: CreditCard, title: 'Online Checkout', body: 'Mobile money, ZimSwitch, Visa and Mastercard in one checkout.' },
  { Icon: Store, title: 'POS Payments', body: 'Get paid in store, at the counter or on the go.' },
  { Icon: ShoppingCart, title: 'E-commerce Payments', body: 'Plug Bleu into your online store with one integration.' },
  { Icon: Banknote, title: 'Bleu Loans', body: 'Loans based on your Bleu payment history.' },
]

const LOAN_STEPS = [
  { n: '01', title: 'Get paid through Bleu' },
  { n: '02', title: 'We review your money movement' },
  { n: '03', title: 'Receive a loan offer from Bleu' },
  { n: '04', title: 'Funds land in your account' },
]

const TRUST = [
  { Icon: Layers, title: 'One integration', body: 'Every wallet and card network through a single connection.' },
  { Icon: FileCheck, title: 'Transparent terms', body: 'Clear pricing and clear terms, with no surprises.' },
  { Icon: Globe2, title: 'Built for Zimbabwe', body: 'Designed around how Zimbabwe actually pays.' },
]

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="For business"
          title="Payments and capital for Zimbabwean businesses"
          subtitle="Accept every mobile money wallet, ZimSwitch, Visa and Mastercard through one checkout, online, in store and on your website. And the more you sell through Bleu, the more we can lend you."
        />

        <section className="pb-4 pt-2">
          <Container className="flex flex-wrap justify-center gap-[14px]">
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
              Apply for a business loan
            </a>
          </Container>
        </section>

        <PaymentLogos className="pt-10" />

        {/* Who this is for */}
        <section className="py-[52px]">
          <Container>
            <SectionHeading center title="Who this is for" />
            <div className="mt-[34px] grid grid-cols-1 gap-[22px] md:grid-cols-2">
              {AUDIENCES.map((a) => (
                <div key={a.title} className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <ImageSlot src={a.image} alt={a.alt} className="aspect-[16/9]" />
                  <div className="px-8 py-8">
                    <h3 className="m-0 mb-2.5 font-display text-[23px] font-normal leading-[1.1] text-ink">
                      {a.title}
                    </h3>
                    <p className="m-0 font-sans text-[15px] font-medium leading-[1.6] text-body-2">
                      {a.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* What we offer */}
        <section className="py-[52px]">
          <Container>
            <SectionHeading center eyebrow="What we offer" title="Everything you need to get paid and grow" />
            <div className="mt-[34px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {OFFERINGS.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-line bg-surface p-6 py-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-tint text-brand">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 className="m-0 mb-1.5 font-display text-[19px] font-normal leading-[1.15] text-ink">
                    {title}
                  </h3>
                  <p className="m-0 font-sans text-[14px] font-medium leading-[1.55] text-body-2">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Placeholder visual */}
        <section className="py-[52px]">
          <Container>
            <ImageSlot
              src={photos.storeOwners}
              alt="Two business owners handing over boxes of fresh produce in their store"
              className="aspect-[16/7] rounded-[20px]"
            />
          </Container>
        </section>

        {/* How Bleu loans work */}
        <section className="py-[52px]">
          <Container>
            <div className="rounded-[20px] border border-line bg-surface px-6 py-12 sm:px-11">
              <SectionHeading center eyebrow="Bleu Loans" title="How Bleu loans work" />
              <p className="mx-auto mt-3 max-w-[560px] text-center font-sans text-[16px] font-medium leading-[1.6] text-body-2">
                Bleu is the lender. We look at how money moves through your Bleu
                account, the payments you take and send, and offer loans that fit
                your business.
              </p>
              <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {LOAN_STEPS.map((s) => (
                  <div key={s.n} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tint font-display text-[18px] font-normal text-brand">
                      {s.n}
                    </div>
                    <h3 className="m-0 font-sans text-[15px] font-bold leading-[1.3] text-ink">
                      {s.title}
                    </h3>
                  </div>
                ))}
              </div>
              <p className="mx-auto mb-0 mt-9 max-w-[560px] text-center font-sans text-[14px] font-medium leading-[1.6] text-body-2">
                Not using Bleu Payments yet? You can still apply. Loans are open to
                anyone 18 or older, with ID and KYC checks done securely through
                Didit.
              </p>
            </div>
          </Container>
        </section>

        {/* Why Bleu */}
        <section className="py-[52px]">
          <Container>
            <SectionHeading center title="Why Bleu" />
            <div className="mt-[34px] grid grid-cols-1 gap-[22px] md:grid-cols-3">
              {TRUST.map(({ Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-line bg-surface-2 px-[30px] py-[34px]">
                  <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-[12px] bg-tint text-brand">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3 className="m-0 mb-2.5 font-display text-[21px] font-normal leading-[1.12] text-ink">
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

        {/* CTA band */}
        <section className="pb-20 pt-[52px]">
          <Container>
            <div className="rounded-[24px] bg-[linear-gradient(120deg,#143C93,#1A4FBF_55%,#2E63D6)] px-8 py-14 text-center text-white sm:px-12">
              <h2 className="m-0 mb-3.5 font-display text-[30px] font-normal leading-[1.05] sm:text-[42px]">
                Ready to take every payment?
              </h2>
              <p className="m-0 mb-7 font-sans text-[17px] font-medium leading-[1.6] text-white/85">
                Bleu Payments is launching soon. Talk to us to get early access, or ask about business loans today.
              </p>
              <Link
                href={PAYMENTS_CTA_HREF}
                className="inline-block rounded-lg bg-white px-[34px] py-4 font-sans text-[15px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
              >
                Get early access
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
