import { Phone, ShieldAlert, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useApp } from '@/context/AppContext'

export function EmergencyNumbersModal() {
  const { emergencyNumbersOpen, setEmergencyNumbersOpen } = useApp()

  return (
    <Dialog open={emergencyNumbersOpen} onOpenChange={setEmergencyNumbersOpen}>
      <DialogContent className="sm:max-w-md border-2 border-red-600 bg-stone-950 text-white rounded-2xl">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-stone-800 pb-4">
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-red-500">
            <ShieldAlert className="h-6 w-6 animate-pulse" />
            Telefones de Emergência
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-sm text-stone-300 font-medium text-center">
            Toque nos botões abaixo para discar imediatamente no seu celular:
          </p>

          <a
            href="tel:192"
            className="flex items-center justify-between bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl shadow-lg font-bold text-lg transition-transform active:scale-95 border border-red-400"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-7 w-7 animate-bounce" />
              <div className="text-left">
                <div className="text-2xl font-black">192</div>
                <div className="text-xs font-semibold text-red-100 uppercase tracking-wider">
                  SAMU (Ambulância Médico)
                </div>
              </div>
            </div>
            <span className="bg-white text-red-700 px-3 py-1 rounded-lg text-sm">LIGAR</span>
          </a>

          <a
            href="tel:193"
            className="flex items-center justify-between bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-xl shadow-lg font-bold text-lg transition-transform active:scale-95 border border-amber-400"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-7 w-7" />
              <div className="text-left">
                <div className="text-2xl font-black">193</div>
                <div className="text-xs font-semibold text-amber-100 uppercase tracking-wider">
                  BOMBEIROS (Resgate / Trauma)
                </div>
              </div>
            </div>
            <span className="bg-white text-amber-800 px-3 py-1 rounded-lg text-sm">LIGAR</span>
          </a>

          <a
            href="tel:190"
            className="flex items-center justify-between bg-stone-800 hover:bg-stone-700 text-stone-200 p-3 rounded-xl font-bold transition-transform active:scale-95 border border-stone-700"
          >
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <div className="text-lg">190</div>
                <div className="text-xs text-stone-400">Polícia Militar</div>
              </div>
            </div>
            <span className="bg-stone-700 text-stone-200 px-3 py-1 rounded-lg text-xs">LIGAR</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
