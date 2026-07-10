import type { CategoryFile } from '../schema'

/** niche · 营养教练（draft，待补题上线） */
export const nutritionCoaching: CategoryFile = {
  category: {
    slug: 'nutrition-coaching',
    name: 'Nutrition Coach',
    title: 'Nutrition Coach Quizzes & Assessments',
    description: 'Improve eating habits and plan nutrition. Free coaching quizzes and assessments.',
    emoji: '🥗',
    heroCopy: 'Improve eating habits and plan nutrition.',
    order: 21,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
