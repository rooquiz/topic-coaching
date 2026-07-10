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
    { publicToken: 'kv33pxut', slug: 'stress-type', featured: true, order: 13 },
    { publicToken: '9jfaswcx', slug: 'burnout-risk', order: 14 },
  ],
}
