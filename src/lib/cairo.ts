import { env } from './env'

/** cairo 的 origin（scheme + host），用于 iframe postMessage 的来源校验 */
export const cairoOrigin = new URL(env.cairoDomain).origin

/** 内联嵌入 URL：cairo 的 embed 视图（无页脚/背景），配合 postMessage 自适应高度 */
export function quizEmbedUrl(publicToken: string, language?: string): string {
  const url = new URL(`/a/${publicToken}`, env.cairoDomain)
  url.searchParams.set('embed', '1')
  if (language) url.searchParams.set('lang', language)
  url.searchParams.set('utm_source', 'coaching')
  url.searchParams.set('utm_medium', 'embed')
  return url.toString()
}

/** 全屏作答 URL：直达 cairo 的公开答题页 */
export function quizTakeUrl(publicToken: string, language?: string): string {
  const url = new URL(`/a/${publicToken}`, env.cairoDomain)
  if (language) url.searchParams.set('lang', language)
  url.searchParams.set('utm_source', 'coaching')
  url.searchParams.set('utm_medium', 'fullscreen')
  return url.toString()
}

/** B 端转化 CTA：注册 RooQuiz，带 UTM 归因（placement 标识 CTA 位置） */
export function signupUrl(placement: string): string {
  const url = new URL(env.signupUrl)
  url.searchParams.set('utm_source', 'coaching')
  url.searchParams.set('utm_medium', 'cta')
  url.searchParams.set('utm_campaign', placement)
  return url.toString()
}
