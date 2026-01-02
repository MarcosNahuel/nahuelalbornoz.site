import { TerminalHero } from '@/components/landing/TerminalHero'
import { BottomNav } from '@/components/layout/BottomNav'
import { WhatsAppWidget } from '@/components/widgets/WhatsAppWidget'

export default function HomePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <TerminalHero />
      <BottomNav />
      <WhatsAppWidget />
    </main>
  )
}
