'use client'

import { useEffect, useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
  glitchInterval?: number
  glitchDuration?: number
}

const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'

export function GlitchText({
  text,
  className = '',
  glitchInterval = 3000,
  glitchDuration = 150
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)

      // Glitch effect
      let iterations = 0
      const maxIterations = 3

      const glitchLoop = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return char
              if (Math.random() < 0.3) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)]
              }
              return char
            })
            .join('')
        )

        iterations++
        if (iterations >= maxIterations) {
          clearInterval(glitchLoop)
          setDisplayText(text)
          setIsGlitching(false)
        }
      }, glitchDuration)

    }, glitchInterval)

    return () => clearInterval(interval)
  }, [text, glitchInterval, glitchDuration])

  return (
    <span
      className={`${className} ${isGlitching ? 'animate-pulse' : ''}`}
      style={{
        textShadow: isGlitching
          ? '2px 0 #ff0000, -2px 0 #00ffff'
          : 'none'
      }}
    >
      {displayText}
    </span>
  )
}
