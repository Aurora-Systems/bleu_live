import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { APP_URL } from '@/lib/site'

const NAV_LINKS = [
  { href: '/business', label: 'Business' },
  { href: '/individuals', label: 'Individuals' },
  { href: '/partners', label: 'Partners' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

const SOCIALS = [
  { href: 'https://www.instagram.com/bleu.access/', label: 'Instagram', Icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-ink pb-[34px] pt-16 text-cloud">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-ink-line pb-11 md:grid-cols-[1.6fr_1fr_1fr] lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="mb-4 font-display text-[24px] font-semibold leading-none text-white">
              Bleu
            </div>
            <p className="m-0 mb-5 max-w-[300px] font-sans text-[14px] font-medium leading-[1.65] text-cloud-2">
              Financial access for Africa: loans, advice, and real access to
              capital for businesses and individuals, without the traditional
              barriers.
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line text-cloud-2 transition-colors hover:border-brand-soft hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="mb-[18px] font-sans text-[13px] font-bold uppercase leading-none tracking-[0.08em] text-cloud-2">
              Explore
            </div>
            <div className="flex flex-col gap-3 font-sans text-[14px] font-medium leading-none">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-cloud transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="mb-[18px] font-sans text-[13px] font-bold uppercase leading-none tracking-[0.08em] text-cloud-2">
              Legal
            </div>
            <div className="flex flex-col gap-3 font-sans text-[14px] font-medium leading-none">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-cloud transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <div className="mb-[18px] font-sans text-[13px] font-bold uppercase leading-none tracking-[0.08em] text-cloud-2">
              Get in touch
            </div>
            <div className="flex flex-col gap-3 font-sans text-[14px] font-medium leading-[1.5]">
              <a href="mailto:hello@bleubank.xyz" className="text-brand-soft">
                hello@bleubank.xyz
              </a>
              <a
                href="https://bleu.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cloud transition-colors hover:text-white"
              >
                bleu.co.zw
              </a>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block rounded-lg bg-brand px-5 py-[11px] text-center font-sans text-[13px] font-bold leading-none text-white transition-colors hover:bg-brand-bright"
              >
                Apply on the app
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-[26px] font-sans text-[13px] font-medium leading-[1.5] text-cloud-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Bleu. All rights reserved.</span>
          <span>
            Bleu is a subsidiary of{' '}
            <a
              href="https://attributeai.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cloud transition-colors hover:text-white"
            >
              AttributeAI, LLC
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  )
}
