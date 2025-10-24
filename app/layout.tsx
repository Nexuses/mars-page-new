import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'MARS TalentFlex',
  description: 'MARS TalentFlex - Talent Acquisition Platform',
  generator: 'v0.app',
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
        {children}
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
