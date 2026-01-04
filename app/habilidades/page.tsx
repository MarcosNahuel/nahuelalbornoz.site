import Image from 'next/image'
import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'

export const metadata = {
  title: 'Skills',
  description: 'Stack construido en capas, cada etapa habilitando la siguiente.',
}

const SKILLS_DATA = [
  {
    stage: 1,
    title: 'Economía y Gestión',
    description: 'Base formal en Ciencias Económicas. Criterio para presupuesto, riesgos y procesos.',
    skills: ['Análisis Financiero', 'Control de Gestión', 'Presupuesto Público', 'Procesos Organizacionales'],
  },
  {
    stage: 2,
    title: 'Business Intelligence',
    description: 'BI como disciplina. Métricas que se sostienen, modelos que escalan.',
    skills: ['Power BI + DAX Avanzado', 'Looker Studio', 'Modelado Dimensional', 'KPIs & Métricas'],
  },
  {
    stage: 3,
    title: 'Ingeniería de Datos',
    description: 'Automatización, pipelines y análisis reproducible.',
    skills: ['SQL (PostgreSQL/MySQL)', 'Python (Pandas, NumPy)', 'ETL & Pipelines', 'APIs & Integraciones'],
  },
  {
    stage: 4,
    title: 'Data Science',
    description: 'Modelos medidos con métricas y orientados a impacto.',
    skills: ['Machine Learning', 'Modelos Predictivos', 'Segmentación & Clustering', 'Feature Engineering'],
  },
  {
    stage: 5,
    title: 'GenAI & Agentic Systems',
    description: 'Orquestación de flujos end-to-end con LLMs, herramientas y memoria.',
    skills: ['n8n (Orquestación)', 'LangChain', 'RAG', 'Context Engineering', 'MCP', 'Prompt Engineering', 'Supabase', 'Vector DBs'],
  },
]

export default function HabilidadesPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-28">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 pt-16 pb-12 pl-16 pr-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              Skills
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Stack Técnico
            </h1>
            <p className="text-white/50 text-sm max-w-xl">
              Construido en capas, cada etapa habilitando la siguiente. No es un listado de buzzwords: es una evolución con criterio.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left: Skills Timeline */}
            <div className="flex-1">
              <div className="space-y-6">
                {SKILLS_DATA.map((stage) => (
                  <div
                    key={stage.stage}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg text-xs font-bold text-white/60">
                        {stage.stage}
                      </span>
                      <h2 className="text-xl font-bold text-white">{stage.title}</h2>
                    </div>
                    <p className="text-white/50 text-sm mb-4">{stage.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stage.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Complementary */}
              <div className="mt-10 p-6 bg-white/[0.03] border border-white/10 rounded-xl">
                <h3 className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4">
                  Complementarios
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Español (Nativo)', 'Inglés (Técnico)', 'Portugués (Intermedio)', 'Comunicación ejecutiva', 'Documentación técnica', 'Diseño Web básico'].map((item) => (
                    <div key={item} className="text-white/50 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Evolution Infographic */}
            <div className="lg:w-96 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4">
                  Mi Evolución
                </h3>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Image
                    src="/images/evolucion-wave.png"
                    alt="AI Generative Engineer & Data Scientist - Evolución profesional"
                    width={384}
                    height={672}
                    className="relative w-full rounded-2xl border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <p className="text-xs text-white/40 mt-4 text-center">
                  Full Stack: Del análisis a la automatización
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
      <WhatsAppWidget />
    </main>
  )
}
