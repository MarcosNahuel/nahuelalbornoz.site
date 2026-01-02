import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl p-6',
        'bg-primary/[0.06] border border-primary/15',
        'backdrop-blur-sm',
        hover && [
          'transition-all duration-300',
          'hover:-translate-y-1',
          'hover:border-primary/35',
          'hover:shadow-lg hover:shadow-primary/10',
        ],
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        'text-xl font-display text-white mb-2',
        className
      )}
    >
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-sm text-muted leading-relaxed font-body',
        className
      )}
    >
      {children}
    </p>
  )
}
