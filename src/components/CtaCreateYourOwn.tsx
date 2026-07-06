import { site } from '@config'

import { signupUrl } from '@/lib/cairo'

/**
 * B 端转化 CTA：引导访客注册 RooQuiz 做自己的测评。
 * 文案取自 site.config.ts；placement 用于 UTM 归因，区分不同位置的转化效果。
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
        <p className="mb-3 text-base font-medium">{site.cta.inline.text}</p>
        <a href={href} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          {site.cta.inline.button}
        </a>
      </div>
    )
  }

  return (
    <section className="bg-primary text-primary-content">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{site.cta.band.heading}</h2>
        <p className="max-w-2xl text-primary-content/80">{site.cta.band.body}</p>
        <a href={href} className="btn btn-lg bg-base-100 text-primary hover:bg-base-200" target="_blank" rel="noopener">
          {site.cta.band.button}
        </a>
      </div>
    </section>
  )
}
