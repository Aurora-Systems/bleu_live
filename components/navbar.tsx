"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/business', label: 'Business' },
  { href: '/individuals', label: 'Individuals' },
  { href: '/partners', label: 'Partners' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://bleubank.sirv.com/logo.png"
              alt="Bleu Logo"
              width={100}
              height={40}
              className="h-10"
              style={{ width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isScrolled 
                    ? 'text-foreground hover:bg-primary/5 hover:text-primary' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              className={`ml-4 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm transition-all ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`rounded-lg p-2 md:hidden ${
              isScrolled 
                ? 'text-foreground hover:bg-primary/5' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass-nav md:hidden border-t border-primary/10">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#waitlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 block rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
