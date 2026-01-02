import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BackButtonProps {
  href?: string
  className?: string
}

export function BackButton({ href = '/', className }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'fixed top-6 left-6 z-50',
        'flex items-center gap-2',
        'px-4 py-2.5 rounded-lg',
        'bg-primary/15 border border-primary/30',
        'text-white text-sm font-medium',
        'backdrop-blur-lg',
        'transition-all duration-300',
        'hover:bg-primary/30 hover:-translate-x-1',
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 fill-current"
        aria-hidden="true"
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
      Volver
    </Link>
  )
}
