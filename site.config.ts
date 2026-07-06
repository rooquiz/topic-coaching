import { z } from 'zod'

/**
 * ============================================================================
 *  Coaching 专题站唯一配置文件
 * ============================================================================
 * 维护站点时基本只需要改这一个文件：
 *   - site      站点信息（名称 / 标语 / 首页 hero / CTA 文案 / 页脚）
 *   - categories 分类（coaching 的各个 niche）
 *   - quizzes    测评清单（哪些 publicToken 属于 coaching、如何分组、SEO 覆盖）
 *
 * 注意：部署相关的域名（Payload / cairo / 站点 URL / 注册页）不在这里，
 * 走环境变量（见 .env.example 与 src/lib/env.ts），因为不同环境取值不同。
 *
 * 新增一份测评：在 berlin 建卷发布 → 拿到公开链接里的 publicToken →
 * 在 quizzes 里加一条（指定 slug、categorySlugs，可选 seo）。其余自动完成。
 */

// ---------------------------------------------------------------------------
// Schemas
// ---------------------------------------------------------------------------

const faqSchema = z.object({
  q: z.string(),
  a: z.string(),
})

const categorySchema = z.object({
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
  /** 排序（小在前） */
  order: z.number().int(),
})

const quizSchema = z.object({
  /** Payload 公开测评 token（cairo /a/{publicToken}） */
  publicToken: z.string().min(1),
  /** URL slug，用于 /q/[slug] */
  slug: z.string().regex(/^[a-z0-9-]+$/, 'slug 仅允许小写字母、数字、连字符'),
  /** 所属分类（可多选，至少一个） */
  categorySlugs: z.array(z.string()).min(1),
  /** 是否首页精选 */
  featured: z.boolean().optional(),
  /** 排序（小在前） */
  order: z.number().int().optional(),
  /** 指定作答语言（对应 Form_Language，如 en_US），不填用测评默认语言 */
  language: z.string().optional(),
  /** SEO 覆盖/增强；不填则回退到 Payload 的 title/description */
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      faq: z.array(faqSchema).optional(),
    })
    .optional(),
})

const siteSchema = z.object({
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
    /** 主标题前半句 */
    titleLead: z.string(),
    /** 主标题高亮词（渲染成主色） */
    titleHighlight: z.string(),
    /** 副标题 */
    subtitle: z.string(),
  }),
  /** 转化 CTA 文案 */
  cta: z.object({
    band: z.object({ heading: z.string(), body: z.string(), button: z.string() }),
    inline: z.object({ text: z.string(), button: z.string() }),
    /** 顶部导航按钮 */
    navButton: z.string(),
    /** 页脚链接文案 */
    footerLink: z.string(),
  }),
  /** 页脚简介 */
  footerBlurb: z.string(),
})

const configSchema = z.object({
  site: siteSchema,
  categories: z.array(categorySchema),
  quizzes: z.array(quizSchema),
})

export type SiteSettings = z.infer<typeof siteSchema>
export type CoachingCategory = z.infer<typeof categorySchema>
export type CoachingQuiz = z.infer<typeof quizSchema>
export type SiteConfig = z.infer<typeof configSchema>

// ---------------------------------------------------------------------------
// 配置内容（改这里）
// ---------------------------------------------------------------------------

const rawConfig: SiteConfig = {
  site: {
    name: 'RooQuiz Coaching',
    brandEmoji: '🧭',
    tagline: 'Free coaching quizzes & assessments',
    description:
      'Free coaching quizzes and assessments across life, career, business, wellness, and relationships. Take a quiz — or build your own with RooQuiz.',
    hero: {
      titleLead: 'Coaching quizzes that help you',
      titleHighlight: 'grow',
      subtitle:
        'Free, insightful assessments across life, career, business, wellness, and relationships. Take one in minutes and get a personalized result.',
    },
    cta: {
      band: {
        heading: 'Build your own coaching quiz in minutes',
        body: 'Use quizzes to capture leads, understand clients, and grow your coaching practice. No code, AI-assisted, free to start.',
        button: 'Create your own quiz — free',
      },
      inline: {
        text: 'Are you a coach? Turn quizzes into leads.',
        button: 'Create your own coaching quiz — free',
      },
      navButton: 'Create a quiz',
      footerLink: 'Create your own quiz',
    },
    footerBlurb: 'Free coaching quizzes & assessments — and the platform to build your own.',
  },

  categories: [
    {
      slug: 'life-coaching',
      name: 'Life Coaching',
      title: 'Life Coaching Quizzes & Assessments',
      description:
        'Free life-coaching quizzes to clarify your values, habits, and direction — and find the right next step.',
      emoji: '🌱',
      heroCopy: 'Get unstuck. Short, insightful assessments that help you see where you are and where you want to go.',
      order: 1,
    },
    {
      slug: 'career-coaching',
      name: 'Career Coaching',
      title: 'Career Coaching Quizzes & Assessments',
      description: 'Discover your strengths, work style, and ideal career path with free career-coaching assessments.',
      emoji: '🚀',
      heroCopy: 'Figure out your next career move with assessments built around real coaching frameworks.',
      order: 2,
    },
    {
      slug: 'business-coaching',
      name: 'Business Coaching',
      title: 'Business & Executive Coaching Quizzes',
      description:
        'Assess your leadership, growth blockers, and business readiness with free business-coaching quizzes.',
      emoji: '📈',
      heroCopy: 'Pinpoint what is holding your business back with quick, focused diagnostics.',
      order: 3,
    },
    {
      slug: 'health-wellness-coaching',
      name: 'Health & Wellness',
      title: 'Health & Wellness Coaching Quizzes',
      description: 'Understand your energy, stress, and habits with free wellness and health-coaching assessments.',
      emoji: '🧘',
      heroCopy: 'Small changes, big results — start by understanding your current baseline.',
      order: 4,
    },
    {
      slug: 'relationship-coaching',
      name: 'Relationship Coaching',
      title: 'Relationship Coaching Quizzes',
      description: 'Explore your communication style and relationship patterns with free relationship-coaching quizzes.',
      emoji: '💬',
      heroCopy: 'Better relationships start with self-awareness. Take a quiz to begin.',
      order: 5,
    },
  ],

  // 真实测评 publicToken（RooQuiz 团队，quizster.app/a/{token}）。
  // 标题 / 描述 / 封面在 build 期由 Payload getPublicForm(publicToken) 拉取，
  // 无需在此写 seo；需要覆盖时再补 seo.title / seo.description / seo.faq。
  quizzes: [
    {
      publicToken: 'ssn6kdw6', // What's Your Self-Sabotage Pattern?
      slug: 'self-sabotage-pattern',
      categorySlugs: ['life-coaching'],
      featured: true,
      order: 1,
    },
    {
      publicToken: '9gcn38sp', // What's Your Procrastination Type?
      slug: 'procrastination-type',
      categorySlugs: ['life-coaching'],
      order: 2,
    },
    {
      publicToken: '5e6w29n8', // What's Really Holding You Back? Limiting Beliefs Scorecard
      slug: 'limiting-beliefs',
      categorySlugs: ['life-coaching'],
      order: 3,
    },
    {
      publicToken: 'ehr7e6as', // How Confident Are You Really? Confidence Scorecard
      slug: 'confidence-scorecard',
      categorySlugs: ['life-coaching'],
      order: 4,
    },
    {
      publicToken: '9jp9tkkz', // What's Your Career Archetype?
      slug: 'career-archetype',
      categorySlugs: ['career-coaching'],
      featured: true,
      order: 5,
    },
    {
      publicToken: 'hr845jez', // Is It Time for a Career Change? Readiness Scorecard
      slug: 'career-change-readiness',
      categorySlugs: ['career-coaching'],
      order: 6,
    },
    {
      publicToken: 'vdes5a8j', // What's Your Productivity Style?
      slug: 'productivity-style',
      categorySlugs: ['career-coaching'],
      order: 7,
    },
    {
      publicToken: '8dmhyvuu', // Discover Your Leadership Style
      slug: 'leadership-style',
      categorySlugs: ['business-coaching'],
      featured: true,
      order: 8,
    },
    {
      publicToken: 'h2s7shhn', // How Strong Is Your Leadership? Leadership Scorecard
      slug: 'leadership-scorecard',
      categorySlugs: ['business-coaching'],
      order: 9,
    },
    {
      publicToken: '6asmj28d', // Is Your Business Ready to Scale? The Growth Readiness Scorecard
      slug: 'business-scale-readiness',
      categorySlugs: ['business-coaching'],
      order: 10,
    },
    {
      publicToken: 'au8agrwa', // Which Founder Archetype Are You?
      slug: 'founder-archetype',
      categorySlugs: ['business-coaching'],
      featured: true,
      order: 11,
    },
    {
      publicToken: 'x594wcnf', // What's Your Selling Style?
      slug: 'selling-style',
      categorySlugs: ['business-coaching'],
      order: 12,
    },
    {
      publicToken: 'kv33pxut', // What's Your Stress Type?
      slug: 'stress-type',
      categorySlugs: ['health-wellness-coaching'],
      featured: true,
      order: 13,
    },
    {
      publicToken: '9jfaswcx', // Are You Burning Out? Burnout Risk Scorecard
      slug: 'burnout-risk',
      categorySlugs: ['health-wellness-coaching'],
      order: 14,
    },
    {
      publicToken: 'u7fsg6ek', // How Healthy Is Your Lifestyle? Wellness Scorecard
      slug: 'wellness-scorecard',
      categorySlugs: ['health-wellness-coaching'],
      order: 15,
    },
    {
      publicToken: 'dchgwe2b', // What's Your Fitness Personality?
      slug: 'fitness-personality',
      categorySlugs: ['health-wellness-coaching'],
      order: 16,
    },
    {
      publicToken: 'x8xgbenx', // What's Your Eating Personality?
      slug: 'eating-personality',
      categorySlugs: ['health-wellness-coaching'],
      order: 17,
    },
    {
      publicToken: 'dtvby4ca', // What's Your Attachment Style? How You Connect in Relationships
      slug: 'attachment-style',
      categorySlugs: ['relationship-coaching'],
      featured: true,
      order: 18,
    },
    {
      publicToken: 'sn97jbar', // What's Your Dating Pattern?
      slug: 'dating-pattern',
      categorySlugs: ['relationship-coaching'],
      order: 19,
    },
    {
      publicToken: 'zfxrszr6', // What's Your Parenting Style?
      slug: 'parenting-style',
      categorySlugs: ['relationship-coaching'],
      order: 20,
    },
  ],
}

// ---------------------------------------------------------------------------
// 构建期校验（fail-fast）
// ---------------------------------------------------------------------------

function validateConfig(input: SiteConfig): SiteConfig {
  const parsed = configSchema.parse(input)

  const seenCategory = new Set<string>()
  for (const category of parsed.categories) {
    if (seenCategory.has(category.slug)) throw new Error(`[site.config] 重复的分类 slug: ${category.slug}`)
    seenCategory.add(category.slug)
  }

  const seenQuiz = new Set<string>()
  for (const quiz of parsed.quizzes) {
    if (seenQuiz.has(quiz.slug)) throw new Error(`[site.config] 重复的测评 slug: ${quiz.slug}`)
    seenQuiz.add(quiz.slug)
    for (const categorySlug of quiz.categorySlugs) {
      if (!seenCategory.has(categorySlug)) {
        throw new Error(`[site.config] 测评 ${quiz.slug} 引用了不存在的分类: ${categorySlug}`)
      }
    }
  }

  return parsed
}

export const siteConfig = validateConfig(rawConfig)

/** 便捷导出：站点信息 */
export const site = siteConfig.site
