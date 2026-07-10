import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@config'

import { CategoryGrid } from '@/components/CategoryGrid'
import { CtaCreateYourOwn } from '@/components/CtaCreateYourOwn'
import { QuizGrid } from '@/components/QuizCard'
import { getFeaturedQuizzes, getHubs, hydrateQuizzes } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: site.tagline,
  description: site.description,
  path: '/',
})

export default async function HomePage() {
  const hubs = getHubs()
  const featured = await hydrateQuizzes(getFeaturedQuizzes())

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-base-100">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {site.hero.titleLead} <span className="text-primary">{site.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-base-content/70">{site.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="#featured" className="btn btn-primary">
              Browse quizzes
            </Link>
            <Link href="#categories" className="btn btn-ghost">
              Explore by topic
            </Link>
          </div>
        </div>
      </section>

      {/* Featured quizzes */}
      <section id="featured" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold">Popular quizzes</h2>
        <p className="mb-8 text-base-content/70">Start here — our most-taken coaching assessments.</p>
        <QuizGrid items={featured} />
      </section>

      {/* Categories */}
      <section id="categories" className="bg-base-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-2 text-2xl font-bold">Explore by topic</h2>
          <p className="mb-8 text-base-content/70">Find the coaching area that fits where you are right now.</p>
          <CategoryGrid categories={hubs} />
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold">How it works</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { n: '1', t: 'Pick a quiz', d: 'Choose from coaching assessments grouped by topic.' },
            { n: '2', t: 'Answer honestly', d: 'Takes just a few minutes — no signup required to start.' },
            { n: '3', t: 'Get your result', d: 'See a personalized breakdown and what to do next.' },
          ].map((step) => (
            <div key={step.n} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-content">
                {step.n}
              </div>
              <h3 className="mb-1 font-semibold">{step.t}</h3>
              <p className="text-sm text-base-content/70">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaCreateYourOwn placement="home" />
    </>
  )
}
