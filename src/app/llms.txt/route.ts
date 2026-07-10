import { site } from '@config'

import { env } from '@/lib/env'
import { getCategories, getQuizzes, hydrateQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

// 静态导出：build 期固化成 /llms.txt 静态文件。
export const dynamic = 'force-static'

/**
 * 面向 LLM / AI 搜索的站点摘要（英文）。
 * 每个链接附一句描述,便于答案引擎快速判断相关性;完整语料见 /llms-full.txt。
 */
export async function GET() {
  const categories = getCategories().filter((category) => !category.draft)
  const quizzes = await hydrateQuizzes(getQuizzes())

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Full content for AI ingestion: ${absoluteUrl('/llms-full.txt')}`,
    '',
    '## Categories',
    ...categories.map(
      (category) => `- [${category.name}](${absoluteUrl(`/c/${category.slug}`)}): ${category.description}`,
    ),
    '',
    '## Quizzes',
    ...quizzes.map((quiz) => {
      const desc = quiz.description ? ` — ${quiz.description}` : ''
      return `- [${quiz.title}](${absoluteUrl(quiz.href)})${desc}`
    }),
    '',
    '## For coaches',
    `- [${site.cta.footerLink}](${env.signupUrl})`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
