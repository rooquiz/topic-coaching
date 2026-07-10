import type { CategoryFile } from '../schema'

/** niche · 体态矫正教练（draft，待补题上线） */
export const postureCoaching: CategoryFile = {
  category: {
    slug: 'posture-coaching',
    name: 'Posture Coach',
    title: 'Posture Coach Quizzes & Assessments',
    description: 'Fix rounded shoulders and improve posture. Free coaching quizzes and assessments.',
    emoji: '🧍',
    heroCopy: 'Fix rounded shoulders and improve posture.',
    order: 15,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
