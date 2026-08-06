import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HelpCircle, CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useApp } from '@/context/AppContext'

export function IdentificationModal() {
  const { identificationOpen, setIdentificationOpen } = useApp()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    conscious: null as boolean | null,
    breathing: null as boolean | null,
    choking: null as boolean | null,
    bleeding: null as boolean | null,
  })

  const reset = () => {
    setStep(1)
    setAnswers({ conscious: null, breathing: null, choking: null, bleeding: null })
  }

  const handleClose = () => {
    setIdentificationOpen(false)
    setTimeout(reset, 300)
  }

  const recommendProtocol = () => {
    if (answers.choking)
      return { id: 'engasgo', title: 'Engasgo (Obstrução Respiratória)', emoji: '😮' }
    if (answers.conscious === false && answers.breathing === false)
      return { id: 'parada-cardiaca', title: 'Parada Cardíaca (RCP)', emoji: '❤️' }
    if (answers.breathing === false)
      return { id: 'sem-respirar', title: 'Pessoa Sem Respirar', emoji: '🫁' }
    if (answers.bleeding) return { id: 'sangramento', title: 'Sangramento Intenso', emoji: '🩸' }
    if (answers.conscious === false)
      return { id: 'desmaio', title: 'Desmaio ou Perda de Consciência', emoji: '😵' }
    return { id: 'acidente', title: 'Avaliação Inicial de Acidente', emoji: '🚗' }
  }

  const recommended = recommendProtocol()

  const handleSelectRecommendation = () => {
    handleClose()
    navigate(`/emergencia/${recommended.id}`)
  }

  return (
    <Dialog open={identificationOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2 text-red-600">
            <HelpCircle className="h-6 w-6 text-red-600" />
            Não sei identificar - Diagnóstico Rápido
          </DialogTitle>
        </DialogHeader>

        {step <= 4 ? (
          <div className="space-y-6 py-2">
            <div className="bg-stone-100 p-4 rounded-xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Pergunta {step} de 4
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                {step === 1 && '1. A pessoa está consciente e respondendo quando você a chama?'}
                {step === 2 && '2. A pessoa está respirando (peito sobe e desce)?'}
                {step === 3 && '3. A pessoa dá sinais de engasgo (mãos no pescoço, não fala)?'}
                {step === 4 && '4. Há algum sangramento volumoso ou ferida aberta visível?'}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                onClick={() => {
                  if (step === 1) setAnswers({ ...answers, conscious: true })
                  if (step === 2) setAnswers({ ...answers, breathing: true })
                  if (step === 3) setAnswers({ ...answers, choking: true })
                  if (step === 4) setAnswers({ ...answers, bleeding: true })
                  setStep((s) => s + 1)
                }}
                className="h-24 font-bold text-lg flex flex-col gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md"
              >
                <CheckCircle className="h-8 w-8" />
                SIM
              </Button>

              <Button
                onClick={() => {
                  if (step === 1) setAnswers({ ...answers, conscious: false })
                  if (step === 2) setAnswers({ ...answers, breathing: false })
                  if (step === 3) setAnswers({ ...answers, choking: false })
                  if (step === 4) setAnswers({ ...answers, bleeding: false })
                  setStep((s) => s + 1)
                }}
                className="h-24 font-bold text-lg flex flex-col gap-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-md"
              >
                <XCircle className="h-8 w-8" />
                NÃO
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-2 text-center">
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <span className="text-4xl">{recommended.emoji}</span>
              <p className="text-xs font-bold text-red-600 uppercase tracking-widest mt-2">
                Protocolo Recomendado
              </p>
              <h3 className="text-2xl font-black text-stone-900 mt-1">{recommended.title}</h3>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={handleSelectRecommendation}
                className="bg-red-600 hover:bg-red-700 text-white font-bold h-14 text-lg rounded-xl shadow-lg gap-2"
              >
                Abrir Protocolo Recomendado <ArrowRight className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={reset}
                className="gap-2 font-medium text-stone-600"
              >
                <RotateCcw className="h-4 w-4" /> Refazer Perguntas
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
