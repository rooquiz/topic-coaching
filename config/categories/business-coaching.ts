import type { CategoryFile } from '../schema'

/** niche · 商业教练（领导力测评已拆到 leadership-coaching） */
export const businessCoaching: CategoryFile = {
  category: {
    slug: 'business-coaching',
    name: 'Business Coaching',
    title: 'Business & Growth Coaching Quizzes',
    description: 'Assess your growth blockers, founder profile, and business readiness with free business-coaching quizzes.',
    emoji: '📈',
    heroCopy: 'Pinpoint what is holding your business back with quick, focused diagnostics.',
    order: 2,
    parent: 'career-business-leadership',
  },
  quizzes: [
    {
      publicToken: '6asmj28d',
      slug: 'business-scale-readiness',
      order: 10,
      seo: {
        overview:
          'Pouring fuel on a business that is not ready just makes the cracks bigger. This 12-question scorecard grades you across four pillars — Offer & Market Fit, Marketing, Systems, and Finance — and shows exactly where to focus before you scale.',
        whoFor:
          'Founders and small-business owners deciding whether to hit the gas — especially anyone tempted to scale marketing or headcount before the foundations can hold the weight.',
        whatYouLearn: [
          'Your overall growth readiness score',
          'How you rate across Offer & Market Fit, Marketing, Systems, and Finance',
          'The weakest pillar that would crack first under growth',
          'Where to focus before you invest in scaling',
        ],
        faq: [
          {
            q: 'What does it mean for a business to be ready to scale?',
            a: 'Being ready to scale means your fundamentals can absorb more volume without breaking — a proven offer, a repeatable way to get customers, systems that do not depend entirely on you, and healthy finances. Scaling before that amplifies problems instead of profit.',
          },
          {
            q: 'Which part of my business should I fix first?',
            a: 'Usually the weakest of the four pillars. The scorecard identifies it for you so you invest where it matters most rather than spreading effort thin.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About three to four minutes for the 12 questions, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'au8agrwa',
      slug: 'founder-archetype',
      featured: true,
      order: 11,
      seo: {
        overview:
          'Every founder builds differently. Are you the Visionary, the Builder, the Connector, or the Strategist? This 10-question quiz reveals your founder archetype — your natural strengths and the one move that unlocks your next stage of growth.',
        whoFor:
          'Founders and aspiring founders who want to understand their natural strengths, delegate the rest, and know what to focus on next.',
        whatYouLearn: [
          'Your founder archetype: Visionary, Builder, Connector, or Strategist',
          'The strengths you lead with',
          'The blind spots to cover or hire around',
          'The one move that unlocks your next stage of growth',
        ],
        faq: [
          {
            q: 'What is a founder archetype?',
            a: 'A founder archetype describes the natural way you build — where your instincts, energy, and strengths pull you. Knowing yours helps you lean into what you do best and deliberately cover or delegate the parts that drain you.',
          },
          {
            q: 'Does my archetype limit what I can build?',
            a: 'No. It describes your default strengths, not a ceiling. The value is in using it to build a complementary team and focus your own energy where it pays off most.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes for the 10 questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'x594wcnf',
      slug: 'selling-style',
      order: 12,
      seo: {
        overview:
          'The best sellers do not copy a script — they play to their natural style. This quick quiz reveals your selling style, the strengths it gives you, the blind spot to watch, and how to level up without pretending to be someone you are not.',
        whoFor:
          'Founders, coaches, and salespeople who dislike "salesy" tactics and want to sell in a way that feels authentic and actually converts.',
        whatYouLearn: [
          'Your natural selling style',
          'The strengths it gives you with prospects',
          'Your biggest blind spot in the sales conversation',
          'How to level up while staying true to your style',
        ],
        faq: [
          {
            q: 'What is a selling style?',
            a: 'Your selling style is the way you naturally build trust and move a conversation toward a decision — for example, through relationships, expertise, curiosity, or momentum. The strongest sellers amplify their style rather than imitating someone else’s.',
          },
          {
            q: 'Do I have to be an extrovert to sell well?',
            a: 'No. Every style can sell effectively; they just do it differently. Quieter, more consultative styles often build deeper trust. The key is knowing yours and playing to it.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
