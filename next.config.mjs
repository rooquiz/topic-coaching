/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 测评封面图来自 Payload/R2 的任意主机，域名不固定，
  // 落地页用原生 <img> 渲染，避免 next/image 的 remotePatterns 白名单负担。
}

export default nextConfig
