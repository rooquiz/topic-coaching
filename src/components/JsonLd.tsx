/** 渲染 JSON-LD 结构化数据（供搜索引擎/富媒体结果解析） */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // 结构化数据为可信的自有内容，序列化后注入即可
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
