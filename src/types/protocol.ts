export interface StepChoice {
  text: string
  nextStepId: number
  variant?: 'default' | 'destructive' | 'outline' | 'secondary'
}

export interface ProtocolStep {
  id: number
  title: string
  mainInstruction: string
  detailedText: string
  speechText?: string
  illustrationType: string
  warningNote?: string
  choices?: StepChoice[]
  hasRhythmMetronome?: boolean
  rhythmBpm?: number
  isFinal?: boolean
}

export type UrgencyLevel = 'alta' | 'critica' | 'moderada'

export interface Protocol {
  id: string
  title: string
  emoji: string
  summary: string
  urgencyLevel: UrgencyLevel
  isCoreOffline: boolean
  initialAlert: string
  steps: ProtocolStep[]
}

export interface EmergencyPreference {
  emergencyMode: boolean
  largeText: boolean
  readAloud: boolean
  language: string
}
