import type { CategoryFile } from '../schema'

/** niche · 演讲教练 */
export const publicSpeakingCoaching: CategoryFile = {
  category: {
    slug: 'public-speaking-coaching',
    name: 'Public Speaking Coach',
    title: 'Public Speaking Coach Quizzes & Assessments',
    description: 'Speak in public with confidence and presence. Free public-speaking coaching quizzes and assessments.',
    emoji: '🎤',
    heroCopy: 'Speak in public with confidence and presence — start by understanding your natural speaking style.',
    order: 18,
    parent: 'career-business-leadership',
    intro: [
      'Public speaking coaching helps you communicate with clarity, confidence, and presence — whether you are pitching to a room, presenting to your team, or stepping onto a stage. The goal is not to turn everyone into the same polished performer, but to help you build on the way you naturally connect with an audience.',
      'A useful first step is knowing your own tendencies: how you open, what you over-prepare, and what you fear most on stage. These free quizzes turn that self-awareness into something specific you can work on, so practice is targeted instead of generic.',
      'Fear of public speaking is one of the most common anxieties there is — surveys consistently rank it near or above the fear of death (source: National Institute of Mental Health via Psychology Today, https://www.psychologytoday.com/us/blog/the-real-story-of-risk/201211/the-thing-we-fear-more-than-death). Understanding your speaking style is a low-pressure way to start building the confidence that comes from playing to your strengths.',
    ],
    faq: [
      {
        q: 'What does a public speaking coach help with?',
        a: 'A public speaking coach helps you structure a talk, manage nerves, use your voice and body deliberately, and connect with an audience — building on your natural strengths rather than forcing a single "correct" style.',
      },
      {
        q: 'Can I get better at public speaking if I am naturally shy?',
        a: 'Yes. Public speaking is a learnable skill, not a fixed trait. Many effective speakers are introverts who lean into preparation, storytelling, and genuine connection rather than high-energy showmanship.',
      },
      {
        q: 'Are these public-speaking quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'g6u68cht',
      slug: 'public-speaking-style',
      order: 1,
      seo: {
        title: 'Public Speaking Style Quiz — Discover Your Speaker Archetype',
        description:
          'A free 2-minute quiz that reveals your public speaking style — Storyteller, Expert, Energizer, or Connector — plus your strengths on stage and the blind spot to watch.',
        overview:
          'What kind of speaker are you when all eyes are on you? This quick quiz reveals your public speaking archetype — Storyteller, Expert, Energizer, or Connector — so you can lean into your natural strengths, cover your blind spots, and grow into a more confident, magnetic presenter.',
        whoFor:
          'Anyone who presents, pitches, teaches, or speaks on stage and wants to understand their natural style — whether you love the spotlight or still get nervous before you speak.',
        whatYouLearn: [
          'Your public speaking archetype: Storyteller, Expert, Energizer, or Connector',
          'The strengths your style gives you with an audience',
          'The blind spot most likely to hold you back',
          'How to grow into a more confident, well-rounded speaker',
        ],
        sampleQuestions: [
          'You have five minutes to open a talk. You start with a story, a surprising statistic, a bold statement, or a question to the audience?',
          'When you prepare, you spend the most time on facts, the narrative arc, what the audience needs, or your energy and delivery?',
          'Audiences most often describe you as clear and credible, moving and memorable, inspiring and high-energy, or warm and relatable?',
          'Your biggest fear on stage is getting a fact wrong, losing the emotional thread, coming across flat, or losing connection with the room?',
        ],
        howItWorks:
          'You answer eight quick questions about how you prepare, present, and handle pressure on stage. Your answers map to four speaker archetypes, and your result highlights your dominant style with its strengths and a blind spot to watch. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What is a public speaking style?',
            a: 'Your public speaking style is the natural way you engage an audience — for example through story, expertise, energy, or personal connection. Knowing yours lets you amplify what already works instead of copying a style that does not fit you.',
          },
          {
            q: 'Is one speaking style better than the others?',
            a: 'No. Each archetype can be highly effective; they simply connect with audiences in different ways. The strongest speakers know their default style and borrow deliberately from the others when a moment calls for it.',
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
