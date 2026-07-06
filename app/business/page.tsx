import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Container, PageHero, SectionHeading, ImageSlot } from '@/components/site'
import { photos } from '@/lib/images'
import { Banknote, LineChart, Network, Shield, Clock, FileCheck, Globe2 } from 'lucide-react'

const AUDIENCES = [
  {
    title: 'SMEs',
    body: 'Working capital and term loans for small and medium enterprises, with no collateral required on most facilities.',
    image: photos.thriftEntrepreneur,
    alt: 'A small-business owner preparing stock in their shop',
  },
  {
    title: 'Startups',
    body: 'Early-stage? We offer financial advisory, investor connections, and access to capital to help you get off the ground.',
    image: photos.suitedFounder,
    alt: 'A founder checking their phone',
  },
]

const OFFERINGS = [
  { Icon: Banknote, title: 'Business Loans', body: 'Fast, collateral-free financing.' },
  { Icon: LineChart, title: 'Financial Advisory', body: 'Strategic planning and financial modelling.' },
  { Icon: Network, title: 'Access to Capital', body: 'Investor network and grant guidance.' },
  { Icon: Shield, title: 'No Collateral', body: 'We assess your business, not your assets.' },
]

const TRUST = [
  { Icon: Clock, title: 'Fast decisions', body: 'Funding answers quickly, not after weeks of waiting.' },
  { Icon: FileCheck, title: 'Transparent terms', body: 'No hidden fees and no surprises, ever.' },
  { Icon: Globe2, title: 'Built for Africa', body: 'Models that understand local market realities.' },
]

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="For business"
          title="Capital and clarity for African businesses"
          subtitle="Whether you’re a startup or an established SME, Bleu gives you the funds and the guidance to grow, without the traditional barriers."
        />

        <section className="pb-4 pt-2">
          <Container className="flex justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-[30px] py-4 font-sans text-[15px] font-bold leading-none text-white transition-colors hover:bg-brand-dark"
            >
              Apply for funding
            </Link>
          </Container>
        </section>

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
            <SectionHeading center eyebrow="What we offer" title="Everything you need to move" />
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
                Ready to grow your business?
              </h2>
              <p className="m-0 mb-7 font-sans text-[17px] font-medium leading-[1.6] text-white/85">
                Not sure yet? Talk to us and we&apos;ll guide you through your options.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-white px-[34px] py-4 font-sans text-[15px] font-bold leading-none text-brand transition-colors hover:bg-brand-soft"
              >
                Apply now
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
