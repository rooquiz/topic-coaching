import type { CategoryFile } from '../schema'

/** niche · 财务教练（draft，待补题上线） */
export const financialCoaching: CategoryFile = {
  category: {
    slug: 'financial-coaching',
    name: 'Financial Coach',
    title: 'Financial Coach Quizzes & Assessments',
    description: 'Take control of your personal finances. Free coaching quizzes and assessments.',
    emoji: '💰',
    heroCopy: 'Take control of your personal finances.',
    order: 12,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
