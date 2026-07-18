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
    intro: [
      'Business coaching helps founders and small-business owners work on the business, not just in it — diagnosing what is actually holding growth back and deciding where to focus limited time and money. Rather than generic advice, it starts from an honest read of your current fundamentals: your offer, your market, your systems, and your finances.',
      'These free business-coaching quizzes are a quick way to get that diagnosis. Each turns a fuzzy worry — "are we ready to grow?", "why does everything depend on me?", "who exactly is my client?" — into something specific, from your growth readiness and founder archetype to your selling style and ideal-client clarity.',
      'Not sure where to start? If you are weighing whether to scale, begin with the growth readiness scorecard. If you are still shaping your coaching or service practice, try the coaching niche or client discovery assessments. Each is free, takes a few minutes, and ends with a personalized result and a clear next step.',
    ],
    faq: [
      {
        q: 'What does a business coach do?',
        a: 'A business coach helps you step back from daily operations to see the bigger picture — clarifying your goals, spotting the constraint holding growth back, and building a focused plan. The emphasis is on accountability and better decisions, not doing the work for you.',
      },
      {
        q: 'What can a business-coaching quiz tell me?',
        a: 'A good business quiz gives you a fast, structured diagnosis — such as which of your fundamentals would crack first under growth, your natural founder strengths and blind spots, or how clearly you have defined your ideal client — with a concrete area to work on next.',
      },
      {
        q: 'Are these business-coaching quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
      {
        q: 'Is a quiz a substitute for working with a business coach?',
        a: 'No. These quizzes are a starting point for focus and self-reflection. A qualified business coach adds ongoing accountability, tailored strategy, and an outside perspective over time.',
      },
    ],
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
    {
      publicToken: 'vctf3j4u',
      slug: 'coaching-niche',
      order: 13,
      seo: {
        title: 'Coaching Niche Quiz — Find Your Profitable Specialty',
        description:
          'A free quiz that helps new and stuck coaches find a profitable coaching niche that fits their strengths, story, and the clients they are best placed to serve.',
        overview:
          'Trying to coach "everyone" is the fastest way to reach no one. This quiz helps you find the coaching niche where your strengths, experience, and the market overlap — so your message gets sharper, referrals get easier, and you can charge what your work is worth.',
        whoFor:
          'New coaches choosing a direction and established coaches who feel too generic, blend into a crowded market, or struggle to explain in one sentence who they help and how.',
        whatYouLearn: [
          'The coaching niche that best fits your strengths and background',
          'Why a clear niche makes marketing and referrals far easier',
          'The kinds of clients you are naturally positioned to serve',
          'A first step to test and validate your niche',
        ],
        howItWorks:
          'You answer a short set of questions about your strengths, experience, and the problems you most enjoy helping people solve. Your answers point to a niche direction with a plain-language explanation and a suggested next step. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Why does a coaching niche matter?',
            a: 'A defined niche makes your marketing specific and memorable, positions you as the obvious choice for a certain client, and typically supports higher fees than generalist coaching. It also makes referrals easier because people can describe exactly who you help.',
          },
          {
            q: 'Will choosing a niche limit my income?',
            a: 'Usually the opposite. Specializing tends to raise perceived expertise and pricing power, and you can still serve adjacent needs. A niche is a focus for your marketing, not a cage for your whole practice.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'r5espu34',
      slug: 'coaching-client-discovery',
      order: 14,
      seo: {
        title: 'Coaching Client Discovery Assessment — Know Your Ideal Client',
        description:
          'A free discovery assessment that helps coaches get clear on their ideal client, their real problems, and the message that turns strangers into booked calls.',
        overview:
          'You cannot sell coaching to a client you have not defined. This discovery assessment helps you get specific about who your ideal client is, the problems keeping them up at night, and the language that makes them feel understood — the foundation of an offer that actually converts.',
        whoFor:
          'Coaches building or refining their practice who want a sharper picture of their ideal client and a message that resonates enough to fill discovery calls.',
        whatYouLearn: [
          'A clearer profile of your ideal coaching client',
          'The core problems and goals that drive them to seek a coach',
          'Where your current positioning is vague or off-target',
          'How to sharpen your message so the right clients self-select',
        ],
        howItWorks:
          'You work through a structured set of prompts about the clients you serve best, their problems, and your positioning. Your responses surface where your client picture is clear and where it is fuzzy, with pointers to tighten it. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Why is client discovery so important for coaches?',
            a: 'Clarity on your ideal client shapes everything downstream — your offer, pricing, content, and sales conversations. When you deeply understand a specific client\'s problems, your marketing speaks directly to them and your discovery calls convert far more often.',
          },
          {
            q: 'Is this the same as choosing a niche?',
            a: 'They are related but distinct. A niche defines the space you work in; client discovery zooms in on the specific person in that space — their problems, language, and goals — so your message lands.',
          },
          {
            q: 'How long does the assessment take, and is it free?',
            a: 'About five minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
