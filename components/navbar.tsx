"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { APP_URL } from '@/lib/site'

const NAV = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/business', label: 'Business', match: (p: string) => p.startsWith('/business') },
  { href: '/individuals', label: 'Individuals', match: (p: string) => p.startsWith('/individuals') },
  { href: '/partners', label: 'Partners', match: (p: string) => p.startsWith('/partners') },
  { href: '/roadmap', label: 'Roadmap', match: (p: string) => p.startsWith('/roadmap') },
  { href: '/contact', label: 'Contact', match: (p: string) => p.startsWith('/contact') },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line-2 bg-canvas/90 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="https://bleubank.sirv.com/logo.png"
            alt="Bleu"
            width={100}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[26px] lg:flex">
          {NAV.map((item) => {
            const active = item.match(pathname)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-[14.5px] font-semibold leading-none transition-colors hover:text-brand ${
                  active ? 'text-brand' : 'text-body-2'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-brand px-[22px] py-3 font-sans text-[14px] font-bold leading-none text-white transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Apply now
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-tint lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <nav className="border-t border-line-2 bg-canvas lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV.map((item) => {
              const active = item.match(pathname)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 font-sans text-[15px] font-semibold leading-none transition-colors hover:bg-tint ${
                    active ? 'text-brand' : 'text-body-2'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-brand px-[22px] py-3 text-center font-sans text-[14px] font-bold leading-none text-white transition-colors hover:bg-brand-dark"
            >
              Apply now
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
