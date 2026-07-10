import type { CategoryFile } from '../schema'

/** niche · 求职教练（draft，待补题上线） */
export const jobSearchCoaching: CategoryFile = {
  category: {
    slug: 'job-search-coaching',
    name: 'Job Search Coach',
    title: 'Job Search Coach Quizzes & Assessments',
    description: 'Nail your resume, interview, and job-search strategy. Free coaching quizzes and assessments.',
    emoji: '📄',
    heroCopy: 'Nail your resume, interview, and job-search strategy.',
    order: 11,
    parent: 'career-business-leadership',
    draft: true,
  },
  quizzes: [],
}
