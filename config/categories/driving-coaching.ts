import type { CategoryFile } from '../schema'

/** niche · 驾驶教练（draft，待补题上线） */
export const drivingCoaching: CategoryFile = {
  category: {
    slug: 'driving-coaching',
    name: 'Driving Instructor',
    title: 'Driving Instructor Quizzes & Assessments',
    description: 'Learn to drive with confidence. Free coaching quizzes and assessments.',
    emoji: '🚗',
    heroCopy: 'Learn to drive with confidence.',
    order: 14,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
