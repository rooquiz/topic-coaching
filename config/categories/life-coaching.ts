import type { CategoryFile } from '../schema'

/** niche · 人生教练 */
export const lifeCoaching: CategoryFile = {
  category: {
    slug: 'life-coaching',
    name: 'Life Coaching',
    title: 'Life Coaching Quizzes & Assessments',
    description:
      'Free life-coaching quizzes to clarify your values, habits, and direction — and find the right next step.',
    emoji: '🌱',
    heroCopy: 'Get unstuck. Short, insightful assessments that help you see where you are and where you want to go.',
    order: 1,
    parent: 'life-mindset-relationships',
    intro: [
      'Life coaching helps you close the gap between where you are and where you want to be. Rather than diagnosing problems, it focuses on clarity, direction, and momentum — your values, habits, mindset, and the concrete next step in front of you.',
      'These free life-coaching quizzes are a fast way to start. Each one is a short self-assessment that turns a vague feeling of being stuck into something specific you can name and act on — whether that is a self-sabotage pattern, a procrastination style, a limiting belief, or a confidence gap.',
      'Not sure where to begin? Pick the quiz that matches the feeling you have most often. If you keep starting things but stall, try the self-sabotage or procrastination quiz. If you talk yourself out of opportunities, start with limiting beliefs or the confidence scorecard. Each takes about five minutes, is free, and gives you a personalized result with a suggested next step.',
    ],
    faq: [
      {
        q: 'What is life coaching?',
        a: 'Life coaching is a forward-looking, action-oriented process that helps you gain clarity on your goals, values, and habits and make progress toward the life you want. Unlike therapy, it focuses on the present and future rather than diagnosing or treating mental-health conditions.',
      },
      {
        q: 'What can a life-coaching quiz tell me?',
        a: 'A good life-coaching quiz turns a vague sense of being stuck into something specific — such as the pattern that most often derails your goals, your dominant procrastination style, or the beliefs quietly limiting you — along with a practical first step to work on.',
      },
      {
        q: 'Are these life-coaching quizzes free?',
        a: 'Yes. Every quiz on this page is free and takes about five minutes, with a personalized result and no signup required to start.',
      },
      {
        q: 'Is a quiz a substitute for working with a coach?',
        a: 'No. These quizzes are a starting point for self-reflection. They can help you focus, but working with a qualified coach adds accountability, personalized guidance, and support over time.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'ssn6kdw6',
      slug: 'self-sabotage-pattern',
      featured: true,
      order: 1,
      seo: {
        title: 'Self-Sabotage Pattern Quiz — Find What Holds You Back',
        description:
          'A free 5-minute self-sabotage quiz that reveals the pattern quietly working against your goals — and the first step to break it.',
        overview:
          'Self-sabotage is the gap between what you say you want and what you repeatedly do. This free assessment maps your behavior against the most common self-sabotage patterns — procrastination, perfectionism, self-doubt, avoidance, and control — so you can name the one that costs you most and see what to do about it.',
        whoFor:
          'Anyone who keeps setting goals but stalls just before the finish line, feels stuck despite knowing what to do, or notices the same frustrating cycle repeat across work, health, or relationships.',
        whatYouLearn: [
          'Which of the five core self-sabotage patterns is most active for you right now',
          'The hidden payoff that keeps the pattern in place',
          'Where it tends to show up — work, relationships, health, or money',
          'One concrete first step to interrupt the cycle this week',
        ],
        sampleQuestions: [
          'When a goal starts going well, do you often find a reason to slow down or pull back?',
          'How often do you wait until conditions are “perfect” before starting something important?',
          'When you imagine finishing a big goal, what feels riskier — failing, or actually succeeding?',
          'Do you tend to fill your schedule so full that the thing that matters most never gets done?',
        ],
        howItWorks:
          'You answer a short set of statements about how you respond to goals, setbacks, and success. Your answers are scored across five self-sabotage patterns, and your result highlights the dominant one with a plain-language breakdown and a suggested next step. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a self-sabotage pattern?',
            a: 'A self-sabotage pattern is a recurring, often unconscious behavior that undermines your own goals — such as procrastinating, over-perfecting, or backing off right when things start to work. The pattern usually protects you from a perceived risk (like failure or judgment), which is why it repeats.',
          },
          {
            q: 'How long does the quiz take?',
            a: 'About five minutes. There are no right or wrong answers — the more honestly you respond, the more accurate your result.',
          },
          {
            q: 'Is the self-sabotage quiz free?',
            a: 'Yes. The quiz and your personalized result are completely free, and you can start without creating an account.',
          },
          {
            q: 'Is this a psychological diagnosis?',
            a: 'No. It is a self-reflection and coaching tool, not a clinical or diagnostic assessment. If self-sabotage is seriously affecting your wellbeing, consider speaking with a licensed professional.',
          },
        ],
      },
    },
    {
      publicToken: '9gcn38sp',
      slug: 'procrastination-type',
      order: 2,
      seo: {
        overview:
          'Procrastination is rarely about laziness — it is a coping response to a specific trigger like fear, overwhelm, perfectionism, or low interest. This quick quiz identifies your procrastination type, what is really driving it, and a first step that works with your wiring instead of against it.',
        whoFor:
          'Anyone who keeps delaying important tasks, feels guilty about putting things off, or has tried generic "just do it" advice that never sticks.',
        whatYouLearn: [
          'Your dominant procrastination type',
          'The underlying driver — fear, overwhelm, perfectionism, or low interest',
          'Why willpower alone has not fixed it',
          'A first step matched to your type',
        ],
        faq: [
          {
            q: 'What causes procrastination?',
            a: 'Procrastination is usually an emotional-regulation problem, not a time-management one. You delay a task to avoid an uncomfortable feeling it triggers — such as fear of failure, boredom, or feeling overwhelmed. Naming that driver is what makes it easier to change.',
          },
          {
            q: 'Does procrastinating mean I am lazy?',
            a: 'No. Laziness means not caring; procrastination usually means you care so much that the task feels threatening. That is why the fix is understanding your specific pattern, not forcing more discipline.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is completely free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: '5e6w29n8',
      slug: 'limiting-beliefs',
      order: 3,
      seo: {
        overview:
          'The biggest thing standing in your way is often a belief you do not even notice — an assumption about yourself you treat as fact. This 2-minute scorecard reveals how tight a grip limiting beliefs have on your choices and which kind holds you back most.',
        whoFor:
          'Anyone who feels capable but keeps playing small, second-guesses opportunities, or senses an invisible ceiling on what they let themselves attempt.',
        whatYouLearn: [
          'How strong a grip limiting beliefs currently have on you (a higher score means a tighter grip)',
          'Which kind of limiting belief grips you most',
          'Where these beliefs quietly shape your decisions',
          'A starting point for loosening their hold',
        ],
        faq: [
          {
            q: 'What is a limiting belief?',
            a: 'A limiting belief is an assumption you hold about yourself, other people, or how the world works that quietly narrows what you attempt — for example, "I am not the kind of person who succeeds at this" or "if I try and fail, it proves something is wrong with me." Because it feels like fact, it usually goes unquestioned.',
          },
          {
            q: 'How is the score calculated?',
            a: 'Your answers are scored into a single grip rating: a higher score means limiting beliefs are shaping more of your choices, and the result highlights which type grips you most.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'ehr7e6as',
      slug: 'confidence-scorecard',
      order: 4,
      seo: {
        overview:
          'Confidence is not one thing — it is several. This 2-minute scorecard measures yours across self-belief, social confidence, resilience, and self-worth, then shows where you are already solid and which pillar to build next.',
        whoFor:
          'Anyone who wants a clear read on their confidence — whether they feel shaky in some situations but steady in others, or want to know exactly where to focus to feel more assured.',
        whatYouLearn: [
          'Your confidence across four pillars: self-belief, social confidence, resilience, and self-worth',
          'Your strongest pillar and the one holding you back',
          'Whether your confidence gap is situational or more general',
          'Where to focus first to build a steadier baseline',
        ],
        faq: [
          {
            q: 'What does the confidence scorecard measure?',
            a: 'It measures four distinct pillars of confidence — self-belief (trust in your abilities), social confidence (ease around others), resilience (how you recover from setbacks), and self-worth (your baseline sense of value) — because most people are strong in some and shakier in others.',
          },
          {
            q: 'Can confidence actually be built?',
            a: 'Yes. Confidence is largely a set of habits and interpretations rather than a fixed trait, which is why identifying your weakest pillar gives you a concrete place to practice and grow.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
  ],
}
