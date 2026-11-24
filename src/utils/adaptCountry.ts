import type { ApiCountry } from '../types/apiCountry'
import type { Country } from '../types/country'

function formatCurrency(currency: NonNullable<ApiCountry['currencies']>[number]): string[] {
  const label = currency.name ?? currency.code
  if (!label) return []
  return [currency.symbol ? `${label} (${currency.symbol})` : label]
}

export function toCountry(api: ApiCountry): Country {
  return {
    id: api.codes.alpha_3.toLowerCase(),
    name: api.names.common,
    officialName: api.names.official,
    capital: api.capitals?.[0]?.name ?? 'Sin capital',
    region: api.region?.trim() || 'Sin región',
    population: api.population ?? 0,
    flagUrl: api.flag.url_svg ?? api.flag.url_png ?? '',
    languages: (api.languages ?? []).flatMap((language) => {
      const name = language.name ?? language.native_name
      return name ? [name] : []
    }),
    currencies: (api.currencies ?? []).flatMap(formatCurrency),
  }
}