import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'AlphIQ - Unified Alephium Analytics Platform',
  description: 'Unified platform for blockchain analytics, quests, and learning—empowering users to explore, engage, and educate through real-time insights and gamified onchain experiences on the Alephium blockchain.',
  keywords: [
    'AlphIQ',
    'Alephium',
    'blockchain analytics',
    'crypto analytics',
    'onchain quests',
    'wallet profiling',
    'token flow analyzer',
    'contract decoder',
    'blockchain learning',
    'cryptocurrency',
    'defi analytics',
    'blockchain education',
    'gamification',
    'leaderboards',
    'real-time analytics'
  ],
  authors: [{ name: 'Pranshu Rastogi', url: 'https://pranshurastogi.com' }],
  creator: 'Pranshu Rastogi',
  publisher: 'AlphIQ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://alphiq.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alphiq.vercel.app',
    title: 'AlphIQ - Unified Alephium Analytics Platform',
    description: 'Unified platform for blockchain analytics, quests, and learning—empowering users to explore, engage, and educate through real-time insights and gamified onchain experiences.',
    siteName: 'AlphIQ',
    images: [
      {
        url: '/images/alphiq-logo.png',
        width: 1200,
        height: 630,
        alt: 'AlphIQ - Alephium Analytics Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlphIQ - Unified Alephium Analytics Platform',
    description: 'Unified platform for blockchain analytics, quests, and learning—empowering users to explore, engage, and educate through real-time insights and gamified onchain experiences.',
    images: ['/images/alphiq-logo.png'],
    creator: '@Alph_IQ',
    site: '@Alph_IQ',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1B1B1F" />
        <meta name="msapplication-TileColor" content="#1B1B1F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="AlphIQ" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AlphIQ" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1B1B1F" />
        <meta name="msapplication-tap-highlight" content="no" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AlphIQ",
              "description": "Unified platform for blockchain analytics, quests, and learning—empowering users to explore, engage, and educate through real-time insights and gamified onchain experiences.",
              "url": "https://alphiq.vercel.app",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Pranshu Rastogi",
                "url": "https://pranshurastogi.com"
              },
              "creator": {
                "@type": "Organization",
                "name": "AlphIQ",
                "url": "https://alphiq.vercel.app"
              },
              "featureList": [
                "Live Network Stats",
                "AI Wallet Profiler",
                "Token Flow Analyzer",
                "Contract Decoder",
                "Onchain Score & Leaderboards",
                "Gamified Quests"
              ],
              "screenshot": [
                "https://alphiq.vercel.app/images/dashboard-analytics.png",
                "https://alphiq.vercel.app/images/dashboard-gamification.png"
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
