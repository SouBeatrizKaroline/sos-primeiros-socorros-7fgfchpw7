import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Volume2, ZoomIn, Globe, ShieldAlert, ArrowRight, WifiOff } from 'lucide-react'
import { PROTOCOLS } from '@/data/protocols'
import { Button } from '@/components/ui/button'
import { PwaInstallBanner } from '@/components/PwaInstallBanner'
import { useApp } from '@/context/AppContext'
import { useSpeech } from '@/hooks/use-speech'

export default function Index() {
  const { setIdentificationOpen, largeText, setLargeText, readAloud, setReadAloud } = useApp()
  const { speak } = useSpeech()

  const handleReadPageTitle = () => {
    speak('Qual situação está acontecendo? Fique calmo. Eu vou te guiar passo a passo.')
  }

  return (
    <div className="pb-16">
      <PwaInstallBanner />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50/80 via-background to-background pt-8 pb-10 border-b border-red-100">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold mb-4 shadow-sm">
            <WifiOff className="h-3.5 w-3.5" /> Funciona 100% Offline e Sem Login
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-4">
            Qual situação está acontecendo?
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Fique calmo. Eu vou te guiar, <strong className="text-red-600">passo a passo</strong>,
            até a chegada do atendimento profissional.
          </p>

          {/* Quick Accessibility Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReadPageTitle}
              className="rounded-full text-xs font-bold gap-1.5 bg-white shadow-sm"
            >
              <Volume2 className="h-3.5 w-3.5 text-red-600" />
              {readAloud ? '🔊 Ler em Voz Alta' : 'Mudo'}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLargeText(!largeText)}
              className={`rounded-full text-xs font-bold gap-1.5 bg-white shadow-sm ${
                largeText ? 'ring-2 ring-red-500' : ''
              }`}
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

      {/* Protocols Grid Section */}
      <section className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {Object.values(PROTOCOLS).map((p) => {
            if (p.id === 'identificar') return null

            return (
              <Link
                key={p.id}
                to={`/emergencia/${p.id}`}
                className="group relative bg-card hover:bg-red-50/50 border-2 border-stone-200 hover:border-red-500 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between active:scale-98 focus:outline-none focus:ring-4 focus:ring-red-200"
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

          {/* Special "Não sei identificar" Card */}
          <button
            onClick={() => setIdentificationOpen(true)}
            className="group bg-gradient-to-br from-amber-500 to-red-600 text-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between text-left active:scale-98 focus:outline-none focus:ring-4 focus:ring-amber-300"
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform">
                ❓
              </div>
              <h3 className="font-black text-lg sm:text-xl text-white mb-1">Não Sei Identificar</h3>
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
    </div>
  )
}
