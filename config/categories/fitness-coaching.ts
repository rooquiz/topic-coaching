import type { CategoryFile } from '../schema'

/** niche · 健身教练 / 私人教练 */
export const fitnessCoaching: CategoryFile = {
  category: {
    slug: 'fitness-coaching',
    name: 'Fitness Coach / Personal Trainer',
    title: 'Fitness Quizzes & Assessments — Test How Fit You Are',
    description:
      'Free fitness quizzes and assessments to measure your fitness level, check that it is safe to start exercising, and train with a plan.',
    emoji: '💪',
    heroCopy: 'Find your baseline, train the right thing next, and build strength with a plan.',
    order: 11,
    parent: 'health-body-fitness',
    intro: [
      'Getting fitter works best when you start from facts instead of guesswork. Before adding harder workouts, it helps to know two things: whether it is safe for you to ramp up activity, and where your fitness actually stands across cardio, strength, flexibility, body composition, and recovery. Training blind is how people either plateau or get hurt.',
      'These free fitness assessments give you both. A quick pre-exercise readiness screening flags whether you should check with a doctor first, and a full fitness-level assessment scores you across five pillars so you can see, at a glance, which weak area is holding the rest back.',
      'Not sure where to start? If you are new to exercise or returning after a long break, run the readiness screening first, then take the fitness-level assessment to find your baseline. Each is free, needs no equipment, and ends with a clear result and a sensible next step rather than a generic plan.',
    ],
    faq: [
      {
        q: 'What does a fitness coach or personal trainer do?',
        a: 'A fitness coach assesses your current level, sets realistic goals, and designs a progressive training plan across cardio, strength, and mobility — then keeps you accountable and adjusts as you improve. Good coaching starts from an honest baseline, which is exactly what these assessments give you.',
      },
      {
        q: 'How do I know how fit I really am?',
        a: 'A structured self-assessment is a practical start. Rather than one number, real-world fitness spans several dimensions — cardio endurance, muscular strength, flexibility and mobility, body composition, and lifestyle and recovery. The fitness-level assessment on this page scores all five so you can see your strongest and weakest areas.',
      },
      {
        q: 'Should I check with a doctor before starting to exercise?',
        a: 'Many people can safely become more active, but a short screening helps you check. The readiness screening here is based on the Physical Activity Readiness Questionnaire (PAR-Q), a widely used self-check from the Canadian Society for Exercise Physiology for adults aged 15–69. It is informational, not a diagnosis — if anything flags, speak with your doctor first.',
      },
      {
        q: 'Are these fitness quizzes free?',
        a: 'Yes. Every assessment on this page is free, needs no equipment, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'qg768s6r',
      slug: 'fitness-level-assessment',
      featured: true,
      order: 1,
      seo: {
        title: 'Fitness Level Assessment — How Fit Are You Really?',
        description:
          'A free 5-minute fitness test that scores you across cardio, strength, flexibility, body composition, and lifestyle — with a radar chart showing exactly what to train next. No equipment needed.',
        overview:
          'Fitness is not one number — it is a balance across several areas, and the spikiest ones tell you where to train. This assessment scores you on five real-world pillars (cardio endurance, muscular strength, flexibility and mobility, body composition, and lifestyle and recovery) and returns a radar-chart report so you can see at a glance where you are strong and where the fastest gains are hiding. No equipment needed.',
        whoFor:
          'Anyone who wants an honest baseline before starting or changing a routine — from beginners returning to exercise to regular trainers who want to find and fix their weakest dimension.',
        whatYouLearn: [
          'Your overall fitness score out of 100',
          'How you rate across cardio, strength, flexibility, body composition, and lifestyle',
          'The weakest pillar dragging your overall fitness down',
          'What to train next for the biggest, fastest improvement',
        ],
        sampleQuestions: [
          'You climb three flights of stairs at a normal pace — how do you feel at the top?',
          'How many standard push-ups can you do in one unbroken set?',
          'Standing with straight legs, how far can you reach toward your toes?',
          'How consistent has your exercise routine been over the past three months?',
        ],
        howItWorks:
          'You answer 15 quick questions grouped into five fitness pillars, each scored and combined into an overall rating out of 100 plus a radar chart of your five dimensions. Your result highlights your weakest area — where focused effort pays off fastest — with practical suggestions. It takes about five minutes, needs no equipment, is free, and requires no signup to start.',
        faq: [
          {
            q: 'What counts as a good fitness level?',
            a: 'There is no single cutoff, because fitness spans cardio, strength, flexibility, body composition, and recovery. A balanced profile across all five matters more than a high score in one. This assessment shows your balance so you can raise your weakest pillar rather than over-training a strength.',
          },
          {
            q: 'Do I need any equipment to take the assessment?',
            a: 'No. Every question is based on simple bodyweight movements and everyday habits — stairs, push-ups, a plank, a forward fold, sleep, and activity — so you can complete it anywhere in about five minutes.',
          },
          {
            q: 'How often should I re-test my fitness level?',
            a: 'Every 8 to 12 weeks is a useful cadence. That is long enough for training to show real change and short enough to keep you accountable. Re-taking the assessment lets you watch your radar chart grow and confirm your plan is working.',
          },
        ],
      },
    },
    {
      publicToken: 'jdx56qds',
      slug: 'par-q-exercise-readiness',
      order: 2,
      seo: {
        title: 'PAR-Q Exercise Readiness Screening — Is It Safe to Start?',
        description:
          'A free 2-minute pre-exercise readiness check based on the PAR-Q (CSEP). Answer a few yes/no questions and get a clear recommendation before you become more physically active.',
        overview:
          'Before you start or intensify a workout routine, a two-minute check helps you begin safely. This screening is based on the Physical Activity Readiness Questionnaire (PAR-Q), a widely used self-check from the Canadian Society for Exercise Physiology for people aged 15–69, and gives you one of three clear recommendations: you are cleared to get active, talk to your doctor first, or wait until you feel better. It is an informational self-screening, not medical advice or a diagnosis.',
        whoFor:
          'Anyone aged 15–69 planning to become more physically active — especially people returning after a break, starting a more intense program, or who have a health condition they want to account for first.',
        whatYouLearn: [
          'Whether it is reasonable to start becoming more active now',
          'Whether any answer suggests checking with your doctor first',
          'Whether to wait because you are temporarily unwell',
          'A sensible next step, including finding your fitness baseline once cleared',
        ],
        sampleQuestions: [
          'Has a doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?',
          'Do you feel pain in your chest when you do physical activity?',
          'Do you lose your balance because of dizziness, or do you ever lose consciousness?',
          'Do you have a bone or joint problem that could be made worse by a change in your physical activity?',
        ],
        howItWorks:
          'You answer a short set of yes/no questions about your heart, chest pain, balance, joints, medication, and current wellbeing, following the standard PAR-Q self-screening. Any answer that warrants caution routes you to a "talk to your doctor first" result; otherwise you are cleared to start gradually. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is the PAR-Q?',
            a: 'The PAR-Q (Physical Activity Readiness Questionnaire) is a short, widely used self-screening developed by the Canadian Society for Exercise Physiology (CSEP) to help people aged 15–69 check whether they should get medical advice before becoming more physically active. It is a starting-point safety check, not a diagnostic test.',
          },
          {
            q: 'Is this screening medical advice?',
            a: 'No. It is an informational self-screening tool, not a diagnosis or a substitute for professional care. If any answer suggests caution, or if you are outside the 15–69 range, pregnant, or unsure, speak with a qualified healthcare provider before increasing your activity.',
          },
          {
            q: 'How long does the screening take, and is it free?',
            a: 'About two minutes, and it is free with a clear recommendation at the end — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'acbrrbf4',
      slug: 'runner-type',
      order: 3,
      alsoIn: ['running-coaching'],
      seo: {
        title: 'Runner Type Quiz — Discover Your Running Personality',
        description:
          'A free 8-question runner type quiz that reveals your running personality — Zen, Competitor, Social, Explorer, or Data-Driven — and how to train in a way that actually fits you.',
        overview:
          'Every runner laces up for a different reason, and knowing yours is what makes training stick. This 8-question quiz reveals your running personality across five types — Zen, Competitor, Social, Explorer, and Data-Driven — so you can train, race, and stay motivated in the way that fits how you are wired.',
        whoFor:
          'New and experienced runners, run clubs, and run coaches who want to understand what drives a runner and how to keep them consistent.',
        whatYouLearn: [
          'Your runner type: Zen, Competitor, Social, Explorer, or Data-Driven',
          'What really motivates you to run',
          'The kind of runs and goals you are most likely to stick with',
          'What most often makes you skip a run — and how to plan around it',
        ],
        sampleQuestions: [
          'Why do you lace up your running shoes?',
          'Your ideal run looks like…',
          'How do you feel about races?',
          'Pick your running mantra.',
        ],
        howItWorks:
          'You answer eight quick questions about why you run, your ideal run, and how you feel about races and tracking data. Your answers map to five running personalities, and your result names your dominant type with how to train and stay motivated. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a running personality?',
            a: 'Your running personality is the mix of motivations and preferences behind how you run — whether you run to de-stress, to compete, to socialize, to explore, or to hit the numbers. Matching your training and goals to it makes running far easier to sustain.',
          },
          {
            q: 'Can I be more than one runner type?',
            a: 'Yes. Many runners blend types — a Competitor who also loves trail adventures, for example. The quiz highlights your dominant type while your result still reflects the mix.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes for the eight questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
