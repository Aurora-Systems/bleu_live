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
    default: 'Bleu | Payments and Business Finance for Zimbabwe',
    template: '%s | Bleu',
  },
  description:
    'Bleu is a payments provider and lender for Zimbabwe. Accept every mobile money wallet, ZimSwitch, Visa and Mastercard through one checkout, online, in store and on your e-commerce site, and get loans from Bleu based on how money moves through your account.',
  keywords: [
    'payments',
    'payment gateway',
    'Zimbabwe',
    'mobile money',
    'ZimSwitch',
    'Visa',
    'Mastercard',
    'online checkout',
    'POS payments',
    'e-commerce payments',
    'business loans',
    'microfinance',
  ],
  openGraph: {
    title: 'Bleu | Payments and Business Finance for Zimbabwe',
    description:
      'One checkout for every mobile money wallet, ZimSwitch, Visa and Mastercard. Take payments online, in store and on your website, and let your payment history unlock loans from Bleu.',
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
