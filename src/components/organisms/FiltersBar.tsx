import type { Region, RegionFilter } from '../../types/country'
import { RegionSelect } from '../molecules/RegionSelect'
import { SearchField } from '../molecules/SearchField'

interface FiltersBarProps {
  search: string
  region: RegionFilter
  regions: Region[]
  onSearchChange: (value: string) => void
  onRegionChange: (region: RegionFilter) => void
}

export function FiltersBar({
  search,
  region,
  regions,
  onSearchChange,
  onRegionChange,
}: FiltersBarProps) {
  return (
    <div
      id="buscar"
      role="search"
      className="mb-8 flex scroll-mt-4 flex-col gap-4 tablet:flex-row tablet:items-center"
    >
      <SearchField value={search} onChange={onSearchChange} />
      <RegionSelect value={region} regions={regions} onChange={onRegionChange} />
    </div>
  )
}