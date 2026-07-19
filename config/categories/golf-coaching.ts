import type { CategoryFile } from '../schema'

/** niche · 高尔夫教练 */
export const golfCoaching: CategoryFile = {
  category: {
    slug: 'golf-coaching',
    name: 'Golf Coach',
    title: 'Golf Coach Quizzes & Assessments',
    description:
      'Refine your swing, scoring, and course strategy. Free golf coaching quizzes and assessments.',
    emoji: '⛳',
    heroCopy:
      'Sharpen your game — start by testing how well you know golf\'s scoring, rules, and strategy.',
    order: 17,
    parent: 'sports-athletics',
    intro: [
      'Golf coaching covers far more than the swing — scoring, the rules, club selection, and course management all shape how you play and how fast you improve. Understanding the language and logic of the game gives you a foundation that better ball-striking can build on.',
      'A quick knowledge check is a low-pressure way to see where your understanding stands, from birdies and bogeys to the majors and the 14-club rule. Each answer teaches you something, so you leave knowing a little more than when you started.',
      'Golf is also a genuinely popular pursuit: participation has grown in recent years, with roughly 26.6 million people playing on U.S. golf courses in 2023 according to the National Golf Foundation (source: NGF, https://www.ngf.org/golf-industry-research/). These free quizzes are an easy first step for golfers, beginners, and coaches alike.',
    ],
    faq: [
      {
        q: 'What does a golf coach help with?',
        a: 'A golf coach helps you improve swing mechanics, short game and putting, club selection, and course management — plus the rules and scoring knowledge that let you play smarter and keep pace with playing partners.',
      },
      {
        q: 'Do I need to play golf to take these quizzes?',
        a: 'No. The quizzes suit everyone from curious beginners to regular players. Each question includes a short explanation, so you learn the game whether you are new to it or brushing up.',
      },
      {
        q: 'Are these golf quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes just a few minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: 'rcdjtak8',
      slug: 'golf-iq-quiz',
      order: 1,
      seo: {
        title: 'Golf IQ Quiz — Test Your Knowledge of the Game (Free 10-Question Quiz)',
        description:
          'A free 10-question golf IQ quiz on scoring, rules, clubs, and the majors — from birdies and bogeys to Augusta National. Each question comes with an explanation, so you learn as you play.',
        overview:
          'Think you know golf? This free 10-question quiz tests your grasp of the game\'s scoring, rules, and iconic tournaments — from birdies and bogeys to the Masters — and scores your Golf IQ out of 100. Each question comes with an explanation, so you learn as you play.',
        whoFor:
          'Golfers, beginners learning the game, and golf coaches who want a fun, quick check of golf knowledge and terminology.',
        whatYouLearn: [
          'Your Golf IQ score from Weekend Beginner to Golf Genius',
          'Scoring terms: birdie, eagle, bogey, albatross, and the ace',
          'Key rules like the 14-club limit and a standard 18-hole round',
          'Course and tournament knowledge, including where the Masters is played',
        ],
        sampleQuestions: [
          'What is a score of one stroke under par on a hole called?',
          'Under the Rules of Golf, what is the maximum number of clubs a player may carry during a round?',
          'At which course is the Masters Tournament played every year?',
          'What is the sand-filled hazard on a golf course called?',
        ],
        howItWorks:
          'You answer 10 multiple-choice questions on scoring, rules, clubs, and famous tournaments, each worth 10 points for a Golf IQ out of 100. Every question includes an explanation, so you pick up something new as you go. It takes a few minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Is this a golf swing test or a knowledge quiz?',
            a: 'It is a knowledge quiz covering scoring, rules, clubs, and tournaments — the golf IQ that complements your on-course skills. It does not assess your physical swing.',
          },
          {
            q: 'What is a good Golf IQ score?',
            a: 'Scores map to four levels: Weekend Beginner, Solid Amateur, Clubhouse Regular, and Golf Genius. Scoring 80 or above means you know your birdies from your bogeys and your majors well enough to hold your own in any clubhouse chat.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'A few minutes, and it is free with a personalized result and an explanation for every answer — no signup required to start.',
          },
        ],
      },
    },
  ],
}
