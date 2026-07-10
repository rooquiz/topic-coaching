import { z } from 'zod'

/**
 * ============================================================================
 *  Coaching 专题站配置的 schema / 类型 / 装配与校验
 * ============================================================================
 * 配置被拆成「一个分类一个文件」（见 config/categories/*.ts）。
 * 每个文件描述一个分类（Hub 或 niche）及挂在它下面的测评；
 * 测评的 categorySlugs 由所在文件的分类 slug 自动推导（无需手写）。
 *
 * 本文件不含内容，只定义结构；改内容去 config/categories/ 与 config/site.ts。
 */

const faqSchema = z.object({
  q: z.string(),
  a: z.string(),
})

export const categorySchema = z.object({
  /** URL slug，用于 /c/[category] */
  slug: z.string().regex(/^[a-z0-9-]+$/, 'slug 仅允许小写字母、数字、连字符'),
  /** 导航/卡片上的短名 */
  name: z.string(),
  /** 分类落地页的 H1 / <title> */
  title: z.string(),
  /** SEO 描述 + 落地页副标题 */
  description: z.string(),
  /** 卡片图标 emoji（可选，默认 🧭） */
  emoji: z.string().optional(),
  /** 分类落地页 hero 区文案（可选，默认用 description） */
  heroCopy: z.string().optional(),
  /**
   * GEO：分类落地页的长文正文（分段书写，每段一个字符串）。
   * 渲染成可抓取的信息型内容——「什么是这类教练 / 适合谁 / 如何挑测评」，
   * 正是答案引擎回答信息型问句时最爱引用的段落。
   */
  intro: z.array(z.string()).optional(),
  /** GEO：分类级常见问答，渲染为 FAQ 折叠块 + FAQPage 结构化数据 */
  faq: z.array(faqSchema).optional(),
  /** 排序（小在前，仅在同层内比较：Hub 之间、或同一 Hub 的子分类之间） */
  order: z.number().int(),
  /**
   * 父级 Hub 的 slug。不填 = 顶层 Hub（支柱页）；填了 = 该 Hub 下的 niche（子分类页）。
   * 层级最多两级（Hub → niche），parent 必须指向一个顶层分类。
   */
  parent: z.string().optional(),
  /**
   * 草稿态：结构已就位但内容未达开页门槛（如测评 < 3）。
   * 草稿分类不生成独立页、不进导航/站点地图/内链；其测评仍照常汇总到所属 Hub。
   * 内容备齐后把 draft 去掉即可促级上线。
   */
  draft: z.boolean().optional(),
})

/** 分类文件里书写的测评：categorySlugs 由所在文件自动推导，故此处不写 */
export const quizInFileSchema = z.object({
  /** Payload 公开测评 token（cairo /a/{publicToken}） */
  publicToken: z.string().min(1),
  /** URL slug，用于 /q/[slug] */
  slug: z.string().regex(/^[a-z0-9-]+$/, 'slug 仅允许小写字母、数字、连字符'),
  /** 是否首页精选 */
  featured: z.boolean().optional(),
  /** 排序（小在前） */
  order: z.number().int().optional(),
  /** 指定作答语言（对应 Form_Language，如 en_US），不填用测评默认语言 */
  language: z.string().optional(),
  /** 除所在文件的分类外，额外归属的分类 slug（跨分类复用时用） */
  alsoIn: z.array(z.string()).optional(),
  /** SEO 覆盖/增强；不填则回退到 Payload 的 title/description */
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      /**
       * GEO：2–3 句概述——这份测评测什么、能得到什么。
       * 渲染为落地页的引导正文,供答案引擎(ChatGPT/Perplexity/AI Overviews)摘录引用。
       */
      overview: z.string().optional(),
      /** GEO：适合谁(一句话画像),渲染为「Who it's for」正文 */
      whoFor: z.string().optional(),
      /** GEO：作答后你会了解到什么(要点列表),渲染为「What you'll learn」 */
      whatYouLearn: z.array(z.string()).optional(),
      /**
       * GEO：代表性样题(纯文本)。把锁在跨域 iframe 里、爬虫读不到的题目
       * 「露」成可抓取的页面正文,并生成 ItemList 结构化数据。
       */
      sampleQuestions: z.array(z.string()).optional(),
      /** GEO：计分方式 / 方法论说明,渲染为「How it works」 */
      howItWorks: z.string().optional(),
      /** GEO：常见问答,渲染为 FAQ 折叠块 + FAQPage 结构化数据(答案引擎命中率最高的格式) */
      faq: z.array(faqSchema).optional(),
    })
    .optional(),
})

/** 装配后的测评（含 categorySlugs），供 app 消费 */
export const quizSchema = quizInFileSchema.omit({ alsoIn: true }).extend({
  /** 所属分类（可多选，至少一个） */
  categorySlugs: z.array(z.string()).min(1),
})

export const siteSchema = z.object({
  /** 站点名（导航、页脚、metadata 模板、OG 品牌行） */
  name: z.string(),
  /** 品牌 emoji */
  brandEmoji: z.string(),
  /** 一句话标语（OG 副标题、页脚） */
  tagline: z.string(),
  /** 站点默认 meta description（首页 + 兜底） */
  description: z.string(),
  /** 首页 hero */
  hero: z.object({
    titleLead: z.string(),
    titleHighlight: z.string(),
    subtitle: z.string(),
  }),
  /** 转化 CTA 文案 */
  cta: z.object({
    band: z.object({ heading: z.string(), body: z.string(), button: z.string() }),
    inline: z.object({ text: z.string(), button: z.string() }),
    navButton: z.string(),
    footerLink: z.string(),
  }),
  /** 页脚简介 */
  footerBlurb: z.string(),
})

export const configSchema = z.object({
  site: siteSchema,
  categories: z.array(categorySchema),
  quizzes: z.array(quizSchema),
})

export type SiteSettings = z.infer<typeof siteSchema>
export type CoachingCategory = z.infer<typeof categorySchema>
export type QuizInFile = z.infer<typeof quizInFileSchema>
export type CoachingQuiz = z.infer<typeof quizSchema>
export type SiteConfig = z.infer<typeof configSchema>

/** 一个分类文件的形状：分类定义 + 挂在它下面的测评 */
export interface CategoryFile {
  category: CoachingCategory
  quizzes: QuizInFile[]
}

// ---------------------------------------------------------------------------
// 装配 + 构建期校验（fail-fast）
// ---------------------------------------------------------------------------

function validateConfig(input: SiteConfig): SiteConfig {
  const parsed = configSchema.parse(input)

  const seenCategory = new Set<string>()
  for (const category of parsed.categories) {
    if (seenCategory.has(category.slug)) throw new Error(`[config] 重复的分类 slug: ${category.slug}`)
    seenCategory.add(category.slug)
  }

  // 校验分类层级：parent 必须指向存在的顶层分类，且层级最多两级。
  // 顶层 Hub 也可为 draft（尚无内容时整块隐藏，有 niche 上线后再去 draft）。
  const categoryBySlug = new Map(parsed.categories.map((category) => [category.slug, category]))
  for (const category of parsed.categories) {
    if (category.parent === undefined) continue
    if (category.parent === category.slug) {
      throw new Error(`[config] 分类 ${category.slug} 的 parent 不能指向自己`)
    }
    const parent = categoryBySlug.get(category.parent)
    if (!parent) {
      throw new Error(`[config] 分类 ${category.slug} 引用了不存在的 parent: ${category.parent}`)
    }
    if (parent.parent !== undefined) {
      throw new Error(`[config] 分类层级最多两级：${category.slug} 的 parent「${parent.slug}」不是顶层 Hub`)
    }
  }

  const seenQuiz = new Set<string>()
  for (const quiz of parsed.quizzes) {
    if (seenQuiz.has(quiz.slug)) throw new Error(`[config] 重复的测评 slug: ${quiz.slug}`)
    seenQuiz.add(quiz.slug)
    for (const categorySlug of quiz.categorySlugs) {
      if (!seenCategory.has(categorySlug)) {
        throw new Error(`[config] 测评 ${quiz.slug} 引用了不存在的分类: ${categorySlug}`)
      }
    }
  }

  return parsed
}

/**
 * 把「一个分类一个文件」装配成完整配置：
 *  - categories = 各文件的分类定义
 *  - quizzes    = 各文件的测评，categorySlugs 自动推导为 [所在分类, ...alsoIn]
 */
export function buildSiteConfig(site: SiteSettings, files: CategoryFile[]): SiteConfig {
  const categories = files.map((file) => file.category)
  const quizzes: CoachingQuiz[] = files.flatMap((file) =>
    file.quizzes.map((quiz) => {
      const { alsoIn, ...rest } = quiz
      return { ...rest, categorySlugs: [file.category.slug, ...(alsoIn ?? [])] }
    }),
  )
  return validateConfig({ site, categories, quizzes })
}
