import type { CategoryFile } from '../schema'

/** niche · 体能教练（draft，待补题上线） */
export const strengthConditioningCoaching: CategoryFile = {
  category: {
    slug: 'strength-conditioning-coaching',
    name: 'Strength & Conditioning Coach',
    title: 'Strength & Conditioning Coach Quizzes & Assessments',
    description: 'Develop power, speed, and athletic conditioning. Free coaching quizzes and assessments.',
    emoji: '🏋️',
    heroCopy: 'Develop power, speed, and athletic conditioning.',
    order: 12,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
