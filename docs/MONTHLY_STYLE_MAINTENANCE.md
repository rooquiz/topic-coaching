# topic-coaching · 每月样式维护 Plan

> 站点：coaching.rooquiz.com（Next.js 15 纯静态导出）
> 技术栈：**Tailwind CSS v4 + DaisyUI v5**，主题 `emerald`（亮）/ `dim`（跟随系统暗色）。
> 全局样式集中在 `src/app/globals.css`；组件样式散在 `src/components/*.tsx` 和 `src/app/**/page.tsx` 的 className 里。
>
> **目标**：每月一次给站点做「样式体检 + 美化」——找出并修掉样式 bug，持续打磨视觉与交互质感，让站点在移动端/桌面端、亮色/暗色下都干净、一致、专业。
>
> **与每日任务的分工**：`DAILY_MAINTENANCE.md` 管内容与 SEO/GEO；本任务只管**外观与前端体验**，不改 quiz 数据、不动 config/categories 的内容字段。

---

## 一分钟背景

- 纯静态导出：**改样式必须重新 build + 部署才生效**，但**不在本地 build**——直接 commit + push，由 Vercel 自动构建部署。
- 主要样式载体：
  - `src/app/globals.css`：全局 CSS（主题声明、排版微调、焦点样式、滚动行为）。
  - `src/components/SiteChrome.tsx`：页头 / 页脚。
  - `src/components/{QuizCard,CategoryGrid,CtaCreateYourOwn,QuizEmbed}.tsx`：核心 UI 卡片与区块。
  - `src/app/page.tsx`、`src/app/c/[category]/page.tsx`、`src/app/q/[slug]/page.tsx`：三类页面骨架。
- DaisyUI 语义色：`bg-base-100/200/300`、`text-base-content`、`text-primary`、`bg-primary`、`text-primary-content` 等；主题切换自动换色，**优先用语义色，别写死 hex**。

---

## 每月 Checklist（按顺序执行）

### 1. 样式 bug 排查

逐条静态审查（无法本地起服务时靠读代码 + 推理；能起 `pnpm dev` 时实际验证）：

- **响应式**：`sm/md/lg` 断点是否都有合理布局；grid 列数在窄屏是否会挤；页头导航在移动端（`md:flex` 隐藏）是否**有可用的替代入口**（当前移动端无菜单，是已知缺口）。
- **sticky 头部锚点偏移**：`html { scroll-padding-top }` 是否覆盖头部实际高度；新增锚点跳转不被头部盖住。
- **对比度 / 暗色模式**：`emerald` 与 `dim` 两套主题下，文字/背景对比是否达标；`text-base-content/60` 一类淡色在暗色下是否过淡；`bg-primary` 区块上的文字用 `text-primary-content`。
- **间距一致性**：同类区块的 `py-14/16`、卡片 `p-5/6`、标题 `mb-*` 是否统一；页面节奏是否忽大忽小。
- **交互态**：链接/按钮是否都有 hover 与**键盘 focus-visible**；卡片 hover 位移/阴影是否平滑无跳动。
- **图片 / 媒体**：QuizCard 封面 `aspect-[16/9] + object-cover` 是否稳定；缺图占位是否美观；iframe（QuizEmbed）自适应高度有无跳动。
- **无障碍**：`prefers-reduced-motion` 是否禁用了平滑滚动/动画；图标是否有 `aria-hidden`；可点区域是否够大。
- **死代码 / 冗余**：globals.css 里定义但未被引用的类（如历史遗留的 `.prose-copy`，用 `grep -rn "prose-copy" src config` 确认引用）；重复的 className 组合可抽成组件。

产出：一份「问题 → 所在文件 → 严重程度 → 建议修法」清单。

### 2. 美化 / 视觉打磨（给方案，低风险的直接做）

每月挑 1–3 个能明显提升质感的点，例如：

- 统一圆角 / 阴影层级 / 间距节奏；hero、CTA band、卡片的视觉权重是否协调。
- 排版层级：标题字号/字重/`tracking`、正文行高与最大宽度（可读性）。
- 微交互：hover/active/focus 过渡、卡片抬升、按钮反馈的一致与克制。
- 空状态、加载占位、错误态的观感。
- 暗色模式专项打磨。

大改（如**新增移动端导航菜单**、重做首页 hero、引入新配色/字体、结构性重排）**只出方案 + 影响面**，列到报告「下一步」等人工拍板，不擅自大动。

### 3. 校验并提交推送

**不在本地 build。** 改完样式后：

```bash
pnpm typecheck    # 快速兜底（改 .tsx 时跑；纯 CSS 改动可跳过）
```

⚠️ **只提交本任务动到的样式文件，不要 `git add -A`**——工作区可能有每日任务遗留的 config/内容改动，别误提交。用「无锁提交」helper（定义见下），**把要提交的样式文件逐个精确列在参数里**：

```bash
git_push_lockfree "style: <本月样式改动摘要>" \
  src/app/globals.css src/components/QuizCard.tsx src/components/CategoryGrid.tsx   # 只列你实际改过的
```

**`git_push_lockfree`——沙盒无人值守提交的标准姿势**。沙盒把用户文件夹以 FUSE 挂载进来，**禁用 unlink（删除）但允许 rename**，常规 `git commit` 一旦被中途打断就会留下删不掉的 `*.lock`，下轮直接卡死。这个 helper 全程不产生会阻塞的锁：索引放原生 `/tmp`、提交走 `commit-tree`、ref 用 rename 更新，开头把历史残留锁改名挪走。**在仓库根目录**定义并调用（`$@` 原样传给 `git add`，所以这里给的是精确文件路径，天然满足「不 `-A`」的要求）：

```bash
git_push_lockfree() {
  local msg="$1"; shift                 # 其余参数原样传给 git add：本任务传精确文件路径
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

> push 到 main 即触发 Vercel 自动构建部署。若报 `Permission denied (publickey)`，说明 deploy key 未在仓库 Settings → Deploy keys 授权（需勾 Allow write access）。
>
> **关于锁文件（已由 `git_push_lockfree` 自动处理，无需人工干预）**：沙盒 FUSE 挂载禁 unlink，普通 `rm .git/*.lock` 会报 `Operation not permitted`——这是挂载层策略，沙盒内无法根治（要让 `rm` 真正生效需 Anthropic 侧放开 FUSE 的 unlink）。helper 用 rename 把残留锁挪成 `*.stale`（git 忽略、无害），等价于删除，因此自动任务不会再被卡住。

---

## 改动权限边界

- **自动可做（低风险，直接改 + push）**：CSS bug 修复、响应式断点微调、对比度/暗色修正、间距与圆角/阴影统一、focus-visible/无障碍改进、死代码清理、className 归一。
- **需人工确认再做（只给方案、不擅自执行）**：新增移动端导航菜单、改配色/字体/主题、重做 hero 或页面结构、引入新依赖、任何影响面较大的重设计。
- 一律**不碰** quiz 数据与 `config/categories/*` 的内容字段（那是每日任务的地盘）。

---

## 每月产出（报告模板）

```
# topic-coaching 每月样式维护报告 · <日期>

## 1. 样式 bug 排查
- 已修（低风险，已 push）：<问题 → 文件 → 改法>
- 待确认（需人工）：<问题 → 文件 → 建议>

## 2. 美化打磨
- 本月改进：<列表>
- 提案（等拍板）：<列表 + 影响面>

## 3. 校验 / 构建
- typecheck：✅/❌   commit：<hash + 摘要 / 无改动>

## 下一步（需人工决策）
- <大改提案 / 待确认项>
```

---

## 常用命令速查

```bash
# 找样式载体
ls src/components/ src/app
cat src/app/globals.css
# 死类引用排查（示例）
grep -rn "prose-copy" src config
# 类型自检（改 .tsx 后），然后用无锁 helper 精确提交并推送（Vercel 部署）
pnpm typecheck
# helper 定义见「3. 校验并提交推送」小节；精确列出改过的样式文件，不用 -A：
git_push_lockfree "style: <摘要>" src/app/globals.css   # 追加其他改过的文件即可
```
