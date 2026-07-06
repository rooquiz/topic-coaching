# topic-coaching

Coaching 专题站 — **coaching.rooquiz.com**（部署 Vercel）。

承载所有 coaching 领域/行业的测评，SEO + 传播吸引 C 端来做/分享测评，落地页引导 B 端注册 RooQuiz。

## 架构一句话

- **答题体验**：复用 cairo 答题器（iframe 内嵌 `quizster.app/a/{token}?embed=1`，postMessage 自适应高度）。
- **测评数据**：服务端 GraphQL 调 Payload 的 `getPublicForm(publicToken)`（`payload.rooquiz.com/api/graphql`）。
- **配置集中**：单个根级 `site.config.ts`（zod 校验）—— 站点信息（名称/标语/CTA）+ 分类 + 测评清单都在这里。
- 本站**不渲染结果页**（交给 cairo）、**不改动 Payload 后端**。

## 目录

```
site.config.ts             # 唯一配置文件（站点信息 + 分类 + 测评清单，改这里）
src/lib/env.ts             # 部署环境变量（域名，带生产默认值）
src/lib/payload.ts         # Payload GraphQL client + getPublicFormMeta（unstable_cache）
src/lib/content.ts         # 清单读取 + 逐份水合
src/lib/cairo.ts           # embed / 全屏 / 注册 URL 构造（含 UTM）
src/lib/seo.ts             # metadata + JSON-LD
src/components/QuizEmbed.tsx  # 内嵌 cairo 的 client 组件
src/app/                   # 首页 / c/[category] / q/[slug] / sitemap / robots / llms.txt / api/og
```

## 开发

```bash
pnpm install
cp .env.example .env.local   # 按需覆盖
pnpm dev                     # http://localhost:8100
pnpm typecheck
pnpm build
```

## 新增一份测评

1. 在 berlin 建卷并发布，拿到公开链接里的 `publicToken`。
2. 在 `site.config.ts` 的 `quizzes` 里加一条（指定 `slug`、`categorySlugs`，可选 `seo`）。
3. 无需其他改动 —— 落地页会自动从 Payload 拉取标题/描述/封面。

站点信息（名称、标语、首页 hero、CTA 文案、页脚）与分类也都在 `site.config.ts` 里改。

## 环境变量

见 `.env.example`：`NEXT_PUBLIC_PAYLOAD_SERVER_DOMAIN` / `NEXT_PUBLIC_CAIRO_DOMAIN` /
`NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_SIGNUP_URL`。

## 部署

Vercel 项目 → 绑定域名 `coaching.rooquiz.com` → 配置上述环境变量。`vercel.json` 指定区域 `hkg1`。
