'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

interface ChatMessageProps {
  content: string
  type: 'user' | 'bot'
}

export function ChatMessage({ content, type }: ChatMessageProps) {
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (type === 'bot' && messageRef.current) {
      // Simple markdown-like rendering for bot messages
      const processedContent = content
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Code blocks
        .replace(/```([\s\S]*?)```/g, '<pre class="bg-black/30 p-3 rounded-lg overflow-x-auto my-2"><code>$1</code></pre>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-white/10 px-1.5 py-0.5 rounded text-sm">$1</code>')
        // Line breaks
        .replace(/\n/g, '<br/>')

      messageRef.current.innerHTML = processedContent
    }
  }, [content, type])

  return (
    <div
      className={cn(
        'max-w-[85%] p-4 rounded-2xl font-body leading-relaxed shadow-md animate-fadeInUp',
        type === 'user'
          ? 'ml-auto bg-gradient-to-br from-primary to-primary-dark text-white rounded-br-md'
          : 'mr-auto bg-gradient-to-br from-[#2E2E2E] to-[#3D3D3D] text-white/90 rounded-bl-md border border-white/10'
      )}
    >
      {type === 'user' ? (
        <span>{content}</span>
      ) : (
        <div ref={messageRef} className="prose prose-invert prose-sm max-w-none" />
      )}
    </div>
  )
}
