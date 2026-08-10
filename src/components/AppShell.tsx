import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BottomNav } from './BottomNav'

export function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="app-shell">
      <a className="skip-link" href="#page-content">Skip to content</a>
      <header className="topbar">
        <Link className="brand" to="/" aria-label="EchoWhale home">
          <span className="brand-mark" aria-hidden="true">◜</span>
          <span>EchoWhale</span>
        </Link>
        {!isHome && <span className="topbar-context">Ocean explorer</span>}
      </header>
      <BottomNav />
      <main id="page-content" className="page-content">{children}</main>
    </div>
  )
}
