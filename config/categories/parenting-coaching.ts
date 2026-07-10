import type { CategoryFile } from '../schema'

/** niche · 父母教练（draft，待补题上线） */
export const parentingCoaching: CategoryFile = {
  category: {
    slug: 'parenting-coaching',
    name: 'Parenting Coach',
    title: 'Parenting Coach Quizzes & Assessments',
    description: 'Improve your parenting and parent-child communication. Free coaching quizzes and assessments.',
    emoji: '🧸',
    heroCopy: 'Improve your parenting and parent-child communication.',
    order: 16,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [],
}
