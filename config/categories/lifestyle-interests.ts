import type { CategoryFile } from '../schema'

/** Hub · 生活方式与兴趣（顶层支柱页，draft；旗下 niche 上线后去掉 draft） */
export const lifestyleInterests: CategoryFile = {
  category: {
    slug: 'lifestyle-interests',
    name: 'Lifestyle & Interests',
    title: 'Lifestyle & Interests Coaching Quizzes',
    description: 'Money, image, home, and everyday-life coaching. Free coaching quizzes across the field.',
    emoji: '✨',
    heroCopy: 'Money, image, home, and everyday-life coaching.',
    order: 7,
    draft: true,
  },
  quizzes: [],
}
