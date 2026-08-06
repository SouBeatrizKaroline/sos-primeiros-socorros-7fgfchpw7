import { useState, useEffect, useCallback, useRef } from 'react'

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [recognizedText, setRecognizedText] = useState('')
  const recognitionRef = useRef<any>(null)

  const speak = useCallback((text: string, rate = 0.9) => {
    if (!('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'pt-BR'
    utterance.rate = rate
    utterance.pitch = 1.0

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }, [])

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [])

  const startListening = useCallback((onCommand?: (cmd: string) => void) => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) return

    if (recognitionRef.current) {
      recognitionRef.current.stop()
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'pt-BR'
    recognition.continuous = true
    recognition.interimResults = false

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)

    recognition.onresult = (event: any) => {
      const last = event.results.length - 1
      const transcript = event.results[last][0].transcript.trim().toLowerCase()
      setRecognizedText(transcript)

      if (onCommand) {
        if (
          transcript.includes('próximo') ||
          transcript.includes('avançar') ||
          transcript.includes('continuar')
        ) {
          onCommand('next')
        } else if (
          transcript.includes('repita') ||
          transcript.includes('repetir') ||
          transcript.includes('novamente')
        ) {
          onCommand('repeat')
        } else if (transcript.includes('voltar') || transcript.includes('anterior')) {
          onCommand('back')
        } else if (
          transcript.includes('ajuda') ||
          transcript.includes('socorro') ||
          transcript.includes('ligar') ||
          transcript.includes('preciso de ajuda')
        ) {
          onCommand('help')
        }
        if (
          transcript.includes('não consegui') ||
          transcript.includes('nao consegui') ||
          transcript.includes('não consigo') ||
          transcript.includes('nao consigo')
        ) {
          onCommand('failed')
        }
      }
    }

    recognition.start()
    recognitionRef.current = recognition
  }, [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [])

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [])

  return {
    speak,
    stopSpeaking,
    isSpeaking,
    startListening,
    stopListening,
    isListening,
    recognizedText,
  }
}
