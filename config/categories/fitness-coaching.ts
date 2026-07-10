import type { CategoryFile } from '../schema'

/** niche · 健身教练 / 私人教练（draft，待补题上线） */
export const fitnessCoaching: CategoryFile = {
  category: {
    slug: 'fitness-coaching',
    name: 'Fitness Coach / Personal Trainer',
    title: 'Fitness Coach / Personal Trainer Quizzes & Assessments',
    description: 'Build strength, lose fat, and train with a plan. Free coaching quizzes and assessments.',
    emoji: '💪',
    heroCopy: 'Build strength, lose fat, and train with a plan.',
    order: 11,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
