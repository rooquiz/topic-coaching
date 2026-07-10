import type { CategoryFile } from '../schema'

/** niche · 飞行教练（draft，待补题上线） */
export const flightCoaching: CategoryFile = {
  category: {
    slug: 'flight-coaching',
    name: 'Flight Instructor',
    title: 'Flight Instructor Quizzes & Assessments',
    description: 'Train toward flight skills. Free coaching quizzes and assessments.',
    emoji: '✈️',
    heroCopy: 'Train toward flight skills.',
    order: 15,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
