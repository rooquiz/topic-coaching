import type { CategoryFile } from '../schema'

/** niche · 模特教练（draft，待补题上线） */
export const modelCoaching: CategoryFile = {
  category: {
    slug: 'model-coaching',
    name: 'Model Coach',
    title: 'Model Coach Quizzes & Assessments',
    description: 'Master runway, posing, and image. Free coaching quizzes and assessments.',
    emoji: '📸',
    heroCopy: 'Master runway, posing, and image.',
    order: 15,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
