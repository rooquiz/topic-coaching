import { signupUrl } from '@/lib/cairo'

/**
 * B 端转化 CTA：引导访客注册 RooQuiz 做自己的测评。
 * placement 用于 UTM 归因，区分不同位置的转化效果。
 */
export function CtaCreateYourOwn({
  placement,
  variant = 'band',
}: {
  placement: string
  variant?: 'band' | 'inline'
}) {
  const href = signupUrl(placement)

  if (variant === 'inline') {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="mb-3 text-base font-medium">Are you a coach? Turn quizzes into leads.</p>
        <a href={href} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          Create your own coaching quiz — free
        </a>
      </div>
    )
  }

  return (
    <section className="bg-primary text-primary-content">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">Build your own coaching quiz in minutes</h2>
        <p className="max-w-2xl text-primary-content/80">
          Use quizzes to capture leads, understand clients, and grow your coaching practice. No code, AI-assisted, free
          to start.
        </p>
        <a href={href} className="btn btn-lg bg-base-100 text-primary hover:bg-base-200" target="_blank" rel="noopener">
          Create your own quiz — free
        </a>
      </div>
    </section>
  )
}
