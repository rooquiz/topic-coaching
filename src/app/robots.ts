import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/seo'

// 静态导出：固化成 /robots.txt 静态文件。
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
