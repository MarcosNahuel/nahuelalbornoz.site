'use client'

import { cn } from '@/lib/utils'

interface TimelineItemProps {
  date: string
  title: string
  institution: string
  description?: string
  index?: number
}

export function TimelineItem({ date, title, institution, description, index = 0 }: TimelineItemProps) {
  const isEven = index % 2 === 1

  return (
    <div
      className={cn(
        'relative py-2 px-10',
        'w-[calc(50%-40px)]',
        // Alternating sides on desktop
        isEven ? 'left-1/2' : 'left-0',
        // Mobile: all on right
        'max-md:w-full max-md:pl-[50px] max-md:pr-2.5 max-md:left-0',
        // Animation
        'opacity-0 translate-y-5 animate-fadeInUp',
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div
        className={cn(
          'p-4 rounded-xl',
          'bg-primary/[0.08] border border-primary/20',
          'relative transition-all duration-300',
          'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/40',
          // Dot on timeline
          'after:absolute after:w-3.5 after:h-3.5',
          'after:bg-primary after:border-[3px] after:border-background',
          'after:rounded-full after:top-1/2 after:-translate-y-1/2',
          'after:transition-all after:duration-300',
          'hover:after:scale-125 hover:after:shadow-lg hover:after:shadow-primary/60',
          // Dot position based on side
          isEven ? 'after:-left-[47px]' : 'after:-right-[47px]',
          // Mobile: dot always on left
          'max-md:after:-left-10 max-md:after:right-auto'
        )}
      >
        <div className="text-primary font-body font-semibold text-sm mb-1 tracking-wide">
          {date}
        </div>
        <h3 className="text-white text-base font-display leading-snug my-1">
          {title}
        </h3>
        <div className="text-white/80 font-body text-sm mb-2">
          {institution}
        </div>
        {description && (
          <p className="font-body text-white/60 text-sm mt-2 pl-3 border-l-2 border-primary/40 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
