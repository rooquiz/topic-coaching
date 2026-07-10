import type { CategoryFile } from '../schema'

/** niche · 生活整理教练（draft，待补题上线） */
export const lifeOrganizationCoaching: CategoryFile = {
  category: {
    slug: 'life-organization-coaching',
    name: 'Life Organization Coach',
    title: 'Life Organization Coach Quizzes & Assessments',
    description: 'Declutter and run life more efficiently. Free coaching quizzes and assessments.',
    emoji: '🗂️',
    heroCopy: 'Declutter and run life more efficiently.',
    order: 14,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
