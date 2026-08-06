import { Link } from 'react-router-dom'
import { ShieldAlert, Phone, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/context/AppContext'

export function Header() {
  const { emergencyMode, toggleEmergencyMode, setEmergencyNumbersOpen } = useApp()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-colors">
      <div className="container mx-auto max-w-6xl px-4 py-2.5 flex items-center justify-between gap-2">
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
          aria-label="PULSO - Página inicial"
        >
          <div className="bg-red-600 text-white p-2 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Activity className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-foreground">
              PULSO
            </span>
            <span className="hidden md:block text-xs text-muted-foreground font-medium">
              Primeiros Socorros Inteligentes
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setEmergencyNumbersOpen(true)}
            className="hidden sm:inline-flex border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 font-semibold gap-1.5"
            aria-label="Ligar para SAMU 192 ou Bombeiros 193"
          >
            <Phone className="h-4 w-4 fill-current text-red-600" />
            Ligar 192/193
          </Button>

          <Button
            onClick={toggleEmergencyMode}
            variant={emergencyMode ? 'default' : 'destructive'}
            size="default"
            className={cn(
              'font-bold gap-2 px-4 shadow-md transition-all duration-300',
              emergencyMode
                ? 'bg-yellow-400 text-black hover:bg-yellow-500 ring-4 ring-yellow-200'
                : 'bg-red-600 hover:bg-red-700 text-white animate-pulse',
            )}
            aria-pressed={emergencyMode}
            aria-label={emergencyMode ? 'Sair do modo emergência' : 'Ativar modo emergência'}
          >
            <ShieldAlert className="h-5 w-5" />
            <span className="hidden xs:inline">
              {emergencyMode ? 'Modo Normal' : 'Modo Emergência'}
            </span>
            <span className="xs:hidden">🚨 SOS</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
