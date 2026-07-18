import type { CategoryFile } from '../schema'

/** niche · 职业教练 */
export const careerCoaching: CategoryFile = {
  category: {
    slug: 'career-coaching',
    name: 'Career Coaching',
    title: 'Career Coaching Quizzes & Assessments',
    description: 'Discover your strengths, work style, and ideal career path with free career-coaching assessments.',
    emoji: '🚀',
    heroCopy: 'Figure out your next career move with assessments built around real coaching frameworks.',
    order: 1,
    parent: 'career-business-leadership',
  },
  quizzes: [
    {
      publicToken: '8sq49p2w',
      slug: 'ai-readiness',
      featured: true,
      order: 4,
      seo: {
        title: 'Are You AI-Ready? Test Your Workplace AI Skills',
        description:
          'A free quiz that tests your workplace AI skills and readiness — from prompting to judgment — so you can see where you stand and what to learn next.',
        overview:
          'AI is reshaping work faster than almost any skill shift before it. This quick quiz tests how ready you are to use AI on the job — from writing effective prompts to knowing when to trust or double-check its output — and shows exactly where to level up.',
        whoFor:
          'Any professional who wants to stay competitive as AI reshapes their field, whether you are already using AI tools daily or just starting to figure out where they fit into your work.',
        whatYouLearn: [
          'Your workplace AI readiness across practical skill areas',
          'How confidently you can prompt, evaluate, and apply AI output',
          'The gaps most worth closing for your role',
          'A first step to build the AI skills employers now reward',
        ],
        sampleQuestions: [
          'When an AI tool gives you a confident but wrong answer, how do you usually catch it?',
          'How would you rewrite a vague prompt to get a more useful result?',
          'Which tasks in your job are best suited to AI assistance today?',
          'What is a responsible way to handle sensitive data when using AI tools?',
        ],
        howItWorks:
          'You answer a set of scenario-based questions about using AI at work. Your answers are scored across core AI-readiness skills, and your result shows how prepared you are along with the areas to focus on. It takes about five minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'Why do workplace AI skills matter now?',
            a: 'Demand is climbing fast: analyses in 2025 found employers require AI skills in roughly three times more job postings than two years earlier, and roles that call for AI skills command a meaningful wage premium. Building basic AI fluency is quickly becoming a core professional skill rather than a niche one.',
          },
          {
            q: 'Do I need a technical background to be AI-ready?',
            a: 'No. Most workplace AI readiness is about practical judgment — writing clear prompts, checking output, knowing which tasks to delegate to AI, and using it responsibly — not coding or building models.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About five minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: '9jp9tkkz',
      slug: 'career-archetype',
      featured: true,
      order: 5,
      seo: {
        overview:
          'What kind of worker are you really? This quick quiz identifies your career archetype — the pattern of strengths and motivations that shapes how you do your best work — then points to the roles that fit you and a smart next move.',
        whoFor:
          'Anyone weighing a career decision, feeling out of sync with their current role, or wanting language for the strengths they naturally bring to work.',
        whatYouLearn: [
          'Your core career archetype',
          'The strengths you bring most naturally',
          'The kinds of roles and environments that fit you best',
          'A suggested next move based on your profile',
        ],
        faq: [
          {
            q: 'What is a career archetype?',
            a: 'A career archetype is a recurring pattern of strengths, motivations, and working styles that describes how you tend to add value — for example, a builder, a connector, or a problem-solver. Knowing yours helps you choose roles that fit rather than fighting your natural grain.',
          },
          {
            q: 'Can this quiz tell me exactly what job to take?',
            a: 'No single quiz can decide that. It gives you a clear read on your strengths and the types of roles that suit you, which is a strong starting point for a more informed career decision.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'hr845jez',
      slug: 'career-change-readiness',
      order: 6,
      seo: {
        overview:
          'Stuck between staying and leaving? This 2-minute scorecard measures your career-change readiness across four areas, then tells you whether to stay and build, start exploring, or make your move — so the decision is based on where you actually stand, not just how you feel on a hard day.',
        whoFor:
          'Anyone torn between staying in their current role and moving on, or who keeps thinking about a change but is not sure whether now is the right time.',
        whatYouLearn: [
          'Your overall career-change readiness (a higher score means more ready to change)',
          'How ready you are across four key areas',
          'Whether to stay and build, start exploring, or make your move',
          'The gap to close before making a change',
        ],
        faq: [
          {
            q: 'How do I know if I am ready for a career change?',
            a: 'Readiness is more than dissatisfaction — it includes clarity on what you want, financial runway, transferable skills, and a plan. This scorecard rates you across those areas so you can tell the difference between a bad week and a genuine signal to move.',
          },
          {
            q: 'What does a higher score mean?',
            a: 'A higher score means you are more ready to change — you have more of the pieces in place to move well. A lower score points to what to strengthen first.',
          },
          {
            q: 'How long does the quiz take, and is it free?',
            a: 'About two minutes, and it is free with a personalized result — no signup required to start.',
          },
        ],
      },
    },
    {
      publicToken: 'vdes5a8j',
      slug: 'productivity-style',
      order: 7,
      seo: {
        overview:
          'Why do some productivity hacks work for you while others fall flat? Because they were built for a different kind of brain. This quick quiz finds your productivity style and the systems that actually fit how you focus, plan, and get things done.',
        whoFor:
          'Anyone who has bounced between apps and methods, feels productive in bursts but not consistently, or wants a system that finally sticks.',
        whatYouLearn: [
          'Your natural productivity style',
          'Why some popular methods have not worked for you',
          'The systems and tools most likely to fit how you work',
          'A first change to try this week',
        ],
        faq: [
          {
            q: 'Why do productivity systems work for some people and not others?',
            a: 'Because focus, motivation, and planning differ from person to person. A method built around rigid time-blocking can help one person and paralyze another. Matching the system to your style is what makes it stick.',
          },
          {
            q: 'Is there one best productivity method?',
            a: 'No. The best method is the one that fits how you actually think and work. This quiz helps you find that fit instead of forcing a one-size-fits-all routine.',
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
