import type { CategoryFile } from '../schema'

/** niche · 人生教练 */
export const lifeCoaching: CategoryFile = {
  category: {
    slug: 'life-coaching',
    name: 'Life Coaching',
    title: 'Life Coaching Quizzes & Assessments',
    description:
      'Free life-coaching quizzes to clarify your values, habits, and direction — and find the right next step.',
    emoji: '🌱',
    heroCopy: 'Get unstuck. Short, insightful assessments that help you see where you are and where you want to go.',
    order: 1,
    parent: 'life-mindset-relationships',
  },
  quizzes: [
    { publicToken: 'ssn6kdw6', slug: 'self-sabotage-pattern', featured: true, order: 1 },
    { publicToken: '9gcn38sp', slug: 'procrastination-type', order: 2 },
    { publicToken: '5e6w29n8', slug: 'limiting-beliefs', order: 3 },
    { publicToken: 'ehr7e6as', slug: 'confidence-scorecard', order: 4 },
  ],
}
