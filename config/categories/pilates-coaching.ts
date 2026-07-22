import type { CategoryFile } from '../schema'

/** niche · 普拉提教练 */
export const pilatesCoaching: CategoryFile = {
  category: {
    slug: 'pilates-coaching',
    name: 'Pilates Instructor',
    title: 'Pilates Quizzes & Readiness Assessments',
    description:
      'Free Pilates quizzes and readiness assessments to gauge your core, mobility, and body awareness — and know exactly where to begin.',
    emoji: '🩰',
    heroCopy: 'Build core control, posture, and stability. Short assessments that show you where to start.',
    order: 18,
    parent: 'health-body-fitness',
    // 已收录 1 道完整 GEO 测评（pilates-readiness）。沿用作者约定：≥3 道再去 draft 促级开页。
    draft: true,
    intro: [
      'Pilates builds strength from the inside out — core control, spinal mobility, balance, and the body awareness that carries into everything else you do. It is low-impact and endlessly scalable, which is why it suits near-beginners and seasoned movers alike.',
      'These free quizzes help you start where you actually are. Rather than guessing whether you are ready, a short readiness assessment scores your core, flexibility, breath, and habits so your first class matches your body instead of frustrating it. Research collected by the American Council on Exercise links consistent Pilates practice to measurable gains in core strength and flexibility, so knowing your baseline makes early progress far easier to see.',
      'New to Pilates? Take the readiness scorecard first — it takes about two minutes, is free, and gives you a personalized breakdown of your strongest area and the one to focus on before your first session.',
    ],
    faq: [
      {
        q: 'What is Pilates good for?',
        a: 'Pilates develops core strength, posture, flexibility, and body awareness through controlled, low-impact movement. It is widely used to build stability, support the spine, and complement other training or rehabilitation.',
      },
      {
        q: 'What can a Pilates readiness quiz tell me?',
        a: 'A readiness quiz scores where you stand across core and stability, flexibility and mobility, body awareness and breath, and habit and readiness — so you know whether to ease in gently, build a foundation, or jump into intermediate work.',
      },
      {
        q: 'Do I need to be flexible to start Pilates?',
        a: 'No. Flexibility is something Pilates builds, not a prerequisite. Beginner mat classes meet you where you are and focus first on breathing and core activation.',
      },
      {
        q: 'Are these Pilates quizzes free?',
        a: 'Yes. Every quiz on this page is free and takes about two minutes, with a personalized result and no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'y8j5kqmw',
      slug: 'pilates-readiness',
      featured: true,
      order: 1,
      seo: {
        title: 'Pilates Readiness Quiz — Are You Ready to Start Pilates?',
        description:
          'A free 2-minute Pilates readiness scorecard that rates your core, flexibility, breath, and habits — so you know exactly where to begin.',
        overview:
          'Thinking about starting Pilates but not sure where your body is at? This scorecard rates you across four areas — core and stability, flexibility and mobility, body awareness and breath, and habit and readiness — then tells you whether to ease in gently, build a foundation, or challenge yourself with reformer and intermediate work.',
        whoFor:
          'Anyone considering Pilates — complete beginners, people returning after a break, or regular movers who want to know how ready their body really is before their first class.',
        whatYouLearn: [
          'Your Pilates readiness score out of 60 across four key areas',
          'Whether to ease in gently, build a foundation, or start intermediate work',
          'Your strongest area and the one to focus on first',
          'A practical starting point matched to your body',
        ],
        sampleQuestions: [
          'I can hold a plank or steady core position for 30 or more seconds.',
          'I can touch (or nearly touch) my toes with straight legs.',
          'I can breathe deeply into my ribs and coordinate breath with movement.',
          'I can realistically set aside 20 to 30 minutes a few times a week.',
        ],
        howItWorks:
          'You rate twelve statements from 1 (never true) to 5 (always true) covering core strength, mobility, breath, body awareness, and your current habits. Your answers add up to a readiness score out of 60 and place you in one of three levels, with guidance on where to start. It takes about two minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Do I need any equipment for Pilates?',
            a: 'No. Most beginners start with mat Pilates, which needs only a mat and enough floor space. Equipment like the reformer adds resistance and variety later, but it is not required to begin.',
          },
          {
            q: 'How is the readiness score calculated?',
            a: 'You rate twelve statements from 1 to 5 across core, mobility, breath and awareness, and habits. The points add up to a score out of 60 that maps to one of three readiness levels, along with your strongest and weakest area.',
          },
          {
            q: 'Is a low score a bad sign?',
            a: 'Not at all. A lower score simply means starting with gentle beginner classes focused on breathing and core activation. Pilates meets you where you are, and consistency matters far more than intensity.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes for twelve statements, and it is free with a personalized breakdown — no signup required to start.',
          },
        ],
      },
    },
  ],
}
