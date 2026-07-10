import type { CategoryFile } from '../schema'

/** niche · 考试教练（draft，待补题上线） */
export const examCoaching: CategoryFile = {
  category: {
    slug: 'exam-coaching',
    name: 'Exam Coach',
    title: 'Exam Coach Quizzes & Assessments',
    description: 'Master exam strategy and prep. Free coaching quizzes and assessments.',
    emoji: '📝',
    heroCopy: 'Master exam strategy and prep.',
    order: 13,
    parent: 'learning-education',
    draft: true,
  },
  quizzes: [],
}
