import type { CategoryFile } from '../schema'

/** niche · 康复训练教练（draft，待补题上线） */
export const rehabilitationCoaching: CategoryFile = {
  category: {
    slug: 'rehabilitation-coaching',
    name: 'Rehabilitation Coach',
    title: 'Rehabilitation Coach Quizzes & Assessments',
    description: 'Recover function and return to movement. Free coaching quizzes and assessments.',
    emoji: '🩹',
    heroCopy: 'Recover function and return to movement.',
    order: 23,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
