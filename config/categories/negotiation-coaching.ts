import type { CategoryFile } from '../schema'

/** niche · 谈判教练 */
export const negotiationCoaching: CategoryFile = {
  category: {
    slug: 'negotiation-coaching',
    name: 'Negotiation Coach',
    title: 'Negotiation Coach Quizzes & Assessments',
    description: 'Sharpen your deal-making skills. Free negotiation coaching quizzes and assessments.',
    emoji: '🤝',
    heroCopy: 'Sharpen your negotiation skills — start by testing what you really know.',
    order: 17,
    parent: 'career-business-leadership',
    intro: [
      'Negotiation coaching helps you get better outcomes in the conversations that matter — salary talks, client deals, partnerships, and everyday agreements — without damaging the relationship. Strong negotiators are made, not born: they master a handful of concepts and practice them deliberately.',
      'Much of that skill rests on a few core ideas that recur in every serious negotiation framework — your BATNA (best alternative to a negotiated agreement), the ZOPA (zone of possible agreement), anchoring, and the difference between positions and underlying interests. These principles were popularized by the Harvard Negotiation Project in the classic book Getting to Yes by Roger Fisher and William Ury (source: Harvard Program on Negotiation, https://www.pon.harvard.edu/).',
      'These free quizzes are a fast way to see where your negotiation knowledge is solid and where the gaps are, so you know exactly what to sharpen before your next high-stakes conversation.',
    ],
    faq: [
      {
        q: 'Can negotiation actually be learned?',
        a: 'Yes. Negotiation is a skill built on learnable frameworks and repeated practice, not an inborn talent. Understanding concepts like BATNA, anchoring, and interest-based bargaining measurably improves most people\'s outcomes.',
      },
      {
        q: 'What is the single most important idea in negotiation?',
        a: 'Many experts point to your BATNA — your best alternative if no deal is reached. A strong, credible alternative is what gives you leverage, because the side that needs the deal least usually secures better terms.',
      },
      {
        q: 'Are these negotiation quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'mwghydsj',
      slug: 'negotiation-iq',
      order: 1,
      seo: {
        title: 'Negotiation IQ Quiz — Test Your Deal-Making Skills',
        description:
          'A free 10-question negotiation IQ quiz covering BATNA, ZOPA, anchoring, and win-win value creation — with an explanation after every question so you learn as you go.',
        overview:
          'Think you can hold your own at the negotiating table? This 10-question quiz tests the core concepts every strong dealmaker knows — from BATNA and anchoring to win-win value creation — and gives you an explanation after each question, so you sharpen your skills as you score them.',
        whoFor:
          'Founders, managers, salespeople, and anyone who negotiates salaries, deals, or agreements and wants an honest read on how sharp their fundamentals really are.',
        whatYouLearn: [
          'Your negotiation IQ across core deal-making concepts',
          'Whether you truly understand BATNA, ZOPA, and anchoring',
          'The difference between positions and interests — and why it matters',
          'How value-creating (integrative) negotiation beats fighting over a fixed pie',
        ],
        sampleQuestions: [
          'In negotiation, what does the acronym BATNA stand for?',
          'What is the "ZOPA" in a negotiation?',
          'The tactic of "anchoring" means what?',
          'What is the difference between a "position" and an "interest"?',
        ],
        howItWorks:
          'You answer 10 multiple-choice questions covering key negotiation concepts and tactics. Each answer is scored and followed by a short explanation, and your result gives you an overall negotiation IQ with the areas to brush up on. It takes about four minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is BATNA and why does it matter?',
            a: 'BATNA stands for Best Alternative To a Negotiated Agreement — your best course of action if no deal is reached. Popularized in Getting to Yes, a strong BATNA is your single biggest source of leverage because it defines the point at which walking away beats saying yes.',
          },
          {
            q: 'What is the difference between a position and an interest?',
            a: 'A position is what someone says they want; an interest is why they want it. Negotiating around interests, rather than clashing positions, unlocks creative solutions that can satisfy both sides.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About four minutes for the 10 questions, and it is free with a personalized result and per-question explanations — no signup required to start.',
          },
        ],
      },
    },
  ],
}
