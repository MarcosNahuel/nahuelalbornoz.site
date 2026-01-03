'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/constants'
import { GlitchText } from '@/components/effects'
import Keypad3D from './Keypad3D'

const TECH_STACK = [
  {
    name: 'Excel',
    color: '#217346',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z"/>
      </svg>
    )
  },
  {
    name: 'Power BI',
    color: '#F2C811',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z"/>
      </svg>
    )
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    )
  },
  {
    name: 'n8n',
    color: '#EA4B71',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/>
      </svg>
    )
  },
  {
    name: 'Claude Code',
    color: '#CC785C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/>
      </svg>
    )
  },
  {
    name: 'Cursor',
    color: '#00D8FF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/>
      </svg>
    )
  },
  {
    name: 'LangChain',
    color: '#1C3C3C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M17.207 3.064a2.139 2.139 0 0 0-1.522.628l-1.636 1.632a2.143 2.143 0 0 0-.622 1.678l.01.104a2.11 2.11 0 0 0 .612 1.255c.236.235.496.384.811.488.016.095.026.191.026.287 0 .432-.168.838-.474 1.143l-.1.1c-.547-.186-1.003-.459-1.414-.869a3.735 3.735 0 0 1-1.045-1.99l-.018-.105-.083.067a1.993 1.993 0 0 0-.16.144l-1.636 1.632a2.146 2.146 0 0 0 1.522 3.664c.57 0 1.112-.224 1.522-.628l1.637-1.632a2.146 2.146 0 0 0 0-3.036 2.129 2.129 0 0 0-.793-.499 1.763 1.763 0 0 1 .501-1.548 3.732 3.732 0 0 1 1.445.898c.577.577.97 1.302 1.044 1.99l.019.105.083-.067c.056-.045.11-.094.16-.145l1.637-1.632a2.145 2.145 0 0 0-1.522-3.664z"/>
      </svg>
    )
  },
]

const SOCIAL_LINKS = [
  {
    href: SITE_CONFIG.linkedin,
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    href: SITE_CONFIG.github,
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\+/g, '')}`,
    label: 'WhatsApp',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
]

export function TerminalHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-12 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Main grid: Info | Keypad */}
          <div className="grid lg:grid-cols-[1fr_200px] gap-8 lg:gap-12 items-center">

            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 lg:order-1"
            >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
              AI Generative Engineer
            </div>

            {/* Name - with Glitch Effect */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight">
                <GlitchText
                  text="NAHUEL"
                  className="block"
                  glitchInterval={4000}
                  glitchDuration={100}
                />
                <span className="bg-gradient-to-r from-[#555] via-[#888] to-[#555] bg-clip-text text-transparent block">
                  ALBORNOZ
                </span>
              </h1>
            </div>

            {/* Narrative Description */}
            <div className="space-y-4 max-w-xl">
              <p className="text-sm text-white/60 leading-relaxed">
                Mi formación en <span className="text-white bg-white/10 px-2 py-0.5 rounded">Ciencias Económicas</span> me enseñó que el valor está en modelar y medir para decidir. En mi experiencia en la gestión pública, con grandes volúmenes de datos y decisiones de alto impacto presupuestario, confirmé la importancia del rigor, el control y la trazabilidad.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Ese recorrido me llevó por <span className="text-white bg-white/10 px-2 py-0.5 rounded">Business Intelligence</span>, <span className="text-white bg-white/10 px-2 py-0.5 rounded">Data Analytics</span> y <span className="text-white bg-white/10 px-2 py-0.5 rounded">Ciencia de Datos</span> aplicada.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Hoy soy <span className="text-white bg-white/10 px-2 py-0.5 rounded">AI Generative Engineer</span>: diseño sistemas basados en LLMs que transforman insights accionables en procesos automatizados para ventas y operaciones en e-commerce.
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Con desarrollo asistido por IA (agentes de codificación), acelero el delivery sin perder calidad: <span className="text-white/80 font-medium">x10 en iteración y time-to-delivery</span>, con control y trazabilidad.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="pt-4 space-y-4">
              {/* Row 1: Data & BI */}
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Data & BI</div>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.slice(0, 3).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all duration-200 cursor-default"
                    >
                      <span className="text-white/40 group-hover:text-white/70 transition-all group-hover:scale-110">
                        {tech.icon}
                      </span>
                      <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Row 2: AI & Automation */}
              <div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2">AI & Automation</div>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.slice(3).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * (index + 3), duration: 0.3 }}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/10 transition-all duration-200 cursor-default"
                    >
                      <span className="text-white/40 group-hover:text-white/70 transition-all group-hover:scale-110">
                        {tech.icon}
                      </span>
                      <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/40 hover:bg-white/10 hover:text-white/70 transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            </motion.div>

            {/* Right - 3D Keypad */}
            <div className="flex items-center justify-center order-2 lg:order-2 scale-50 lg:scale-60 opacity-60 grayscale">
              <Keypad3D
                onDeployClick={() => {}}
                onBuildClick={() => {}}
                onShipClick={() => {}}
                isLoading={false}
              />
            </div>
          </div>
        </div>

        {/* Location - Bottom */}
        <div className="absolute bottom-24 right-6 text-[10px] text-white/30 font-medium tracking-[0.2em] uppercase">
          Mendoza, Argentina
        </div>

        {/* Year - Top Left */}
        <div className="absolute top-6 left-6 text-[10px] text-white/30 font-medium tracking-[0.2em]">
          2024—25
        </div>
      </div>
    </section>
  )
}
