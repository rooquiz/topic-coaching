import type { CategoryFile } from '../schema'

/** niche · 写作教练 */
export const writingCoaching: CategoryFile = {
  category: {
    slug: 'writing-coaching',
    name: 'Writing Coach',
    title: 'Writing Coach Quizzes & Assessments',
    description:
      'Write with clarity, structure, and voice. Free writing coaching quizzes and assessments.',
    emoji: '✍️',
    heroCopy:
      'Sharpen your writing — start by pinpointing which skill will improve your writing fastest.',
    order: 18,
    parent: 'learning-education',
    intro: [
      'Writing coaching helps you communicate on the page with clarity, structure, and a voice that fits your reader. Strong writing is not a single talent but four skills working together — clarity and structure, grammar and mechanics, style and voice, and editing and revision — and most writers are far stronger in some than others.',
      'The quickest way to improve is to find your weakest link and work on it deliberately, rather than trying to fix everything at once. A quick self-assessment gives you that focus, so your practice targets the skill that will make the biggest difference.',
      'It is a skill worth investing in: employer surveys repeatedly rank written communication among the most sought-after skills, yet many managers report that recent hires fall short of the writing quality their roles demand (source: National Association of Colleges and Employers, https://www.naceweb.org/career-readiness/competencies/career-readiness-defined). These free quizzes are a low-pressure starting point for writers, students, and anyone who writes for work.',
    ],
    faq: [
      {
        q: 'What does a writing coach help with?',
        a: 'A writing coach helps you organize ideas clearly, tighten and vary your sentences, fix recurring grammar and mechanics issues, develop a voice suited to your audience, and build a reliable editing and revision process.',
      },
      {
        q: 'Can writing really be improved, or is it a natural talent?',
        a: 'Writing is a set of learnable skills, not a fixed gift. Targeted habits — cutting filler, reading your work aloud, revising more than once, and seeking feedback — produce visible improvement quickly, especially when you focus on one weak area at a time.',
      },
      {
        q: 'Are these writing quizzes free?',
        a: 'Yes. Each quiz on this page is free, takes about three minutes, and gives you a personalized result with no signup required to start.',
      },
    ],
  },
  quizzes: [
    {
      publicToken: '4hvz52eb',
      slug: 'writing-skills-scorecard',
      order: 1,
      seo: {
        title: 'Writing Skills Scorecard — Rate Your Writing (Free 3-Min Quiz)',
        description:
          'A free 3-minute writing skills scorecard that rates you on clarity & structure, grammar & mechanics, style & voice, and editing & revision, then shows which skill to sharpen next.',
        overview:
          'How strong is your writing, really? This free scorecard rates you across the four areas every great writer masters — clarity and structure, grammar and mechanics, style and voice, and editing and revision — and shows you exactly which skill to sharpen next with an overall score and a radar breakdown.',
        whoFor:
          'Writers, students, professionals who write for work, and writing coaches who want a quick, honest baseline of their current strengths and gaps.',
        whatYouLearn: [
          'Your overall writing score out of 60',
          'How you rate across clarity & structure, grammar & mechanics, style & voice, and editing & revision',
          'Your strongest writing skill and the one with the most room to grow',
          'Practical habits to level up your weakest area first',
        ],
        sampleQuestions: [
          'My writing has a clear main point that readers grasp quickly. (Strongly disagree → Strongly agree)',
          'I cut unnecessary words so every sentence earns its place.',
          'My writing has a distinct voice that suits my audience.',
          'I revise my drafts more than once before sharing them.',
        ],
        howItWorks:
          'You rate yourself on 12 statements, three for each of the four skill areas, on a five-point scale. Your answers combine into a score out of 60 and a radar view of clarity and structure, grammar and mechanics, style and voice, and editing and revision, so you can see where to focus first. It takes about three minutes, is free, and needs no signup to start.',
        faq: [
          {
            q: 'What four skills does the writing scorecard measure?',
            a: 'Clarity and structure (a clear point in logical order), grammar and mechanics (accurate, varied, correct sentences), style and voice (precise words and a voice suited to your audience), and editing and revision (drafting, cutting, and seeking feedback).',
          },
          {
            q: 'How do I improve my weakest writing area?',
            a: 'Focus on one area at a time: read your work aloud to catch clunky sentences, cut about ten percent to sharpen it, revise more than once, and get feedback from a second reader or a writing coach to spot blind spots you cannot see.',
          },
          {
            q: 'How long does the scorecard take, and is it free?',
            a: 'About three minutes, and it is free with a personalized result and radar breakdown — no signup required to start.',
          },
        ],
      },
    },
  ],
}
