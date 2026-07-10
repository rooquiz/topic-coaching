import type { CategoryFile } from '../schema'

/** niche · 语言教练（draft，待补题上线） */
export const languageCoaching: CategoryFile = {
  category: {
    slug: 'language-coaching',
    name: 'Language Coach',
    title: 'Language Coach Quizzes & Assessments',
    description: 'Learn a foreign language effectively. Free coaching quizzes and assessments.',
    emoji: '🗣️',
    heroCopy: 'Learn a foreign language effectively.',
    order: 14,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
