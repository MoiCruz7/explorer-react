import { useCallback, useState } from 'react'
import { Header } from './Header'

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setIsMenuOpen((open) => !open), [])
  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  return <Header isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} onCloseMenu={closeMenu} />
}