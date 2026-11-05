import type { Country } from '../../types/country'
import { CountryCard } from '../molecules/CountryCard'
import { EmptyMessage } from '../molecules/EmptyMessage'

interface CountryGridProps {
  countries: Country[]
  total: number
}

export function CountryGrid({ countries, total }: CountryGridProps) {
  if (countries.length === 0) {
    return (
      <EmptyMessage
        title="Sin resultados"
        description="Ningún país coincide con tu búsqueda y la región seleccionada. Prueba con otro nombre o cambia el filtro."
      />
    )
  }

  return (
    <>
      <p aria-live="polite" className="mb-4 font-ui text-sm text-papel/70">
        Mostrando {countries.length} de {total} países
      </p>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </>
  )
}