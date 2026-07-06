/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 纯静态站点：build 把全站预渲染到 out/（无 SSR / ISR / serverless）。
  // 所有测评数据在 build 期从 Payload 拉取并固化进 HTML；更新测评需重新构建部署。
  output: 'export',
  // 测评封面图来自 Payload/R2 的任意主机，域名不固定，
  // 落地页用原生 <img> 渲染，避免 next/image 的 remotePatterns 白名单负担。
}

export default nextConfig
