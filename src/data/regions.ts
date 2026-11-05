import type { Region, RegionFilter } from '../types/country'

export const REGIONS: Region[] = ['África', 'América', 'Asia', 'Europa', 'Oceanía']

export function isRegionFilter(value: string): value is RegionFilter {
  return value === 'all' || REGIONS.some((region) => region === value)
}