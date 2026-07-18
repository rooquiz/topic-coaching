'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavItem {
  slug: string
  name: string
}

/**
 * 移动端（md 以下）导航菜单：页头分类链接在窄屏隐藏，这里补一个汉堡菜单入口。
 * 分类数据由服务端 SiteHeader 以 props 传入（lib/content 为 server-only，不能在客户端直接取）。
 * 面板绝对定位挂在 sticky 头部下沿；点击链接或再次点按钮即收起。
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="btn btn-ghost btn-sm btn-square"
        onClick={() => setOpen((value) => !value)}
      >
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-base-300 bg-base-100 shadow-sm">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/c/${item.slug}`}
                className="rounded-lg px-3 py-2 text-sm hover:bg-base-200"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
