import type { CategoryFile } from '../schema'

/** niche · 歌唱教练（draft，待补题上线） */
export const vocalCoaching: CategoryFile = {
  category: {
    slug: 'vocal-coaching',
    name: 'Vocal & Singing Coach',
    title: 'Vocal & Singing Coach Quizzes & Assessments',
    description: 'Improve your singing technique. Free coaching quizzes and assessments.',
    emoji: '🎤',
    heroCopy: 'Improve your singing technique.',
    order: 13,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
