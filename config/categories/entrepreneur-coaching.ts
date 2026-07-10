import type { CategoryFile } from '../schema'

/** niche · 创业教练（draft，待补题上线） */
export const entrepreneurCoaching: CategoryFile = {
  category: {
    slug: 'entrepreneur-coaching',
    name: 'Entrepreneur Coach',
    title: 'Entrepreneur Coach Quizzes & Assessments',
    description: 'Plan your startup and build founder skills. Free coaching quizzes and assessments.',
    emoji: '🚀',
    heroCopy: 'Plan your startup and build founder skills.',
    order: 13,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
