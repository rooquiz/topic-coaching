import type { CategoryFile } from '../schema'

/** niche · 游泳教练（draft，待补题上线） */
export const swimmingCoaching: CategoryFile = {
  category: {
    slug: 'swimming-coaching',
    name: 'Swimming Coach',
    title: 'Swimming Coach Quizzes & Assessments',
    description: 'Build swim skills and race speed. Free coaching quizzes and assessments.',
    emoji: '🏊',
    heroCopy: 'Build swim skills and race speed.',
    order: 15,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
