import { NavLink } from '../atoms/NavLink'

type NavOrientation = 'horizontal' | 'vertical'

interface NavLinksProps {
  orientation: NavOrientation
  onNavigate?: () => void
}

const NAV_ITEMS = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#buscar', label: 'Buscar' },
  { href: '/#paises', label: 'Países' },
]

const LIST_STYLES: Record<NavOrientation, string> = {
  horizontal: 'flex items-center gap-6',
  vertical: 'flex flex-col',
}

const ITEM_STYLES: Record<NavOrientation, string> = {
  horizontal: '',
  vertical: 'border-t border-bronce/10',
}

const LINK_STYLES: Record<NavOrientation, string> = {
  horizontal: '',
  vertical: 'px-6 py-3 hover:bg-musgo/30',
}

export function NavLinks({ orientation, onNavigate }: NavLinksProps) {
  return (
    <ul className={LIST_STYLES[orientation]}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href} className={ITEM_STYLES[orientation]}>
          <NavLink href={item.href} className={LINK_STYLES[orientation]} onClick={onNavigate}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}