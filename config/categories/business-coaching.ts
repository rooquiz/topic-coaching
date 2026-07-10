import type { CategoryFile } from '../schema'

/** niche · 商业教练（领导力测评已拆到 leadership-coaching） */
export const businessCoaching: CategoryFile = {
  category: {
    slug: 'business-coaching',
    name: 'Business Coaching',
    title: 'Business & Growth Coaching Quizzes',
    description: 'Assess your growth blockers, founder profile, and business readiness with free business-coaching quizzes.',
    emoji: '📈',
    heroCopy: 'Pinpoint what is holding your business back with quick, focused diagnostics.',
    order: 2,
    parent: 'career-business-leadership',
  },
  quizzes: [
    { publicToken: '6asmj28d', slug: 'business-scale-readiness', order: 10 },
    { publicToken: 'au8agrwa', slug: 'founder-archetype', featured: true, order: 11 },
    { publicToken: 'x594wcnf', slug: 'selling-style', order: 12 },
  ],
}
