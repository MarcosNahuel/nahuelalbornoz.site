import { VantaBackground } from '@/components/layout/VantaBackground'
import { BackButton } from '@/components/layout/BackButton'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'
import { Card } from '@/components/ui/Card'
import { ChatContainer } from '@/components/chat/ChatContainer'

export const metadata = {
  title: 'AI Agents',
  description: 'Asistente de Análisis de Datos - Explora y visualiza datos del presupuesto 2025 de la provincia de Mendoza.',
}

export default function AIAgentsPage() {
  return (
    <>
      <VantaBackground />
      <BackButton />

      <main className="relative min-h-screen pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-gradient mb-6">
            AI Agents
          </h1>

          {/* Agent Description */}
          <Card hover={false} className="bg-primary/10 border-primary/30 mb-6">
            <h2 className="text-xl font-display text-white mb-2">
              Asistente de Analisis de Datos
            </h2>
            <p className="text-muted font-body">
              Este asistente te ayudara a explorar y visualizar datos. Puedes consultar las dimensiones disponibles del presupuesto 2025 de la provincia de Mendoza y crear visualizaciones personalizadas.
            </p>
          </Card>

          {/* Chat Interface */}
          <ChatContainer />
        </div>
      </main>

      <WhatsAppWidget />
    </>
  )
}
