'use client'

import { useEffect, useRef, useState } from 'react'

/** cairo 上报高度的消息 type（与 apps/cairo/src/lib/embed.ts 的 EMBED_RESIZE_TYPE 保持一致） */
const EMBED_RESIZE_TYPE = 'rooquiz:embed-resize'

interface EmbedResizeMessage {
  type: typeof EMBED_RESIZE_TYPE
  height: number
  token?: string
}

function isResizeMessage(data: unknown): data is EmbedResizeMessage {
  if (!data || typeof data !== 'object') return false
  const message = data as Record<string, unknown>
  return message.type === EMBED_RESIZE_TYPE && typeof message.height === 'number'
}

interface QuizEmbedProps {
  /** cairo embed URL：/a/{token}?embed=1 */
  src: string
  /** 当前测评的 publicToken，用于校验消息归属 */
  token: string
  /** 允许的消息来源 origin（cairo 域名），用于安全校验 */
  allowedOrigin: string
  title: string
  /** 初始/最小高度，收到上报前占位，避免布局跳动 */
  minHeight?: number
}

/**
 * 内联嵌入 cairo 答题器。
 * 监听 cairo 通过 postMessage 上报的高度，做 iframe 自适应，避免内部滚动条。
 */
export function QuizEmbed({ src, token, allowedOrigin, title, minHeight = 640 }: QuizEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // 只接受来自 cairo 的消息
      if (event.origin !== allowedOrigin) return
      if (!isResizeMessage(event.data)) return
      // 有 token 时校验归属（同页多个 embed 的隔离）
      if (event.data.token && event.data.token !== token) return
      if (event.data.height > 0) setHeight(Math.ceil(event.data.height))
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [allowedOrigin, token])

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      loading="lazy"
      allow="clipboard-write; fullscreen"
      className="w-full rounded-2xl border border-base-300 bg-base-100 shadow-sm"
      style={{ height, minHeight }}
    />
  )
}
