import type { Metadata } from 'next'

import { env } from './env'

/** 相对路径 → 站点绝对 URL */
export function absoluteUrl(path: string): string {
  return new URL(path, env.siteUrl).toString()
}

/** 生成 OG 图地址（由 /api/og 动态渲染，参数驱动、无需网络数据） */
export function ogImageUrl(params: { title: string; subtitle?: string }): string {
  const url = new URL('/api/og', env.siteUrl)
  url.searchParams.set('title', params.title)
  if (params.subtitle) url.searchParams.set('subtitle', params.subtitle)
  return url.toString()
}

interface PageMetaInput {
  title: string
  description: string
  /** 站内相对路径，用于 canonical */
  path: string
  ogTitle?: string
  ogSubtitle?: string
}

/** 统一构造页面 Metadata（title/description/canonical/OG/Twitter） */
export function buildMetadata(input: PageMetaInput): Metadata {
  const canonical = absoluteUrl(input.path)
  const image = ogImageUrl({ title: input.ogTitle ?? input.title, subtitle: input.ogSubtitle })
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
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
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
