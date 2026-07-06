import { ImageResponse } from 'next/og'
import { site } from '@config'

import { env } from './env'

/** OG 图尺寸 / MIME —— 供各 opengraph-image.tsx 直接 re-export */
export const ogSize = { width: 1200, height: 630 } as const
export const ogContentType = 'image/png'

const SITE_HOST = new URL(env.siteUrl).host

/**
 * 渲染站点 OG 图（1200×630）。纯参数驱动（title / subtitle），不依赖网络数据。
 * build 期由 opengraph-image.tsx 文件约定调用，输出静态 PNG（无需运行时 /api/og）。
 */
export function renderOgImage(params: { title: string; subtitle?: string }): ImageResponse {
  const title = params.title.slice(0, 120)
  const subtitle = (params.subtitle ?? site.tagline).slice(0, 120)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: 'linear-gradient(135deg, #ecfdf5 0%, #ffffff 55%, #d1fae5 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, fontWeight: 700, color: '#065f46' }}>
          {site.brandEmoji}&nbsp;&nbsp;{site.name}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#111827', lineHeight: 1.1 }}>{title}</div>
          <div style={{ marginTop: 24, fontSize: 34, color: '#4b5563' }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#059669', fontWeight: 600 }}>{SITE_HOST}</div>
      </div>
    ),
    { ...ogSize },
  )
}
