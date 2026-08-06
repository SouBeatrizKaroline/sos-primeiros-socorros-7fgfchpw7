interface ProtocolIllustrationProps {
  type: string
}

export function ProtocolIllustration({ type }: ProtocolIllustrationProps) {
  // Generates clear, high-contrast SVG diagram illustrations for each action
  switch (type) {
    case 'cpr-hands':
      return (
        <div className="w-full h-48 sm:h-64 bg-red-50 border-2 border-red-200 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden">
          <svg
            className="w-32 h-32 text-red-600 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 11.5V14m0 0v2.5m0-2.5h10m-10 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM7 6.5h10M7 6.5a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          <span className="font-bold text-red-900 text-sm mt-2 text-center">
            Mãos Entrelacadas no Centro do Peito (Esterno)
          </span>
        </div>
      )
    case 'cpr-rhythm':
      return (
        <div className="w-full h-48 sm:h-64 bg-amber-50 border-2 border-amber-300 rounded-2xl flex flex-col items-center justify-center p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-4 bg-red-600 rounded-full animate-ping" />
            <span className="font-black text-2xl text-amber-900">100 - 120 / min</span>
          </div>
          <p className="text-xs text-amber-800 font-bold text-center">
            Pressione 5 cm de profundidade • Ritmo "Stayin Alive"
          </p>
        </div>
      )
    case 'choking-check':
      return (
        <div className="w-full h-48 sm:h-64 bg-blue-50 border-2 border-blue-200 rounded-2xl flex items-center justify-center p-4">
          <div className="text-center">
            <span className="text-6xl">🗣️</span>
            <p className="font-bold text-blue-900 text-sm mt-2">
              Verifique se a pessoa consegue tossir ou falar
            </p>
          </div>
        </div>
      )
    case 'back-blows':
      return (
        <div className="w-full h-48 sm:h-64 bg-amber-50 border-2 border-amber-200 rounded-2xl flex flex-col items-center justify-center p-4">
          <span className="text-5xl mb-2">✋🖐️</span>
          <p className="font-bold text-amber-900 text-sm text-center">
            5 Golpes Firmes nas Costas (Entre as Escápulas)
          </p>
        </div>
      )
    case 'heimlich-maneuver':
      return (
        <div className="w-full h-48 sm:h-64 bg-red-50 border-2 border-red-300 rounded-2xl flex flex-col items-center justify-center p-4">
          <span className="text-6xl mb-2">👊</span>
          <p className="font-bold text-red-900 text-sm text-center">
            Punho Acima do Umbigo • Pressione para DENTRO e para CIMA
          </p>
        </div>
      )
    case 'recovery-position':
      return (
        <div className="w-full h-48 sm:h-64 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex flex-col items-center justify-center p-4">
          <span className="text-6xl mb-2">🛌</span>
          <p className="font-bold text-emerald-900 text-sm text-center">
            Posição Lateral de Segurança (Mantém Vias Aéreas Livres)
          </p>
        </div>
      )
    case 'cool-water':
      return (
        <div className="w-full h-48 sm:h-64 bg-sky-50 border-2 border-sky-200 rounded-2xl flex flex-col items-center justify-center p-4">
          <span className="text-6xl mb-2">🚰💧</span>
          <p className="font-bold text-sky-900 text-sm text-center">
            Água Corrente em Temperatura Ambiente por 15 Minutos
          </p>
        </div>
      )
    default:
      return (
        <div className="w-full h-48 sm:h-64 bg-stone-100 border-2 border-stone-200 rounded-2xl flex items-center justify-center p-4">
          <span className="text-5xl">🚨</span>
        </div>
      )
  }
}
