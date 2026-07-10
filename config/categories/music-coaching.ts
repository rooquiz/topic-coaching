import type { CategoryFile } from '../schema'

/** niche · 音乐教练（draft，待补题上线） */
export const musicCoaching: CategoryFile = {
  category: {
    slug: 'music-coaching',
    name: 'Music Coach',
    title: 'Music Coach Quizzes & Assessments',
    description: 'Learn an instrument or grow your voice. Free coaching quizzes and assessments.',
    emoji: '🎵',
    heroCopy: 'Learn an instrument or grow your voice.',
    order: 19,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
