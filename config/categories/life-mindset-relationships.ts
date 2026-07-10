import type { CategoryFile } from '../schema'

/** Hub · 人生 · 心态 · 关系（顶层支柱页；测评来自旗下 niche） */
export const lifeMindsetRelationships: CategoryFile = {
  category: {
    slug: 'life-mindset-relationships',
    name: 'Life, Mindset & Relationships',
    title: 'Life, Mindset & Relationship Coaching Quizzes',
    description:
      'Free coaching quizzes for self-awareness, mindset, habits, and relationships — see where you are and what to work on next.',
    emoji: '🧭',
    heroCopy:
      'The introspective core of coaching. Short, insightful assessments across life direction, mindset, and how you relate to others.',
    order: 1,
    intro: [
      'This is the introspective core of coaching — the areas that shape how you live, think, and connect with others. It spans life direction and habits, the mindset and beliefs that drive your behavior, and the way you show up in relationships, family, and parenting.',
      'The free quizzes grouped here are short self-assessments built to create a moment of clarity. Instead of generic advice, each one reflects something specific back to you — a pattern, a tendency, a blind spot — so you know exactly what to work on next.',
      'Browse the focus areas below, or start with one of the popular quizzes. Every assessment is free, takes only a few minutes, and ends with a personalized result and a practical next step.',
    ],
    faq: [
      {
        q: 'What does life, mindset & relationship coaching cover?',
        a: 'It covers the personal, introspective side of coaching: clarifying your direction and habits (life coaching), reshaping the beliefs and mental patterns that drive behavior (mindset coaching), and improving how you connect with partners, family, and others (relationship and family coaching).',
      },
      {
        q: 'Which quiz should I take first?',
        a: 'Start with the area that feels most alive right now. If you feel stuck or self-critical, begin with a life or mindset quiz; if the friction is with other people, start with a relationship or family quiz. Each one takes about five minutes.',
      },
      {
        q: 'Are these quizzes free?',
        a: 'Yes. Every quiz in this section is free and requires no signup to start, and each gives you a personalized result you can act on.',
      },
    ],
  },
  quizzes: [],
}
