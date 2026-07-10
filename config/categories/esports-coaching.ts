import type { CategoryFile } from '../schema'

/** niche · 电竞教练（draft，待补题上线） */
export const esportsCoaching: CategoryFile = {
  category: {
    slug: 'esports-coaching',
    name: 'Esports Coach',
    title: 'Esports Coach Quizzes & Assessments',
    description: 'Level up tactics, teamwork, and game analysis. Free coaching quizzes and assessments.',
    emoji: '🎮',
    heroCopy: 'Level up tactics, teamwork, and game analysis.',
    order: 22,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
