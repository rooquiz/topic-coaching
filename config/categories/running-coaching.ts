import type { CategoryFile } from '../schema'

/** niche · 跑步教练（draft，待补题上线） */
export const runningCoaching: CategoryFile = {
  category: {
    slug: 'running-coaching',
    name: 'Running Coach',
    title: 'Running Coach Quizzes & Assessments',
    description: 'Train for marathon, speed, and endurance. Free coaching quizzes and assessments.',
    emoji: '🏃',
    heroCopy: 'Train for marathon, speed, and endurance.',
    order: 16,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
