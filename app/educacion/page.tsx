'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'

const EDUCATION = {
  formal: [
    { date: '2000 - 2003', title: 'Polimodal: Economía y Gestión', institution: 'Escuela de Comercio "Martin Zapata" (UNCuyo)' },
    { date: '2004 - 2015', title: 'Contador Público y Perito Partidor', institution: 'Universidad Nacional de Cuyo' },
  ],
  dataBI: [
    { date: '2011', title: 'Excel Intermedio y Avanzado', institution: 'UNCuyo' },
    { date: '2014', title: 'SPSS - Nivel Inicial (20h)', institution: 'UNCuyo' },
    { date: '2015', title: 'Diseño Web Integral (6 meses)', institution: 'Bisiesto' },
    { date: '2020', title: 'Getting Started with Python', institution: 'Universidad de Michigan' },
    { date: 'Oct 2020', title: 'Microsoft Power BI Desktop (9h)', institution: 'Udemy' },
    { date: 'Oct 2022', title: 'Programación Python (300h)', institution: 'Fundación Santísima Trinidad / Gob. Mendoza' },
    { date: '2023', title: 'Inglés Aplicado a las Tecnologías (210h)', institution: 'Polo TIC Mendoza / Gob. Mendoza' },
    { date: 'Sep 2024', title: 'Excel Completo: Principiante a Avanzado (20h)', institution: 'Udemy' },
    { date: 'Sep 2024', title: 'Google Sheets: Dashboards y Macros (7.5h)', institution: 'Udemy' },
    { date: 'Sep 2024', title: 'Introducción a BI y Minería de Datos (3h)', institution: 'Udemy' },
    { date: 'Nov 2024', title: 'SQL y MySQL Completo (34.5h)', institution: 'Udemy' },
    { date: 'Nov 2024', title: 'Power Query: Transformación de Datos (3h)', institution: 'Udemy' },
    { date: 'Nov 2024', title: 'Microsoft Power BI Desktop Completo (24h)', institution: 'Udemy' },
    { date: 'Nov 2024', title: 'Excel y Power BI - Análisis y Visualización (12.5h)', institution: 'Udemy' },
    { date: 'Nov 2024', title: 'Looker Studio 2024 (12.5h)', institution: 'Udemy' },
    { date: '2024', title: 'IBM Data Analyst (Certificación)', institution: 'Guayerd / IBM' },
  ],
  ia: [
    { date: 'Sep 2020', title: 'Power BI Desktop + IA aplicada', institution: 'Coursera' },
    { date: 'Sep 2020', title: 'Inteligencia Artificial en Power BI', institution: 'Coursera Project Network' },
    { date: '2021', title: 'Diplomado en Inteligencia de Datos (279h)', institution: 'FCE - UNCuyo' },
    { date: 'Ene 2025', title: 'LangChain y LLM: Apps de IA en Python (3.5h)', institution: 'Udemy' },
    { date: 'Feb 2025', title: 'AI Automation con n8n & LangChain (4.5h)', institution: 'Udemy' },
    { date: 'Jun 2025', title: 'IA Generativa Claude (3h)', institution: 'Udemy' },
    { date: 'Jun 2025', title: 'n8n: Crea Agentes de IA Sin Programar (8.5h)', institution: 'Udemy' },
    { date: 'Oct 2025', title: 'Bootcamp: Agentes IA Profesionales (44h)', institution: 'Udemy' },
    { date: 'Dic 2025', title: 'Fundamentos de IA', institution: 'IBM SkillsBuild' },
  ],
}

interface CollapsibleSectionProps {
  etapa: string
  title: string
  description?: string
  items: { date: string; title: string; institution: string }[]
  defaultOpen?: boolean
  accentColor: string
}

function CollapsibleSection({ etapa, title, description, items, defaultOpen = false, accentColor }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <section className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all group"
      >
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 ${accentColor} rounded text-[10px] font-medium text-white uppercase tracking-wider`}>
            {etapa}
          </span>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <span className="text-xs text-white/40">({items.length})</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 flex items-center justify-center text-white/40 group-hover:text-white/60"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-4 space-y-3">
              {description && (
                <p className="text-white/40 text-xs mb-4">{description}</p>
              )}
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="flex gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors"
                >
                  <span className="text-xs text-white/40 w-24 flex-shrink-0">{item.date}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{item.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default function EducacionPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-28">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 pt-16 pb-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              Educación
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Formación
            </h1>
            <p className="text-white/50 text-sm max-w-xl">
              De economía y gestión a Data/BI, y luego a aplicaciones con IA generativa, automatización y agentes.
            </p>
          </div>

          {/* Collapsible Sections */}
          <CollapsibleSection
            etapa="Etapa 1"
            title="Educación Formal"
            items={EDUCATION.formal}
            defaultOpen={true}
            accentColor="bg-blue-500/20 border border-blue-500/30"
          />

          <CollapsibleSection
            etapa="Etapa 2"
            title="Data & BI"
            description="Excel, Python, SQL, Power BI, Looker Studio y herramientas de análisis de datos."
            items={EDUCATION.dataBI}
            defaultOpen={false}
            accentColor="bg-amber-500/20 border border-amber-500/30"
          />

          <CollapsibleSection
            etapa="Etapa 3"
            title="Inteligencia Artificial"
            description="IA aplicada, LLMs, LangChain, n8n, automatización y agentes inteligentes."
            items={EDUCATION.ia}
            defaultOpen={true}
            accentColor="bg-emerald-500/20 border border-emerald-500/30"
          />
        </div>
      </div>

      <BottomNav />
      <WhatsAppWidget />
    </main>
  )
}
