import type { Country, RegionFilter } from '../types/country'

export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export function filterCountries(
  countries: Country[],
  search: string,
  region: RegionFilter,
): Country[] {
  const query = normalizeText(search)

  return countries.filter((country) => {
    const matchesRegion = region === 'all' || country.region === region
    const matchesSearch = query === '' || normalizeText(country.name).includes(query)

    return matchesRegion && matchesSearch
  })
}

export function formatPopulation(population: number): string {
  return new Intl.NumberFormat('es-SV').format(population)
}