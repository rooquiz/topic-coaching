import type { CategoryFile } from '../schema'

/** niche · 投资教练（draft，待补题上线） */
export const investmentCoaching: CategoryFile = {
  category: {
    slug: 'investment-coaching',
    name: 'Investment Coach',
    title: 'Investment Coach Quizzes & Assessments',
    description: 'Build investing habits and knowledge. Free coaching quizzes and assessments.',
    emoji: '📈',
    heroCopy: 'Build investing habits and knowledge.',
    order: 13,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
