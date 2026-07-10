import type { CategoryFile } from '../schema'

/** niche · 消防训练教练（draft，待补题上线） */
export const fireTrainingCoaching: CategoryFile = {
  category: {
    slug: 'fire-training-coaching',
    name: 'Fire Training Coach',
    title: 'Fire Training Coach Quizzes & Assessments',
    description: 'Build emergency response skills. Free coaching quizzes and assessments.',
    emoji: '🚒',
    heroCopy: 'Build emergency response skills.',
    order: 12,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
