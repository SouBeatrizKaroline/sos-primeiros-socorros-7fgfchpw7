import { useEffect } from 'react'
import { Mic, MicOff, RotateCcw, SkipBack, SkipForward, PhoneCall, Volume2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSpeech } from '@/hooks/use-speech'
import { toast } from '@/hooks/use-toast'
import { useApp } from '@/context/AppContext'

interface VoiceAssistantBarProps {
  currentText: string
  onNext: () => void
  onBack: () => void
  onRepeat: () => void
}

export function VoiceAssistantBar({
  currentText,
  onNext,
  onBack,
  onRepeat,
}: VoiceAssistantBarProps) {
  const { speak, isSpeaking, startListening, stopListening, isListening } = useSpeech()
  const { setEmergencyNumbersOpen, readAloud } = useApp()

  useEffect(() => {
    if (readAloud && currentText) {
      speak(currentText)
    }
  }, [currentText, readAloud, speak])

  const toggleVoiceMode = () => {
    if (isListening) {
      stopListening()
      toast({ description: 'Modo de voz desativado.' })
    } else {
      startListening((cmd) => {
        if (cmd === 'next') onNext()
        if (cmd === 'repeat') {
          onRepeat()
          speak(currentText)
        }
        if (cmd === 'back') onBack()
        if (cmd === 'help') setEmergencyNumbersOpen(true)
      })
      toast({
        title: '🔊 Assistente de Voz Ativo',
        description: 'Diga "Próximo passo", "Repita" ou "Voltar" a qualquer momento.',
      })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-stone-900/95 text-white border-t border-stone-800 p-3 backdrop-blur shadow-2xl">
      <div className="container mx-auto max-w-4xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <Button
            onClick={toggleVoiceMode}
            variant={isListening ? 'default' : 'secondary'}
            size="sm"
            className={`font-bold gap-2 rounded-xl transition-all ${
              isListening
                ? 'bg-red-600 hover:bg-red-700 text-white ring-4 ring-red-500/30'
                : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
            }`}
          >
            {isListening ? (
              <>
                <Mic className="h-4 w-4 animate-pulse text-yellow-300" />
                <span className="hidden sm:inline">Voz Ativa</span>
              </>
            ) : (
              <>
                <MicOff className="h-4 w-4 text-stone-400" />
                <span className="hidden sm:inline">Ligar Comando de Voz</span>
              </>
            )}
          </Button>

          {isListening && (
            <div className="hidden md:flex items-center gap-1.5 text-xs text-stone-300 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Comando: "Próximo paso" | "Repita" | "Voltar"
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            onClick={onBack}
            variant="ghost"
            size="sm"
            className="text-stone-300 hover:text-white hover:bg-stone-800 font-semibold"
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
            className={`text-stone-300 hover:text-white hover:bg-stone-800 font-semibold ${
              isSpeaking ? 'text-yellow-400 animate-pulse' : ''
            }`}
          >
            <RotateCcw className="h-4 w-4 sm:mr-1" />
            <span className="hidden xs:inline">Repetir</span>
          </Button>

          <Button
            onClick={onNext}
            variant="default"
            size="sm"
            className="bg-red-600 hover:bg-red-500 text-white font-bold gap-1 rounded-lg px-3 sm:px-4"
          >
            <span className="hidden xs:inline">Próximo</span>
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
