import type { CategoryFile } from '../schema'

/** niche · 记忆教练（draft，待补题上线） */
export const memoryCoaching: CategoryFile = {
  category: {
    slug: 'memory-coaching',
    name: 'Memory Coach',
    title: 'Memory Coach Quizzes & Assessments',
    description: 'Build powerful memory techniques. Free coaching quizzes and assessments.',
    emoji: '🧠',
    heroCopy: 'Build powerful memory techniques.',
    order: 16,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
