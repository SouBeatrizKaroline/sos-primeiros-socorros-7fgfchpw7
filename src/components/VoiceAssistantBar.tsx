import { useEffect } from 'react'
import {
  Mic,
  MicOff,
  RotateCcw,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  XCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { useApp } from '@/context/AppContext'
import { cn } from '@/lib/utils'

interface VoiceAssistantBarProps {
  currentText: string
  onNext: () => void
  onBack: () => void
  onRepeat: () => void
  onFailed?: () => void
  speak: (text: string, rate?: number) => void
  isSpeaking: boolean
  stopSpeaking: () => void
  startListening: (onCommand?: (cmd: string) => void) => void
  stopListening: () => void
  isListening: boolean
  isRecognitionSupported: boolean
}

export function VoiceAssistantBar({
  currentText,
  onNext,
  onBack,
  onRepeat,
  onFailed,
  speak,
  isSpeaking,
  stopSpeaking,
  startListening,
  stopListening,
  isListening,
  isRecognitionSupported,
}: VoiceAssistantBarProps) {
  const { setEmergencyNumbersOpen, readAloud, setReadAloud } = useApp()

  useEffect(() => {
    if (readAloud && currentText) {
      speak(currentText)
    } else if (!readAloud) {
      stopSpeaking()
    }
  }, [currentText, readAloud, speak, stopSpeaking])

  const toggleVoiceMode = () => {
    if (isListening) {
      stopListening()
      toast({ description: 'Modo de voz desativado.' })
      return
    }
    if (!isRecognitionSupported) {
      toast({
        title: 'Reconhecimento de voz não suportado',
        description: 'Use os botões na tela para navegar pelos passos.',
      })
      return
    }
    startListening((cmd) => {
      if (cmd === 'next') onNext()
      if (cmd === 'repeat') {
        onRepeat()
        speak(currentText)
      }
      if (cmd === 'back') onBack()
      if (cmd === 'failed') onFailed?.()
      if (cmd === 'help') setEmergencyNumbersOpen(true)
    })
    toast({
      title: '🔊 Pulso Voz Ativo',
      description:
        'Diga "Próximo passo", "Repita", "Voltar", "Não consegui" ou "Preciso de ajuda".',
    })
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 bg-stone-900/95 text-white border-t border-stone-800 p-3 backdrop-blur shadow-2xl"
      role="region"
      aria-label="Barra do assistente de voz"
    >
      <div className="container mx-auto max-w-4xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setReadAloud(!readAloud)}
            variant="ghost"
            size="sm"
            className={cn(
              'rounded-xl transition-all p-2',
              readAloud
                ? 'text-yellow-400 hover:text-yellow-300'
                : 'text-stone-500 hover:text-stone-400',
            )}
            aria-label={readAloud ? 'Desativar voz' : 'Ativar voz'}
          >
            {readAloud ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>

          <Button
            onClick={toggleVoiceMode}
            variant={isListening ? 'default' : 'secondary'}
            size="sm"
            className={cn(
              'font-bold gap-2 rounded-xl transition-all',
              isListening
                ? 'bg-red-600 hover:bg-red-700 text-white ring-4 ring-red-500/30'
                : 'bg-stone-800 text-stone-200 hover:bg-stone-700',
            )}
            aria-label={isListening ? 'Desativar comando de voz' : 'Ativar comando de voz'}
          >
            {isListening ? (
              <>
                <Mic className="h-4 w-4 animate-pulse text-yellow-300" />
                <span className="hidden sm:inline">Voz Ativa</span>
              </>
            ) : (
              <>
                <MicOff className="h-4 w-4 text-stone-400" />
                <span className="hidden sm:inline">Comando de Voz</span>
              </>
            )}
          </Button>

          {isListening && (
            <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-300 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Diga: "Próximo" | "Repita" | "Voltar" | "Não consegui" | "Ajuda"
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-stone-300 hover:text-white hover:bg-stone-800 font-semibold"
            aria-label="Voltar ao passo anterior"
          >
            <SkipBack className="h-4 w-4 sm:mr-1" />
            <span className="hidden xs:inline">Voltar</span>
          </Button>

          <Button
            onClick={() => {
              onRepeat()
              speak(currentText)
            }}
            variant="ghost"
            size="sm"
            className={cn(
              'text-stone-300 hover:text-white hover:bg-stone-800 font-semibold',
              isSpeaking ? 'text-yellow-400 animate-pulse' : '',
            )}
            aria-label="Repetir orientação"
          >
            <RotateCcw className="h-4 w-4 sm:mr-1" />
            <span className="hidden xs:inline">🔁 Repetir</span>
          </Button>

          {onFailed && (
            <Button
              onClick={onFailed}
              variant="ghost"
              size="sm"
              className="text-orange-400 hover:text-orange-300 hover:bg-stone-800 font-semibold"
              aria-label="Marcar como não conseguido"
            >
              <XCircle className="h-4 w-4 sm:mr-1" />
              <span className="hidden xs:inline">Não Consegui</span>
            </Button>
          )}

          <Button
            onClick={onNext}
            variant="default"
            size="sm"
            className="bg-red-600 hover:bg-red-500 text-white font-bold gap-1 rounded-lg px-3 sm:px-4"
            aria-label="Próximo passo"
          >
            <span className="hidden xs:inline">Próximo</span>
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
