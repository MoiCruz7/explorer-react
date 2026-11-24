import { Link } from 'react-router-dom'
import type { Country } from '../../types/country'
import { formatPopulation } from '../../utils/countries'
import { FlagImage } from '../atoms/FlagImage'
import { Heading } from '../atoms/Heading'
import { InfoRow } from '../atoms/InfoRow'

interface CountryCardProps {
  country: Country
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-bronce/20 bg-musgo transition-all duration-300 ease-out focus-within:border-bronce hover:border-bronce">
      <FlagImage
        src={country.flagUrl}
        alt={`Bandera de ${country.name}`}
        className="h-32 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="px-4 py-3">
        <Heading level={3}>
          <Link
            to={`/pais/${country.id}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {country.name}
          </Link>
        </Heading>
        <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 font-ui text-sm">
          <InfoRow label="Capital" value={country.capital} />
          <InfoRow label="Región" value={country.region} />
          <InfoRow label="Población" value={formatPopulation(country.population)} />
        </dl>
      </div>
    </article>
  )
}