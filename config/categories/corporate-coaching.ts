import type { CategoryFile } from '../schema'

/** niche · 企业教练（draft，待补题上线） */
export const corporateCoaching: CategoryFile = {
  category: {
    slug: 'corporate-coaching',
    name: 'Corporate Coach',
    title: 'Corporate Coach Quizzes & Assessments',
    description: 'Drive organizational development. Free coaching quizzes and assessments.',
    emoji: '🏢',
    heroCopy: 'Drive organizational development.',
    order: 14,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
