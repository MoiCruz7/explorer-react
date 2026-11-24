import type { Region, RegionFilter } from '../../types/country'
import { Select, type SelectOption } from '../atoms/Select'

interface RegionSelectProps {
  value: RegionFilter
  regions: Region[]
  onChange: (region: RegionFilter) => void
}

export function RegionSelect({ value, regions, onChange }: RegionSelectProps) {
  const options: SelectOption[] = [
    { value: 'all', label: 'Todas las regiones' },
    ...regions.map((region) => ({ value: region, label: region })),
  ]

  return (
    <div className="tablet:w-56">
      <label htmlFor="region-select" className="sr-only">
        Filtrar por región
      </label>
      <Select id="region-select" value={value} options={options} onChange={onChange} />
    </div>
  )
}