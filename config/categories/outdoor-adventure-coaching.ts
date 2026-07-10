import type { CategoryFile } from '../schema'

/** niche · 户外探险教练（draft，待补题上线） */
export const outdoorAdventureCoaching: CategoryFile = {
  category: {
    slug: 'outdoor-adventure-coaching',
    name: 'Outdoor Adventure Coach',
    title: 'Outdoor Adventure Coach Quizzes & Assessments',
    description: 'Build outdoor and adventure skills. Free coaching quizzes and assessments.',
    emoji: '🏕️',
    heroCopy: 'Build outdoor and adventure skills.',
    order: 17,
    parent: 'specialized-skills',
    draft: true,
  },
  quizzes: [],
}
