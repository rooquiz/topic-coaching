import type { CategoryFile } from '../schema'

/**
 * niche · 压力管理教练（draft）
 * 现有 2 道题（stress-type / burnout-risk），未达 ≥3 开页门槛。
 * 补齐第 3 道（如 "How Resilient Are You Under Pressure? Resilience Scorecard"）后去掉 draft 即促级。
 */
export const stressManagementCoaching: CategoryFile = {
  category: {
    slug: 'stress-management-coaching',
    name: 'Stress Management',
    title: 'Stress & Burnout Coaching Quizzes',
    description: 'Understand your stress response and burnout risk with free stress-management coaching assessments.',
    emoji: '🌊',
    heroCopy: 'Stress is not the enemy — how you respond to it is. Start by understanding your pattern.',
    order: 13,
    parent: 'life-mindset-relationships',
    draft: true,
  },
  quizzes: [
    {
      publicToken: 'kv33pxut',
      slug: 'stress-type',
      featured: true,
      order: 13,
      seo: {
        overview:
          'Everyone handles pressure differently, and the tactics that calm one person can wind another up tighter. This quick quiz reveals your stress type, what is happening underneath the surface, and what actually helps you regulate.',
        whoFor:
          'Anyone who feels frequently stressed or wired and wants coping strategies that fit their nervous system instead of generic "just relax" advice.',
        whatYouLearn: [
          'Your stress type',
          'What is really happening underneath your stress response',
          'The triggers that hit you hardest',
          'What actually calms your particular type',
        ],
        faq: [
          {
            q: 'Why do people respond to stress so differently?',
            a: 'Stress responses are shaped by biology, past experience, and habits, so the same pressure can make one person shut down and another speed up. Knowing your type helps you pick coping strategies that match how you actually react.',
          },
          {
            q: 'Is all stress bad?',
            a: 'No. Short bursts of stress can sharpen focus and performance. The problem is chronic, unmanaged stress — which is why understanding and regulating your pattern matters more than trying to eliminate stress entirely.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: '9jfaswcx',
      slug: 'burnout-risk',
      order: 14,
      seo: {
        overview:
          'Running on empty? Burnout builds quietly until it is hard to ignore. This 2-minute scorecard measures your burnout risk across energy, motivation, boundaries, and recovery, then shows where the strain is greatest and what to do about it.',
        whoFor:
          'Anyone feeling drained, cynical, or stretched thin who wants an early read on burnout risk before it becomes a crisis.',
        whatYouLearn: [
          'Your overall burnout risk (a higher score means more at risk)',
          'How you rate across energy, motivation, boundaries, and recovery',
          'Where the strain is greatest right now',
          'A first step to relieve the pressure',
        ],
        faq: [
          {
            q: 'What is burnout?',
            a: 'Burnout is a state of chronic physical and emotional exhaustion, often with growing cynicism and a drop in sense of accomplishment, caused by prolonged unmanaged stress. It tends to build gradually across energy, motivation, boundaries, and recovery.',
          },
          {
            q: 'Is this scorecard a medical diagnosis?',
            a: 'No. It is a self-reflection tool that flags your risk level and where the strain is greatest. If burnout is seriously affecting your health, please consult a qualified professional.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
  ],
}
