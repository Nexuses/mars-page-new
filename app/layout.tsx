import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { Toaster } from 'sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MARS TalentFlex | Streamlined AI-Powered Talent Sourcing',
  description:
    "MARS TalentFlex cuts through the AI noise to find real, qualified candidates faster. Our AI-powered sourcing engine delivers verified, ranked talent with efficient, streamlined hiring processes for employers across industries.",
  keywords: [
    'Talent acquisition',
    'AI-powered recruitment',
    'sourcing engine',
    'recruitment technology',
    'hire faster',
    'candidate shortlisting',
    'AI talent sourcing',
    'verified candidates',
    'recruitment process',
    'hiring solutions',
    'workforce efficiency',
    'recruitment strategy',
  ],
  openGraph: {
    title: 'MARS TalentFlex | Find Real Talent, Faster',
    description:
      'Streamline your hiring process with MARS TalentFlex. AI-powered sourcing combined with human expertise to bring top-tier candidates directly to your team.',
    images: [
      {
        url: '/preview-image.png',
        width: 1200,
        height: 630,
        alt: 'MARS TalentFlex',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARS TalentFlex | Streamlined AI-Powered Talent Sourcing',
    description:
      'MARS TalentFlex uses a cutting-edge sourcing engine combining AI and human expertise to help employers hire the best talent in days, not weeks.',
    images: ['/preview-image.png'],
  },
  icons: {
    icon: [
      { url: '/fevicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/fevicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/fevicon.png',
    apple: '/fevicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EGLEK57NZG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EGLEK57NZG');
          `}
        </Script>
        
        {children}
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
