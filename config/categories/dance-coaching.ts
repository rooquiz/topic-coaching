import type { CategoryFile } from '../schema'

/** niche · 舞蹈教练（draft，待补题上线） */
export const danceCoaching: CategoryFile = {
  category: {
    slug: 'dance-coaching',
    name: 'Dance Coach',
    title: 'Dance Coach Quizzes & Assessments',
    description: 'Grow dance technique and performance. Free coaching quizzes and assessments.',
    emoji: '💃',
    heroCopy: 'Grow dance technique and performance.',
    order: 21,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
