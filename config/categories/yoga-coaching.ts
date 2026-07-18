import type { CategoryFile } from '../schema'

/** niche · 瑜伽教练 */
export const yogaCoaching: CategoryFile = {
  category: {
    slug: 'yoga-coaching',
    name: 'Yoga Instructor',
    title: 'Yoga Quizzes & Assessments — Find Your Style',
    description:
      'Free yoga quizzes to find the style that fits you and understand your practice — asana, breath, and body-mind balance.',
    emoji: '🧘',
    heroCopy: 'Find the yoga style that fits your body and personality — then start with confidence.',
    order: 17,
    parent: 'health-body-fitness',
    intro: [
      'Yoga is not one practice but many, and the biggest reason beginners quit is starting with a style that does not fit them — a fast, sweaty flow when they wanted to unwind, or a slow restorative class when they wanted a challenge. A little self-knowledge up front makes the difference between a habit that sticks and a single awkward class you never repeat.',
      'These free yoga quizzes help you find that fit fast. Instead of guessing between Vinyasa, Yin, Hatha, and Ashtanga, you answer a few questions about how you like to move, breathe, and feel, and get a clear starting point — plus what to try in your first class.',
      'Not sure where to begin? If you want energy and movement, you will likely land on a flowing style; if you want to release stress and slow down, a gentle or restorative style fits better; and if you are brand new, a foundational style gives you time to learn each pose. Each quiz is free, takes about five minutes, and ends with a personalized result and a practical next step.',
    ],
    faq: [
      {
        q: 'Which style of yoga should a beginner start with?',
        a: 'Most beginners do best with a foundational, slower-paced style such as Hatha, where poses are held for a few breaths and there is time to learn alignment. From there you can branch into flowing styles like Vinyasa or calming styles like Yin. The yoga style quiz on this page points you to the best fit based on how you like to move and feel.',
      },
      {
        q: 'What is the difference between Vinyasa, Yin, Hatha, and Ashtanga yoga?',
        a: 'Vinyasa links breath to continuous movement in a dynamic flow; Yin holds gentle poses for several minutes to release deep connective tissue and calm the nervous system; Hatha is a slower, foundational practice ideal for learning alignment; and Ashtanga follows a set, repeating sequence for a structured, athletic workout. Each suits a different temperament and goal.',
      },
      {
        q: 'Are these yoga quizzes free?',
        a: 'Yes. Every quiz on this page is free, takes about five minutes, and gives you a personalized result with no signup required to start.',
      },
      {
        q: 'Is a quiz a substitute for a yoga teacher?',
        a: 'No. These quizzes help you choose a direction and start well, but a qualified instructor gives you hands-on guidance, alignment cues, and modifications that keep your practice safe as it grows.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'nheyg9nc',
      slug: 'yoga-style',
      featured: true,
      order: 1,
      seo: {
        title: 'Yoga Style Quiz — Which Type of Yoga Fits You?',
        description:
          'A free 5-minute yoga style quiz that matches you to Vinyasa, Yin, Hatha, or Ashtanga based on how you like to move, breathe, and feel — with what to try in your first class.',
        overview:
          'With dozens of yoga styles out there, the hardest part is knowing where to start. This quick quiz matches you to one of four core styles — Vinyasa Flow, Yin & Restorative, Hatha, or Ashtanga / Power — based on how you like to move, the pace you enjoy, and what you want to feel afterward, so your first (or next) class actually fits.',
        whoFor:
          'Beginners choosing a first class, returning practitioners deciding what to try next, and teachers helping students find a style that suits their body and personality.',
        whatYouLearn: [
          'Which of the four core yoga styles best matches you: Vinyasa, Yin, Hatha, or Ashtanga / Power',
          'Why that style fits how you like to move, breathe, and recover',
          'What to expect from your first class in that style',
          'A concrete next step to start practicing with confidence',
        ],
        sampleQuestions: [
          'What are you most hoping to get out of yoga — a steady energizing flow, deep relaxation, a gentle introduction, or a challenging workout?',
          'How do you most like to move: holding poses for a long quiet time, flowing continuously, following a set sequence, or slowly with time to learn?',
          'What is your ideal class pace — relaxed and instructional, slow and meditative, upbeat and dynamic, or intense and demanding?',
          'After class, do you most want to feel energized, deeply relaxed, quietly accomplished, or strong and worked?',
        ],
        howItWorks:
          'You answer nine quick questions about your goals, preferred pace, energy, and how you want to feel after practicing. Your answers are matched against the signature qualities of four yoga styles, and your result names your best-fit style with a plain-language explanation and a suggested first class. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'How do I know which yoga style is right for me?',
            a: 'The right style depends on what you want from practice — energy, relaxation, foundations, or a structured challenge — and how you like to move. This quiz weighs those preferences and points you to Vinyasa, Yin, Hatha, or Ashtanga / Power so you do not have to guess your way through mismatched classes.',
          },
          {
            q: 'Is this yoga quiz good for complete beginners?',
            a: 'Yes. It is designed for people choosing a first class as much as for experienced practitioners. Beginners often match to Hatha, a foundational style that gives you time to learn each pose, but the quiz will tell you what fits you specifically.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About five minutes for nine questions, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
  ],
}
