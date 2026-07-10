import type { CategoryFile } from '../schema'

/** niche · 写作教练（draft，待补题上线） */
export const writingCoaching: CategoryFile = {
  category: {
    slug: 'writing-coaching',
    name: 'Writing Coach',
    title: 'Writing Coach Quizzes & Assessments',
    description: 'Improve your writing. Free coaching quizzes and assessments.',
    emoji: '✍️',
    heroCopy: 'Improve your writing.',
    order: 18,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
