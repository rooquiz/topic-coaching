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

/** 顶层 Hub（无 parent）——用于首页网格与导航 */
export function getHubs(): CoachingCategory[] {
  return getCategories().filter((category) => !category.parent)
}

/** 某个 Hub 下的子分类（niche），按 order 排序 */
export function getChildCategories(parentSlug: string): CoachingCategory[] {
  return getCategories().filter((category) => category.parent === parentSlug)
}

/** 该分类是否为 Hub（拥有子分类） */
export function isHub(category: CoachingCategory): boolean {
  return getChildCategories(category.slug).length > 0
}

/** 分类所属的 Hub：niche → 其 parent；顶层分类 → null */
export function getParentCategory(category: CoachingCategory): CoachingCategory | null {
  return category.parent ? getCategory(category.parent) : null
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

/**
 * 该分类落地页应展示的测评（已按 order 排序、按 slug 去重）：
 *  - niche：直接挂在该 niche 上的测评
 *  - hub：其所有子 niche 的测评并集（外加直接挂在 hub 上的兜底测评）
 */
export function getQuizzesUnderCategory(category: CoachingCategory): CoachingQuiz[] {
  const slugs = new Set<string>([category.slug, ...getChildCategories(category.slug).map((child) => child.slug)])
  const seen = new Set<string>()
  const result: CoachingQuiz[] = []
  for (const quiz of getQuizzes()) {
    if (seen.has(quiz.slug)) continue
    if (quiz.categorySlugs.some((slug) => slugs.has(slug))) {
      seen.add(quiz.slug)
      result.push(quiz)
    }
  }
  return result
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
