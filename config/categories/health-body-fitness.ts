import type { CategoryFile } from '../schema'

/** Hub · 健康 · 身体 · 运动（顶层支柱页；测评来自旗下 niche） */
export const healthBodyFitness: CategoryFile = {
  category: {
    slug: 'health-body-fitness',
    name: 'Health, Body & Fitness',
    title: 'Health, Body & Fitness Coaching Quizzes',
    description:
      'Free wellness and fitness assessments — understand your energy, stress, eating, and habits, then start where you are.',
    emoji: '🧘',
    heroCopy: 'Small changes, big results — start by understanding your current baseline across stress, fitness, and nutrition.',
    order: 3,
    intro: [
      'Lasting health is built from daily habits, not dramatic overhauls — and the habits that stick are the ones that fit how you are actually wired. This hub gathers free coaching assessments across the pillars of everyday wellbeing: energy and lifestyle, movement, eating, and stress.',
      'Each quiz gives you an honest baseline and a realistic starting point rather than another all-or-nothing plan. You will find out how healthy your current balance is, the kind of movement most likely to stick for you, the patterns behind how you eat, and how you respond to pressure.',
      'A good place to start is the wellness scorecard for an overall read, then go deeper with the fitness or eating personality quiz, or the stress and burnout assessments if pressure is your main challenge. Every quiz is free and takes just a few minutes.',
    ],
    faq: [
      {
        q: 'What does health, body & fitness coaching cover?',
        a: 'It covers the everyday foundations of wellbeing: overall lifestyle balance (wellness), the kind of exercise that fits you (fitness personality), your relationship with food (eating personality), and how you handle pressure (stress type and burnout risk).',
      },
      {
        q: 'Which quiz should I start with?',
        a: 'Start with the wellness scorecard for a big-picture baseline, then dig into whichever area needs the most attention — movement, eating, or stress. Each takes only a few minutes.',
      },
      {
        q: 'Are these health quizzes a substitute for medical advice?',
        a: 'No. They are self-reflection and coaching tools, not medical or diagnostic assessments. For health concerns, please consult a qualified professional.',
      },
    ],
  },
  quizzes: [],
}
