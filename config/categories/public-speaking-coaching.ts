import type { CategoryFile } from '../schema'

/** niche · 演讲教练（draft，待补题上线） */
export const publicSpeakingCoaching: CategoryFile = {
  category: {
    slug: 'public-speaking-coaching',
    name: 'Public Speaking Coach',
    title: 'Public Speaking Coach Quizzes & Assessments',
    description: 'Speak in public with confidence and presence. Free coaching quizzes and assessments.',
    emoji: '🎤',
    heroCopy: 'Speak in public with confidence and presence.',
    order: 18,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
