import type { CategoryFile } from '../schema'

/** niche · 情商 / 情绪管理教练 */
export const emotionalIntelligenceCoaching: CategoryFile = {
  category: {
    slug: 'emotional-intelligence-coaching',
    name: 'Emotional Intelligence Coach',
    title: 'Emotional Intelligence Coach Quizzes & Assessments',
    description: 'Build emotional awareness and regulation. Free emotional-intelligence coaching quizzes and assessments.',
    emoji: '❤️',
    heroCopy: 'Build emotional awareness and regulation — start by testing your EQ.',
    order: 14,
    parent: 'life-mindset-relationships',
    intro: [
      'Emotional intelligence (often called EQ) is the ability to recognize, understand, and manage emotions — both your own and other people\'s. Emotional-intelligence coaching helps you build the self-awareness, self-regulation, empathy, and social skills that shape how well you lead, connect, and handle pressure.',
      'The concept was developed by researchers Peter Salovey and John Mayer and popularized by psychologist Daniel Goleman, whose model breaks EQ into five components: self-awareness, self-regulation, motivation, empathy, and social skills (source: Harvard Business Review, "What Makes a Leader?", https://hbr.org/2004/01/what-makes-a-leader). Unlike IQ, emotional intelligence can be strengthened with reflection and practice.',
      'These free quizzes are a quick way to see where your emotional intelligence is strong and where there is room to grow, turning a broad idea into specific habits you can work on.',
    ],
    faq: [
      {
        q: 'What is emotional intelligence?',
        a: 'Emotional intelligence is the ability to perceive, understand, use, and manage emotions in yourself and others. It typically spans self-awareness, self-regulation, motivation, empathy, and social skills — and it shapes how well you communicate, handle stress, and build relationships.',
      },
      {
        q: 'Can emotional intelligence be improved?',
        a: 'Yes. Unlike IQ, EQ is not fixed. Regularly reflecting on your emotional reactions, seeking honest feedback, and practicing skills like pausing before you react all strengthen emotional intelligence over time.',
      },
      {
        q: 'Are these emotional-intelligence quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'cd8g5jes',
      slug: 'emotional-intelligence-test',
      order: 1,
      seo: {
        title: 'Emotional Intelligence Test — The Free EQ Quiz',
        description:
          'A free 10-question emotional intelligence test that scores how well you recognize, understand, and manage emotions — with an explanation after every question.',
        overview:
          'How high is your emotional intelligence? This 10-question EQ quiz tests how well you recognize, understand, and manage emotions — in yourself and others — across real-life scenarios. You get your EQ score instantly, with an explanation after every question so you learn as you go.',
        whoFor:
          'Anyone who wants a clear read on their emotional intelligence — whether you are working on relationships, leadership, communication, or simply handling your own reactions better under stress.',
        whatYouLearn: [
          'Your overall EQ score across core emotional-intelligence skills',
          'How you handle real-life emotional scenarios',
          'Your grasp of self-awareness, self-regulation, empathy, and social awareness',
          'Habits that build emotional intelligence over time',
        ],
        sampleQuestions: [
          'Emotional intelligence is best defined as the ability to do what?',
          'A coworker snaps at you in a meeting — what is the most emotionally intelligent first response?',
          'Which is the best example of empathy?',
          'Which habit best builds emotional intelligence over time?',
        ],
        howItWorks:
          'You answer 10 scenario-based questions about recognizing and managing emotions. Each answer is scored and followed by a short explanation grounded in EQ research, and your result gives you an overall score with what it means. It takes about four minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What does an emotional intelligence test measure?',
            a: 'It measures how well you perceive, understand, and manage emotions across situations — spanning self-awareness, self-regulation, empathy, and social awareness. This quiz uses real-life scenarios rather than abstract personality questions.',
          },
          {
            q: 'Is a high EQ better than a high IQ?',
            a: 'They measure different things and both matter. Research popularized by Daniel Goleman suggests emotional intelligence is a strong predictor of leadership and relationship success, and unlike IQ it can be deliberately developed.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About four minutes for the 10 questions, and it is free with a personalized score and per-question explanations — no signup required to start.',
          },
        ],
      },
    },
  ],
}
