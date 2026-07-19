import type { CategoryFile } from '../schema'

/** Hub · 体育竞技（顶层支柱页；测评来自旗下 niche） */
export const sportsAthletics: CategoryFile = {
  category: {
    slug: 'sports-athletics',
    name: 'Sports & Athletics',
    title: 'Sports & Athletics Coaching Quizzes',
    description:
      'Sport-specific coaching across technique, tactics, and competition. Free coaching quizzes and knowledge tests for golf, tennis, and more.',
    emoji: '🏅',
    heroCopy: 'Know your sport inside out — start by testing your grasp of its rules, scoring, and strategy.',
    order: 4,
    intro: [
      'Sports and athletics coaching is sport-specific by nature: technique, tactics, and competition look different on a golf course than on a tennis court. This hub gathers free knowledge tests and assessments across individual sports so you can sharpen the understanding that on-field skill is built on.',
      'The common thread is that knowing the game — its scoring, rules, and strategy — makes practice more productive and competition less confusing. These quick quizzes give players, fans, and coaches an easy way to gauge and grow that knowledge.',
      'Each quiz is free, includes an explanation for every answer, and takes just a few minutes, with a personalized result at the end. Start with the sport you love and see where your knowledge stands.',
    ],
    faq: [
      {
        q: 'What does sports and athletics coaching cover?',
        a: 'It covers sport-specific technique, tactics, rules, and competition across individual sports such as golf and tennis, helping you understand the game more deeply so your practice and play improve together.',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the sport you play or follow most — for example the Golf IQ or Tennis IQ quiz — to test your knowledge of scoring, rules, and strategy. Each takes only a few minutes.',
      },
      {
        q: 'Are these sports quizzes free?',
        a: 'Yes. Every quiz in this hub is free, takes just a few minutes, includes an explanation for each answer, and needs no signup to start.',
      },
    ],
  },
  quizzes: [],
}
