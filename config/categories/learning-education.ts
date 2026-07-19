import type { CategoryFile } from '../schema'

/** Hub · 学习与教育（顶层支柱页；测评来自旗下 niche） */
export const learningEducation: CategoryFile = {
  category: {
    slug: 'learning-education',
    name: 'Learning & Education',
    title: 'Learning & Education Coaching Quizzes',
    description:
      'Study smarter and communicate better with stronger skills and methods. Free coaching quizzes across writing, learning styles, and academic support.',
    emoji: '📚',
    heroCopy: 'Study smarter and write better — start by understanding how you learn and where your skills stand.',
    order: 5,
    intro: [
      'Learning and education coaching helps you build the skills that make everything else easier to learn — how you take in information, how clearly you write, and how you study and retain what matters. This hub gathers free assessments across the field so you can find your starting point instead of guessing.',
      'The theme running through every quiz here is self-awareness before effort. Knowing your learning style, or which writing skill is holding you back, lets you focus practice where it actually pays off rather than spreading yourself thin.',
      'A good place to start is the writing skills scorecard for a clear read on your clarity, mechanics, voice, and editing. Every quiz is free, takes only a few minutes, and gives you a personalized result with a concrete next step.',
    ],
    faq: [
      {
        q: 'What does learning and education coaching cover?',
        a: 'It covers the transferable skills behind studying and communicating well — writing, learning styles and study methods, reading, and academic support — helping you understand your current strengths before you try to improve them.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'If you write for school or work, start with the writing skills scorecard to see which of four core areas to sharpen first. Each quiz takes just a few minutes and gives a personalized result.',
      },
      {
        q: 'Are these learning quizzes free?',
        a: 'Yes. Every quiz in this hub is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
