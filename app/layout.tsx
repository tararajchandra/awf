import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/awf/navbar'

export const metadata: Metadata = {
  title: 'Anokha Welfare Foundation | Empowering Communities',
  description: 'AWF brings education, healthcare, and sustainable livelihood support to underserved communities. Trusted for transparency, measurable impact, and member-led initiatives.',
  keywords: ['NGO', 'welfare', 'education', 'healthcare', 'charity', 'community support', 'India'],
  authors: [{ name: 'Anokha Welfare Foundation' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anokhawelfare.org',
    title: 'Anokha Welfare Foundation | Empowering Communities',
    description: 'Empowering Those in Need. Trusted for Truth.',
    siteName: 'Anokha Welfare Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anokha Welfare Foundation',
    description: 'Empowering Those in Need. Trusted for Truth.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  canonical: 'https://anokhawelfare.org',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
