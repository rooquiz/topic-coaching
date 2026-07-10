import type { CategoryFile } from '../schema'

/** niche · 军事教练（draft，待补题上线） */
export const militaryCoaching: CategoryFile = {
  category: {
    slug: 'military-coaching',
    name: 'Military Coach',
    title: 'Military Coach Quizzes & Assessments',
    description: 'Train military skills and discipline. Free coaching quizzes and assessments.',
    emoji: '🎖️',
    heroCopy: 'Train military skills and discipline.',
    order: 11,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
