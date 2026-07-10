import type { CategoryFile } from '../schema'

/** niche · 创意教练（draft，待补题上线） */
export const creativityCoaching: CategoryFile = {
  category: {
    slug: 'creativity-coaching',
    name: 'Creativity Coach',
    title: 'Creativity Coach Quizzes & Assessments',
    description: 'Unlock and develop your creativity. Free coaching quizzes and assessments.',
    emoji: '💡',
    heroCopy: 'Unlock and develop your creativity.',
    order: 16,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
