import { env } from '@/lib/env'
import { getCategories, getQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

export const revalidate = 3600

/** 面向 LLM / AI 搜索的站点摘要（对齐 cairo 的 llms.txt 惯例，英文） */
export function GET() {
  const categories = getCategories()
  const quizzes = getQuizzes()

  const lines = [
    '# RooQuiz Coaching',
    '',
    '> Free coaching quizzes and assessments across life, career, business, wellness, and relationships. Take a quiz to get a personalized result, or build your own with RooQuiz.',
    '',
    '## Categories',
    ...categories.map((category) => `- [${category.name}](${absoluteUrl(`/c/${category.slug}`)}): ${category.description}`),
    '',
    '## Quizzes',
    ...quizzes.map((quiz) => `- [${quiz.seo?.title ?? quiz.slug}](${absoluteUrl(`/q/${quiz.slug}`)})`),
    '',
    '## For coaches',
    `- [Create your own coaching quiz](${env.signupUrl})`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
