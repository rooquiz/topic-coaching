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
    intro: [
      'Health and wellness coaching helps you improve the everyday habits that shape how you feel — movement, nutrition, sleep, and stress — by starting from an honest baseline instead of an all-or-nothing overhaul. The focus is small, sustainable changes in the area that will pay off most, not willpower or perfection.',
      'These free wellness quizzes are a quick way to find that starting point. Each turns a vague sense that "I should be healthier" into something specific — your overall wellness balance, the type of movement you will actually stick with, or the eating patterns quietly driving your choices.',
      'Not sure where to begin? Start with the wellness scorecard for a whole-picture baseline, then dig into fitness or eating personality depending on what it surfaces. Each is free, takes about two minutes, and ends with a personalized result and one realistic next step.',
    ],
    faq: [
      {
        q: 'What does a health and wellness coach do?',
        a: 'A wellness coach helps you set realistic health goals and build sustainable habits across movement, nutrition, sleep, and stress. The role is about behavior change and accountability — not diagnosing or treating medical conditions, which is a job for a licensed clinician.',
      },
      {
        q: 'What can a wellness quiz tell me?',
        a: 'A good wellness quiz gives you an honest baseline and a focus — such as which pillar of your wellbeing is dragging the rest down, the kind of movement most likely to stick for you, or the eating pattern behind your choices — along with one small change to try first.',
      },
      {
        q: 'Are these wellness quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
      {
        q: 'Are these quizzes medical advice?',
        a: 'No. They are self-reflection and coaching tools for everyday habits, not medical assessments. If you have specific health concerns, consult a qualified healthcare professional.',
      },
    ],
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
    {
      publicToken: 'af8c5j4t',
      slug: 'nutrition-iq',
      order: 18,
      alsoIn: ['nutrition-coaching'],
      seo: {
        title: 'Nutrition IQ Quiz — Test Your Healthy-Eating Smarts',
        description:
          'A free 10-question nutrition IQ quiz covering fats, vitamins, minerals, and common food myths. Get your score and the facts behind everyday healthy eating.',
        overview:
          'Think you eat pretty healthily? This 10-question nutrition quiz tests your grasp of the essentials — calories, fats, vitamins, minerals, hydration, and the food myths that trip most people up — then scores your Nutrition IQ and explains the fact behind every answer, no guilt attached.',
        whoFor:
          'Anyone curious about how much they really know about healthy eating — from beginners to wellness and nutrition coaches who want a quick, shareable knowledge check.',
        whatYouLearn: [
          'Your Nutrition IQ score',
          'Which common nutrition myths you still believe',
          'The basics of fats, vitamins, and minerals that matter most',
          'Simple, evidence-based facts to eat a little smarter',
        ],
        sampleQuestions: [
          'Which nutrient provides the most calories per gram?',
          'Which type of fat is generally considered the least healthy?',
          'Eating too much of which mineral is linked to high blood pressure?',
          'Can frozen vegetables be as nutritious as fresh ones?',
        ],
        howItWorks:
          'You answer 10 multiple-choice and true/false questions on calories, fats, vitamins, minerals, hydration, and common myths. Each answer is scored and explained, and your result gives your Nutrition IQ with the reasoning behind every fact. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this nutrition quiz based on real science?',
            a: 'Yes. The questions reflect widely accepted nutrition basics — for example, that fat provides about 9 calories per gram versus 4 for protein and carbohydrate, and that excess sodium is linked to higher blood pressure. It is educational, not personalized dietary advice.',
          },
          {
            q: 'Can frozen vegetables really be as healthy as fresh?',
            a: 'Often, yes. Vegetables are typically frozen soon after harvest at peak ripeness, which locks in nutrients, so frozen produce can match or even beat fresh that has spent days in transit and storage.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes for the 10 questions, and it is free with a score and explanations — no signup required to start.',
          },
        ],
      },
    },
  ],
}
