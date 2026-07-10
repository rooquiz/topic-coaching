import type { CategoryFile } from '../schema'

/** niche · 阅读教练（draft，待补题上线） */
export const readingCoaching: CategoryFile = {
  category: {
    slug: 'reading-coaching',
    name: 'Reading Coach',
    title: 'Reading Coach Quizzes & Assessments',
    description: 'Strengthen reading ability. Free coaching quizzes and assessments.',
    emoji: '📖',
    heroCopy: 'Strengthen reading ability.',
    order: 17,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
