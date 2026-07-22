import type { CategoryFile } from '../schema'

/** niche · 内容创作教练 */
export const contentCreatorCoaching: CategoryFile = {
  category: {
    slug: 'content-creator-coaching',
    name: 'Content Creator Coach',
    title: 'Content Creator Coaching Quizzes & Assessments',
    description:
      'Free content-creator quizzes to find your creator style, sharpen your strengths, and grow your audience with intention.',
    emoji: '📱',
    heroCopy: 'Grow as a content creator. Short assessments that show your natural strengths and where to focus next.',
    order: 17,
    parent: 'performance-creativity',
    // 已收录 1 道完整 GEO 测评（content-creator-style）。沿用作者约定：≥3 道再去 draft 促级开页。
    draft: true,
    intro: [
      'Content-creator coaching helps you turn scattered posting into a deliberate craft. Instead of copying whatever is trending, you learn to build on your natural strengths — teaching, entertaining, storytelling, or growth strategy — so your content compounds into an audience that actually sticks.',
      'These free quizzes are a fast way to see yourself clearly. Each one is a short self-assessment that names your creator style, surfaces the blind spot quietly capping your growth, and points to the next skill worth building. That matters because the creator economy is now estimated to include well over 200 million people worldwide (Goldman Sachs Research, 2023), so a clear, differentiated style is what separates channels that grow from those that stall.',
      'Not sure where to start? If you are unsure what makes your content distinctive, take the creator style quiz first. Each assessment takes about two minutes, is free, and gives you a personalized result with a concrete next step.',
    ],
    faq: [
      {
        q: 'What is content-creator coaching?',
        a: 'Content-creator coaching is a forward-looking process that helps you clarify your creative identity, play to your strengths, and build the habits and systems that grow an audience. It focuses on your style, positioning, and consistency rather than chasing every trend.',
      },
      {
        q: 'What can a content-creator quiz tell me?',
        a: 'A good creator quiz names your dominant style — for example educator, entertainer, storyteller, or strategist — along with the strengths it gives you, the blind spot it hides, and the next skill to develop so your content stands out.',
      },
      {
        q: 'Are these content-creator quizzes free?',
        a: 'Yes. Every quiz on this page is free and takes about two minutes, with a personalized result and no signup required to start.',
      },
      {
        q: 'Is a quiz a substitute for a content strategy?',
        a: 'No. These quizzes are a starting point for self-awareness. Knowing your style makes strategy easier, but consistent publishing, audience feedback, and iteration are what actually grow a channel.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'h89a9ku7',
      slug: 'content-creator-style',
      featured: true,
      order: 1,
      seo: {
        title: 'Content Creator Style Quiz — Find Your Creator Archetype',
        description:
          'A free 2-minute quiz that reveals your content creator archetype — educator, entertainer, storyteller, or strategist — with your strengths, blind spots, and how to grow.',
        overview:
          'Every creator who grows has a signature style. This quick quiz maps how you think about creating across four creator archetypes — the Educator, the Entertainer, the Storyteller, and the Strategist — and returns the one that fits you best, with the strengths it gives you and the blind spot to watch as you scale.',
        whoFor:
          'Creators, coaches, and small businesses building a personal brand who want to know what makes their content distinctive and where to focus to grow an audience with intention.',
        whatYouLearn: [
          'Your dominant creator archetype: Educator, Entertainer, Storyteller, or Strategist',
          'The specific strengths your style gives you',
          'The blind spot that most often caps growth for your type',
          'One concrete way to level up your content next',
        ],
        sampleQuestions: [
          'When you sit down to create, what excites you most — explaining something clearly, making people laugh, telling a story, or cracking what will grow?',
          'Your ideal piece of content is one that teaches a useful skill, is impossible to scroll past, makes people feel connected to you, or converts.',
          'Which metric do you secretly care about most: saves and shares, watch time, comments and DMs, or follower growth?',
          'Long-term, you want your channel known for being the go-to resource, genuinely entertaining, a connected community, or smart growth and a real business.',
        ],
        howItWorks:
          'You answer eight quick questions about what motivates you, how you decide what to make, and the metrics you care about. Your answers are scored across four creator archetypes, and your result highlights your dominant style with its strengths, its blind spot, and a growth tip. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the four content creator archetypes?',
            a: 'This quiz uses four creator styles: the Educator (teaches and explains), the Entertainer (hooks and delights), the Storyteller (connects through narrative), and the Strategist (grows and optimizes). Most creators lead with one but borrow from the others.',
          },
          {
            q: 'Can I be more than one type?',
            a: 'Yes. The strongest creators blend styles — for example an educator who adds storytelling, or an entertainer who layers in a clear takeaway. The quiz names your dominant style so you know what to build on first.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes for eight questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
