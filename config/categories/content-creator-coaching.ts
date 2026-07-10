import type { CategoryFile } from '../schema'

/** niche · 内容创作教练（draft，待补题上线） */
export const contentCreatorCoaching: CategoryFile = {
  category: {
    slug: 'content-creator-coaching',
    name: 'Content Creator Coach',
    title: 'Content Creator Coach Quizzes & Assessments',
    description: 'Grow as a content creator. Free coaching quizzes and assessments.',
    emoji: '📱',
    heroCopy: 'Grow as a content creator.',
    order: 17,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
