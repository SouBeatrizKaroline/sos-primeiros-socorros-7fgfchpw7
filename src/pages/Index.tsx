import { Link } from 'react-router-dom'
import { Volume2, ZoomIn, Globe, ArrowRight, WifiOff, ShieldAlert } from 'lucide-react'
import { PROTOCOLS, CARD_ORDER } from '@/data/protocols'
import { Button } from '@/components/ui/button'
import { PwaInstallBanner } from '@/components/PwaInstallBanner'
import { useApp } from '@/context/AppContext'
import { useSpeech } from '@/hooks/use-speech'

export default function Index() {
  const { setIdentificationOpen, largeText, setLargeText, readAloud, setReadAloud } = useApp()
  const { speak } = useSpeech()

  const handleReadPageTitle = () => {
    speak(
      'Estou aqui para ajudar. O que está acontecendo? Fique calmo. Eu vou te guiar passo a passo.',
    )
  }

  return (
    <div className="pb-16">
      <PwaInstallBanner />

      <section className="bg-gradient-to-b from-red-50/80 via-background to-background pt-8 pb-10 border-b border-red-100">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold mb-4 shadow-sm">
            <WifiOff className="h-3.5 w-3.5" /> Funciona 100% Offline e Sem Login
          </div>

          <h1 className="text-5xl sm:text-6xl font-black text-stone-900 tracking-tight mb-1">
            PULSO
          </h1>
          <p className="text-sm sm:text-base font-bold text-red-600 uppercase tracking-widest mb-4">
            Primeiros Socorros Inteligentes
          </p>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed mb-2">
            Quando cada segundo importa, o Pulso guia o primeiro cuidado.
          </p>

          <div className="mt-6 mb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2">
              ⏱️ PRIMEIRO MINUTO
            </h2>
            <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto font-semibold">
              Estou aqui para ajudar. O que está acontecendo?
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReadPageTitle}
              className="rounded-full text-xs font-bold gap-1.5 bg-white shadow-sm"
              aria-label={
                readAloud ? 'Desativar leitura em voz alta' : 'Ativar leitura em voz alta'
              }
            >
              <Volume2 className="h-3.5 w-3.5 text-red-600" />
              {readAloud ? '🔊 Voz Ativa' : 'Ativar Voz'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLargeText(!largeText)}
              className={cn(
                'rounded-full text-xs font-bold gap-1.5 bg-white shadow-sm',
                largeText ? 'ring-2 ring-red-500' : '',
              )}
              aria-label="Alternar texto grande"
            >
              <ZoomIn className="h-3.5 w-3.5 text-red-600" />
              Texto Grande
            </Button>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold border">
              <Globe className="h-3.5 w-3.5 text-stone-500" /> pt-BR
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-8" aria-label="Lista de emergências">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CARD_ORDER.map((protocolId) => {
            const p = PROTOCOLS[protocolId]
            if (!p) return null
            return (
              <Link
                key={p.id}
                to={`/emergencia/${p.id}`}
                className="group relative bg-card hover:bg-red-50/50 border-2 border-stone-200 hover:border-red-500 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between active:scale-98 focus:outline-none focus:ring-4 focus:ring-red-200"
                aria-label={`Abrir protocolo: ${p.title}`}
              >
                {p.urgencyLevel === 'critica' && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Urgente
                  </span>
                )}
                <div>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100/80 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform shadow-inner">
                    {p.emoji}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-red-700 leading-snug mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {p.summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                  Ver Passos <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </Link>
            )
          })}

          <button
            onClick={() => setIdentificationOpen(true)}
            className="group bg-gradient-to-br from-amber-500 to-red-600 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between text-left active:scale-98 focus:outline-none focus:ring-4 focus:ring-amber-300"
            aria-label="Não sei identificar - iniciar diagnóstico"
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">
                ❓
              </div>
              <h3 className="font-black text-lg sm:text-xl text-white mb-1">Não sei identificar</h3>
              <p className="text-xs text-amber-100 leading-relaxed font-medium">
                Responda a 4 perguntas rápidas para encontrarmos o protocolo certo.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold text-white bg-black/20 px-3 py-1.5 rounded-xl w-fit">
              Iniciar Diagnóstico <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </div>
          </button>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-4 py-6">
        <div className="bg-stone-100 border border-stone-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-stone-500 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
            <strong>Aviso:</strong> A plataforma PULSO não substitui profissionais de saúde,
            diagnósticos ou serviços de emergência. Em caso de gravidade, ligue imediatamente para o
            SAMU (192) ou Bombeiros (193).
          </p>
        </div>
      </section>
    </div>
  )
}
