import type { CategoryFile } from '../schema'

/** Hub · 生活方式与兴趣（顶层支柱页；测评来自旗下 niche） */
export const lifestyleInterests: CategoryFile = {
  category: {
    slug: 'lifestyle-interests',
    name: 'Lifestyle & Interests',
    title: 'Lifestyle & Interests Coaching Quizzes',
    description:
      'Free coaching quizzes for money, mindset, and everyday life — understand your money personality and financial habits, then start where you are.',
    emoji: '✨',
    heroCopy: 'Money, habits, and everyday life — start by understanding how you are wired.',
    order: 7,
    intro: [
      'The way you handle money, time, and daily choices is shaped less by willpower than by patterns you rarely stop to notice. This hub gathers free coaching assessments across everyday life — starting with the financial habits and money mindset that quietly steer so many of your decisions.',
      'Each quiz gives you an honest baseline and a realistic starting point rather than another rigid plan. You can uncover your money personality, gauge how financially healthy your habits are, and see where a small change would pay off most.',
      'A good place to start is the money personality quiz for a quick read on how you relate to money, then take the financial wellness scorecard for a fuller picture of your habits. Every quiz is free and takes just a few minutes, with a personalized result and a clear next step.',
    ],
    faq: [
      {
        q: 'What does lifestyle and interests coaching cover?',
        a: 'It covers the everyday areas of life where small habit changes compound over time — money and financial wellbeing first and foremost, alongside the mindset and routines that shape daily choices. The quizzes here help you understand your current patterns before you try to change them.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the money personality quiz for a quick read on how you relate to money, then take the financial wellness scorecard for a fuller picture of your habits and where to focus first. Each takes only a few minutes.',
      },
      {
        q: 'Are these lifestyle quizzes free?',
        a: 'Yes. Every quiz in this hub is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
