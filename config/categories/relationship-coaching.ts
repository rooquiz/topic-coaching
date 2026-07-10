import type { CategoryFile } from '../schema'

/** niche · 关系教练 */
export const relationshipCoaching: CategoryFile = {
  category: {
    slug: 'relationship-coaching',
    name: 'Relationship Coaching',
    title: 'Relationship Coaching Quizzes',
    description:
      'Explore your communication style and relationship patterns with free relationship-coaching quizzes.',
    emoji: '💬',
    heroCopy: 'Better relationships start with self-awareness. Take a quiz to begin.',
    order: 2,
    parent: 'life-mindset-relationships',
  },
  quizzes: [
    {
      publicToken: 'dtvby4ca',
      slug: 'attachment-style',
      featured: true,
      order: 18,
      seo: {
        overview:
          'The way you bond, argue, and pull close — or pull away — often traces back to one of four attachment styles formed early in life. This honest 12-question quiz reveals yours and what it means for how you show up in relationships.',
        whoFor:
          'Anyone who wants to understand their patterns in dating or long-term relationships, or why closeness and conflict tend to play out the way they do.',
        whatYouLearn: [
          'Your primary attachment style: secure, anxious, avoidant, or disorganized',
          'How it shapes the way you bond and handle conflict',
          'What tends to trigger you in relationships',
          'What it means for building healthier connection',
        ],
        faq: [
          {
            q: 'What are the four attachment styles?',
            a: 'Attachment theory describes four broad styles: secure (comfortable with closeness and independence), anxious (craves closeness, fears abandonment), avoidant (values independence, uneasy with too much closeness), and disorganized (a mix of the anxious and avoidant patterns). Most people lean toward one.',
          },
          {
            q: 'Can your attachment style change?',
            a: 'Yes. Attachment style is a pattern, not a life sentence. With awareness, healthier relationships, and sometimes support from a professional, people can move toward more secure attachment over time.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three to four minutes for the 12 questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'sn97jbar',
      slug: 'dating-pattern',
      order: 19,
      seo: {
        overview:
          'Why do your relationships keep following the same script? This quick quiz uncovers your dating pattern — where it comes from, what it costs you, and the first step to change it — so you can stop repeating the cycle without realizing it.',
        whoFor:
          'Anyone who notices the same dynamics repeat across relationships, or who keeps ending up in situations that feel frustratingly familiar.',
        whatYouLearn: [
          'Your recurring dating pattern',
          'Where the pattern comes from',
          'What it quietly costs you',
          'A first step to break the cycle',
        ],
        faq: [
          {
            q: 'What is a dating pattern?',
            a: 'A dating pattern is a recurring dynamic in who you are drawn to and how your relationships tend to unfold — for example, chasing the unavailable, moving too fast, or avoiding real closeness. Because it often runs on autopilot, naming it is the first step to changing it.',
          },
          {
            q: 'Why do I keep repeating the same relationships?',
            a: 'Repeating patterns usually come from familiar dynamics and unmet needs, not bad luck. Seeing the pattern clearly — its origin and its cost — is what makes it possible to choose differently.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'zfxrszr6',
      slug: 'parenting-style',
      order: 20,
      seo: {
        overview:
          'There is no perfect parent — just different styles, each with its own strengths and blind spots. This quick quiz reveals your parenting style, what it does well, where it can trip you up, and one way to grow.',
        whoFor:
          'Parents and caregivers who want to understand their instincts, play to their strengths, and grow in the areas that matter most to their kids.',
        whatYouLearn: [
          'Your parenting style',
          'The strengths it brings to your kids',
          'Its blind spots to watch for',
          'One concrete way to grow',
        ],
        faq: [
          {
            q: 'What are the main parenting styles?',
            a: 'Research commonly describes styles along dimensions of warmth and structure — for example authoritative (high warmth, high structure), authoritarian, permissive, and uninvolved. Most parents lean toward one, and each has strengths and trade-offs.',
          },
          {
            q: 'Is there a best parenting style?',
            a: 'Balancing warmth with clear, consistent structure tends to serve kids well, but no style is perfect and context matters. This quiz focuses on understanding your natural style and one practical way to grow.',
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
