import type { CategoryFile } from '../schema'

/** niche · 形象教练（draft，待补题上线） */
export const imageCoaching: CategoryFile = {
  category: {
    slug: 'image-coaching',
    name: 'Image & Style Coach',
    title: 'Image & Style Coach Quizzes & Assessments',
    description: 'Refine your style and personal brand. Free coaching quizzes and assessments.',
    emoji: '👗',
    heroCopy: 'Refine your style and personal brand.',
    order: 15,
    parent: 'lifestyle-interests',
    draft: true,
  },
  quizzes: [],
}
