import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  PhoneCall,
  CheckCircle,
  AlertTriangle,
  ShieldAlert,
  XCircle,
} from 'lucide-react'
import { PROTOCOLS } from '@/data/protocols'
import { Button } from '@/components/ui/button'
import { VoiceAssistantBar } from '@/components/VoiceAssistantBar'
import { ProtocolIllustration } from '@/components/ProtocolIllustration'
import { useVibration } from '@/hooks/use-vibration'
import { useSpeech } from '@/hooks/use-speech'
import { useApp } from '@/context/AppContext'
import { cn } from '@/lib/utils'

export default function ProtocolPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { setEmergencyNumbersOpen, readAloud, emergencyMode } = useApp()
  const { vibrate } = useVibration()
  const { speak } = useSpeech()

  const protocol = id ? PROTOCOLS[id] : null

  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [history, setHistory] = useState<number[]>([])
  const [showFailedTip, setShowFailedTip] = useState(false)
  const [completed, setCompleted] = useState(false)
  const welcomedRef = useRef(false)

  useEffect(() => {
    welcomedRef.current = true
  }, [])

  useEffect(() => {
    if (emergencyMode) vibrate([100, 50, 100])
  }, [currentStepIndex, emergencyMode, vibrate])

  if (!protocol) {
    return (
      <div className="container mx-auto max-w-md py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Protocolo não encontrado.</h2>
        <Link to="/" className="text-red-600 font-bold underline">
          Voltar para a lista de emergências
        </Link>
      </div>
    )
  }

  const currentStep = protocol.steps[currentStepIndex]
  const isFinalStep = currentStep.isFinal || currentStepIndex === protocol.steps.length - 1
  const speechText = currentStep.speechText || currentStep.mainInstruction
  const fullSpeechText = welcomedRef.current
    ? speechText
    : `Estou aqui com você. Vamos fazer uma etapa de cada vez. ${speechText}`

  const handleNext = (targetStepId?: number) => {
    vibrate(60)
    setShowFailedTip(false)
    setHistory((prev) => [...prev, currentStepIndex])
    if (typeof targetStepId === 'number') {
      const idx = protocol.steps.findIndex((s) => s.id === targetStepId)
      if (idx >= 0) setCurrentStepIndex(idx)
    } else if (!isFinalStep) {
      setCurrentStepIndex((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    vibrate(40)
    setShowFailedTip(false)
    setCompleted(false)
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory((h) => h.slice(0, -1))
      setCurrentStepIndex(prev)
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1)
    } else {
      navigate('/')
    }
  }

  const handleFailed = () => {
    vibrate(40)
    setShowFailedTip(true)
    speak(
      'Não se preocupe. Respire fundo e tente novamente com calma. Se não conseguir, ligue 192.',
    )
  }

  const handleComplete = () => {
    vibrate(100)
    setCompleted(true)
    speak(
      'Você fez o que era possível. Mantenha a calma e continue monitorando a pessoa até a chegada da equipe de resgate.',
    )
  }

  return (
    <div className="pb-32 pt-4">
      <div className={cn('container mx-auto max-w-3xl px-4 mb-4', completed && 'hidden')}>
        <div className="flex items-center justify-between mb-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="font-bold text-stone-600 hover:text-stone-900 gap-1 pl-0"
            aria-label="Voltar ao passo anterior"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Button>
          <span className="text-xs font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
            Passo {currentStepIndex + 1} de {protocol.steps.length}
          </span>
        </div>

        <div className="bg-red-600 text-white p-3.5 rounded-2xl shadow-sm flex items-center justify-between gap-3 font-bold text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 shrink-0 animate-bounce" />
            <span>{protocol.initialAlert}</span>
          </div>
          <button
            onClick={() => setEmergencyNumbersOpen(true)}
            className="bg-white text-red-700 px-3 py-1 rounded-lg text-xs font-extrabold hover:bg-stone-100 shrink-0"
          >
            192 / 193
          </button>
        </div>
      </div>

      <main className="container mx-auto max-w-3xl px-4">
        <div
          className={cn(
            'bg-card border-2 border-stone-200 rounded-3xl p-6 sm:p-8 shadow-lg',
            completed && 'hidden',
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl sm:text-4xl" role="img" aria-label={protocol.title}>
              {protocol.emoji}
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                {currentStep.title}
              </h1>
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                {protocol.title}
              </p>
            </div>
          </div>

          <div className="my-6">
            <ProtocolIllustration type={currentStep.illustrationType} />
          </div>

          <div className="bg-stone-50 border-l-4 border-red-600 p-4 sm:p-5 rounded-r-2xl mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
              {currentStep.mainInstruction}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-6 font-medium">
            {currentStep.detailedText}
          </p>

          {currentStep.warningNote && (
            <div className="bg-amber-50 border border-amber-300 text-amber-900 p-3.5 rounded-xl text-sm font-semibold mb-6 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <span>{currentStep.warningNote}</span>
            </div>
          )}

          {showFailedTip && (
            <div className="bg-orange-50 border border-orange-300 text-orange-900 p-3.5 rounded-xl text-sm font-semibold mb-6 flex items-start gap-2">
              <XCircle className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <p>Não se preocupe. Respire fundo e tente novamente com calma.</p>
                <p className="mt-1">
                  Se não conseguir realizar a ação, ligue imediatamente para o SAMU: 192.
                </p>
              </div>
            </div>
          )}

          {currentStep.choices ? (
            <div className="space-y-3 my-6">
              <p className="text-sm font-bold text-stone-500 uppercase tracking-wider text-center">
                Escolha uma opção para continuar:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStep.choices.map((choice, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleNext(choice.nextStepId)}
                    className={cn(
                      'h-16 font-extrabold text-base rounded-2xl shadow-md border-2 whitespace-normal text-left px-4',
                      choice.variant === 'destructive'
                        ? 'border-red-600 bg-white text-red-700 hover:bg-red-50'
                        : 'border-green-600 bg-white text-green-700 hover:bg-green-50',
                    )}
                  >
                    {choice.text}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => (isFinalStep ? handleComplete() : handleNext())}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black h-14 text-lg rounded-2xl shadow-lg"
              >
                {isFinalStep ? 'Concluir Orientações' : '✅ Consegui - Próximo Passo →'}
              </Button>
              <Button
                onClick={handleFailed}
                variant="outline"
                className="sm:w-auto bg-white border-2 border-orange-400 text-orange-700 hover:bg-orange-50 font-bold h-14 rounded-2xl"
              >
                <XCircle className="h-5 w-5 mr-2" /> Não Consegui
              </Button>
            </div>
          )}
        </div>

        {(isFinalStep || completed) && (
          <div className="mt-8 bg-stone-900 text-white p-6 rounded-3xl text-center space-y-4 animate-fade-in-up">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
            <h3 className="text-2xl font-bold">Você fez o que era possível!</h3>
            <p className="text-stone-300 text-sm max-w-md mx-auto">
              Mantenha a calma e continue monitorando a pessoa até a chegada da equipe de resgate.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button
                onClick={() => setEmergencyNumbersOpen(true)}
                className="bg-red-600 hover:bg-red-700 font-bold gap-2"
              >
                <PhoneCall className="h-4 w-4" /> Ligue 192 (SAMU)
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="bg-stone-800 text-white hover:bg-stone-700 border-stone-700 font-bold"
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        )}
      </main>

      {!completed && (
        <VoiceAssistantBar
          currentText={fullSpeechText}
          onNext={() => handleNext()}
          onBack={handleBack}
          onRepeat={() => {}}
          onFailed={handleFailed}
        />
      )}
    </div>
  )
}
