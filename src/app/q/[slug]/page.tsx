import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { JsonLd } from '@/components/JsonLd'
import { QuizEmbed } from '@/components/QuizEmbed'
import { QuizGrid } from '@/components/QuizCard'
import { cairoOrigin, quizEmbedUrl, quizTakeUrl } from '@/lib/cairo'
import { getDisplayCategory, getQuiz, getQuizzes, getQuizzesUnderCategory, hydrateQuiz, hydrateQuizzes } from '@/lib/content'
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, itemListJsonLd, quizJsonLd } from '@/lib/seo'

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
  })
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { slug } = await params
  const quiz = getQuiz(slug)
  if (!quiz) notFound()

  const hydrated = await hydrateQuiz(quiz)
  // 展示归属：草稿分类回退到其所属 Hub，避免面包屑/相关推荐指向没有页面的草稿分类
  const primaryCategory = getDisplayCategory(quiz)
  const related = (await hydrateQuizzes(primaryCategory ? getQuizzesUnderCategory(primaryCategory) : []))
    .filter((item) => item.quiz.slug !== quiz.slug)
    .slice(0, 3)

  const embedSrc = quizEmbedUrl(quiz.publicToken, quiz.language)
  const takeHref = quizTakeUrl(quiz.publicToken, quiz.language)

  // GEO 正文字段：把测评的实质内容以可抓取、可摘录的文本呈现在页面上
  const { overview, whoFor, whatYouLearn, sampleQuestions, howItWorks, faq } = {
    overview: quiz.seo?.overview,
    whoFor: quiz.seo?.whoFor,
    whatYouLearn: quiz.seo?.whatYouLearn ?? [],
    sampleQuestions: quiz.seo?.sampleQuestions ?? [],
    howItWorks: quiz.seo?.howItWorks,
    faq: quiz.seo?.faq ?? [],
  }
  // 纯静态导出：以 build 时间作为「最近更新」新鲜度信号
  const lastModified = new Date().toISOString()

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
          about: primaryCategory?.name,
          dateModified: lastModified,
        })}
      />
      {sampleQuestions.length ? (
        <JsonLd data={itemListJsonLd(`Sample questions from ${hydrated.title}`, sampleQuestions)} />
      ) : null}
      {faq.length ? <JsonLd data={faqJsonLd(faq)} /> : null}

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-base-content/70">
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
        {overview ? <p className="mt-4 text-base-content/80">{overview}</p> : null}

        <div className="mt-4">
          <a href={takeHref} target="_blank" rel="noopener" className="link text-sm text-primary">
            Open in full screen ↗
          </a>
        </div>

        {/* 内联嵌入 cairo 答题器 */}
        <div className="mt-6">
          <QuizEmbed src={embedSrc} token={quiz.publicToken} allowedOrigin={cairoOrigin} title={hydrated.title} />
        </div>

        {/* GEO 正文：把测评实质内容以可抓取文本呈现,供答案引擎摘录 */}
        {whatYouLearn.length ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold">What you&rsquo;ll learn</h2>
            <ul className="space-y-3">
              {whatYouLearn.map((point, index) => (
                <li key={index} className="flex gap-3 text-base-content/80">
                  <span aria-hidden className="mt-1 text-primary">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {sampleQuestions.length ? (
          <section className="mt-14">
            <h2 className="mb-2 text-2xl font-bold">Sample questions</h2>
            <p className="mb-5 text-base-content/70">
              A few of the questions you&rsquo;ll answer in the {hydrated.title}:
            </p>
            <ol className="list-decimal space-y-3 pl-6 text-base-content/80 marker:text-base-content/40">
              {sampleQuestions.map((question, index) => (
                <li key={index} className="pl-1">
                  {question}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {whoFor ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold">Who this quiz is for</h2>
            <p className="text-base-content/80">{whoFor}</p>
          </section>
        ) : null}

        {howItWorks ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold">How it works</h2>
            <p className="text-base-content/80">{howItWorks}</p>
          </section>
        ) : null}

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
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="mb-8 text-2xl font-bold">More {primaryCategory?.name ?? 'coaching'} quizzes</h2>
            <QuizGrid items={related} />
          </div>
        </section>
      ) : null}
    </>
  )
}
