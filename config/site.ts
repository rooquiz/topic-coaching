import type { SiteSettings } from './schema'

/** 站点信息（导航 / 首页 hero / CTA 文案 / 页脚）。分类内容见 config/categories/。 */
export const site: SiteSettings = {
  name: 'RooQuiz Coaching',
  brandEmoji: '🧭',
  tagline: 'Free coaching quizzes & assessments',
  description:
    'Free coaching quizzes and assessments across life, career, business, wellness, and relationships. Take a quiz — or build your own with RooQuiz.',
  hero: {
    titleLead: 'Coaching quizzes that help you',
    titleHighlight: 'grow',
    subtitle:
      'Free, insightful assessments across life, career, business, wellness, and relationships. Take one in minutes and get a personalized result.',
  },
  cta: {
    band: {
      heading: 'Build your own coaching quiz in minutes',
      body: 'Use quizzes to capture leads, understand clients, and grow your coaching practice. No code, AI-assisted, free to start.',
      button: 'Create your own quiz — free',
    },
    inline: {
      text: 'Are you a coach? Turn quizzes into leads.',
      button: 'Create your own coaching quiz — free',
    },
    navButton: 'Create a quiz',
    footerLink: 'Create your own quiz',
  },
  footerBlurb: 'Free coaching quizzes & assessments — and the platform to build your own.',
}
