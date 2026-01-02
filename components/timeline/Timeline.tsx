import { cn } from '@/lib/utils'

interface TimelineProps {
  children: React.ReactNode
  className?: string
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div
      className={cn(
        'relative py-4',
        // Timeline line
        'before:absolute before:left-1/2 before:-ml-px before:top-0 before:bottom-0',
        'before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:to-primary/20',
        // Mobile: line on left
        'max-md:before:left-5',
        className
      )}
    >
      {children}
    </div>
  )
}
