import type { CategoryFile } from '../schema'

/** Hub · 职业 · 商业 · 领导力（顶层支柱页；测评来自旗下 niche） */
export const careerBusinessLeadership: CategoryFile = {
  category: {
    slug: 'career-business-leadership',
    name: 'Career, Business & Leadership',
    title: 'Career, Business & Leadership Coaching Quizzes',
    description:
      'Free assessments for your career path, leadership style, and business readiness — built around real coaching frameworks.',
    emoji: '🚀',
    heroCopy: 'Figure out your next move at work — from career direction to leading a team to scaling a business.',
    order: 2,
    intro: [
      'Work is where many of the biggest decisions of adult life get made — what to do, who to become, and how to lead. This hub brings together free coaching assessments for three connected areas: your career path, how you lead others, and how you grow a business.',
      'Each quiz is a short, focused diagnostic built around real coaching frameworks. Instead of generic advice, you get a clear read on your strengths and blind spots and a concrete next move — whether you are choosing a career direction, sharpening your leadership, or deciding if your business is ready to scale.',
      'Not sure where to start? If you are weighing your own path, try the career archetype or career-change readiness quiz. If you lead people, start with your leadership style or the leadership scorecard. If you run a business, try the founder archetype or the growth-readiness scorecard. Every quiz is free and takes just a few minutes.',
    ],
    faq: [
      {
        q: 'What kinds of career and business quizzes are here?',
        a: 'Three connected areas: career (your archetype, change-readiness, and productivity style), leadership (your style and a leadership scorecard), and business (founder archetype, selling style, and growth readiness). Each gives a personalized result with a suggested next step.',
      },
      {
        q: 'Which quiz should I take first?',
        a: 'Start with the decision in front of you. Weighing your own path — take the career quizzes; leading a team — start with leadership; growing a company — try the business quizzes. Each takes only a few minutes, so you can take several.',
      },
      {
        q: 'Are these career and business quizzes free?',
        a: 'Yes. Every quiz in this section is free and requires no signup to start, and each gives you a personalized result you can act on.',
      },
    ],
  },
  quizzes: [],
}
