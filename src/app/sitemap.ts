import type { MetadataRoute } from 'next'

import { getCategories, getQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

export const revalidate = 3600

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
