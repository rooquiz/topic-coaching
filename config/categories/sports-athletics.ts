import type { CategoryFile } from '../schema'

/** Hub · 体育竞技（顶层支柱页，draft；旗下 niche 上线后去掉 draft） */
export const sportsAthletics: CategoryFile = {
  category: {
    slug: 'sports-athletics',
    name: 'Sports & Athletics',
    title: 'Sports & Athletics Coaching Quizzes',
    description: 'Sport-specific coaching across technique, tactics, and competition. Free coaching quizzes across the field.',
    emoji: '🏅',
    heroCopy: 'Sport-specific coaching across technique, tactics, and competition.',
    order: 4,
    draft: true,
  },
  quizzes: [],
}
