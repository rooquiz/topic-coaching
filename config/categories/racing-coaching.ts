import type { CategoryFile } from '../schema'

/** niche · 赛车教练（draft，待补题上线） */
export const racingCoaching: CategoryFile = {
  category: {
    slug: 'racing-coaching',
    name: 'Racing & Driving Coach',
    title: 'Racing & Driving Coach Quizzes & Assessments',
    description: 'Master driving technique and track craft. Free coaching quizzes and assessments.',
    emoji: '🏎️',
    heroCopy: 'Master driving technique and track craft.',
    order: 23,
    parent: 'sports-athletics',
    draft: true,
  },
  quizzes: [],
}
