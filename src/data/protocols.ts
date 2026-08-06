import { Protocol } from '@/types/protocol'
import { CRITICAL_PROTOCOLS } from './protocols-critical'
import { STANDARD_PROTOCOLS } from './protocols-standard'

export const PROTOCOLS: Record<string, Protocol> = {
  ...CRITICAL_PROTOCOLS,
  ...STANDARD_PROTOCOLS,
}

export const CARD_ORDER: string[] = [
  'pessoa-nao-responde',
  'sem-respirar',
  'engasgo',
  'sangramento',
  'queimadura',
  'convulsao',
  'desmaio',
  'choque-eletrico',
  'acidente',
  'queda-fratura',
  'emergencia-bebe',
  'emergencia-idoso',
  'socorros-animal',
]
