import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'

export const metadata = {
  title: 'Educación',
  description: 'De economía y gestión a Data/BI, y luego a IA generativa y agentes.',
}

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

          {/* Etapa 1: Formal */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-white/60 uppercase tracking-wider">
                Etapa 1
              </span>
              <h2 className="text-xl font-bold text-white">Educación Formal</h2>
            </div>
            <div className="space-y-4">
              {EDUCATION.formal.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-white/40 w-24 flex-shrink-0">{item.date}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Etapa 2: Data & BI */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-white/60 uppercase tracking-wider">
                Etapa 2
              </span>
              <h2 className="text-xl font-bold text-white">Data & BI</h2>
            </div>
            <p className="text-white/40 text-xs mb-4">Excel, Python, SQL, Power BI, Looker Studio y herramientas de análisis de datos.</p>
            <div className="space-y-3">
              {EDUCATION.dataBI.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-white/40 w-24 flex-shrink-0">{item.date}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Etapa 3: Inteligencia Artificial */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-medium text-white/60 uppercase tracking-wider">
                Etapa 3
              </span>
              <h2 className="text-xl font-bold text-white">Inteligencia Artificial</h2>
            </div>
            <p className="text-white/40 text-xs mb-4">IA aplicada, LLMs, LangChain, n8n, automatización y agentes inteligentes.</p>
            <div className="space-y-3">
              {EDUCATION.ia.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs text-white/40 w-24 flex-shrink-0">{item.date}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-white/50 mt-1">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <BottomNav />
      <WhatsAppWidget />
    </main>
  )
}
