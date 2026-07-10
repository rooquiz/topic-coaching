import type { CategoryFile } from '../schema'

/** niche · 宠物训练教练（draft，待补题上线） */
export const petTrainingCoaching: CategoryFile = {
  category: {
    slug: 'pet-training-coaching',
    name: 'Pet Training Coach',
    title: 'Pet Training Coach Quizzes & Assessments',
    description: 'Train pet behavior with proven methods. Free coaching quizzes and assessments.',
    emoji: '🐕',
    heroCopy: 'Train pet behavior with proven methods.',
    order: 18,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
