import { useState } from 'react'
import { Download, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/context/AppContext'

export function PwaInstallBanner() {
  const { pwaInstallPrompt, installPwa } = useApp()
  const [dismissed, setDismissed] = useState(false)

  if (!pwaInstallPrompt || dismissed) return null

  return (
    <div className="bg-stone-900 text-white border-b border-stone-800 px-4 py-2.5">
      <div className="container mx-auto max-w-6xl flex items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Download className="h-4 w-4 text-red-500 animate-bounce shrink-0" />
          <span>
            <strong>Instale o SOS Primeiros Socorros</strong> para usar totalmente offline sem
            internet.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            onClick={installPwa}
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white font-bold h-7 px-3 text-xs rounded-lg"
          >
            Instalar
          </Button>
          <button
            onClick={() => setDismissed(true)}
            className="text-stone-400 hover:text-white p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
