import type { Metadata } from 'next'
import { Poppins, Hanken_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Poppins is the display / heading face (geometric sans, used at light weights
// for a calm, editorial feel). Hanken Grotesk carries body copy.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bleu | Financial Access for Africa',
    template: '%s | Bleu',
  },
  description:
    'Bleu provides loans, financial advice, and access to capital for businesses and individuals across Africa, without the traditional barriers.',
  keywords: ['fintech', 'Africa', 'loans', 'financial services', 'business loans', 'SME financing'],
  openGraph: {
    title: 'Bleu | Financial Access for Africa',
    description:
      'Bleu provides loans, financial advice, and access to capital for businesses and individuals across Africa.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1A4FBF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${hanken.variable}`}
    >
      <body className="bg-canvas font-sans text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
