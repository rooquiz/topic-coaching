import type { CategoryFile } from '../schema'

/** niche · 学业教练（draft，待补题上线） */
export const academicCoaching: CategoryFile = {
  category: {
    slug: 'academic-coaching',
    name: 'Academic Coach',
    title: 'Academic Coach Quizzes & Assessments',
    description: 'Plan and manage student study. Free coaching quizzes and assessments.',
    emoji: '🎓',
    heroCopy: 'Plan and manage student study.',
    order: 12,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
