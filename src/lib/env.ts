/**
 * 站点运行时环境变量。
 * 全部为 NEXT_PUBLIC_（客户端/服务端通用），并带生产默认值，
 * 以便在没有 .env 的环境（如 CI 首次构建）也能顺利 build。
 */
export const env = {
  /** Payload GraphQL 数据源域名 */
  payloadServerDomain: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_DOMAIN ?? 'https://payload.rooquiz.com',
  /** cairo 答题器域名（embed / 全屏作答 / 结果页） */
  cairoDomain: process.env.NEXT_PUBLIC_CAIRO_DOMAIN ?? 'https://quizster.app',
  /** 本站规范域名 */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://coaching.rooquiz.com',
  /** B 端转化 CTA 目标地址（RooQuiz 官网） */
  signupUrl: process.env.NEXT_PUBLIC_SIGNUP_URL ?? 'https://rooquiz.com',
} as const
