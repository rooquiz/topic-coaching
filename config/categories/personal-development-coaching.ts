import type { CategoryFile } from '../schema'

/**
 * niche · 个人成长教练
 * 现有 2 道自我认知测评（big-five / mbti），均为完整 GEO 内容。
 * 距 ≥3 开页门槛差 1 道；补第 3 道（如 Enneagram / DISC / self-awareness scorecard）后去掉 draft 即促级。
 */
export const personalDevelopmentCoaching: CategoryFile = {
  category: {
    slug: 'personal-development-coaching',
    name: 'Personal Development Coach',
    title: 'Personality Tests & Personal Development Assessments',
    description:
      'Free personality tests and self-awareness assessments — Big Five and MBTI — to understand how you think, work, and grow.',
    emoji: '🌱',
    heroCopy: 'Self-awareness is where growth starts. See who you are, then decide who you want to become.',
    order: 11,
    parent: 'life-mindset-relationships',
    intro: [
      'Personal development starts with self-awareness — a clear, honest picture of how you think, make decisions, and relate to other people. Research on emotional intelligence popularized by psychologist Daniel Goleman puts self-awareness at the foundation of personal growth, and validated personality models give you a structured way to build it.',
      'These free assessments turn self-awareness into something concrete. The Big Five (OCEAN) test measures the five broad traits that academic psychologists consider the most scientifically supported model of personality, while the Myers-Briggs style type test translates Carl Jung’s theory of psychological types into a memorable four-letter profile. Together they show you two complementary views of yourself: your trait levels and your natural preferences.',
      'Not sure where to begin? If you want the most research-backed read, start with the Big Five personality test. If you prefer an intuitive, shareable profile with clear strengths and growth edges, take the 16-type MBTI test. Each is free, takes only a few minutes, and ends with a personalized result you can act on.',
    ],
    faq: [
      {
        q: 'Why does self-awareness matter for personal growth?',
        a: 'You cannot change what you cannot see. Understanding your natural tendencies — how you handle stress, make decisions, and work with others — lets you play to your strengths, anticipate your blind spots, and choose habits that actually fit you rather than generic advice. That is why most coaching and personal-development work begins with an honest self-assessment.',
      },
      {
        q: 'What is the difference between the Big Five and MBTI?',
        a: 'The Big Five (OCEAN) rates you on five independent traits, each on a spectrum, and is the model most widely used in academic personality research. The MBTI sorts you into one of 16 types based on four either/or preferences and is prized for being intuitive and easy to remember. The Big Five is more precise for measurement; the MBTI is more approachable for reflection and conversation.',
      },
      {
        q: 'Are these personality tests scientifically accurate?',
        a: 'The Big Five model has strong empirical support in psychology. The MBTI is popular and useful for self-reflection but is considered less rigorous by researchers. Treat both as tools for insight and conversation, not as fixed labels or clinical diagnoses.',
      },
      {
        q: 'Are these assessments free?',
        a: 'Yes. Every test on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
    draft: true,
  },
  quizzes: [
    {
      publicToken: 'a9b85tz4',
      slug: 'big-five-personality-test',
      featured: true,
      order: 1,
      seo: {
        title: 'Big Five Personality Test (OCEAN) — Free 30-Question Assessment',
        description:
          'Take a free Big Five (OCEAN) personality test. 30 quick statements score you on Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism, with a radar chart and a trait-by-trait breakdown.',
        overview:
          'Who are you, really? The Big Five Personality Test measures the five core traits psychologists use to describe personality — Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism (the OCEAN model). In about five minutes you get a personalized profile with a radar chart and a card for each trait, showing where you land on every spectrum and what it means for how you think, work, and connect.',
        whoFor:
          'Anyone who wants a research-backed read on their personality — for self-understanding, better teamwork, or simply satisfying curiosity — and prefers nuance over being boxed into a single type.',
        whatYouLearn: [
          'Your score on each of the five OCEAN traits, shown on a radar chart',
          'Where you land on each spectrum (low, moderate, or high) and what it means day to day',
          'The strengths and trade-offs that come with your profile',
          'One trait you might choose to develop, and a small habit to practice it',
        ],
        sampleQuestions: [
          'I have a vivid imagination and love exploring new ideas. (Strongly disagree → Strongly agree)',
          'I get my tasks and responsibilities done right away.',
          'Being around other people gives me energy.',
          'I stay calm and composed under pressure.',
        ],
        howItWorks:
          'You rate 30 short statements on a 5-point scale from Strongly disagree to Strongly agree. Your answers are scored across the five Big Five dimensions, and your result maps them onto a radar chart with a plain-language card for each trait. It takes about five minutes, is free, and needs no signup to start. There are no right or wrong answers, and no single type you get boxed into.',
        faq: [
          {
            q: 'What are the Big Five personality traits?',
            a: 'The Big Five, or OCEAN, are Openness (curiosity and imagination), Conscientiousness (organization and follow-through), Extraversion (sociability and energy), Agreeableness (compassion and cooperation), and Neuroticism (sensitivity to stress). Each runs on a spectrum, and everyone sits somewhere different on all five.',
          },
          {
            q: 'Is the Big Five test scientifically valid?',
            a: 'The Big Five is the most extensively researched framework in modern personality psychology and is widely used in academic studies. This quiz is a short self-report version designed for insight and reflection, not a clinical or diagnostic instrument.',
          },
          {
            q: 'Is a high or low score better?',
            a: 'Neither. Every trait level carries its own strengths and trade-offs — for example, lower conscientiousness brings flexibility while higher brings reliability. The value is understanding your profile, not chasing a particular score.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About five minutes for the 30 statements, and it is free with a personalized radar-chart profile — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'tdraqdp3',
      slug: 'mbti-personality-test',
      featured: true,
      order: 2,
      seo: {
        title: 'Free MBTI Personality Test — Which of the 16 Types Are You?',
        description:
          'A free 16-type personality test based on the Myers-Briggs dimensions. Answer 22 quick questions to discover your four-letter type, your strengths, your growth edge, and where you shine.',
        overview:
          'Discover which of the 16 personality types you are. Built on the classic Myers-Briggs framework — Extraversion vs Introversion, Sensing vs Intuition, Thinking vs Feeling, and Judging vs Perceiving — this quick test reads your natural preferences across four dimensions and returns your four-letter type with a rich profile: your core strengths, your growth edge, and the roles where you tend to shine.',
        whoFor:
          'Anyone curious about their personality type who wants an intuitive, memorable profile to reflect on and share — whether for self-understanding, relationships, or career direction.',
        whatYouLearn: [
          'Your four-letter type (one of the 16, e.g. INTJ, ENFP)',
          'What each of your four preferences means for how you take in information and make decisions',
          'The strengths your type leads with',
          'Your growth edge and the environments where you shine',
        ],
        sampleQuestions: [
          'At a social event, you’re more likely to mingle widely and feed off the crowd, or stick with a few familiar faces and recharge alone afterward?',
          'You trust information more when it is concrete and factual, or about patterns and future possibilities?',
          'When making a tough call, you lean on logic and objective analysis, or personal values and how people will be affected?',
          'You feel most at ease when your plans are decided in advance, or open-ended and free to change?',
        ],
        howItWorks:
          'You answer 22 quick either/or questions about how you gain energy, take in information, make decisions, and organize your life. Your answers add up across the four Myers-Briggs dimensions to produce your four-letter type, with a full description of your strengths, growth edge, and ideal environments. It takes about three minutes, is free, and needs no signup to start. Pick what feels most like the real you, not who you’d like to be.',
        faq: [
          {
            q: 'What do the four MBTI letters mean?',
            a: 'Each letter reflects a preference: E/I is where you draw energy (Extraversion or Introversion), S/N is how you take in information (Sensing or Intuition), T/F is how you make decisions (Thinking or Feeling), and J/P is how you approach the outer world (Judging or Perceiving). Combined, they form one of 16 types such as INFP or ESTJ.',
          },
          {
            q: 'How accurate is the MBTI?',
            a: 'The Myers-Briggs framework is one of the world’s most popular personality models and is a helpful tool for self-reflection and understanding others. Psychologists consider it less scientifically rigorous than trait models like the Big Five, so it is best used for insight and conversation rather than as a fixed label.',
          },
          {
            q: 'Can my personality type change over time?',
            a: 'Your core preferences tend to be fairly stable, but your results can shift with life stage, context, and self-awareness — and some people sit close to the middle on one or more dimensions. Retaking the test after a big life change can be revealing.',
          },
          {
            q: 'How long does it take, and is it free?',
            a: 'About three minutes for the 22 questions, and it is free with a full personalized type profile — no signup required to start.',
          },
        ],
      },
    },
  ],
}
