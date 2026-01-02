'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
  animate?: boolean
}

export function TerminalWindow({
  title = 'terminal',
  children,
  className = '',
  animate = true
}: TerminalWindowProps) {
  const Container = animate ? motion.div : 'div'

  return (
    <Container
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      })}
      className={`bg-[#0d0d0d] border border-[#333] rounded-lg overflow-hidden shadow-2xl ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border-b border-[#333]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>
        <span className="text-xs text-white/40 font-mono ml-2">{title}</span>
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </Container>
  )
}
