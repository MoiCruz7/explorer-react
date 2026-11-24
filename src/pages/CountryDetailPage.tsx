import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { FlagImage } from '../components/atoms/FlagImage'
import { InfoRow } from '../components/atoms/InfoRow'
import { BackLink } from '../components/molecules/BackLink'
import { EmptyMessage } from '../components/molecules/EmptyMessage'
import { ErrorMessage } from '../components/molecules/ErrorMessage'
import { AppHeader } from '../components/organisms/AppHeader'
import { ExplorerTemplate } from '../components/templates/ExplorerTemplate'
import { useCountries } from '../hooks/useCountries'
import { formatPopulation } from '../utils/countries'
import { findCountryById } from '../utils/lookup'

const NO_DATA = 'Sin datos'

export function CountryDetailPage() {
  const { code } = useParams()
  const { countries, status, error, retry } = useCountries()

  const country = useMemo(
    () => findCountryById(countries, code ?? ''),
    [countries, code],
  )

  if (status === 'loading') {
    return (
      <ExplorerTemplate header={<AppHeader />} title="Cargando país">
        <p role="status" className="font-body text-papel/80">
          Cargando país…
        </p>
      </ExplorerTemplate>
    )
  }

  if (status === 'error') {
    return (
      <ExplorerTemplate header={<AppHeader />} title="Detalle del país">
        <BackLink />
        <ErrorMessage message={error} onRetry={retry} />
      </ExplorerTemplate>
    )
  }

  if (country === undefined) {
    return (
      <ExplorerTemplate header={<AppHeader />} title="País no encontrado">
        <BackLink />
        <EmptyMessage
          title="No existe un país con ese código"
          description={`No encontramos ningún país con el código "${code ?? ''}". Vuelve al listado y elige uno de la lista.`}
        />
      </ExplorerTemplate>
    )
  }

  return (
    <ExplorerTemplate header={<AppHeader />} title={country.name}>
      <BackLink />
      <article className="grid gap-6 tablet:grid-cols-2">
        <FlagImage
          src={country.flagUrl}
          alt={`Bandera de ${country.name}`}
          className="w-full rounded-lg border border-bronce/20 object-cover"
        />
        <dl className="grid grid-cols-[auto_1fr] content-start gap-x-4 gap-y-2 font-ui">
          <InfoRow label="Nombre oficial" value={country.officialName} />
          <InfoRow label="Capital" value={country.capital} />
          <InfoRow label="Región" value={country.region} />
          <InfoRow label="Población" value={formatPopulation(country.population)} />
          <InfoRow
            label="Idiomas"
            value={country.languages.length > 0 ? country.languages.join(', ') : NO_DATA}
          />
          <InfoRow
            label="Monedas"
            value={country.currencies.length > 0 ? country.currencies.join(', ') : NO_DATA}
          />
        </dl>
      </article>
    </ExplorerTemplate>
  )
}