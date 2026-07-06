import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CategoryGrid } from '@/components/CategoryGrid'
import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizGrid } from '@/components/QuizCard'
import { getCategories, getCategory, getQuizzesByCategory, hydrateQuizzes } from '@/lib/content'
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo'

export const revalidate = 3600

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return buildMetadata({
    title: category.title,
    description: category.description,
    path: `/c/${category.slug}`,
    ogTitle: category.name,
    ogSubtitle: 'Coaching quizzes',
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const quizzes = await hydrateQuizzes(getQuizzesByCategory(category.slug))
  const otherCategories = getCategories().filter((item) => item.slug !== category.slug)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: category.name, path: `/c/${category.slug}` },
        ])}
      />

      <section className="bg-gradient-to-b from-primary/10 to-base-100">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <nav className="mb-3 text-sm text-base-content/60">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>{' '}
            / <span>{category.name}</span>
          </nav>
          <h1 className="text-3xl font-bold sm:text-4xl">{category.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-base-content/70">{category.heroCopy ?? category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        {quizzes.length ? (
          <QuizGrid items={quizzes} />
        ) : (
          <p className="text-base-content/60">No quizzes here yet — check back soon.</p>
        )}
      </section>

      <section className="bg-base-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="mb-8 text-2xl font-bold">Other coaching topics</h2>
          <CategoryGrid categories={otherCategories} />
        </div>
      </section>

      <CtaCreateYourOwn placement={`category-${category.slug}`} />
    </>
  )
}
