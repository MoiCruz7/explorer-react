import type { Country, Region } from '../types/country'

export function getRegions(countries: Country[]): Region[] {
  return [...new Set(countries.map((country) => country.region))].sort((a, b) =>
    a.localeCompare(b, 'es'),
  )
}