import type { CategoryFile } from '../schema'

/** niche · 冥想教练 */
export const meditationCoaching: CategoryFile = {
  category: {
    slug: 'meditation-coaching',
    name: 'Meditation Coach',
    title: 'Meditation Coach Quizzes & Assessments',
    description:
      'Grow mindfulness, focus, and calm with a practice that fits you. Free meditation coaching quizzes and assessments.',
    emoji: '🧘',
    heroCopy:
      'Build a calmer, more focused mind — start by finding the meditation style that actually fits you.',
    order: 19,
    parent: 'health-body-fitness',
    intro: [
      'Meditation coaching helps you build a consistent practice that fits how your mind actually works. There is no single "right" way to meditate — mindfulness, breath focus, movement, mantra, and loving-kindness all calm the nervous system, but each suits a different temperament. Matching the method to the person is what turns a few frustrated attempts into a habit that sticks.',
      'A common reason people quit is trying to force a style that fights their nature — sitting in silence when their body wants to move, or chasing a "quiet mind" that never comes. Knowing your style removes that friction and gives you a realistic place to begin.',
      'The payoff is well documented: randomized trials and meta-analyses find that mindfulness and meditation programs produce moderate reductions in anxiety, depression, and stress (source: JAMA Internal Medicine meta-analysis, https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1809754). These free quizzes are a low-pressure way to find your entry point and start today.',
    ],
    faq: [
      {
        q: 'What does a meditation coach help with?',
        a: 'A meditation coach helps you choose a practice that fits your temperament, build a consistent routine, work through obstacles like a racing mind or restlessness, and connect meditation to goals such as lower stress, better focus, or more self-compassion.',
      },
      {
        q: 'Which type of meditation is best for beginners?',
        a: 'The best type is the one you will actually keep doing. Breath-focused meditation gives busy minds a simple anchor, movement meditation suits people who struggle to sit still, and mantra or loving-kindness practices help when silence feels loud. The quiz here points you to a fitting starting style.',
      },
      {
        q: 'Are these meditation quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about two minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'k3uwatzg',
      slug: 'meditation-style-quiz',
      order: 1,
      seo: {
        title: 'Meditation Style Quiz — Find the Practice That Fits You (Free)',
        description:
          'A free 2-minute meditation style quiz that reveals whether mindfulness, breath, movement, mantra, or loving-kindness meditation fits you best — with a simple way to start today.',
        overview:
          'There is no single right way to meditate — the best practice is the one that fits how your mind actually works. This quick quiz reveals your meditation style across five approaches (mindfulness, breath, movement, mantra, and loving-kindness), why it suits you, and one simple way to begin today.',
        whoFor:
          'Beginners who have struggled to stick with meditation, and anyone who wants a practice matched to their temperament instead of a one-size-fits-all method.',
        whatYouLearn: [
          'Your meditation style: Mindful Observer, Breath Anchor, Moving Meditator, Mantra Repeater, or Heart-Opener',
          'Why that style fits the way your mind and body settle',
          'A simple, concrete way to start your practice today',
          'How to handle a wandering mind within your style',
        ],
        sampleQuestions: [
          'When your mind is racing, what helps you settle most — watching thoughts pass, focusing on your breath, moving your body, repeating a calming word, or thinking of someone you care about?',
          'Sitting still in silence feels… (fine, easier with the breath, tough, better with a sound to repeat, or nice when reflecting on loved ones)',
          'What draws you to meditation — understanding your mind, calming down quickly, feeling at home in your body, quieting mental chatter, or feeling more compassion?',
          'Your biggest obstacle to meditating is… (I get lost in thoughts, I feel tense, I can\'t sit still, my mind won\'t go quiet, or I\'m hard on myself)',
        ],
        howItWorks:
          'You answer eight quick questions about how your mind settles, what draws you to practice, and what gets in your way. Your answers map to five meditation styles, and your result names your best-fit style with why it suits you and a starter exercise. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What are the five meditation styles in this quiz?',
            a: 'Mindfulness (observing thoughts without reacting), breath-focused (anchoring on the breath), movement (yoga, walking, mindful stretching), mantra (repeating a calming word or phrase), and loving-kindness or metta (cultivating warmth and goodwill).',
          },
          {
            q: 'Is one meditation style better than the others?',
            a: 'No. Each style calms the mind effectively; they simply suit different temperaments. The best style is the one you will practice consistently, which is exactly what this quiz helps you identify.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result and a starter practice — no signup required to start.',
          },
        ],
      },
    },
  ],
}
