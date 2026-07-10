import type { CategoryFile } from '../schema'

/** niche · 健康与养生（压力测评已拆到 stress-management-coaching） */
export const healthWellnessCoaching: CategoryFile = {
  category: {
    slug: 'health-wellness-coaching',
    name: 'Health & Wellness',
    title: 'Health & Wellness Coaching Quizzes',
    description: 'Understand your energy, eating, and habits with free wellness and health-coaching assessments.',
    emoji: '🧘',
    heroCopy: 'Small changes, big results — start by understanding your current baseline.',
    order: 1,
    parent: 'health-body-fitness',
  },
  quizzes: [
    {
      publicToken: 'u7fsg6ek',
      slug: 'wellness-scorecard',
      order: 15,
      seo: {
        overview:
          'Your wellbeing is the sum of daily habits, not a single number on a scale. This 2-minute scorecard rates your lifestyle across movement, nutrition, sleep, and stress, then shows which area to focus on first for the biggest return.',
        whoFor:
          'Anyone who wants an honest baseline of their overall wellbeing and a clear, non-overwhelming place to start improving.',
        whatYouLearn: [
          'Your overall wellness score (a higher score means a healthier balance)',
          'How you rate across movement, nutrition, sleep, and stress',
          'The area dragging your wellbeing down most',
          'Where to focus first for the biggest improvement',
        ],
        faq: [
          {
            q: 'What does the wellness scorecard measure?',
            a: 'It measures four everyday pillars of wellbeing — movement, nutrition, sleep, and stress — because health is the cumulative result of daily habits in each. The result shows your balance across all four and which to prioritize.',
          },
          {
            q: 'Where should I start if my score is low?',
            a: 'Usually with the lowest-scoring pillar, since that is where a small change tends to pay off most. The scorecard highlights it so you can focus instead of trying to fix everything at once.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'dchgwe2b',
      slug: 'fitness-personality',
      order: 16,
      seo: {
        overview:
          'Stop forcing workouts you secretly hate. This quick quiz finds the type of movement that fits how you are wired, plus the workouts and habits most likely to actually stick — because the best exercise is the one you will keep doing.',
        whoFor:
          'Anyone who has started and quit workout routines, dreads the gym, or wants to find a form of movement they will genuinely enjoy and sustain.',
        whatYouLearn: [
          'Your fitness personality',
          'The types of movement that fit how you are wired',
          'The workouts and habits most likely to stick for you',
          'Why past routines did not last',
        ],
        faq: [
          {
            q: 'What is a fitness personality?',
            a: 'Your fitness personality is the kind of movement that fits your temperament and motivation — for example, social classes, solo endurance, competitive sport, or flexible everyday activity. Matching exercise to it makes consistency far easier.',
          },
          {
            q: 'Why do I keep quitting exercise routines?',
            a: 'Most routines fail because they fight your natural preferences and motivation, not because you lack discipline. Choosing movement that fits your personality removes much of the friction that causes people to quit.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'x8xgbenx',
      slug: 'eating-personality',
      order: 17,
      seo: {
        overview:
          'Healthy eating is not about willpower — it is about your patterns. This quick quiz reveals your eating personality, what is really driving it, and one realistic shift that fits how you actually eat rather than an all-or-nothing diet.',
        whoFor:
          'Anyone stuck in a cycle of restrictive diets, emotional or mindless eating, or who wants to understand their eating habits without shame.',
        whatYouLearn: [
          'Your eating personality',
          'The patterns and triggers really driving your choices',
          'Why willpower-based diets have not worked',
          'One realistic shift that fits how you eat',
        ],
        faq: [
          {
            q: 'What is an eating personality?',
            a: 'Your eating personality is the pattern behind how and why you eat — for example, emotional, habitual, social, or restrictive. Understanding it lets you change your relationship with food by working with your patterns instead of relying on willpower.',
          },
          {
            q: 'Is this a diet plan?',
            a: 'No. It does not prescribe foods or calories. It helps you understand your eating patterns and suggests one realistic shift, which you can build on or take to a nutrition professional.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
