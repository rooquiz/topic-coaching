import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CategoryGrid } from '@/components/CategoryGrid'
import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizGrid } from '@/components/QuizCard'
import {
  getCategories,
  getCategory,
  getChildCategories,
  getHubs,
  getParentCategory,
  getQuizzesUnderCategory,
  hydrateQuizzes,
  isHub,
} from '@/lib/content'
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo'

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return getCategories()
    .filter((category) => !category.draft)
    .map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return buildMetadata({
    title: category.title,
    description: category.description,
    path: `/c/${category.slug}`,
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category || category.draft) notFound()

  const hub = isHub(category)
  const parent = getParentCategory(category)
  const children = hub ? getChildCategories(category.slug) : []
  const quizzes = await hydrateQuizzes(getQuizzesUnderCategory(category))

  // 面包屑：Home / [Hub] / 当前分类
  const crumbs = [{ name: 'Home', path: '/' }]
  if (parent) crumbs.push({ name: parent.name, path: `/c/${parent.slug}` })
  crumbs.push({ name: category.name, path: `/c/${category.slug}` })

  // 底部内链：Hub → 其他 Hub；niche → 同 Hub 的兄弟分类（无则回退到其他 Hub）
  const siblings = parent ? getChildCategories(parent.slug).filter((item) => item.slug !== category.slug) : []
  const relatedCategories = hub
    ? getHubs().filter((item) => item.slug !== category.slug)
    : siblings.length
      ? siblings
      : getHubs()
  const relatedHeading = !hub && siblings.length ? `More in ${parent?.name}` : 'Other coaching topics'

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <section className="bg-gradient-to-b from-primary/10 to-base-100">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <nav className="mb-3 text-sm text-base-content/60">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>{' '}
            /{' '}
            {parent ? (
              <>
                <Link href={`/c/${parent.slug}`} className="hover:text-primary">
                  {parent.name}
                </Link>{' '}
                /{' '}
              </>
            ) : null}
            <span>{category.name}</span>
          </nav>
          <h1 className="text-3xl font-bold sm:text-4xl">{category.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-base-content/70">{category.heroCopy ?? category.description}</p>
        </div>
      </section>

      {/* Hub 页：先展示旗下分类，供用户下钻 */}
      {hub && children.length ? (
        <section className="mx-auto max-w-6xl px-4 pt-14">
          <h2 className="mb-2 text-2xl font-bold">Coaching areas</h2>
          <p className="mb-8 text-base-content/70">Explore a focus within {category.name}.</p>
          <CategoryGrid categories={children} />
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-14">
        {hub && children.length ? <h2 className="mb-8 text-2xl font-bold">Popular quizzes</h2> : null}
        {quizzes.length ? (
          <QuizGrid items={quizzes} />
        ) : (
          <p className="text-base-content/60">No quizzes here yet — check back soon.</p>
        )}
      </section>

      <section className="bg-base-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-2xl font-bold">{relatedHeading}</h2>
          <CategoryGrid categories={relatedCategories} />
        </div>
      </section>

      <CtaCreateYourOwn placement={`category-${category.slug}`} />
    </>
  )
}
