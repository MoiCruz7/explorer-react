import { Heading } from '../atoms/Heading'

interface ErrorMessageProps {
  message: string
  onRetry: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-error bg-musgo px-6 py-10 text-center"
    >
      <Heading level={3}>No se pudieron cargar los países</Heading>
      <p className="mt-2 font-body text-papel/80">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-full border border-bronce/30 bg-granate px-5 py-2 font-ui text-sm font-semibold text-papel transition-all duration-300 ease-out hover:border-bronce focus-visible:border-bronce focus-visible:outline-none active:scale-95"
      >
        Reintentar
      </button>
    </div>
  )
}