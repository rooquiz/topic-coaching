import type { CategoryFile } from '../schema'

/** niche · 儿童成长教练（draft，待补题上线） */
export const childDevelopmentCoaching: CategoryFile = {
  category: {
    slug: 'child-development-coaching',
    name: 'Child Development Coach',
    title: 'Child Development Coach Quizzes & Assessments',
    description: 'Help children build key skills and confidence. Free coaching quizzes and assessments.',
    emoji: '🧒',
    heroCopy: 'Help children build key skills and confidence.',
    order: 17,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [],
}
