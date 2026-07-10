import type { CategoryFile } from '../schema'

/** niche · 表演教练（draft，待补题上线） */
export const actingCoaching: CategoryFile = {
  category: {
    slug: 'acting-coaching',
    name: 'Acting Coach',
    title: 'Acting Coach Quizzes & Assessments',
    description: 'Sharpen your acting technique. Free coaching quizzes and assessments.',
    emoji: '🎭',
    heroCopy: 'Sharpen your acting technique.',
    order: 11,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
