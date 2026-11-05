import { useState } from 'react'
import { CountryGrid } from './components/organisms/CountryGrid'
import { FiltersBar } from './components/organisms/FiltersBar'
import { Header } from './components/organisms/Header'
import { ExplorerTemplate } from './components/templates/ExplorerTemplate'
import { countries } from './data/countries'
import type { RegionFilter } from './types/country'
import { filterCountries } from './utils/countries'

export default function App() {
  // Estado compartido: vive en el padre. Los hijos lo actualizan con callbacks.
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<RegionFilter>('all')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dato derivado: se calcula en cada render a partir del estado.
  const visibleCountries = filterCountries(countries, search, region)

  return (
    <ExplorerTemplate
      header={
        <Header
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((open) => !open)}
          onCloseMenu={() => setIsMenuOpen(false)}
        />
      }
      filters={
        <FiltersBar
          search={search}
          region={region}
          onSearchChange={setSearch}
          onRegionChange={setRegion}
        />
      }
    >
      <CountryGrid countries={visibleCountries} total={countries.length} />
    </ExplorerTemplate>
  )
}