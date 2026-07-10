import type { CategoryFile } from '../schema'

/** niche · 声音教练（draft，待补题上线） */
export const voiceCoaching: CategoryFile = {
  category: {
    slug: 'voice-coaching',
    name: 'Voice Coach',
    title: 'Voice Coach Quizzes & Assessments',
    description: 'Train and strengthen your voice. Free coaching quizzes and assessments.',
    emoji: '🎙️',
    heroCopy: 'Train and strengthen your voice.',
    order: 12,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
