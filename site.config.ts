/**
 * ============================================================================
 *  Coaching 专题站配置入口（@config）
 * ============================================================================
 * 内容已拆分，本文件只负责装配 + 对外导出，一般不用改这里：
 *   - 站点信息（名称 / hero / CTA / 页脚）  → config/site.ts
 *   - 分类与其测评（一个分类一个文件）        → config/categories/*.ts
 *   - 结构 / 类型 / 校验                     → config/schema.ts
 *
 * 新增一份测评：在 berlin 建卷发布 → 拿到公开链接里的 publicToken →
 * 打开对应分类文件（config/categories/<slug>.ts），在 quizzes 里加一条。
 * 新增一个分类：在 config/categories/ 建文件并登记进 index.ts。
 */

import { categoryFiles } from './config/categories'
import { buildSiteConfig } from './config/schema'
import { site as siteSettings } from './config/site'

export type { SiteSettings, CoachingCategory, CoachingQuiz, SiteConfig } from './config/schema'

/** 装配后的完整配置（含构建期校验） */
export const siteConfig = buildSiteConfig(siteSettings, categoryFiles)

/** 便捷导出：站点信息 */
export const site = siteConfig.site
