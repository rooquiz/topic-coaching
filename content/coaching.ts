import { z } from 'zod'

/**
 * Coaching 专题「本地清单」——唯一决定「哪些测评属于 coaching、如何分组」的地方。
 * 测评正文/题目/封面仍来自 Payload（按 publicToken 逐份拉取）；本文件只维护成员与分组。
 *
 * 新增一份测评：在 berlin 建卷 → 拿到公开链接里的 publicToken → 在 quizzes 里加一条。
 */

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
  /** 分类落地页 hero 区文案（可选） */
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
  /** 指定作答语言（对应 Form_Language，如 en_US），不填则用测评默认语言 */
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

const manifestSchema = z.object({
  categories: z.array(categorySchema),
  quizzes: z.array(quizSchema),
})

export type CoachingCategory = z.infer<typeof categorySchema>
export type CoachingQuiz = z.infer<typeof quizSchema>
export type CoachingManifest = z.infer<typeof manifestSchema>

const rawManifest: CoachingManifest = {
  categories: [
    {
      slug: 'life-coaching',
      name: 'Life Coaching',
      title: 'Life Coaching Quizzes & Assessments',
      description:
        'Free life-coaching quizzes to clarify your values, habits, and direction — and find the right next step.',
      heroCopy: 'Get unstuck. Short, insightful assessments that help you see where you are and where you want to go.',
      order: 1,
    },
    {
      slug: 'career-coaching',
      name: 'Career Coaching',
      title: 'Career Coaching Quizzes & Assessments',
      description:
        'Discover your strengths, work style, and ideal career path with free career-coaching assessments.',
      heroCopy: 'Figure out your next career move with assessments built around real coaching frameworks.',
      order: 2,
    },
    {
      slug: 'business-coaching',
      name: 'Business Coaching',
      title: 'Business & Executive Coaching Quizzes',
      description:
        'Assess your leadership, growth blockers, and business readiness with free business-coaching quizzes.',
      heroCopy: 'Pinpoint what is holding your business back with quick, focused diagnostics.',
      order: 3,
    },
    {
      slug: 'health-wellness-coaching',
      name: 'Health & Wellness',
      title: 'Health & Wellness Coaching Quizzes',
      description:
        'Understand your energy, stress, and habits with free wellness and health-coaching assessments.',
      heroCopy: 'Small changes, big results — start by understanding your current baseline.',
      order: 4,
    },
    {
      slug: 'relationship-coaching',
      name: 'Relationship Coaching',
      title: 'Relationship Coaching Quizzes',
      description:
        'Explore your communication style and relationship patterns with free relationship-coaching quizzes.',
      heroCopy: 'Better relationships start with self-awareness. Take a quiz to begin.',
      order: 5,
    },
  ],
  // TODO: 用真实测评的 publicToken 替换以下占位值（在 berlin 建卷后填入）。
  // 占位 token 拉不到 Payload 数据时，落地页会回退到这里的 seo 文案，站点仍可正常构建与浏览。
  quizzes: [
    {
      publicToken: 'REPLACE_ME_life_direction',
      slug: 'whats-your-life-direction',
      categorySlugs: ['life-coaching'],
      featured: true,
      order: 1,
      seo: {
        title: "What's Your Life Direction? — Free Life Coaching Quiz",
        description:
          'A 3-minute assessment to reveal how clear you are on your goals, values, and next steps in life.',
        faq: [
          { q: 'How long does the quiz take?', a: 'About 3 minutes — 10 quick questions.' },
          { q: 'Is it free?', a: 'Yes, completely free. You get your personalized result at the end.' },
        ],
      },
    },
    {
      publicToken: 'REPLACE_ME_career_path',
      slug: 'find-your-ideal-career-path',
      categorySlugs: ['career-coaching'],
      featured: true,
      order: 2,
      seo: {
        title: 'Find Your Ideal Career Path — Free Career Coaching Quiz',
        description:
          'Discover which career directions fit your strengths and work style with this free career assessment.',
      },
    },
    {
      publicToken: 'REPLACE_ME_leadership_style',
      slug: 'whats-your-leadership-style',
      categorySlugs: ['business-coaching'],
      featured: true,
      order: 3,
      seo: {
        title: "What's Your Leadership Style? — Free Assessment",
        description: 'Understand how you lead and where to grow with this free leadership-style assessment.',
      },
    },
    {
      publicToken: 'REPLACE_ME_stress_check',
      slug: 'stress-and-energy-check',
      categorySlugs: ['health-wellness-coaching'],
      order: 4,
      seo: {
        title: 'Stress & Energy Check — Free Wellness Quiz',
        description: 'A quick check-in on your stress levels and energy, with tips tailored to your result.',
      },
    },
    {
      publicToken: 'REPLACE_ME_communication_style',
      slug: 'your-communication-style',
      categorySlugs: ['relationship-coaching'],
      order: 5,
      seo: {
        title: 'Your Communication Style — Free Relationship Quiz',
        description: 'Learn your default communication style and how it shapes your relationships.',
      },
    },
  ],
}

/** 构建期完整性校验：slug 唯一、分类引用有效。任何问题都在 import 时抛错，让构建 fail-fast。 */
function validateManifest(input: CoachingManifest): CoachingManifest {
  const parsed = manifestSchema.parse(input)

  const seenCategory = new Set<string>()
  for (const category of parsed.categories) {
    if (seenCategory.has(category.slug)) throw new Error(`[coaching manifest] 重复的分类 slug: ${category.slug}`)
    seenCategory.add(category.slug)
  }

  const seenQuiz = new Set<string>()
  for (const quiz of parsed.quizzes) {
    if (seenQuiz.has(quiz.slug)) throw new Error(`[coaching manifest] 重复的测评 slug: ${quiz.slug}`)
    seenQuiz.add(quiz.slug)
    for (const categorySlug of quiz.categorySlugs) {
      if (!seenCategory.has(categorySlug)) {
        throw new Error(`[coaching manifest] 测评 ${quiz.slug} 引用了不存在的分类: ${categorySlug}`)
      }
    }
  }

  return parsed
}

export const coachingManifest = validateManifest(rawManifest)
