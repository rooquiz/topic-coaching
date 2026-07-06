import 'server-only'

import { siteConfig, type CoachingCategory, type CoachingQuiz } from '@config'

import { fetchFormMeta, type PayloadFormMeta } from './payload'

/** 落地页/卡片渲染所需的「清单 + Payload 元数据」合并结果 */
export interface HydratedQuiz {
  quiz: CoachingQuiz
  meta: PayloadFormMeta | null
  title: string
  description: string
  coverUrl: string | null
  href: string
}

export function getCategories(): CoachingCategory[] {
  return [...siteConfig.categories].sort((a, b) => a.order - b.order)
}

export function getCategory(slug: string): CoachingCategory | null {
  return siteConfig.categories.find((category) => category.slug === slug) ?? null
}

export function getQuizzes(): CoachingQuiz[] {
  return [...siteConfig.quizzes].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export function getQuiz(slug: string): CoachingQuiz | null {
  return siteConfig.quizzes.find((quiz) => quiz.slug === slug) ?? null
}

export function getQuizzesByCategory(categorySlug: string): CoachingQuiz[] {
  return getQuizzes().filter((quiz) => quiz.categorySlugs.includes(categorySlug))
}

export function getFeaturedQuizzes(): CoachingQuiz[] {
  const featured = getQuizzes().filter((quiz) => quiz.featured)
  return featured.length ? featured : getQuizzes().slice(0, 6)
}

/** 把 HTML 描述压成纯文本（用于 meta description 回退） */
function htmlToPlainText(input: string | null | undefined): string {
  if (!input) return ''
  return input
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** slug 兜底成可读标题（当清单与 Payload 都没有 title 时） */
function deslugify(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

/** 逐份水合：清单 seo.* 优先，回退到 Payload getPublicForm 的字段 */
export async function hydrateQuiz(quiz: CoachingQuiz): Promise<HydratedQuiz> {
  const meta = await fetchFormMeta(quiz.publicToken, quiz.language)
  const title = quiz.seo?.title ?? meta?.title ?? deslugify(quiz.slug)
  const description = quiz.seo?.description ?? htmlToPlainText(meta?.description)
  const coverUrl = meta?.flagImg?.url ?? null
  return { quiz, meta, title, description, coverUrl, href: `/q/${quiz.slug}` }
}

export async function hydrateQuizzes(quizzes: CoachingQuiz[]): Promise<HydratedQuiz[]> {
  return Promise.all(quizzes.map((quiz) => hydrateQuiz(quiz)))
}
