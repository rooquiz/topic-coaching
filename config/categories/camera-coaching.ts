import type { CategoryFile } from '../schema'

/** niche · 镜头教练（draft，待补题上线） */
export const cameraCoaching: CategoryFile = {
  category: {
    slug: 'camera-coaching',
    name: 'On-camera Coach',
    title: 'On-camera Coach Quizzes & Assessments',
    description: 'Build confident on-camera presence. Free coaching quizzes and assessments.',
    emoji: '🎬',
    heroCopy: 'Build confident on-camera presence.',
    order: 14,
    parent: 'performance-creativity',
    draft: true,
  },
  quizzes: [],
}
