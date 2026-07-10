import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/seo'

// 静态导出：固化成 /robots.txt 静态文件。
export const dynamic = 'force-static'

// 显式欢迎主流 AI 答案引擎的抓取与训练/检索爬虫,表明本站内容乐于被引用。
// 全站本就对 * 开放,这里逐一列出是为姿态明确(部分引擎会区分「训练」与「检索」UA)。
const AI_CRAWLERS = [
  'GPTBot', // OpenAI 训练
  'OAI-SearchBot', // ChatGPT 搜索检索
  'ChatGPT-User', // ChatGPT 用户即时抓取
  'PerplexityBot', // Perplexity 索引
  'Perplexity-User', // Perplexity 用户即时抓取
  'ClaudeBot', // Anthropic
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended', // Gemini / AI Overviews 训练许可
  'Applebot-Extended', // Apple Intelligence
  'Amazonbot',
  'Bytespider',
  'Meta-ExternalAgent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
