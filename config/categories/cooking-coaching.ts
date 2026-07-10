import type { CategoryFile } from '../schema'

/** niche · 烹饪教练（draft，待补题上线） */
export const cookingCoaching: CategoryFile = {
  category: {
    slug: 'cooking-coaching',
    name: 'Cooking Coach',
    title: 'Cooking Coach Quizzes & Assessments',
    description: 'Build real cooking skills. Free coaching quizzes and assessments.',
    emoji: '🍳',
    heroCopy: 'Build real cooking skills.',
    order: 17,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
