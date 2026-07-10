import type { CategoryFile } from '../schema'

/** niche · 高管教练（draft，待补题上线） */
export const executiveCoaching: CategoryFile = {
  category: {
    slug: 'executive-coaching',
    name: 'Executive Coach',
    title: 'Executive Coach Quizzes & Assessments',
    description: 'Develop as a senior leader. Free coaching quizzes and assessments.',
    emoji: '👔',
    heroCopy: 'Develop as a senior leader.',
    order: 12,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
