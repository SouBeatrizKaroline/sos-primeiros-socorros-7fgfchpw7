import { Link } from 'react-router-dom'
import { PhoneCall, HeartPulse, AlertTriangle } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export function Footer() {
  const { setEmergencyNumbersOpen } = useApp()

  return (
    <footer className="border-t bg-stone-900 text-stone-200 mt-auto">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="bg-red-950/80 border border-red-700 rounded-2xl p-4 sm:p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-3 rounded-xl text-white shrink-0">
              <PhoneCall className="h-6 w-6 animate-bounce" />
            </div>
            <div>
              <p className="font-bold text-lg text-white">
                Em caso de emergência grave, ligue imediatamente!
              </p>
              <p className="text-stone-300 text-sm">
                SAMU 192 (Ambulância) ou Corpo de Bombeiros 193 (Resgate)
              </p>
            </div>
          </div>
          <button
            onClick={() => setEmergencyNumbersOpen(true)}
            className="w-full md:w-auto bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shrink-0"
          >
            Discagem Rápida 192 / 193
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">
          <div>
            <h3 className="font-bold text-base text-white mb-3 flex items-center gap-2">
              <HeartPulse className="h-4 w-4 text-red-500" /> SOS Primeiros Socorros
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Plataforma offline, simples e guiada por voz para auxílio rápido nos primeiros minutos
              de uma emergência.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base text-white mb-3">Protocolos Críticos</h3>
            <ul className="space-y-2 text-stone-300">
              <li>
                <Link to="/emergencia/engasgo" className="hover:text-red-400 transition-colors">
                  😮 Engasgo e Asfixia
                </Link>
              </li>
              <li>
                <Link
                  to="/emergencia/parada-cardiaca"
                  className="hover:text-red-400 transition-colors"
                >
                  ❤️ Parada Cardíaca (RCP)
                </Link>
              </li>
              <li>
                <Link to="/emergencia/sangramento" className="hover:text-red-400 transition-colors">
                  🩸 Sangramento Intenso
                </Link>
              </li>
              <li>
                <Link to="/emergencia/queimadura" className="hover:text-red-400 transition-colors">
                  🔥 Queimaduras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base text-white mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" /> Aviso Legal Importante
            </h3>
            <p className="text-stone-400 leading-relaxed text-xs">
              Este aplicativo é um guia instrutivo suplementar para leigos em emergências. Não
              substitui treinamento profissional, diagnóstico nem atendimento do SAMU ou Corpo de
              Bombeiros.
            </p>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 text-center text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} SOS Primeiros Socorros. Acesso Livre e Gratuito.</span>
          <span>Instalação PWA Offline Habilitada</span>
        </div>
      </div>
    </footer>
  )
}
