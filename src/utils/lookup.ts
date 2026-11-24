import type { Country } from '../types/country'

export function findCountryById(countries: Country[], id: string): Country | undefined {
  const wanted = id.trim().toLowerCase()
  return countries.find((country) => country.id === wanted)
}