import type { CategoryFile } from '../schema'

/** niche · 艺术教练（draft，待补题上线） */
export const artCoaching: CategoryFile = {
  category: {
    slug: 'art-coaching',
    name: 'Art Coach',
    title: 'Art Coach Quizzes & Assessments',
    description: 'Develop drawing and creative skills. Free coaching quizzes and assessments.',
    emoji: '🎨',
    heroCopy: 'Develop drawing and creative skills.',
    order: 20,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
