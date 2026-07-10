import { site } from '@config'

import { env } from '@/lib/env'
import { getCategories, getDisplayCategory, getQuizzes, hydrateQuizzes } from '@/lib/content'
import { absoluteUrl } from '@/lib/seo'

// 静态导出：build 期固化成 /llms-full.txt 静态文件。
export const dynamic = 'force-static'

/**
 * 完整语料文件：把每个分类的介绍/FAQ、每份测评的 overview/样题/FAQ 全量拼成纯文本,
 * 专供 AI 答案引擎与助手抓取——把锁在跨域 iframe 里、爬虫读不到的内容也一并露出。
 */
export async function GET() {
  const categories = getCategories().filter((category) => !category.draft)
  const quizzes = await hydrateQuizzes(getQuizzes())

  const out: string[] = []
  const push = (...lines: string[]) => out.push(...lines)

  push(`# ${site.name} — full content for LLMs`, '')
  push(`> ${site.description}`, '')
  push(
    `Full text of every coaching category and quiz on ${env.siteUrl}, provided for AI answer engines and assistants. ` +
      `Every quiz is free, takes a few minutes, and needs no signup to start; results are delivered by RooQuiz.`,
    '',
  )

  push('## Categories', '')
  for (const category of categories) {
    push(`### ${category.name}`)
    push(`URL: ${absoluteUrl(`/c/${category.slug}`)}`)
    push(category.description)
    if (category.intro?.length) push('', ...category.intro)
    if (category.faq?.length) {
      push('', 'FAQ:')
      for (const entry of category.faq) push(`Q: ${entry.q}`, `A: ${entry.a}`)
    }
    push('')
  }

  push('## Quizzes', '')
  for (const hydrated of quizzes) {
    const seo = hydrated.quiz.seo
    const category = getDisplayCategory(hydrated.quiz)
    push(`### ${hydrated.title}`)
    push(`URL: ${absoluteUrl(hydrated.href)}`)
    if (category) push(`Category: ${category.name}`)
    if (hydrated.description) push(hydrated.description)
    if (seo?.overview) push('', seo.overview)
    if (seo?.whoFor) push('', `Who it's for: ${seo.whoFor}`)
    if (seo?.whatYouLearn?.length) {
      push('', "What you'll learn:")
      for (const point of seo.whatYouLearn) push(`- ${point}`)
    }
    if (seo?.sampleQuestions?.length) {
      push('', 'Sample questions:')
      seo.sampleQuestions.forEach((question, index) => push(`${index + 1}. ${question}`))
    }
    if (seo?.howItWorks) push('', `How it works: ${seo.howItWorks}`)
    if (seo?.faq?.length) {
      push('', 'FAQ:')
      for (const entry of seo.faq) push(`Q: ${entry.q}`, `A: ${entry.a}`)
    }
    push('')
  }

  push('## For coaches', `Create your own coaching quiz with RooQuiz: ${env.signupUrl}`, '')

  return new Response(out.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
