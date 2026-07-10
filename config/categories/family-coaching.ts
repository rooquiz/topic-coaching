import type { CategoryFile } from '../schema'

/** niche · 家庭教练（draft，待补题上线） */
export const familyCoaching: CategoryFile = {
  category: {
    slug: 'family-coaching',
    name: 'Family Coach',
    title: 'Family Coach Quizzes & Assessments',
    description: 'Build healthier family relationships. Free coaching quizzes and assessments.',
    emoji: '👪',
    heroCopy: 'Build healthier family relationships.',
    order: 15,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [],
}
