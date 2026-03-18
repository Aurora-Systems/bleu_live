import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/business', label: 'Business' },
  { href: '/individuals', label: 'Individuals' },
  { href: '/partners', label: 'Partners' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <Image
              src="https://bleubank.sirv.com/logo.png"
              alt="Bleu Logo"
              width={100}
              height={40}
              className="h-10"
              style={{ width: 'auto' }}
            />
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Financial access for Africa. We provide loans, financial advice, and access to capital for businesses and individuals across the continent.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-muted-foreground transition-all hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-muted-foreground transition-all hover:bg-primary hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:hello@bleubank.xyz"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-muted-foreground transition-all hover:bg-primary hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://bleubank.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-muted-foreground transition-all hover:bg-primary hover:text-white"
                aria-label="Website"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links & Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="mt-8 font-display text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="mailto:hello@bleubank.xyz" className="text-muted-foreground transition-colors hover:text-primary">
                  hello@bleubank.xyz
                </a>
              </li>
              <li>
                <a href="https://bleubank.xyz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                  bleubank.xyz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2025 Bleu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
