'use client'

import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/perfil', label: 'Perfil', num: '01' },
  { href: '/experiencia', label: 'Exp', num: '02' },
  { href: '/habilidades', label: 'Skills', num: '03' },
  { href: '/educacion', label: 'Edu', num: '04' },
  { href: '/ai-agents', label: 'AI', num: '05' },
  { href: '/portfolio', label: 'Work', num: '06' },
]

export function TerminalNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="space-y-1">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center gap-3 py-2 text-white/50 hover:text-white transition-colors duration-100"
            >
              <span className="text-[#0055ff] font-bold text-xs w-6">
                {item.num}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
              <span className="flex-1 h-px bg-white/10 group-hover:bg-[#0055ff] transition-colors ml-2" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function TerminalNavMobile() {
  return (
    <nav className="lg:hidden w-full bg-black border-b border-white/20 py-3 px-4">
      <ul className="flex flex-wrap gap-2 justify-center">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[10px] text-white/70 hover:bg-[#0055ff] hover:text-white px-3 py-2 flex items-center gap-1.5 border border-white/20 font-medium uppercase tracking-wider transition-colors duration-100"
            >
              <span className="text-[#0055ff]">{item.num}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Legacy exports for compatibility
export { TerminalNav as BrutalistNav, TerminalNavMobile as BrutalistNavMobile }
