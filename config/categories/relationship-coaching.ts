import type { CategoryFile } from '../schema'

/** niche · 关系教练 */
export const relationshipCoaching: CategoryFile = {
  category: {
    slug: 'relationship-coaching',
    name: 'Relationship Coaching',
    title: 'Relationship Coaching Quizzes',
    description:
      'Explore your communication style and relationship patterns with free relationship-coaching quizzes.',
    emoji: '💬',
    heroCopy: 'Better relationships start with self-awareness. Take a quiz to begin.',
    order: 2,
    parent: 'life-mindset-relationships',
  },
  quizzes: [
    { publicToken: 'dtvby4ca', slug: 'attachment-style', featured: true, order: 18 },
    { publicToken: 'sn97jbar', slug: 'dating-pattern', order: 19 },
    { publicToken: 'zfxrszr6', slug: 'parenting-style', order: 20 },
  ],
}
