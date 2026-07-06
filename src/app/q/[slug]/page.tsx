import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizEmbed } from '@/components/QuizEmbed'
import { QuizGrid } from '@/components/QuizCard'
import { cairoOrigin, quizEmbedUrl, quizTakeUrl } from '@/lib/cairo'
import { getCategory, getQuiz, getQuizzes, getQuizzesByCategory, hydrateQuiz, hydrateQuizzes } from '@/lib/content'
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, quizJsonLd } from '@/lib/seo'

export const revalidate = 3600

interface QuizPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getQuizzes().map((quiz) => ({ slug: quiz.slug }))
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { slug } = await params
  const quiz = getQuiz(slug)
  if (!quiz) return {}
  const hydrated = await hydrateQuiz(quiz)
  return buildMetadata({
    title: hydrated.title,
    description: hydrated.description || `Take the ${hydrated.title} coaching quiz — free and in minutes.`,
    path: `/q/${quiz.slug}`,
    ogSubtitle: 'Free coaching quiz',
  })
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params
  const quiz = getQuiz(slug)
  if (!quiz) notFound()

  const hydrated = await hydrateQuiz(quiz)
  const primaryCategorySlug = quiz.categorySlugs[0]
  const primaryCategory = getCategory(primaryCategorySlug)
  const related = (await hydrateQuizzes(getQuizzesByCategory(primaryCategorySlug)))
    .filter((item) => item.quiz.slug !== quiz.slug)
    .slice(0, 3)

  const embedSrc = quizEmbedUrl(quiz.publicToken, quiz.language)
  const takeHref = quizTakeUrl(quiz.publicToken, quiz.language)
  const faq = quiz.seo?.faq ?? []

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          ...(primaryCategory ? [{ name: primaryCategory.name, path: `/c/${primaryCategory.slug}` }] : []),
          { name: hydrated.title, path: `/q/${quiz.slug}` },
        ])}
      />
      <JsonLd
        data={quizJsonLd({
          title: hydrated.title,
          description: hydrated.description,
          path: `/q/${quiz.slug}`,
          image: hydrated.coverUrl,
        })}
      />
      {faq.length ? <JsonLd data={faqJsonLd(faq)} /> : null}

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-base-content/60">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          {primaryCategory ? (
            <>
              {' / '}
              <Link href={`/c/${primaryCategory.slug}`} className="hover:text-primary">
                {primaryCategory.name}
              </Link>
            </>
          ) : null}
        </nav>

        <h1 className="text-3xl font-bold sm:text-4xl">{hydrated.title}</h1>
        {hydrated.description ? (
          <p className="mt-4 text-lg text-base-content/70">{hydrated.description}</p>
        ) : null}

        <div className="mt-4">
          <a href={takeHref} target="_blank" rel="noopener" className="link text-sm text-primary">
            Open in full screen ↗
          </a>
        </div>

        {/* 内联嵌入 cairo 答题器 */}
        <div className="mt-6">
          <QuizEmbed src={embedSrc} token={quiz.publicToken} allowedOrigin={cairoOrigin} title={hydrated.title} />
        </div>

        {/* FAQ */}
        {faq.length ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold">Frequently asked questions</h2>
            <div className="join join-vertical w-full">
              {faq.map((entry, index) => (
                <div key={index} className="collapse join-item collapse-arrow border border-base-300 bg-base-100">
                  <input type="checkbox" defaultChecked={index === 0} />
                  <div className="collapse-title font-medium">{entry.q}</div>
                  <div className="collapse-content text-base-content/70">
                    <p>{entry.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14">
          <CtaCreateYourOwn placement={`quiz-${quiz.slug}`} variant="inline" />
        </div>
      </div>

      {/* Related */}
      {related.length ? (
        <section className="bg-base-200">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="mb-8 text-2xl font-bold">More {primaryCategory?.name ?? 'coaching'} quizzes</h2>
            <QuizGrid items={related} />
          </div>
        </section>
      ) : null}
    </>
  )
}
