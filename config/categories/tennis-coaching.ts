import type { CategoryFile } from '../schema'

/** niche · 网球教练 */
export const tennisCoaching: CategoryFile = {
  category: {
    slug: 'tennis-coaching',
    name: 'Tennis Coach',
    title: 'Tennis Coach Quizzes & Assessments',
    description:
      'Improve your strokes, scoring know-how, and match strategy. Free tennis coaching quizzes and assessments.',
    emoji: '🎾',
    heroCopy:
      'Raise your game — start by testing how well you know tennis scoring, surfaces, and strategy.',
    order: 13,
    parent: 'sports-athletics',
    intro: [
      'Tennis coaching brings together strokes, footwork, scoring, and match strategy. Knowing how the game works — from the quirks of the scoring system to how court surfaces change play — gives you a foundation that stroke technique and tactics build on.',
      'A quick knowledge check is an easy way to see where you stand, covering scoring, the Grand Slams, surfaces, and shots. Each answer explains the why, so you leave a little sharper than you arrived.',
      'Tennis has a broad, growing base of players: participation in the United States reached a record 23.8 million players in 2023 according to the USTA and Physical Activity Council (source: USTA, https://www.usta.com/en/home/stay-current/national/tennis-participation-reaches-all-time-high-in-2023.html). These free quizzes are a friendly first step for players, fans, and coaches.',
    ],
    faq: [
      {
        q: 'What does a tennis coach help with?',
        a: 'A tennis coach helps you develop reliable groundstrokes, serve and volley technique, footwork and positioning, and match strategy — alongside the scoring and rules knowledge that help you compete with confidence.',
      },
      {
        q: 'Do I need to play tennis to take these quizzes?',
        a: 'No. The quizzes suit players and fans at any level. Each question comes with a short explanation, so you learn the game whether you are picking up a racket or following the tour.',
      },
      {
        q: 'Are these tennis quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'exmdgjpy',
      slug: 'tennis-iq-quiz',
      order: 1,
      seo: {
        title: 'Tennis IQ Quiz — Test Your Knowledge of the Game (Free 12-Question Quiz)',
        description:
          'A free 12-question tennis IQ quiz on scoring, the Grand Slams, court surfaces, and shots — from love and deuce to bagels and lets. Each answer comes with a quick explanation.',
        overview:
          'Think you know tennis? This free 12-question quiz tests your grasp of scoring, the Grand Slams, court surfaces, and shots — from love and deuce to aces and bagels — and reveals your Tennis IQ in about three minutes. Each answer comes with a quick explanation, so you pick up something new.',
        whoFor:
          'Tennis players, fans following the tour, and coaches who want a quick, fun check of tennis knowledge and terminology.',
        whatYouLearn: [
          'Your Tennis IQ level from Casual Fan to Grand Slam Genius',
          'How tennis scoring works: love, 15/30/40, deuce, and the tiebreak',
          'The four Grand Slams and the surfaces they are played on',
          'Shot and match terms like ace, volley, break of serve, let, and bagel',
        ],
        sampleQuestions: [
          'In tennis scoring, what point comes after 30?',
          'Which Grand Slam is played on grass courts?',
          'A shot hit before the ball bounces is a…',
          'Losing a set 6-0 is nicknamed a…',
        ],
        howItWorks:
          'You answer 12 multiple-choice questions on scoring, tournaments, surfaces, and shots, each worth 10 points toward your Tennis IQ. Every question includes an explanation, so you learn as you play. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this a tennis skills test or a knowledge quiz?',
            a: 'It is a knowledge quiz covering scoring, Grand Slams, surfaces, and shot terminology — the tennis IQ that complements your on-court game. It does not assess your physical strokes.',
          },
          {
            q: 'What is a good Tennis IQ score?',
            a: 'Scores map to four levels: Casual Fan, Club Player, Court Expert, and Grand Slam Genius. Scoring 90 or above means you know your scoring, surfaces, and shots like a seasoned player.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About three minutes, and it is free with a personalized result and an explanation for every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
