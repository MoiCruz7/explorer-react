import type { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`block font-ui text-sm text-papel/70 transition-colors duration-300 ease-out hover:text-bronce focus-visible:text-bronce focus-visible:outline-none active:text-bronce/70 ${className}`.trim()}
    >
      {children}
    </a>
  )
}