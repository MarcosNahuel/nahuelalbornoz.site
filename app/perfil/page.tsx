import Image from 'next/image'
import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'

export const metadata = {
  title: 'Perfil Profesional',
  description: 'AI Generative Engineer especializado en Agentic Systems.',
}

export default function PerfilPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen pb-28">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 pt-16 pb-12 pl-16 pr-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              Perfil Profesional
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              AI Generative Engineer
            </h1>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Profile Image */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <Image
                  src="/images/pic01.png"
                  alt="Nahuel Albornoz"
                  width={256}
                  height={320}
                  className="rounded-2xl border border-white/10 shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex-1 space-y-8">
              {/* Intro Block */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-lg text-white/90 leading-relaxed">
                  Construyo <strong className="text-white">sistemas agentic</strong>: asistentes y automatizaciones que conectan LLMs con datos y herramientas para ejecutar procesos reales con trazabilidad, métricas y handoff humano.
                </p>
              </div>

              {/* Narrative */}
              <div className="space-y-5 text-white/65 leading-relaxed text-sm">
                <p>
                  Mi recorrido no empezó en "IA". Empezó donde se aprende lo que de verdad importa: <strong className="text-white">control, consistencia y decisión</strong>. Mi base en Ciencias Económicas me dio criterio para entender presupuesto, riesgos, procesos y cómo se rompe una organización cuando nadie mide bien.
                </p>
                <p>
                  El siguiente salto fue inevitable: transformar control en sistemas. Ahí entró <strong className="text-white">Business Intelligence</strong> como disciplina. Me especialicé en <span className="text-white/80">Power BI con DAX avanzado</span> y Looker Studio para reporting ejecutivo.
                </p>
                <p>
                  Después fui por la capa de <strong className="text-white">ingeniería de datos</strong>: SQL y Python para automatización, pipelines y análisis reproducible.
                </p>
                <p>
                  Hoy esa evolución converge en mi foco principal: <strong className="text-white">Agentic Systems</strong>. Integro <span className="text-white/80">n8n + LangChain</span> para orquestar flujos end-to-end con herramientas, memoria, routing y RAG.
                </p>
              </div>

              {/* Current Projects */}
              <div>
                <h3 className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4">
                  Frentes Actuales
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                    <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">
                      Strategic CTO
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">TraidAgency</h4>
                    <p className="text-sm text-white/50 mt-2">
                      Arquitectura de soluciones Agentic AI + automatización para procesos de negocio.
                    </p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                    <span className="text-[10px] font-medium text-white/50 uppercase tracking-wider">
                      Founder
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">PymeInside</h4>
                    <p className="text-sm text-white/50 mt-2">
                      Business Intelligence y Data Analytics para control de gestión.
                    </p>
                  </div>
                </div>
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
