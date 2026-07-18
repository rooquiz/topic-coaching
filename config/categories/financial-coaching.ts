import type { CategoryFile } from '../schema'

/** niche · 财务教练 */
export const financialCoaching: CategoryFile = {
  category: {
    slug: 'financial-coaching',
    name: 'Financial Coach',
    title: 'Financial Coaching Quizzes & Assessments',
    description:
      'Take control of your money with free financial-coaching quizzes — discover your money personality, test your financial IQ, and score your financial wellness.',
    emoji: '💰',
    heroCopy: 'Money stress is rarely about the math. Start by understanding how you actually relate to money.',
    order: 12,
    parent: 'lifestyle-interests',
    intro: [
      'Financial coaching is about behavior, not just budgets. Most money problems are not caused by a lack of information — they come from the habits, emotions, and beliefs that quietly drive how we earn, spend, save, and worry. A good financial coach helps you see those patterns clearly and build a plan that fits how you actually think about money.',
      'It matters more than ever. Surveys in 2025 found that roughly 7 to 9 in 10 Americans feel some form of financial stress, and most say money worries disrupt their sleep, relationships, and focus at work. Naming what is really going on with your money is the first step to loosening that grip.',
      'These free financial-coaching quizzes are a fast, judgment-free place to begin. Discover your money personality, pressure-test your financial knowledge, or score your overall financial wellness. Each takes just a few minutes, is free, and ends with a personalized result and a practical next step — no signup required to start.',
    ],
    faq: [
      {
        q: 'What is financial coaching?',
        a: 'Financial coaching is a forward-looking, behavior-focused process that helps you understand your relationship with money and build habits that move you toward your goals. Unlike a financial advisor who manages investments, a financial coach focuses on the mindset, decisions, and day-to-day behaviors behind your finances.',
      },
      {
        q: 'Why does my "money personality" matter?',
        a: 'Financial-psychology research — notably Dr. Brad Klontz\'s work on "money scripts" — shows that beliefs about money form early in life and unconsciously drive adult financial behavior. Knowing your pattern (for example, whether you avoid money, worship it, tie it to status, or watch it anxiously) helps you build a plan that works with your tendencies instead of against them.',
      },
      {
        q: 'Are these financial quizzes free?',
        a: 'Yes. Every quiz on this page is free and takes just a few minutes, with a personalized result and no signup required to start.',
      },
      {
        q: 'Can a quiz replace real financial advice?',
        a: 'No. These quizzes are self-reflection and coaching tools to help you understand your habits and knowledge. For decisions about investments, taxes, or debt, consult a qualified financial professional.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '5dwmcn9s',
      slug: 'money-personality',
      featured: true,
      order: 1,
      seo: {
        title: 'Money Personality Quiz — Discover Your Financial Type',
        description:
          'A free 5-minute money personality quiz that reveals how you really relate to money — and how to work with your natural tendencies instead of against them.',
        overview:
          'The way you spend, save, and stress about money is shaped less by the numbers than by beliefs you may not even notice. This quick quiz reveals your money personality, where it comes from, and how to play to its strengths while managing its blind spots.',
        whoFor:
          'Anyone who wants to understand their financial habits, keeps repeating the same money mistakes, or feels their emotions run the show whenever money is involved.',
        whatYouLearn: [
          'Your dominant money personality',
          'The beliefs and early experiences driving it',
          'The financial strengths your type brings',
          'The blind spots to watch — and one habit to build next',
        ],
        sampleQuestions: [
          'When unexpected money comes in, is your first instinct to spend it, save it, or avoid thinking about it?',
          'Do you check your account balance more out of curiosity, anxiety, or avoidance?',
          'How much does what you own or earn shape how you feel about yourself?',
          'When a big financial decision comes up, do you research it thoroughly or put it off?',
        ],
        howItWorks:
          'You answer a short set of statements about how you feel and act around money. Your answers map to common money personality patterns — drawing on financial-psychology frameworks like Brad Klontz\'s "money scripts" (money avoidance, worship, status, and vigilance) — and your result explains your dominant type with a plain-language breakdown and a next step. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a money personality?',
            a: 'A money personality is your characteristic pattern of beliefs and behaviors around earning, spending, saving, and risk. Financial psychologists trace much of it to "money scripts" — unconscious beliefs about money formed in childhood that quietly shape adult financial decisions.',
          },
          {
            q: 'Can my money personality change?',
            a: 'Your underlying tendencies are fairly stable, but the behaviors are not fixed. Once you can name your pattern, you can build systems and habits that lean on its strengths and guard against its blind spots.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About five minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: '2w8zfhnt',
      slug: 'financial-wellness-scorecard',
      order: 2,
      seo: {
        title: 'Financial Wellness Scorecard — How Money-Healthy Are You?',
        description:
          'A free 2-minute financial wellness scorecard that rates your money health across spending, saving, debt, and peace of mind — and shows where to focus first.',
        overview:
          'Financial wellness is more than your account balance — it is whether your money supports the life you want without constant stress. This scorecard rates your financial health across spending, saving, debt, and peace of mind, then shows where the strain is greatest and what to strengthen first.',
        whoFor:
          'Anyone who wants a clear, honest read on their financial health — whether things feel shaky, surprisingly stable, or somewhere in between — and a concrete place to start improving.',
        whatYouLearn: [
          'Your overall financial wellness score (a higher score means healthier finances)',
          'How you rate across spending, saving, debt, and financial peace of mind',
          'Where the biggest strain on your money health sits right now',
          'A practical first step to improve your weakest area',
        ],
        sampleQuestions: [
          'Could you cover an unexpected $500 expense without borrowing?',
          'Do you know roughly where your money goes each month?',
          'How often do money worries keep you up at night?',
          'Are you saving something consistently, even a small amount?',
        ],
        howItWorks:
          'You answer a short set of questions about your money habits and feelings. Your answers are scored across four pillars of financial wellness, and your result gives you an overall rating plus a breakdown of where you are solid and where to focus. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is financial wellness?',
            a: 'Financial wellness is the sense that you can meet your obligations, absorb a shock, and make progress toward your goals without being ruled by money stress. It combines objective habits (saving, debt, spending) with subjective peace of mind.',
          },
          {
            q: 'What does my score mean?',
            a: 'A higher score means your finances are on healthier footing across the four pillars; a lower score highlights where the strain is and what to strengthen first. It is a starting point for reflection, not a credit score or financial rating.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About two minutes, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'x5kjbgay',
      slug: 'money-iq',
      order: 3,
      seo: {
        title: 'Money IQ Quiz — Test Your Personal Finance Smarts',
        description:
          'A free money IQ quiz that tests your personal finance knowledge — budgeting, saving, credit, and investing — with clear explanations so you learn as you go.',
        overview:
          'How sharp are your money smarts, really? This quick quiz tests your personal finance knowledge across budgeting, saving, credit, and investing basics — and explains each answer so you walk away knowing more than when you started.',
        whoFor:
          'Anyone who wants to check how strong their financial literacy actually is, spot the gaps, and pick up practical money knowledge in a few minutes.',
        whatYouLearn: [
          'Your money IQ across core personal-finance topics',
          'The concepts you have solid — and the ones worth brushing up on',
          'Practical rules of thumb for budgeting, credit, and saving',
          'Where a little more knowledge could save or earn you money',
        ],
        sampleQuestions: [
          'What does APR actually measure on a credit card or loan?',
          'Roughly how much should a starter emergency fund cover?',
          'What is the main advantage of compound interest over time?',
          'How does paying only the minimum on a credit card affect what you owe?',
        ],
        howItWorks:
          'You answer a set of multiple-choice personal-finance questions. Each answer comes with a short explanation, and your final score shows how your money knowledge stacks up along with the topics worth revisiting. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What does the money IQ quiz cover?',
            a: 'It covers everyday personal-finance essentials — budgeting, saving, credit and debt, and the basics of investing — the knowledge that most affects day-to-day financial decisions.',
          },
          {
            q: 'Is this a test I can fail?',
            a: 'No. It is a low-stakes way to check and build your financial literacy. Every question includes an explanation, so the quiz teaches as much as it tests.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About five minutes, and it is free with your score and explanations — no signup required to start.',
          },
        ],
      },
    },
  ],
}
