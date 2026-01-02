'use client'

import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

const STATS = [
  { label: 'STACK', value: 'n8n / LangChain / RAG' },
  { label: 'FOCUS', value: 'Automation + LLMs' },
  { label: 'MODE', value: 'Building systems' },
]

const SOCIAL_LINKS = [
  { href: SITE_CONFIG.linkedin, label: 'LI' },
  { href: SITE_CONFIG.github, label: 'GH' },
  { href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, '')}`, label: 'WA' },
]

export function BrutalistHero() {
  return (
    <section className="min-h-screen flex flex-col justify-between p-6 md:p-12 lg:p-16">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        {/* Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-none">
            NAHUEL
            <span className="text-accent animate-blink">_</span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-none text-text-muted">
            ALBORNOZ
            <span className="text-border-strong">_______</span>
          </h1>
        </div>

        {/* Terminal Lines */}
        <div className="space-y-2 mb-12 text-sm md:text-base">
          <p className="terminal-line text-text">AI Generative Engineer</p>
          <p className="terminal-line text-text-muted">Building Agentic Systems</p>
        </div>

        {/* Stats Box */}
        <div className="brutalist-box max-w-md mb-12">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`flex gap-6 py-2 ${i !== STATS.length - 1 ? 'border-b border-border' : ''}`}>
              <span className="text-text-muted w-16 shrink-0">{stat.label}</span>
              <span className="text-text">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mb-8">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-text-muted">2024</span>
            <div className="flex-1 flex">
              <span className="text-accent">{'█'.repeat(14)}</span>
              <span className="text-border-strong">{'░'.repeat(6)}</span>
            </div>
            <span className="text-accent">72% AI</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
        {/* Social Links */}
        <div className="flex gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="brutalist-hover px-3 py-2 border border-border-strong text-sm font-bold"
            >
              [{link.label}]
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className="text-sm text-text-muted">
          MENDOZA, ARG
        </div>
      </footer>

      {/* Grid decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(var(--color-text) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </section>
  )
}
