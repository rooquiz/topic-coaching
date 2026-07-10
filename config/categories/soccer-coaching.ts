import type { CategoryFile } from '../schema'

/** niche · 足球教练（draft，待补题上线） */
export const soccerCoaching: CategoryFile = {
  category: {
    slug: 'soccer-coaching',
    name: 'Soccer Coach',
    title: 'Soccer Coach Quizzes & Assessments',
    description: 'Master technique, tactics, and match play. Free coaching quizzes and assessments.',
    emoji: '⚽',
    heroCopy: 'Master technique, tactics, and match play.',
    order: 11,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
