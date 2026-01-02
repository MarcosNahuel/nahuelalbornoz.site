'use client'

import { motion } from 'framer-motion'
import { TypewriterText } from './TypewriterText'

interface CommandLineProps {
  prompt?: string
  command: string
  output?: string
  delay?: number
  speed?: number
  showOutput?: boolean
  className?: string
}

export function CommandLine({
  prompt = '~$',
  command,
  output,
  delay = 0,
  speed = 40,
  showOutput = true,
  className = ''
}: CommandLineProps) {
  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="flex items-center gap-2">
        <span className="text-green-400">{prompt}</span>
        <TypewriterText
          text={command}
          delay={delay}
          speed={speed}
          className="text-white"
          cursor={!output}
        />
      </div>
      {output && showOutput && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (delay + command.length * speed) / 1000 + 0.3 }}
          className="text-white/60 mt-1 ml-6"
        >
          {output}
        </motion.div>
      )}
    </div>
  )
}
