import { site } from '@config'

import { env } from '@/lib/env'
import { getCategories, getQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

export const revalidate = 3600

/** 面向 LLM / AI 搜索的站点摘要（对齐 cairo 的 llms.txt 惯例，英文） */
export function GET() {
  const categories = getCategories()
  const quizzes = getQuizzes()

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    '## Categories',
    ...categories.map((category) => `- [${category.name}](${absoluteUrl(`/c/${category.slug}`)}): ${category.description}`),
    '',
    '## Quizzes',
    ...quizzes.map((quiz) => `- [${quiz.seo?.title ?? quiz.slug}](${absoluteUrl(`/q/${quiz.slug}`)})`),
    '',
    '## For coaches',
    `- [${site.cta.footerLink}](${env.signupUrl})`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
