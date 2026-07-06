import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site } from '@config'

import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { env } from '@/lib/env'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
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
