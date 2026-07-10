import type { CategoryFile } from '../schema'

/** Hub · 表演与创造力（顶层支柱页，draft；旗下 niche 上线后去掉 draft） */
export const performanceCreativity: CategoryFile = {
  category: {
    slug: 'performance-creativity',
    name: 'Performance & Creativity',
    title: 'Performance & Creativity Coaching Quizzes',
    description: 'Voice, stage, camera, and creative craft. Free coaching quizzes across the field.',
    emoji: '🎭',
    heroCopy: 'Voice, stage, camera, and creative craft.',
    order: 6,
    draft: true,
  },
  quizzes: [],
}
