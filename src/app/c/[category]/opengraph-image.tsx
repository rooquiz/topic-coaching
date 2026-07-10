import { site } from '@config'

import { getCategories, getCategory } from '@/lib/content'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const dynamic = 'force-static'
export const size = ogSize
export const contentType = ogContentType

/** 每个分类一张静态 OG 图 */
export function generateStaticParams() {
  return getCategories()
    .filter((category) => !category.draft)
    .map((category) => ({ category: category.slug }))
}

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = getCategory(slug)
  return renderOgImage({ title: category?.name ?? site.name, subtitle: 'Coaching quizzes' })
}
