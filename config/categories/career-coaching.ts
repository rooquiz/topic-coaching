import type { CategoryFile } from '../schema'

/** niche · 职业教练 */
export const careerCoaching: CategoryFile = {
  category: {
    slug: 'career-coaching',
    name: 'Career Coaching',
    title: 'Career Coaching Quizzes & Assessments',
    description: 'Discover your strengths, work style, and ideal career path with free career-coaching assessments.',
    emoji: '🚀',
    heroCopy: 'Figure out your next career move with assessments built around real coaching frameworks.',
    order: 1,
    parent: 'career-business-leadership',
  },
  quizzes: [
    { publicToken: '9jp9tkkz', slug: 'career-archetype', featured: true, order: 5 },
    { publicToken: 'hr845jez', slug: 'career-change-readiness', order: 6 },
    { publicToken: 'vdes5a8j', slug: 'productivity-style', order: 7 },
  ],
}
