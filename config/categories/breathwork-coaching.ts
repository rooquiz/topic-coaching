import type { CategoryFile } from '../schema'

/** niche · 呼吸教练（draft，待补题上线） */
export const breathworkCoaching: CategoryFile = {
  category: {
    slug: 'breathwork-coaching',
    name: 'Breathwork Coach',
    title: 'Breathwork Coach Quizzes & Assessments',
    description: 'Use breathing techniques to regulate stress. Free coaching quizzes and assessments.',
    emoji: '🌬️',
    heroCopy: 'Use breathing techniques to regulate stress.',
    order: 20,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
