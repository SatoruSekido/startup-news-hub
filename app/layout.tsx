import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup News Hub - スタートアップニュースまとめ',
  description: '資金調達、IPO、M&A、ビジネストレンドなどスタートアップ・VC業界の最新ニュースを毎日自動更新',
  keywords: ["スタートアップ","ベンチャー","資金調達","IPO","VC","起業","ビジネス"],
  openGraph: {
    title: 'Startup News Hub - スタートアップニュースまとめ',
    description: '資金調達、IPO、M&A、ビジネストレンドなどスタートアップ・VC業界の最新ニュースを毎日自動更新',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
