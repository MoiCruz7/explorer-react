import { useMemo, useState } from 'react'
import { ErrorMessage } from '../components/molecules/ErrorMessage'
import { AppHeader } from '../components/organisms/AppHeader'
import { CountryGrid } from '../components/organisms/CountryGrid'
import { FiltersBar } from '../components/organisms/FiltersBar'
import { LoadingGrid } from '../components/organisms/LoadingGrid'
import { ExplorerTemplate } from '../components/templates/ExplorerTemplate'
import { useCountries } from '../hooks/useCountries'
import { useDebouncedValue } from '../hooks/useDebouncedValue'
import type { RegionFilter } from '../types/country'
import { filterCountries } from '../utils/countries'
import { getRegions } from '../utils/regions'

const SEARCH_DELAY_MS = 300

export function HomePage() {
  // Estado compartido: vive en el padre. Los hijos lo actualizan con callbacks.
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<RegionFilter>('all')

  const { countries, status, error, retry } = useCountries()
  const debouncedSearch = useDebouncedValue(search, SEARCH_DELAY_MS)

  const regions = useMemo(() => getRegions(countries), [countries])
  const visibleCountries = filterCountries(countries, debouncedSearch, region)

  let content
  if (status === 'loading') {
    content = <LoadingGrid />
  } else if (status === 'error') {
    content = <ErrorMessage message={error} onRetry={retry} />
  } else {
    content = <CountryGrid countries={visibleCountries} total={countries.length} />
  }

  return (
    <ExplorerTemplate
      header={<AppHeader />}
      filters={
        <FiltersBar
          search={search}
          region={region}
          regions={regions}
          onSearchChange={setSearch}
          onRegionChange={setRegion}
        />
      }
    >
      {content}
    </ExplorerTemplate>
  )
}