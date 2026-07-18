# topic-coaching · 每日维护 Plan

> 站点：coaching.rooquiz.com（Next.js 纯静态导出，托管所有 coaching 领域测评）
>
> **核心目标（按优先级）**：
> 1. **SEO 是第一目的**——一切维护动作都服务于自然搜索排名与流量：关键词覆盖、页面 SEO/GEO 完整度、可索引结构、内容对搜索意图的匹配。
> 2. **维护 coaching 站点内容**——持续扩充有效 quiz、把 draft 分类转正、保证文案质量（英语）。
> 3. **每天抓取热点资源**——追踪 coaching 领域的热点话题、趋势关键词、可引用的外部数据/研究，反哺内容与选题。
>
> 维护方式：每天一次，可人工执行，也已配置为定时任务自动跑并出报告。
>
> **语言与取材约定**：站点面向英语用户，所有写进站点的文案（quiz SEO/GEO、分类 intro/faq）**一律用英语**。补内容和调研时**可以引用其他站点的数据、统计、研究与权威资料**来增强可信度与 GEO 表现——引用外部事实/数字时在报告里注明来源链接，写进文案的表述要自然、准确、不照抄。

---

## 一分钟背景（为什么这样维护）

- 全站 **构建期** 从 Payload 拉取 quiz 数据并烤进静态 HTML，**内容改动必须重新 build + 部署才生效**。
- 配置集中在 `config/`：`config/site.ts`（站点信息）+ `config/categories/*.ts`（一个分类一个文件）。
- 现状基线：**93 个分类文件，其中 ~84 个是 `draft: true` 空壳**（占位待补题），只有 **7 个分类、共 20 个 quiz** 有真实 `publicToken` 和完整 GEO 内容。
- 因此维护的核心矛盾是：**后台已发布的表单 → 尽快变成站点上带完整 GEO 内容的 live quiz**，并把 draft 分类逐步转正。

---

## 每日 Checklist（按顺序执行）

### 1. 新增 / 更新 quiz — 打通「后台已发布 → 站点收录」

目标：不让任何已发布、适合 coaching 站的表单滞留在后台。

1. 用 RooQuiz 后台核对当前 tenant 下**最近发布 / 更新**的表单，取每个的 `publicToken`。
2. 与站点已收录的 token 对比，找出**站点尚未收录**的表单：
   - 站点已收录 token 清单：`grep -rho "publicToken: '[^']*'" config/categories/ | sort -u`
3. 对每个「新表单」判断归属分类（`config/categories/<slug>.ts`），在该文件 `quizzes` 数组里新增一条：
   - 必填：`publicToken`、`slug`（URL 友好）、`order`；建议 `featured`（首页/分类置顶）。
   - 强烈建议补齐 `seo`：`title / description / overview / whoFor / whatYouLearn[] / sampleQuestions[] / howItWorks / faq[]`（参考 `config/categories/life-coaching.ts` 的完整样例）。
4. 若某表单所属分类还是 `draft: true` 空壳，则：补齐该分类的 `intro[]` + `faq[]`，放入至少 1 个 quiz，然后**移除 `draft: true`** 让它转正。
5. 已收录 quiz 若标题/封面/描述在后台有更新——因为是构建期拉取，只需重新 build 即可同步，无需改配置。

> 判断优先级：**先补「已发布但站点缺失」的**，其次「把接近可上线的 draft 分类转正」，最后才是纯新选题。

### 2. 内容 / SEO / GEO 健康检查

对全站配置做一遍静态体检，输出问题清单：

- **失效 / 占位 token**：确认所有 `publicToken` 都是真实已发布表单，无占位符残留。
- **SEO 完整性**：每个 live quiz 是否都有 `seo.title`、`seo.description`；分类是否有 `title` / `description`。
- **GEO 覆盖**：live quiz 的 `overview / whoFor / whatYouLearn / sampleQuestions / howItWorks / faq` 是否补全（这些是喂给生成式引擎的关键内容）。补写时**可引用外部权威站点的数据/研究**（如行业统计、心理学/教练研究）让内容更可信、更易被生成式引擎采信；文案用英语，引用的事实注明来源。
- **语言**：所有写进站点的文案必须是**英语**，语气与既有 live quiz 保持一致（参考 `life-coaching.ts`）。
- **分类质量**：非 draft 分类必须有 `intro[]` 和 `faq[]`，且至少含 1 个 quiz（避免空分类被索引）。
- **结构一致性**：`slug` 唯一、`order` 无冲突、`parent` 指向存在的 hub。
- **产物文件**：`src/app/sitemap`、`robots`、`llms.txt` / `llms-full.txt` 能正常生成且覆盖新页面。

产出：一份「问题 → 所在文件 → 建议修法」的清单。

### 3. 提交并推送（Vercel 自动构建）

**不在本地 build**。内容改完后跑一次轻量类型校验兜底，然后直接提交并 push，由 Vercel 拉起构建和部署：

```bash
pnpm typecheck       # 快速兜底：config 的 zod/类型校验（改 config 后跑一下，非必须）
# 用「无锁提交」helper（定义见下），沙盒里绝不会被残留 .lock 卡住；-A 表示提交全部改动：
git_push_lockfree "<改动摘要>" -A
```

**`git_push_lockfree`——沙盒无人值守提交的标准姿势**。沙盒把用户文件夹以 FUSE 挂载进来，**禁用 unlink（删除）但允许 rename**，所以常规 `git commit` 一旦被中途打断就会留下删不掉的 `*.lock`，下轮直接卡死。这个 helper 全程不产生会阻塞的锁：索引放原生 `/tmp`、提交走 `commit-tree`、ref 用 rename 更新，并在开头把历史残留锁改名挪走。**在仓库根目录**定义并调用：

```bash
git_push_lockfree() {
  local msg="$1"; shift                 # 其余参数原样传给 git add：-A 或精确文件路径
  local gd; gd="$(git rev-parse --git-dir)"
  # 1) 清扫历史残留 *.lock（rename 挪走，不依赖 unlink）
  find "$gd" -name '*.lock' -type f -exec sh -c 'mv -f "$1" "$1.stale" 2>/dev/null' _ {} \;
  # 2) 索引放原生 fs（其锁在 /tmp 上可正常删除，不会残留）
  export GIT_INDEX_FILE="/tmp/gitidx.$$"
  git read-tree HEAD || return 1
  git add "$@"       || return 1
  # 3) 生成对象 + 用 rename 更新 ref（零阻塞锁）
  local tree head commit
  tree=$(git write-tree)   || return 1
  head=$(git rev-parse HEAD)
  commit=$(git commit-tree "$tree" -p "$head" -m "$msg") || return 1
  printf '%s\n' "$commit" > "$gd/refs/heads/.main.new"
  mv -f "$gd/refs/heads/.main.new" "$gd/refs/heads/main" || return 1
  # 4) 刷新默认索引 → 保持 git status 干净
  cp -f "$GIT_INDEX_FILE" "$gd/index.new" && mv -f "$gd/index.new" "$gd/index"
  rm -f "$GIT_INDEX_FILE"; unset GIT_INDEX_FILE
  # 5) 用 deploy key 推送，触发 Vercel
  GIT_SSH_COMMAND="ssh -i .secrets/deploy_key -o IdentitiesOnly=yes -o UserKnownHostsFile=.secrets/known_hosts -o StrictHostKeyChecking=yes" git push origin main
}
```

> **推送凭证（方案 B：SSH Deploy Key）**：私钥/known_hosts 存在项目根的 `.secrets/`（不提交）。若某轮 push 报 `Permission denied (publickey)`，说明该 deploy key 未在仓库 Settings → Deploy keys 里授权（需勾 Allow write access）。
>
> **关于锁文件（已由 `git_push_lockfree` 自动处理，无需人工干预）**：沙盒 FUSE 挂载禁 unlink，普通 `rm .git/*.lock` 会报 `Operation not permitted`——这是挂载层策略，沙盒内无法根治（要让 `rm` 生效需 Anthropic 侧放开 FUSE 的 unlink）。helper 用 rename 把残留锁挪成 `*.stale`（git 忽略、无害），等价于删除，因此自动任务不会再被卡住。

- push 到主分支即触发 Vercel 自动构建 + 部署，无需本地 `pnpm build`。
- 若 Vercel 构建失败，最常见原因是**构建期 GraphQL 拉取失败**（token 无效 / Payload 不可达）或 zod 校验没过 → 核对 token、`config/schema.ts` 字段、`.env` 域名后再推一次。
- `typecheck` 只是推之前的快速自检，能跳过就跳过，不阻塞 push。

### 4. 热点抓取 + 关键词调研（SEO 驱动，决定下一批选题）

每天抓取 coaching 领域的热点资源与趋势，服务 SEO——决定「明天补哪些 quiz / 转正哪些 draft / 优化哪些页面关键词」：

- **抓热点**：追踪 coaching 各细分近期热门话题、上升期搜索词、季节性/事件性话题，以及可引用的新数据/研究，作为选题和内容更新的输入。

- 围绕 coaching 细分领域（life / career / business / wellness / relationships / sports 等）调研**当前热门话题与高意图关键词**，**以英语市场为主**（英文搜索/英文站点）。
- 允许参考竞品与权威站点的内容结构、数据和话题，判断需求与角度；引用到报告里的外部数据注明来源链接。
- 结合 draft 分类清单（`grep -rl "draft: true" config/categories/`），挑出**搜索需求大但站点还空着**的方向。
- 每天产出 **1–3 条具体选题建议**（英语表述）：建议的 quiz 主题 + 目标关键词 + 归属分类 + 一句话卖点，作为建卷输入。

产出：追加到「选题 backlog」，供后续在 RooQuiz 建卷。

---

## 每日产出（报告模板）

```
# topic-coaching 每日维护报告 · <日期>

## 1. quiz 收录
- 后台新发布未收录：<N> 个（token / 建议分类）
- 本次新增到站点：<列表>
- draft 转正：<列表 / 无>

## 2. 健康检查
- 阻断级问题：<列表 / 无>
- 待补 GEO / SEO：<列表>

## 3. 构建
- typecheck：✅/❌  build：✅/❌（失败摘要）

## 4. 选题建议（backlog）
- <主题> | <关键词> | <分类> | <卖点>

## 下一步
- <今天没做完 / 需人工决策的事项>
```

---

## 边界与人工确认点

- **自动可做**：健康检查、对比后台与站点差异、调研出选题、生成报告、在配置里补 SEO/GEO 文案、以及**直接 `git commit` + `git push`**（交给 Vercel 自动构建部署，无需本地 build）。
- **需人工确认再做**：新建 RooQuiz 表单、把 quiz 标 `featured`、删除/下线内容——这些默认只给建议，不擅自执行。
- 每天报告里凡涉及以上人工动作，列在「下一步」等你拍板；已 push 的改动写明 commit 和摘要。

---

## 常用命令速查

```bash
# 站点已收录的 token
grep -rho "publicToken: '[^']*'" config/categories/ | sort -u
# draft（空壳待补）分类
grep -rl "draft: true" config/categories/
# 有真实 quiz 的分类
grep -rl "publicToken" config/categories/
# 轻量类型自检（可选），然后用无锁 helper 直接推、由 Vercel 构建部署
pnpm typecheck
git_push_lockfree "<摘要>" -A     # 函数定义见「3. 提交并推送」小节，沙盒里不会被 .lock 卡住
```
