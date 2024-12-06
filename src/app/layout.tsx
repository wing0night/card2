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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* 其他头部内容，例如字体链接、样式表等 */}
      </head>
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  )
}
