import type { CategoryFile } from '../schema'

/** niche · 瑜伽教练（draft，待补题上线） */
export const yogaCoaching: CategoryFile = {
  category: {
    slug: 'yoga-coaching',
    name: 'Yoga Instructor',
    title: 'Yoga Instructor Quizzes & Assessments',
    description: 'Practice asana, breath, and body-mind balance. Free coaching quizzes and assessments.',
    emoji: '🧘',
    heroCopy: 'Practice asana, breath, and body-mind balance.',
    order: 17,
    parent: 'health-body-fitness',
    draft: true,
  },
  quizzes: [],
}
