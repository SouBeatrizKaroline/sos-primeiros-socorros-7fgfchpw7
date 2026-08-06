import { Link } from 'react-router-dom'
import { AlertCircle, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-md bg-white border border-stone-200 p-8 rounded-3xl shadow-lg">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-black text-stone-900 mb-2">404</h1>
        <p className="text-stone-600 font-medium mb-6">Página ou protocolo não encontrado.</p>
        <Button asChild className="bg-red-600 hover:bg-red-700 text-white font-bold gap-2">
          <Link to="/">
            <Home className="h-4 w-4" /> Ir para a Início
          </Link>
        </Button>
      </div>
    </div>
  )
}
