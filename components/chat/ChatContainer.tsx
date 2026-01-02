'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'

interface Message {
  id: string
  content: string
  type: 'user' | 'bot'
}

const N8N_WEBHOOK_URL = 'https://n8ndigi.pymeinside.com/webhook/abbf2946-38a2-45a6-a1c4-649cf8bae9cd'

export function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Puedo ayudarte a explorar y visualizar datos. ¿Te gustaría ver las dimensiones disponibles?',
      type: 'bot',
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: content,
          type: 'chat',
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      let botContent = '❌ Lo siento, ha ocurrido un error al procesar tu consulta.'

      if (Array.isArray(data) && data[0] && data[0].output) {
        botContent = data[0].output
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botContent,
        type: 'bot',
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '❌ Lo siento, ha ocurrido un error al procesar tu consulta.',
        type: 'bot',
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 backdrop-blur-sm overflow-hidden">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} {...message} />
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-muted font-body text-sm">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span>Procesando...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  )
}
