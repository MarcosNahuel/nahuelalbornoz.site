'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-white/90 text-lg font-medium tracking-wide',
                'hover:text-primary transition-colors duration-300',
                'relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5',
                'after:bg-primary after:transition-all after:duration-300',
                'hover:after:w-full'
              )}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={cn(
              'w-6 h-0.5 bg-white transition-all duration-300',
              isOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'w-6 h-0.5 bg-white transition-all duration-300',
              isOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'w-6 h-0.5 bg-white transition-all duration-300',
              isOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0',
          'bg-black/95 backdrop-blur-lg',
          'transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-col py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-white text-center py-4 text-lg',
                'hover:text-primary hover:bg-primary/10',
                'transition-colors duration-200'
              )}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
