import type { CategoryFile } from '../schema'

/** niche · 网球教练（draft，待补题上线） */
export const tennisCoaching: CategoryFile = {
  category: {
    slug: 'tennis-coaching',
    name: 'Tennis Coach',
    title: 'Tennis Coach Quizzes & Assessments',
    description: 'Improve strokes and match strategy. Free coaching quizzes and assessments.',
    emoji: '🎾',
    heroCopy: 'Improve strokes and match strategy.',
    order: 13,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
