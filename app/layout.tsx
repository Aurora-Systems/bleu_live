import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmMono = DM_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const syne = Syne({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bleu | Financial Access for Africa',
  description: 'Bleu provides loans, financial advice, and access to capital for businesses and individuals across Africa — without the traditional barriers.',
  keywords: ['fintech', 'Africa', 'loans', 'financial services', 'business loans', 'SME financing'],
  openGraph: {
    title: 'Bleu | Financial Access for Africa',
    description: 'Bleu provides loans, financial advice, and access to capital for businesses and individuals across Africa.',
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
    <html lang="en" data-scroll-behavior="smooth" className={`${dmMono.variable} ${syne.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
