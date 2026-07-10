import type { CategoryFile } from '../schema'

/** niche · 滑雪教练（draft，待补题上线） */
export const skiCoaching: CategoryFile = {
  category: {
    slug: 'ski-coaching',
    name: 'Ski Coach',
    title: 'Ski Coach Quizzes & Assessments',
    description: 'Improve your skiing technique. Free coaching quizzes and assessments.',
    emoji: '⛷️',
    heroCopy: 'Improve your skiing technique.',
    order: 20,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
