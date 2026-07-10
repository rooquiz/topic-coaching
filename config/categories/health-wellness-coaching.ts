import type { CategoryFile } from '../schema'

/** niche · 健康与养生（压力测评已拆到 stress-management-coaching） */
export const healthWellnessCoaching: CategoryFile = {
  category: {
    slug: 'health-wellness-coaching',
    name: 'Health & Wellness',
    title: 'Health & Wellness Coaching Quizzes',
    description: 'Understand your energy, eating, and habits with free wellness and health-coaching assessments.',
    emoji: '🧘',
    heroCopy: 'Small changes, big results — start by understanding your current baseline.',
    order: 1,
    parent: 'health-body-fitness',
  },
  quizzes: [
    { publicToken: 'u7fsg6ek', slug: 'wellness-scorecard', order: 15 },
    { publicToken: 'dchgwe2b', slug: 'fitness-personality', order: 16 },
    { publicToken: 'x8xgbenx', slug: 'eating-personality', order: 17 },
  ],
}
