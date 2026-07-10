import type { CategoryFile } from '../schema'

/** niche · 销售教练（draft，待补题上线） */
export const salesCoaching: CategoryFile = {
  category: {
    slug: 'sales-coaching',
    name: 'Sales Coach',
    title: 'Sales Coach Quizzes & Assessments',
    description: 'Improve your sales skills and results. Free coaching quizzes and assessments.',
    emoji: '💼',
    heroCopy: 'Improve your sales skills and results.',
    order: 15,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
