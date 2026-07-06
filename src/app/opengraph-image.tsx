import { site } from '@config'

import { ogContentType, ogSize, renderOgImage } from '@/lib/og'

export const dynamic = 'force-static'
export const size = ogSize
export const contentType = ogContentType
export const alt = `${site.name} — ${site.tagline}`

/** 首页 / 兜底 OG 图（build 期生成静态 PNG） */
export default function Image() {
  return renderOgImage({ title: site.name, subtitle: site.tagline })
}
