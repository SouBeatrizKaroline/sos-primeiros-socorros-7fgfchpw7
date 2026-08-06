export interface StepChoice {
  text: string
  targetStepId: number
  icon?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary'
}

export interface ProtocolStep {
  id: number
  title: string
  mainInstruction: string
  detail: string
  mediaQuery?: string
  mediaAlt?: string
  choices?: StepChoice[]
  hasRhythmMetronome?: boolean
  rhythmBpm?: number
  warningNote?: string
}

export type UrgencyLevel = 'alta' | 'critica' | 'moderada'

export interface Protocol {
  id: string
  title: string
  icon: string
  description: string
  urgency: UrgencyLevel
  isCoreOffline: boolean
  firstActionNote: string
  steps: ProtocolStep[]
}

export interface EmergencyPreference {
  emergencyMode: boolean
  largeText: boolean
  readAloud: boolean
  language: string
}
