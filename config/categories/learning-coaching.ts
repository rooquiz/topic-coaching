import type { CategoryFile } from '../schema'

/** niche · 学习教练（draft，待补题上线） */
export const learningCoaching: CategoryFile = {
  category: {
    slug: 'learning-coaching',
    name: 'Learning Coach',
    title: 'Learning Coach Quizzes & Assessments',
    description: 'Learn faster with better methods. Free coaching quizzes and assessments.',
    emoji: '📚',
    heroCopy: 'Learn faster with better methods.',
    order: 11,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
