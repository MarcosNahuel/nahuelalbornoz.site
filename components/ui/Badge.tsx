import { cn } from '@/lib/utils'

type BadgeVariant =
  | 'default'
  | 'primary'
  | 'economia'
  | 'bi'
  | 'data-eng'
  | 'dataeng'
  | 'ds'
  | 'genai'
  | 'formal'
  | 'data'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/10 border-white/20 text-white',
  primary: 'bg-primary/20 border-primary/50 text-primary-light',
  economia: 'bg-accent-red/20 border-accent-red/40 text-accent-red-light',
  formal: 'bg-accent-red/20 border-accent-red/40 text-accent-red-light',
  bi: 'bg-primary/20 border-primary/40 text-primary-light',
  data: 'bg-primary/20 border-primary/40 text-primary-light',
  'data-eng': 'bg-accent-orange/20 border-accent-orange/40 text-accent-orange',
  dataeng: 'bg-accent-orange/20 border-accent-orange/40 text-accent-orange',
  ds: 'bg-accent-purple/20 border-accent-purple/40 text-accent-purple-light',
  genai: 'bg-accent-green/20 border-accent-green/40 text-accent-green-light',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        'px-3 py-1.5',
        'text-xs font-semibold uppercase tracking-wider',
        'rounded-full border',
        'font-body',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
