import type { CategoryFile } from '../schema'

/** niche · 投资教练 */
export const investmentCoaching: CategoryFile = {
  category: {
    slug: 'investment-coaching',
    name: 'Investment Coach',
    title: 'Investing Quizzes & Knowledge Assessments',
    description:
      'Free investing quizzes to test your knowledge of stocks, bonds, compounding, and risk — and learn the fundamentals as you go.',
    emoji: '📈',
    heroCopy: 'Build investing habits and knowledge. Short quizzes that teach as you test yourself.',
    order: 13,
    parent: 'lifestyle-interests',
    // 已收录 1 道完整 GEO 测评（investing-iq）。沿用作者约定：≥3 道再去 draft 促级开页。
    draft: true,
    intro: [
      'Investment coaching is about building the knowledge and habits that let your money work over time — understanding risk, diversification, fees, and the power of compounding, rather than chasing hot tips. Confidence comes from fundamentals, not from timing the market.',
      'These free quizzes are a fast, low-pressure way to test and strengthen that foundation. Each question comes with a plain-language explanation, so you learn as you go. This matters because financial literacy remains low: the FINRA Investor Education Foundation has repeatedly found that most U.S. adults answer only about half of a basic five-question financial literacy quiz correctly, and roughly two-thirds of adults worldwide are not financially literate (S&P Global FinLit Survey).',
      'Want to know where you stand? Take the Investing IQ quiz first — it takes a few minutes, is free, and shows you which concepts you have down and which are worth reviewing. These quizzes are educational and not personalized financial advice.',
    ],
    faq: [
      {
        q: 'What is investment coaching?',
        a: 'Investment coaching helps you build the knowledge, habits, and mindset to invest with confidence — covering fundamentals like risk, diversification, costs, and long-term thinking. It focuses on education and behavior rather than picking specific investments for you.',
      },
      {
        q: 'What can an investing quiz tell me?',
        a: 'A good investing quiz shows how well you understand core concepts — stocks, bonds, index funds, compounding, liquidity, and fees — and explains the answers so you close the gaps as you go.',
      },
      {
        q: 'Are these investing quizzes free?',
        a: 'Yes. Every quiz on this page is free and takes just a few minutes, with a personalized result and an explanation for each question — no signup required to start.',
      },
      {
        q: 'Is this financial advice?',
        a: 'No. These quizzes are educational tools to build your understanding of investing concepts. They are not personalized financial advice. For decisions about your own money, consider consulting a qualified financial professional.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '75dyv5gz',
      slug: 'investing-iq',
      featured: true,
      order: 1,
      seo: {
        title: 'Investing IQ Quiz — Test Your Investment Knowledge',
        description:
          'A free 12-question investing quiz on stocks, bonds, index funds, compounding, and risk — each with an explanation so you learn as you go. Educational, not advice.',
        overview:
          'Think you know your way around investing? This quiz tests your grasp of the core concepts every smart investor relies on — stocks, bonds, compounding, diversification, index funds, liquidity, and fees. Each of the twelve questions comes with a clear explanation, so you actually learn as you go and see where you land, from Curious Beginner to Investing Pro.',
        whoFor:
          'New and intermediate investors who want an honest read on their knowledge, plus anyone who wants to shore up the fundamentals before putting more money to work.',
        whatYouLearn: [
          'Your Investing IQ level: Curious Beginner, Savvy Investor, or Investing Pro',
          'How well you understand risk, diversification, and compounding',
          'The difference between stocks, bonds, and index funds',
          'Which fundamentals to review next — with an explanation for every answer',
        ],
        sampleQuestions: [
          'What does diversification primarily aim to do?',
          'What does compound interest mean?',
          'What is an index fund?',
          'What does an expense ratio measure for a fund?',
        ],
        howItWorks:
          'You answer twelve multiple-choice questions covering the building blocks of investing. Each answer reveals a short explanation, and your total score out of 120 places you in one of three levels with guidance on what to strengthen next. It takes a few minutes, is free, and needs no signup to start. It is educational and not personalized financial advice.',
        faq: [
          {
            q: 'Is this quiz financial advice?',
            a: 'No. The Investing IQ quiz is purely educational — it tests and explains general investing concepts. It is not personalized financial advice. For decisions about your own money, consider speaking with a qualified financial professional.',
          },
          {
            q: 'Do I need investing experience to take it?',
            a: 'No. The quiz is designed for all levels. Every question includes an explanation, so beginners learn the fundamentals while more experienced investors can check the finer points like liquidity and fees.',
          },
          {
            q: 'How is my Investing IQ scored?',
            a: 'Each correct answer is worth points toward a total out of 120, which maps to one of three levels: Curious Beginner, Savvy Investor, or Investing Pro. The explanations show you exactly what to review.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'A few minutes for twelve questions, and it is free with a personalized result and per-question explanations — no signup required to start.',
          },
        ],
      },
    },
  ],
}
