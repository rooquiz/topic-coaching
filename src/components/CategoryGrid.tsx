import Link from 'next/link'

import type { CoachingCategory } from '@config'

/** 分类网格（首页 + 分类页底部内链） */
export function CategoryGrid({ categories }: { categories: CoachingCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/c/${category.slug}`}
          className="group rounded-2xl border border-base-300 bg-base-100 p-6 transition hover:border-primary hover:shadow-md"
        >
          <div className="mb-3 text-3xl">{category.emoji ?? '🧭'}</div>
          <h3 className="mb-1 text-lg font-semibold group-hover:text-primary">{category.name}</h3>
          <p className="text-sm text-base-content/70">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
