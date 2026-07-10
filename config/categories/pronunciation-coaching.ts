import type { CategoryFile } from '../schema'

/** niche · 发音教练（draft，待补题上线） */
export const pronunciationCoaching: CategoryFile = {
  category: {
    slug: 'pronunciation-coaching',
    name: 'Pronunciation Coach',
    title: 'Pronunciation Coach Quizzes & Assessments',
    description: 'Improve pronunciation and speaking. Free coaching quizzes and assessments.',
    emoji: '🔤',
    heroCopy: 'Improve pronunciation and speaking.',
    order: 15,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
