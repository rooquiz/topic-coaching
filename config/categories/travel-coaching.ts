import type { CategoryFile } from '../schema'

/** niche · 旅行教练（draft，待补题上线） */
export const travelCoaching: CategoryFile = {
  category: {
    slug: 'travel-coaching',
    name: 'Travel Coach',
    title: 'Travel Coach Quizzes & Assessments',
    description: 'Plan better trips and travel with confidence. Free coaching quizzes and assessments.',
    emoji: '✈️',
    heroCopy: 'Plan better trips and travel with confidence.',
    order: 11,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
