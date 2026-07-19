import type { CategoryFile } from '../schema'

/** niche · 沟通教练 */
export const communicationCoaching: CategoryFile = {
  category: {
    slug: 'communication-coaching',
    name: 'Communication Coach',
    title: 'Communication Coach Quizzes & Assessments',
    description:
      'Communicate with clarity, empathy, and influence. Free communication coaching quizzes and assessments.',
    emoji: '🗣️',
    heroCopy:
      'Communicate with clarity and influence — start by measuring how you listen, speak, and connect.',
    order: 16,
    parent: 'career-business-leadership',
    intro: [
      'Communication coaching helps you get your message across clearly, listen so people feel understood, and hold your ground in hard conversations without damaging the relationship. Most of us were never formally taught these skills, yet they shape almost every outcome at work and at home.',
      'The fastest way to improve is to see where you actually stand. Strong communication is not one skill but several — listening, clarity, empathy, and assertiveness — and most people are stronger in some than others. These free quizzes give you an honest baseline so you can practice the one area that will move the needle most, instead of trying to fix everything at once.',
      'It matters more than ever: LinkedIn and employer surveys consistently rank communication among the most in-demand professional skills, and studies of workplace failure repeatedly trace breakdowns back to poor communication rather than lack of technical ability (source: Project Management Institute, https://www.pmi.org/learning/library/effective-communication-better-project-management-6480). Knowing your communication profile is a low-pressure first step toward being clearer, calmer, and more persuasive.',
    ],
    faq: [
      {
        q: 'What does a communication coach help with?',
        a: 'A communication coach helps you listen more effectively, express ideas clearly and concisely, read and respond to emotions, and stay assertive under pressure — so you are understood the first time and can navigate conflict without escalation.',
      },
      {
        q: 'Can communication skills actually be improved?',
        a: 'Yes. Communication is a set of learnable habits, not a fixed personality trait. Small, specific changes — like summarizing what you heard before you reply, or leading with your main point — produce noticeable improvements within a few weeks.',
      },
      {
        q: 'Are these communication quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'wutb6cqh',
      slug: 'communication-skills-scorecard',
      order: 1,
      seo: {
        title: 'Communication Skills Scorecard — Rate Your Communication (Free 3-Min Quiz)',
        description:
          'A free 3-minute communication skills scorecard that rates you on listening, clarity, empathy, and assertiveness, then shows your strongest and weakest area and one habit to improve next.',
        overview:
          'How strong are your communication skills, really? This free scorecard rates you across the four skills every great communicator relies on — listening, clarity, empathy, and assertiveness — and gives you one overall score plus a breakdown of where you shine and which area to sharpen next.',
        whoFor:
          'Anyone who wants to be understood the first time and handle tough conversations well — managers, team members, founders, partners, and anyone preparing for interviews, promotions, or difficult discussions.',
        whatYouLearn: [
          'Your overall communication score out of 48',
          'How you rate across four areas: listening, clarity, empathy, and assertiveness',
          'Your strongest communication skill and the one holding you back',
          'One concrete habit to level up your weakest area over the next two weeks',
        ],
        sampleQuestions: [
          'I let people finish their point before I respond. (Almost never → Almost always)',
          'I get to the point without rambling.',
          'I acknowledge someone\'s emotions before jumping to solutions.',
          'I can say no without over-apologizing or feeling guilty.',
        ],
        howItWorks:
          'You rate yourself on 12 everyday communication behaviors, three for each of the four skill areas. Your answers combine into an overall score out of 48 and a radar view of listening, clarity, empathy, and assertiveness, so you can see exactly where to focus. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the four communication skills this quiz measures?',
            a: 'Listening (taking in and confirming what others say), clarity (getting your message across concisely), empathy (reading emotions and staying open under disagreement), and assertiveness (expressing needs and honest feedback directly and respectfully).',
          },
          {
            q: 'How can I improve my weakest area?',
            a: 'Start with the single lowest-scoring area and practice one habit for two weeks: for listening, summarize what you heard before replying; for clarity, lead with your main point; for empathy, name the other person\'s feeling first; for assertiveness, state your need without over-apologizing.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About three minutes, and it is free with a personalized result and radar breakdown — no signup required to start.',
          },
        ],
      },
    },
  ],
}
