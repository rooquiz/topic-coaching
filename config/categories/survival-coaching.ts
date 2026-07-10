import type { CategoryFile } from '../schema'

/** niche · 生存技能教练（draft，待补题上线） */
export const survivalCoaching: CategoryFile = {
  category: {
    slug: 'survival-coaching',
    name: 'Survival Skills Coach',
    title: 'Survival Skills Coach Quizzes & Assessments',
    description: 'Learn wilderness survival skills. Free coaching quizzes and assessments.',
    emoji: '🧭',
    heroCopy: 'Learn wilderness survival skills.',
    order: 18,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
