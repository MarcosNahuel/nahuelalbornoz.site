'use client'

import { useState, FormEvent } from 'react'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = message.trim()
    if (trimmed && !disabled) {
      onSend(trimmed)
      setMessage('')
    }
  }

  return (
    <div className="p-4 bg-black/30 border-t border-white/10">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu consulta aquí..."
          disabled={disabled}
          className={cn(
            'flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3',
            'text-white placeholder:text-white/50 font-body',
            'focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20',
            'transition-all duration-200',
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        />
        <button
          type="submit"
          disabled={disabled || !message.trim()}
          className={cn(
            'px-4 bg-primary/30 border border-primary/50 rounded-lg',
            'text-white transition-all duration-200',
            'hover:bg-primary/50 hover:scale-105',
            'focus:outline-none focus:ring-2 focus:ring-primary/30',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
          )}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </form>
    </div>
  )
}
