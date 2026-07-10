import type { CategoryFile } from '../schema'

/** niche · 老年健康教练（draft，待补题上线） */
export const seniorFitnessCoaching: CategoryFile = {
  category: {
    slug: 'senior-fitness-coaching',
    name: 'Senior Fitness Coach',
    title: 'Senior Fitness Coach Quizzes & Assessments',
    description: 'Move well and stay healthy in later life. Free coaching quizzes and assessments.',
    emoji: '🧓',
    heroCopy: 'Move well and stay healthy in later life.',
    order: 24,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
