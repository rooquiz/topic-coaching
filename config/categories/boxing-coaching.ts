import type { CategoryFile } from '../schema'

/** niche · 拳击教练（draft，待补题上线） */
export const boxingCoaching: CategoryFile = {
  category: {
    slug: 'boxing-coaching',
    name: 'Boxing Coach',
    title: 'Boxing Coach Quizzes & Assessments',
    description: 'Build technique, defense, and conditioning. Free coaching quizzes and assessments.',
    emoji: '🥊',
    heroCopy: 'Build technique, defense, and conditioning.',
    order: 18,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
