import type { CategoryFile } from '../schema'

/** niche · 运动表现教练（draft，待补题上线） */
export const sportsPerformanceCoaching: CategoryFile = {
  category: {
    slug: 'sports-performance-coaching',
    name: 'Sports Performance Coach',
    title: 'Sports Performance Coach Quizzes & Assessments',
    description: 'Reach peak competitive performance. Free coaching quizzes and assessments.',
    emoji: '🎯',
    heroCopy: 'Reach peak competitive performance.',
    order: 13,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
