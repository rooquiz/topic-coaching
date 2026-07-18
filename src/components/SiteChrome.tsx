import Link from 'next/link'

import { site } from '@config'

import { signupUrl } from '@/lib/cairo'
import { getHubs } from '@/lib/content'

export function SiteHeader() {
  const categories = getHubs()
  return (
    <header className="sticky top-0 z-40 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">{site.brandEmoji}</span>
          <span>{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {categories.map((category) => (
            <Link key={category.slug} href={`/c/${category.slug}`} className="hover:text-primary">
              {category.name}
            </Link>
          ))}
        </nav>
        <a href={signupUrl('header')} className="btn btn-primary btn-sm" target="_blank" rel="noopener">
          {site.cta.navButton}
        </a>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const categories = getHubs()
  return (
    <footer className="border-t border-base-300 bg-base-200">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-2 flex items-center gap-2 font-bold">
            <span className="text-xl">{site.brandEmoji}</span>
            <span>{site.name}</span>
          </div>
          <p className="text-sm text-base-content/70">{site.footerBlurb}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Categories</h4>
          <ul className="space-y-2 text-sm text-base-content/70">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/c/${category.slug}`} className="hover:text-primary">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">For coaches</h4>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>
              <a href={signupUrl('footer')} className="hover:text-primary" target="_blank" rel="noopener">
                {site.cta.footerLink}
              </a>
            </li>
            <li>
              <a href="https://rooquiz.com" className="hover:text-primary" target="_blank" rel="noopener">
                About RooQuiz
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Resources</h4>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>
              <Link href="/" className="hover:text-primary">
                All quizzes
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-base-300 py-4 text-center text-xs text-base-content/70">
        © {site.name} — Coaching quizzes
      </div>
    </footer>
  )
}
