import type { CategoryFile } from '../schema'

/** niche · 谈判教练（draft，待补题上线） */
export const negotiationCoaching: CategoryFile = {
  category: {
    slug: 'negotiation-coaching',
    name: 'Negotiation Coach',
    title: 'Negotiation Coach Quizzes & Assessments',
    description: 'Sharpen your negotiation skills. Free coaching quizzes and assessments.',
    emoji: '🤝',
    heroCopy: 'Sharpen your negotiation skills.',
    order: 17,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
