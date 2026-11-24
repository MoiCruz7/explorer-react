import { CountryCardSkeleton } from '../molecules/CountryCardSkeleton'

const SKELETON_COUNT = 8

export function LoadingGrid() {
  return (
    <div aria-busy="true">
      <p role="status" className="sr-only">
        Cargando países
      </p>
      <div className="grid grid-cols-1 gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <CountryCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}