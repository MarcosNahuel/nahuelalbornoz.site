import { cn } from '@/lib/utils'

interface SkillTagProps {
  children: React.ReactNode
  highlight?: boolean
  className?: string
}

export function SkillTag({ children, highlight = false, className }: SkillTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        'px-3 py-1.5',
        'text-sm font-body',
        'rounded-md border',
        'transition-all duration-200',
        highlight
          ? 'bg-primary/15 border-primary/35 text-primary-light'
          : 'bg-white/[0.08] border-white/15 text-white/90',
        'hover:bg-white/12 hover:border-white/25',
        className
      )}
    >
      {children}
    </span>
  )
}
