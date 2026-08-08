import { NavLink } from 'react-router-dom'

const navItems = [
  ['Home', '/'],
  ['Ocean sounds', '/sounds'],
  ['Meet a whale', '/whales'],
  ['Sea animals', '/animals'],
  ['Recent spots', '/spots'],
  ['Help whales', '/conservation'],
] as const

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="EchoWhale sections">
      {navItems.map(([label, to]) => (
        <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
