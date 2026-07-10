import type { CategoryFile } from '../schema'

/** niche · 礼仪教练（draft，待补题上线） */
export const etiquetteCoaching: CategoryFile = {
  category: {
    slug: 'etiquette-coaching',
    name: 'Etiquette Coach',
    title: 'Etiquette Coach Quizzes & Assessments',
    description: 'Master social etiquette. Free coaching quizzes and assessments.',
    emoji: '🎩',
    heroCopy: 'Master social etiquette.',
    order: 16,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
