import type { CategoryFile } from '../schema'

/** Hub · 学习与教育（顶层支柱页，draft；旗下 niche 上线后去掉 draft） */
export const learningEducation: CategoryFile = {
  category: {
    slug: 'learning-education',
    name: 'Learning & Education',
    title: 'Learning & Education Coaching Quizzes',
    description: 'Study smarter with better methods, skills, and academic support. Free coaching quizzes across the field.',
    emoji: '📚',
    heroCopy: 'Study smarter with better methods, skills, and academic support.',
    order: 5,
    draft: true,
  },
  quizzes: [],
}
