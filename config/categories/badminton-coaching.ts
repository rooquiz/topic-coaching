import type { CategoryFile } from '../schema'

/** niche · 羽毛球教练（draft，待补题上线） */
export const badmintonCoaching: CategoryFile = {
  category: {
    slug: 'badminton-coaching',
    name: 'Badminton Coach',
    title: 'Badminton Coach Quizzes & Assessments',
    description: 'Train technique and footwork. Free coaching quizzes and assessments.',
    emoji: '🏸',
    heroCopy: 'Train technique and footwork.',
    order: 14,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
