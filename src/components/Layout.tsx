import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EmergencyNumbersModal } from '@/components/EmergencyNumbersModal'
import { IdentificationModal } from '@/components/IdentificationModal'
import { AppProvider, useApp } from '@/context/AppContext'
import { Button } from '@/components/ui/button'
import { ShieldAlert } from 'lucide-react'

function LayoutContent() {
  const { emergencyMode, toggleEmergencyMode } = useApp()

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <EmergencyNumbersModal />
      <IdentificationModal />

      {emergencyMode && (
        <Button
          onClick={toggleEmergencyMode}
          className="fixed bottom-20 right-4 z-50 bg-yellow-400 text-black hover:bg-yellow-500 font-extrabold shadow-2xl border-2 border-black rounded-full px-5 py-6 gap-2 text-base"
        >
          <ShieldAlert className="h-6 w-6" /> Sair do Modo Emergência
        </Button>
      )}
    </div>
  )
}

export default function Layout() {
  return (
    <AppProvider>
      <LayoutContent />
    </AppProvider>
  )
}
