import type { CategoryFile } from '../schema'

/** niche · 潜水教练（draft，待补题上线） */
export const divingCoaching: CategoryFile = {
  category: {
    slug: 'diving-coaching',
    name: 'Diving Instructor',
    title: 'Diving Instructor Quizzes & Assessments',
    description: 'Learn diving skills safely. Free coaching quizzes and assessments.',
    emoji: '🤿',
    heroCopy: 'Learn diving skills safely.',
    order: 16,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
