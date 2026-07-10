import type { CategoryFile } from '../schema'

/** niche · 冥想教练（draft，待补题上线） */
export const meditationCoaching: CategoryFile = {
  category: {
    slug: 'meditation-coaching',
    name: 'Meditation Coach',
    title: 'Meditation Coach Quizzes & Assessments',
    description: 'Grow mindfulness, focus, and calm. Free coaching quizzes and assessments.',
    emoji: '🧠',
    heroCopy: 'Grow mindfulness, focus, and calm.',
    order: 19,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
