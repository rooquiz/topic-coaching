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
    {
      publicToken: 'dcwsz98v',
      slug: 'fitness-reset-scorecard',
      order: 4,
      seo: {
        title: "What's Holding Back Your Fitness Results? Free 5-Minute Scorecard",
        description:
          'Putting in the work but not seeing results? This free 5-minute scorecard finds which of your 4 fitness pillars — training, nutrition, recovery, and mindset — is stalling your progress, scores you out of 100, and shows what to fix first.',
        overview:
          'When results stall, the problem is rarely effort — it is usually one or two hidden pillars quietly dragging the rest down. This scorecard measures the four pillars that decide whether fitness results actually stick: Training Consistency, Nutrition, Recovery & Sleep, and Mindset & Accountability. You get a personalized score out of 100 and a radar chart showing exactly where your weakest link is, so you can fix the right thing first instead of just training harder everywhere. Research on behavior change backs this up: a review in the Journal of Clinical Medicine found accountability and support are among the strongest predictors of whether people sustain an exercise habit, while sleep-deprivation studies show that under 7 hours of sleep can blunt fat loss and muscle recovery even when training and diet are on point (sources below).',
        whoFor:
          'Anyone who trains but feels stuck — plateaued lifters, on-and-off exercisers, and busy people who put in effort without seeing the payoff and want to know which specific gap to close first.',
        whatYouLearn: [
          'Your overall fitness-results score out of 100',
          'Which of your 4 pillars — training, nutrition, recovery, or mindset — is holding you back',
          'A radar chart of where you are strong and where the gaps are',
          'The single lowest pillar to fix first for the fastest breakthrough',
        ],
        sampleQuestions: [
          'In a typical week, how many days do you do intentional exercise?',
          'When life gets busy, what usually happens to your workouts?',
          'Do you know roughly how much protein you eat in a day?',
          'Do you have anyone keeping you accountable — a coach, partner, or group?',
        ],
        howItWorks:
          'You answer 12 quick questions grouped into four fitness pillars — Training Consistency, Nutrition, Recovery & Sleep, and Mindset & Accountability. Each pillar is scored and combined into an overall rating out of 100, with a radar chart that highlights your weakest link and practical next steps focused there. It takes about five minutes, needs no equipment, is free, and requires no signup to start.',
        faq: [
          {
            q: 'Why am I working out but not seeing results?',
            a: 'Most stalled progress comes down to a weak link, not a lack of effort. If training is solid but nutrition, sleep, or consistency lags, that one pillar caps everything else. This scorecard pinpoints which pillar is dragging your results down so you can target it instead of just adding more workouts.',
          },
          {
            q: 'What are the 4 fitness pillars this measures?',
            a: 'Training Consistency (how reliably you train), Nutrition (whether your eating supports your goals), Recovery & Sleep (results are built while you rest), and Mindset & Accountability (clarity, resilience, and support). Balance across all four predicts lasting results far better than maxing out any single one.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About five minutes for the 12 questions, and it is free with a personalized score and radar chart — no signup required to start.',
          },
        ],
      },
    },
  ],
}
