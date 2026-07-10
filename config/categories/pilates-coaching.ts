import type { CategoryFile } from '../schema'

/** niche · 普拉提教练（draft，待补题上线） */
export const pilatesCoaching: CategoryFile = {
  category: {
    slug: 'pilates-coaching',
    name: 'Pilates Instructor',
    title: 'Pilates Instructor Quizzes & Assessments',
    description: 'Build core control, posture, and stability. Free coaching quizzes and assessments.',
    emoji: '🩰',
    heroCopy: 'Build core control, posture, and stability.',
    order: 18,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
