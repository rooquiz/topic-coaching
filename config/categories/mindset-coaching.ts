import type { CategoryFile } from '../schema'

/** niche · 心态教练（draft，待补题上线） */
export const mindsetCoaching: CategoryFile = {
  category: {
    slug: 'mindset-coaching',
    name: 'Mindset Coach',
    title: 'Mindset Coach Quizzes & Assessments',
    description: 'Strengthen your mental models and resilience. Free coaching quizzes and assessments.',
    emoji: '🧠',
    heroCopy: 'Strengthen your mental models and resilience.',
    order: 12,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [],
}
