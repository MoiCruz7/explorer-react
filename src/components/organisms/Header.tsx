import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '../atoms/IconButton'
import { NavLinks } from '../molecules/NavLinks'

interface HeaderProps {
  isMenuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export function Header({ isMenuOpen, onToggleMenu, onCloseMenu }: HeaderProps) {
  // Escape cierra el menú móvil (navegación por teclado).
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onCloseMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen, onCloseMenu])

  return (
    <header className="relative border-b border-bronce/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 tablet:px-8">
        <Link to="/" className="font-heading text-xl font-bold text-papel">
          Explorer
        </Link>

        <nav aria-label="Principal" className="hidden tablet:block">
          <NavLinks orientation="horizontal" />
        </nav>

        <div className="tablet:hidden">
          <IconButton
            label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            expanded={isMenuOpen}
            controls="mobile-menu"
            onClick={onToggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </IconButton>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menú móvil"
          className="absolute left-0 top-full z-10 w-full border-b border-bronce/20 bg-negro-tinta tablet:hidden"
        >
          <NavLinks orientation="vertical" onNavigate={onCloseMenu} />
        </nav>
      )}
    </header>
  )
}