import { cn } from '@/lib/utils'

interface IllustrationConfig {
  emoji: string
  bg: string
  border: string
  text: string
  textColor: string
  animate?: string
}

const ILLUSTRATIONS: Record<string, IllustrationConfig> = {
  'check-safety': {
    emoji: '⚠️',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Verifique se o local é seguro antes de se aproximar',
    textColor: 'text-amber-900',
  },
  'check-response': {
    emoji: '📢',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Chame a pessoa em voz alta e toque nos ombros',
    textColor: 'text-blue-900',
  },
  'check-breathing': {
    emoji: '👁️',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Observe o peito por 10 segundos',
    textColor: 'text-blue-900',
  },
  'cpr-hands': {
    emoji: '🙏',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'Mãos entrelaçadas no centro do peito (esterno)',
    textColor: 'text-red-900',
    animate: 'animate-bounce',
  },
  'cpr-rhythm': {
    emoji: '💓',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    text: '100-120 compressões/min • 5-6cm de profundidade',
    textColor: 'text-amber-900',
  },
  'choking-check': {
    emoji: '🗣️',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Verifique se a pessoa consegue tossir ou falar',
    textColor: 'text-blue-900',
  },
  'encourage-coughing': {
    emoji: '💨',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'Incentive a pessoa a tossir com força',
    textColor: 'text-green-900',
  },
  'back-blows': {
    emoji: '✋',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Golpes firmes nas costas (entre as escápulas)',
    textColor: 'text-amber-900',
  },
  'heimlich-maneuver': {
    emoji: '👊',
    bg: 'bg-red-50',
    border: 'border-red-300',
    text: 'Punho acima do umbigo • Pressione para dentro e para cima',
    textColor: 'text-red-900',
  },
  'recovery-position': {
    emoji: '🛌',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'Posição Lateral de Segurança • Vias aéreas livres',
    textColor: 'text-emerald-900',
  },
  'cool-water': {
    emoji: '🚰',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'Água corrente em temperatura ambiente por 15 minutos',
    textColor: 'text-sky-900',
  },
  'pressure-wound': {
    emoji: '🩹',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'Pressione pano limpo firmemente sobre o ferimento',
    textColor: 'text-red-900',
  },
  'maintain-pressure': {
    emoji: '✊',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'Não retire o pano • Adicione mais panos por cima',
    textColor: 'text-red-900',
  },
  'elevate-limb': {
    emoji: '✋',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Eleve o membro ferido acima do coração',
    textColor: 'text-amber-900',
  },
  'warm-victim': {
    emoji: '🧥',
    bg: 'bg-stone-100',
    border: 'border-stone-300',
    text: 'Mantenha a vítima deitada e aquecida',
    textColor: 'text-stone-900',
  },
  'remove-jewelry': {
    emoji: '💍',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'Retire anéis e pulseiras antes do inchaço',
    textColor: 'text-sky-900',
  },
  'protect-wound': {
    emoji: '📋',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'Proteja com pano limpo e seco • Não fure bolhas',
    textColor: 'text-sky-900',
  },
  'hand-placement': {
    emoji: '👐',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'Mão sobre mão no centro do peito',
    textColor: 'text-red-900',
  },
  'aed-device': {
    emoji: '🔌',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'Ligue o DEA e siga os comandos de voz',
    textColor: 'text-purple-900',
  },
  'circuit-breaker': {
    emoji: '⚡',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'Desligue o disjuntor geral da casa',
    textColor: 'text-amber-900',
  },
  'insulating-object': {
    emoji: '🪵',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Use objeto de madeira ou plástico para afastar o fio',
    textColor: 'text-amber-900',
  },
  'check-victim-electric': {
    emoji: '🔍',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Verifique se a pessoa responde e respira',
    textColor: 'text-blue-900',
  },
  'protect-head': {
    emoji: '🧢',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Proteja a cabeça com casaco ou almofada',
    textColor: 'text-amber-900',
  },
  'loosen-clothes': {
    emoji: '👕',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Afrouxe roupas apertadas no pescoço e cintura',
    textColor: 'text-blue-900',
  },
  'turn-side': {
    emoji: '↩️',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'Vire a pessoa de lado após os tremores pararem',
    textColor: 'text-emerald-900',
  },
  'lie-down-elevate-legs': {
    emoji: '🛏️',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Deite a pessoa e eleve as pernas 30cm',
    textColor: 'text-blue-900',
  },
  'ensure-ventilation': {
    emoji: '🌬️',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Afrouxe roupas e abra janelas para ventilação',
    textColor: 'text-blue-900',
  },
  'gradual-recovery': {
    emoji: '🪑',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'Não levante rápido • Aguarde 5 minutos sentado',
    textColor: 'text-green-900',
  },
  'identify-allergy': {
    emoji: '🤧',
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'Inchaço nos lábios, olhos ou placas vermelhas',
    textColor: 'text-red-900',
  },
  epipen: {
    emoji: '💉',
    bg: 'bg-red-50',
    border: 'border-red-300',
    text: 'Aplique na coxa por 10 segundos',
    textColor: 'text-red-900',
  },
  'comfortable-position': {
    emoji: '🛋️',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'Deite ou sente a pessoa confortavelmente',
    textColor: 'text-blue-900',
  },
  'signal-area': {
    emoji: '🚸',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'Ligue o pisca-alerta e coloque o triângulo',
    textColor: 'text-amber-900',
  },
  'do-not-move': {
    emoji: '🚫',
    bg: 'bg-red-50',
    border: 'border-red-300',
    text: 'NÃO mova a vítima • NÃO retire o capacete',
    textColor: 'text-red-900',
  },
  'stabilize-neck': {
    emoji: '✋',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Segure a cabeça firme sem girar',
    textColor: 'text-amber-900',
  },
  immobilize: {
    emoji: '🩼',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Imobilize com tábua ou papelão sem mover o osso',
    textColor: 'text-amber-900',
  },
  'ice-pack': {
    emoji: '🧊',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'Gelo enrolado em pano sobre o local',
    textColor: 'text-sky-900',
  },
  'baby-forearm': {
    emoji: '👶',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'Bebê debruçado no antebraço, inclinado para baixo',
    textColor: 'text-pink-900',
  },
  'baby-back-slaps': {
    emoji: '✋',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: '5 tapas firmes entre as escápulas',
    textColor: 'text-pink-900',
  },
  'baby-chest-compressions': {
    emoji: '✌️',
    bg: 'bg-pink-50',
    border: 'border-pink-300',
    text: '5 compressões no peito com 2 dedos',
    textColor: 'text-pink-900',
  },
  'stroke-test': {
    emoji: '😊',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'Teste: Sorriso, Abraço e Frase (AVC)',
    textColor: 'text-amber-900',
  },
  'elderly-fall': {
    emoji: '👴',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'Não levante o idoso • Verifique dores',
    textColor: 'text-amber-900',
  },
  'animal-muzzle': {
    emoji: '🐕',
    bg: 'bg-stone-100',
    border: 'border-stone-300',
    text: 'Enrole pano no focinho antes de examinar',
    textColor: 'text-stone-900',
  },
  'animal-transport': {
    emoji: '📋',
    bg: 'bg-stone-100',
    border: 'border-stone-300',
    text: 'Transporte em tábua ou cobertor firme',
    textColor: 'text-stone-900',
  },
  'calm-victim': {
    emoji: '💬',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'Converse e mantenha a pessoa calma',
    textColor: 'text-green-900',
  },
  'call-emergency': {
    emoji: '📞',
    bg: 'bg-red-50',
    border: 'border-red-300',
    text: 'Ligue 192 (SAMU) imediatamente',
    textColor: 'text-red-900',
    animate: 'animate-bounce',
  },
  default: {
    emoji: '🚨',
    bg: 'bg-stone-100',
    border: 'border-stone-200',
    text: 'Siga as instruções com calma',
    textColor: 'text-stone-900',
  },
}

interface ProtocolIllustrationProps {
  type: string
}

export function ProtocolIllustration({ type }: ProtocolIllustrationProps) {
  const illus = ILLUSTRATIONS[type] || ILLUSTRATIONS['default']
  return (
    <div
      className={cn(
        'w-full h-48 sm:h-64 border-2 rounded-2xl flex flex-col items-center justify-center p-4',
        illus.bg,
        illus.border,
      )}
      role="img"
      aria-label={illus.text}
    >
      <span className={cn('text-5xl mb-2', illus.animate)}>{illus.emoji}</span>
      <p className={cn('font-bold text-sm text-center', illus.textColor)}>{illus.text}</p>
    </div>
  )
}
