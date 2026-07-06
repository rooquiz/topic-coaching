import { site } from '@config'

import { getQuiz, getQuizzes, hydrateQuiz } from '@/lib/content'
import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const dynamic = 'force-static'
export const size = ogSize
export const contentType = ogContentType

/** 每份测评一张静态 OG 图 */
export function generateStaticParams() {
  return getQuizzes().map((quiz) => ({ slug: quiz.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const quiz = getQuiz(slug)
  const title = quiz ? (await hydrateQuiz(quiz)).title : site.name
  return renderOgImage({ title, subtitle: 'Free coaching quiz' })
}
