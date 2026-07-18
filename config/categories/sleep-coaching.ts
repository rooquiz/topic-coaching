import type { CategoryFile } from '../schema'

/** niche · 睡眠教练 */
export const sleepCoaching: CategoryFile = {
  category: {
    slug: 'sleep-coaching',
    name: 'Sleep Coach',
    title: 'Sleep Coach Quizzes & Assessments',
    description: 'Build better sleep habits. Free sleep coaching quizzes and assessments.',
    emoji: '😴',
    heroCopy: 'Build better sleep habits — start by scoring how well you actually sleep.',
    order: 22,
    parent: 'health-body-fitness',
    intro: [
      'Sleep coaching helps you turn restless nights and groggy mornings into consistent, restorative rest — by fixing the daily habits and environment that quietly shape your sleep. It focuses on behavior and routine (sleep hygiene) rather than treating medical sleep disorders.',
      'Sleep is foundational to nearly everything else: mood, focus, metabolism, and long-term health. Adults generally need seven or more hours of sleep per night for optimal health, according to the U.S. Centers for Disease Control and Prevention (source: CDC, https://www.cdc.gov/sleep/about/index.html), yet a large share of adults regularly fall short.',
      'These free quizzes help you see where your sleep is strong and which habit to fix first — your routine, your bedroom environment, or your daytime energy — so you can make one targeted change instead of overhauling everything at once.',
    ],
    faq: [
      {
        q: 'What does a sleep coach help with?',
        a: 'A sleep coach helps you improve the habits and environment behind your sleep — consistency, wind-down routine, light and temperature, caffeine timing, and daytime energy. It is about building better sleep hygiene, not diagnosing or treating clinical sleep disorders.',
      },
      {
        q: 'How many hours of sleep do I really need?',
        a: 'Most adults need seven or more hours per night for optimal health, per the CDC. Individual needs vary slightly, but consistently sleeping under this range is linked to lower mood, focus, and long-term health.',
      },
      {
        q: 'When should I see a doctor instead?',
        a: 'These quizzes are for everyday sleep habits, not medical advice. If you regularly struggle to sleep despite good habits, snore heavily, or feel exhausted no matter what, consider speaking with a healthcare professional about a possible sleep disorder.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '7w726wyt',
      slug: 'sleep-quality-scorecard',
      order: 1,
      seo: {
        title: 'Sleep Quality Scorecard — How Good Is Your Sleep, Really?',
        description:
          'A free 2-minute sleep quality scorecard that rates your routine, bedroom environment, and daytime energy — then shows the one habit to fix first for deeper rest.',
        overview:
          'How good is your sleep, really? This 2-minute scorecard rates your sleep across three areas — your routine, your bedroom environment, and how you feel during the day — then shows which habit to fix first for deeper, more restorative rest.',
        whoFor:
          'Anyone who wakes up groggy, relies on alarms and naps, or wants an honest baseline of their sleep and a clear, single place to start improving.',
        whatYouLearn: [
          'Your overall sleep quality score',
          'How you rate across routine, bedroom environment, and daytime energy',
          'The single habit dragging your sleep down most',
          'One targeted change to try first for deeper rest',
        ],
        sampleQuestions: [
          'How consistent are your sleep and wake times?',
          'How do you spend the last 30 minutes before bed?',
          'How much caffeine do you have after 2 pm?',
          'How refreshed do you feel when you first wake up?',
        ],
        howItWorks:
          'You answer a short set of questions about your sleep routine, your bedroom, and your daytime energy. Your answers are scored across three areas and combined into an overall sleep-quality rating, with the habit to prioritize first. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What makes for good-quality sleep?',
            a: 'Good sleep comes from consistency (regular sleep and wake times), a dark, cool, quiet bedroom, a calm wind-down without screens, sensible caffeine timing, and enough total hours. This scorecard checks all three areas so you know where to focus.',
          },
          {
            q: 'Why do I wake up tired even after enough hours?',
            a: 'Time in bed is not the same as quality sleep. Irregular timing, late caffeine, screens before bed, or a bright or noisy room can fragment your sleep so you wake unrested. The scorecard helps pinpoint which factor is most likely the culprit.',
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
