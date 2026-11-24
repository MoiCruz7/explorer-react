import { Link } from 'react-router-dom'

export function BackLink() {
  return (
    <Link
      to="/"
      className="mb-6 inline-block rounded-full border border-bronce/30 px-5 py-2 font-ui text-sm font-semibold text-papel transition-all duration-300 ease-out hover:border-bronce focus-visible:border-bronce focus-visible:outline-none active:scale-95"
    >
      ← Volver al listado
    </Link>
  )
}