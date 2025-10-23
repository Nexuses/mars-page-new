import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'mars-page',
  description: 'MARS TalentFlex - Talent Acquisition Platform',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/MARS-1.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/images/MARS-1.webp', sizes: '16x16', type: 'image/webp' },
    ],
    shortcut: '/images/MARS-1.webp',
    apple: '/images/MARS-1.webp',
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
        {children}
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
