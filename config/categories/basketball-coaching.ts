import type { CategoryFile } from '../schema'

/** niche · 篮球教练（draft，待补题上线） */
export const basketballCoaching: CategoryFile = {
  category: {
    slug: 'basketball-coaching',
    name: 'Basketball Coach',
    title: 'Basketball Coach Quizzes & Assessments',
    description: 'Sharpen skills and team play. Free coaching quizzes and assessments.',
    emoji: '🏀',
    heroCopy: 'Sharpen skills and team play.',
    order: 12,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
