import type { Metadata } from 'next'

import { env } from './env'

/** 相对路径 → 站点绝对 URL */
export function absoluteUrl(path: string): string {
  return new URL(path, env.siteUrl).toString()
}

interface PageMetaInput {
  title: string
  description: string
  /** 站内相对路径，用于 canonical */
  path: string
}

/**
 * 统一构造页面 Metadata（title/description/canonical/OG/Twitter）。
 * OG/Twitter 图不在此设置 —— 由各路由的 opengraph-image.tsx 文件约定在 build 期
 * 生成静态 PNG 并自动注入 openGraph.images / twitter.images。
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const canonical = absoluteUrl(input.path)
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: 'RooQuiz Coaching',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.q,
      acceptedAnswer: { '@type': 'Answer', text: entry.a },
    })),
  }
}

export function quizJsonLd(input: { title: string; description: string; path: string; image?: string | null }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.image ? { image: input.image } : {}),
    educationalUse: 'assessment',
    isAccessibleForFree: true,
    provider: { '@type': 'Organization', name: 'RooQuiz', url: 'https://rooquiz.com' },
  }
}
