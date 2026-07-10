import type { CategoryFile } from '../schema'

/** niche · 安全教练（draft，待补题上线） */
export const safetyCoaching: CategoryFile = {
  category: {
    slug: 'safety-coaching',
    name: 'Safety Coach',
    title: 'Safety Coach Quizzes & Assessments',
    description: 'Train safe behavior and awareness. Free coaching quizzes and assessments.',
    emoji: '🦺',
    heroCopy: 'Train safe behavior and awareness.',
    order: 13,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
