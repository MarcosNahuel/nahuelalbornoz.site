import Link from 'next/link'
import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'

export const metadata = {
  title: 'Portfolio',
  description: 'Casos de éxito en automatización, IA y análisis de datos.',
}

const PROJECTS = [
  {
    id: 'rohana',
    title: 'Rohana',
    subtitle: 'Ventas & Conversaciones con IA',
    description: 'Secuencias conversacionales con IA y follow-up multicanal para evitar carritos abandonados y reactivar leads fríos.',
    highlight: { value: '+28%', label: 'Recuperación en 30 días' },
    tags: ['Retail moda', 'WhatsApp + Shopify', 'Automatización post-venta'],
    color: 'from-purple-500/20 to-purple-900/10',
    highlightColor: 'text-green-400',
  },
  {
    id: 'meli-analytics',
    title: 'MELI Analytics',
    subtitle: 'Antes/Después & Postventa IA',
    description: 'Sistema completo de IA para Mercado Libre que automatiza preventa y postventa. Incluye análisis de impacto y workflows de automatización.',
    highlight: { value: '+61%', label: 'Crecimiento en ventas' },
    tags: ['Mercado Libre', 'Automatización IA', 'Workflows n8n'],
    color: 'from-amber-500/20 to-amber-900/10',
    highlightColor: 'text-amber-300',
  },
  {
    id: 'gambimedic',
    title: 'Gambimedic',
    subtitle: 'Dashboard Ejecutivo',
    description: 'Resumen ejecutivo del desempeño del asistente automático en MercadoLibre. Métricas de velocidad, eficiencia y retorno de inversión.',
    highlight: { value: '58x', label: 'Velocidad vs. humano' },
    tags: ['Salud', 'MercadoLibre', 'Bot IA'],
    color: 'from-blue-500/20 to-blue-900/10',
    highlightColor: 'text-blue-300',
  },
  {
    id: 'mundial-shop',
    title: 'Mundial Shop',
    subtitle: 'WhatsApp IA',
    description: 'Agente de WhatsApp IA que automatiza ventas mayoristas en Colombia. Atención 24/7 con crecimiento sobre tendencia.',
    highlight: { value: '+35%', label: 'Crecimiento vs tendencia' },
    tags: ['E-commerce', 'WhatsApp IA', 'Mayorista'],
    color: 'from-emerald-500/20 to-emerald-900/10',
    highlightColor: 'text-emerald-300',
  },
  {
    id: 'huancom',
    title: 'Huancom Group',
    subtitle: 'Energía Solar',
    description: 'Transformación digital en e-commerce. MercadoLíder Silver con +1,000 ventas y 97% de opiniones positivas.',
    highlight: { value: '+47.9%', label: 'Reversión de tendencia' },
    tags: ['Energía Solar', 'MercadoLibre', 'n8n Workflows'],
    color: 'from-yellow-500/20 to-yellow-900/10',
    highlightColor: 'text-yellow-300',
  },
  {
    id: 'natural-vya',
    title: 'NATURAL VyA',
    subtitle: 'Cadena de Suministro',
    description: 'Dashboard interactivo que muestra la eficiencia y optimización de la cadena de suministro.',
    highlight: { value: '+20%', label: 'Reducción de costos' },
    tags: ['Logística', 'Inteligencia Artificial', 'Cadena de Suministro'],
    color: 'from-cyan-500/20 to-cyan-900/10',
    highlightColor: 'text-cyan-400',
  },
  {
    id: 'mikaela',
    title: 'Mikaela Boutique',
    subtitle: 'Bot WhatsApp IA',
    description: 'Boutique de moda femenina que incrementó ventas con bot WhatsApp IA. $8.4M ARS en revenue y +$884K adicionales por automatización.',
    highlight: { value: '+46%', label: 'Crecimiento en ventas' },
    tags: ['Moda', 'WooCommerce', 'WhatsApp Bot IA'],
    color: 'from-pink-500/20 to-pink-900/10',
    highlightColor: 'text-pink-400',
  },
]

export default function PortfolioPage() {
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
              Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
              Casos de Éxito
            </h1>
            <p className="text-white/50 text-sm max-w-xl">
              Proyectos de automatización con IA, agentes conversacionales y análisis de datos que generan impacto real en negocios.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-3 gap-4 mb-10 p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white">20+</span>
              <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">Casos de éxito</p>
            </div>
            <div className="text-center border-x border-white/10">
              <span className="text-2xl md:text-3xl font-bold text-white">2+</span>
              <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">Años en el mercado</p>
            </div>
            <div className="text-center">
              <span className="text-2xl md:text-3xl font-bold text-white">100%</span>
              <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">Garantía de entrega</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href="https://www.traidagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 bg-gradient-to-br ${project.color} border border-white/10 rounded-xl hover:border-white/30 hover:scale-[1.02] transition-all duration-300 group cursor-pointer block`}
              >
                {/* Highlight Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-white/90">{project.title}</h3>
                    <p className="text-xs text-white/50">{project.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xl font-bold ${project.highlightColor}`}>
                      {project.highlight.value}
                    </span>
                    <p className="text-[10px] text-white/40">{project.highlight.label}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View More indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs text-white/40 group-hover:text-white/60 transition-colors">
                  <span>Ver más en TRAID Agency</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-white/[0.03] border border-white/10 rounded-xl text-center">
            <h3 className="text-lg font-bold text-white mb-2">
              ¿Necesitás automatizar tu negocio?
            </h3>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Agentes de IA, automatización con n8n, y dashboards ejecutivos para llevar tu operación al siguiente nivel.
            </p>
            <Link
              href="https://wa.me/5492617131433"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/15 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </Link>
          </div>

          {/* TRAID Attribution */}
          <div className="mt-8 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-wider">
              Casos desarrollados por{' '}
              <Link
                href="https://www.traidagency.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white/70 transition-colors"
              >
                TRAID Agency
              </Link>
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
      <WhatsAppWidget />
    </main>
  )
}
