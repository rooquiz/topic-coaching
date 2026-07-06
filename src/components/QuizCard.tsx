import Link from 'next/link'

import type { HydratedQuiz } from '@/lib/content'

/** 测评卡片（首页 / 分类页 / 相关推荐通用） */
export function QuizCard({ item }: { item: HydratedQuiz }) {
  return (
    <Link
      href={item.href}
      className="card overflow-hidden border border-base-300 bg-base-100 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <figure className="aspect-[16/9] bg-base-200">
        {item.coverUrl ? (
          // 封面来自任意主机，用原生 <img> 规避 next/image 白名单
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.coverUrl} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl">🧭</div>
        )}
      </figure>
      <div className="card-body gap-2 p-5">
        <h3 className="card-title text-base leading-snug">{item.title}</h3>
        {item.description ? <p className="line-clamp-2 text-sm text-base-content/70">{item.description}</p> : null}
        <span className="mt-1 text-sm font-medium text-primary">Take the quiz →</span>
      </div>
    </Link>
  )
}

export function QuizGrid({ items }: { items: HydratedQuiz[] }) {
  if (!items.length) return null
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <QuizCard key={item.quiz.slug} item={item} />
      ))}
    </div>
  )
}
