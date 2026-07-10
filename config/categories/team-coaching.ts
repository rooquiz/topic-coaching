import type { CategoryFile } from '../schema'

/** niche · 团队教练（draft，待补题上线） */
export const teamCoaching: CategoryFile = {
  category: {
    slug: 'team-coaching',
    name: 'Team Coach',
    title: 'Team Coach Quizzes & Assessments',
    description: 'Build stronger team collaboration. Free coaching quizzes and assessments.',
    emoji: '👥',
    heroCopy: 'Build stronger team collaboration.',
    order: 19,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
