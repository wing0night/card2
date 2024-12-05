import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happy Birthday',
  description: 'A special birthday greeting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}

export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      port: '',
      pathname: '/**',
    },
  ],
}

