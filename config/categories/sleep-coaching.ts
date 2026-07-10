import type { CategoryFile } from '../schema'

/** niche · 睡眠教练（draft，待补题上线） */
export const sleepCoaching: CategoryFile = {
  category: {
    slug: 'sleep-coaching',
    name: 'Sleep Coach',
    title: 'Sleep Coach Quizzes & Assessments',
    description: 'Build better sleep habits. Free coaching quizzes and assessments.',
    emoji: '😴',
    heroCopy: 'Build better sleep habits.',
    order: 22,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
