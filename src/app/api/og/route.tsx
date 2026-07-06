import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 * 动态生成落地页 OG 图（1200×630）。
 * 纯参数驱动（title / subtitle），不依赖网络数据，便于任意页面复用。
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = (searchParams.get('title') ?? 'RooQuiz Coaching').slice(0, 120)
  const subtitle = (searchParams.get('subtitle') ?? 'Free coaching quizzes & assessments').slice(0, 120)

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
          🧭&nbsp;&nbsp;RooQuiz Coaching
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 68, fontWeight: 800, color: '#111827', lineHeight: 1.1 }}>{title}</div>
          <div style={{ marginTop: 24, fontSize: 34, color: '#4b5563' }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', fontSize: 28, color: '#059669', fontWeight: 600 }}>
          coaching.rooquiz.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
