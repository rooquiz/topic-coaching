import type { CategoryFile } from '../schema'

/** niche · 高尔夫教练（draft，待补题上线） */
export const golfCoaching: CategoryFile = {
  category: {
    slug: 'golf-coaching',
    name: 'Golf Coach',
    title: 'Golf Coach Quizzes & Assessments',
    description: 'Refine your swing and course strategy. Free coaching quizzes and assessments.',
    emoji: '⛳',
    heroCopy: 'Refine your swing and course strategy.',
    order: 17,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
