import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { env } from '@/lib/env'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: 'RooQuiz Coaching — Free Coaching Quizzes & Assessments',
    template: '%s | RooQuiz Coaching',
  },
  description:
    'Free coaching quizzes and assessments across life, career, business, wellness, and relationships. Take a quiz — or build your own with RooQuiz.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-base-100 text-base-content antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
