import type { CategoryFile } from '../schema'

/**
 * niche · 领导力教练（draft）
 * 现有 2 道题（leadership-style / leadership-scorecard），未达 ≥3 开页门槛。
 * 补齐第 3 道（如 "Are You Ready to Lead? Leadership Readiness Scorecard"）后去掉 draft 即促级。
 */
export const leadershipCoaching: CategoryFile = {
  category: {
    slug: 'leadership-coaching',
    name: 'Leadership Coaching',
    title: 'Leadership Coaching Quizzes & Assessments',
    description:
      'Discover your leadership style and how ready you are to lead with free leadership-coaching assessments.',
    emoji: '🧭',
    heroCopy: 'Great leaders are made. See your natural style and where to grow next.',
    order: 3,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [
    { publicToken: '8dmhyvuu', slug: 'leadership-style', featured: true, order: 8 },
    { publicToken: 'h2s7shhn', slug: 'leadership-scorecard', order: 9 },
  ],
}
