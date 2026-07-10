import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site } from '@config'

import { JsonLd } from '@/components/JsonLd'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { env } from '@/lib/env'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo'

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
        {/* 站点级实体图谱：全站注入一次,供 AI 引擎建立品牌/站点实体认知 */}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
