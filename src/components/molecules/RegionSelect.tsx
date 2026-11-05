import { REGIONS, isRegionFilter } from '../../data/regions'
import type { RegionFilter } from '../../types/country'
import { Select, type SelectOption } from '../atoms/Select'

interface RegionSelectProps {
  value: RegionFilter
  onChange: (region: RegionFilter) => void
}

const OPTIONS: SelectOption[] = [
  { value: 'all', label: 'Todas las regiones' },
  ...REGIONS.map((region) => ({ value: region, label: region })),
]

export function RegionSelect({ value, onChange }: RegionSelectProps) {
  const handleChange = (next: string): void => {
    if (isRegionFilter(next)) onChange(next)
  }

  return (
    <div className="tablet:w-56">
      <label htmlFor="region-select" className="sr-only">
        Filtrar por región
      </label>
      <Select id="region-select" value={value} options={OPTIONS} onChange={handleChange} />
    </div>
  )
}
