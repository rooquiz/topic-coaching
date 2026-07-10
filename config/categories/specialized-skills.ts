import type { CategoryFile } from '../schema'

/** Hub · 特殊领域（顶层支柱页，draft；旗下 niche 上线后去掉 draft） */
export const specializedSkills: CategoryFile = {
  category: {
    slug: 'specialized-skills',
    name: 'Specialized Skills',
    title: 'Specialized Skills Coaching Quizzes',
    description: 'Certified, hands-on instruction across specialized fields. Free coaching quizzes across the field.',
    emoji: '🎖️',
    heroCopy: 'Certified, hands-on instruction across specialized fields.',
    order: 8,
    draft: true,
  },
  quizzes: [],
}
