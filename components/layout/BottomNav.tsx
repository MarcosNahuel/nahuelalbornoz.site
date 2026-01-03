'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/perfil', label: 'Perfil', icon: 'user' },
  { href: '/habilidades', label: 'Skills', icon: 'code' },
  { href: '/educacion', label: 'Edu', icon: 'graduation' },
  { href: '/portfolio', label: 'Work', icon: 'briefcase' },
]

const Icons = {
  home: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  graduation: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
}

export function BottomNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-[100]"
    >
      <div className="relative flex flex-col items-center gap-3 p-3 bg-[#0d0d0d]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] via-transparent to-white/[0.03] pointer-events-none" />

        {/* Profile Photo - only shows when not on home */}
        <AnimatePresence>
          {!isHome && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative mb-2"
            >
              <Link href="/perfil" className="block group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image
                    src="/images/pic01.png"
                    alt="Nahuel Albornoz"
                    width={56}
                    height={56}
                    className="relative rounded-full border-2 border-white/20 group-hover:border-white/40 transition-all object-cover shadow-lg"
                  />
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#0d0d0d] rounded-full" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider - only shows when photo is visible */}
        <AnimatePresence>
          {!isHome && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-px bg-white/10 mb-1"
            />
          )}
        </AnimatePresence>

        {/* Nav Items */}
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative"
            >
              <motion.div
                className={`
                  relative flex flex-col items-center justify-center w-16 py-3 px-2 rounded-xl
                  transition-colors duration-200
                  ${isActive
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Icon with glow on active */}
                <motion.div
                  className="relative z-10"
                  animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isActive && (
                    <div className="absolute inset-0 blur-md bg-white/30 rounded-full" />
                  )}
                  <div className="relative">
                    {Icons[item.icon as keyof typeof Icons]}
                  </div>
                </motion.div>

                {/* Label below icon */}
                <span className={`relative z-10 text-[9px] font-medium mt-1 tracking-wide ${isActive ? 'text-white' : 'text-white/50'}`}>
                  {item.label}
                </span>
              </motion.div>

              {/* Active indicator line - on the right since nav is on left */}
              {isActive && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full shadow-lg shadow-white/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
