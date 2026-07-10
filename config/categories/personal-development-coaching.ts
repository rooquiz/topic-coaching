import type { CategoryFile } from '../schema'

/** niche · 个人成长教练（draft，待补题上线） */
export const personalDevelopmentCoaching: CategoryFile = {
  category: {
    slug: 'personal-development-coaching',
    name: 'Personal Development Coach',
    title: 'Personal Development Coach Quizzes & Assessments',
    description: 'Grow through self-improvement and habit change. Free coaching quizzes and assessments.',
    emoji: '🌱',
    heroCopy: 'Grow through self-improvement and habit change.',
    order: 11,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [],
}
