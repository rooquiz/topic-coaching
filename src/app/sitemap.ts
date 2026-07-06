import type { MetadataRoute } from 'next'

import { getCategories, getQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

// 静态导出：固化成 /sitemap.xml 静态文件。
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const home: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl('/'),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
  }

  const categories: MetadataRoute.Sitemap = getCategories().map((category) => ({
    url: absoluteUrl(`/c/${category.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const quizzes: MetadataRoute.Sitemap = getQuizzes().map((quiz) => ({
    url: absoluteUrl(`/q/${quiz.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [home, ...categories, ...quizzes]
}
