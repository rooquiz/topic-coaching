import type { CategoryFile } from '../schema'

/** Hub · 表演与创造力（顶层支柱页，draft；旗下有 live niche 后去掉 draft 促级） */
export const performanceCreativity: CategoryFile = {
  category: {
    slug: 'performance-creativity',
    name: 'Performance & Creativity',
    title: 'Performance & Creativity Coaching Quizzes',
    description:
      'Voice, stage, camera, and creative craft. Free coaching quizzes to find your style and grow your creative skills.',
    emoji: '🎭',
    heroCopy: 'Voice, stage, camera, and creative craft. Short assessments to find your style and where to grow.',
    order: 6,
    // intro/faq 已备好；旗下 content-creator-coaching 等 niche 转正后即可去掉 draft 促级。
    draft: true,
    intro: [
      'Performance and creativity coaching spans everything you make and share — how you speak and present, how you show up on camera, and how you shape a creative craft into work that connects with an audience. The common thread is turning raw instinct into a repeatable, confident style.',
      'These free quizzes are a fast way to see your creative strengths clearly. Each is a short self-assessment that names your natural style, surfaces the blind spot holding you back, and points to the next skill worth building — whether you are a content creator, performer, or someone finding their voice.',
      'Browse the assessments below and start with whichever matches what you are working on right now. Each takes just a couple of minutes, is free, and ends with a personalized result and a concrete next step.',
    ],
    faq: [
      {
        q: 'What does performance and creativity coaching cover?',
        a: 'It covers the skills behind creating and performing — content creation, voice and vocal work, presence on camera and stage, acting, and creative craft. The focus is on developing a distinctive style and the confidence to share it.',
      },
      {
        q: 'What can these quizzes tell me?',
        a: 'Each quiz names your natural creative style, highlights the strengths it gives you and the blind spot to watch, and suggests the next skill to build — a fast starting point for growing as a creator or performer.',
      },
      {
        q: 'Are these quizzes free?',
        a: 'Yes. Every quiz in this section is free and takes about two minutes, with a personalized result and no signup required to start.',
      },
    ],
  },
  quizzes: [],
}
