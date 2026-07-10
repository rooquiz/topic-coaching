import type { CategoryFile } from '../schema'

/** niche · 武术教练（draft，待补题上线） */
export const martialArtsCoaching: CategoryFile = {
  category: {
    slug: 'martial-arts-coaching',
    name: 'Martial Arts Coach',
    title: 'Martial Arts Coach Quizzes & Assessments',
    description: 'Learn combat skills and forms. Free coaching quizzes and assessments.',
    emoji: '🥋',
    heroCopy: 'Learn combat skills and forms.',
    order: 19,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
