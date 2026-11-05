import type { ReactNode } from 'react'

interface IconButtonProps {
  label: string
  expanded: boolean
  controls: string
  onClick: () => void
  children: ReactNode
}

export function IconButton({ label, expanded, controls, onClick, children }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
      className="rounded-full border border-bronce/30 px-3 py-1.5 font-ui text-xl text-papel/70 transition-all duration-300 ease-out hover:border-bronce hover:text-bronce focus-visible:border-bronce focus-visible:outline-none active:scale-95"
    >
      <span aria-hidden="true">{children}</span>
    </button>
  )
}