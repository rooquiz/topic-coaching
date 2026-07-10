import type { CategoryFile } from '../schema'

/** niche · 沟通教练（draft，待补题上线） */
export const communicationCoaching: CategoryFile = {
  category: {
    slug: 'communication-coaching',
    name: 'Communication Coach',
    title: 'Communication Coach Quizzes & Assessments',
    description: 'Communicate with clarity and influence. Free coaching quizzes and assessments.',
    emoji: '🗣️',
    heroCopy: 'Communicate with clarity and influence.',
    order: 16,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
