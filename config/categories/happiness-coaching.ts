import type { CategoryFile } from '../schema'

/** niche · 幸福教练（draft，待补题上线） */
export const happinessCoaching: CategoryFile = {
  category: {
    slug: 'happiness-coaching',
    name: 'Happiness Coach',
    title: 'Happiness Coach Quizzes & Assessments',
    description: 'Raise life satisfaction with positive psychology. Free coaching quizzes and assessments.',
    emoji: '😊',
    heroCopy: 'Raise life satisfaction with positive psychology.',
    order: 13,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [],
}
