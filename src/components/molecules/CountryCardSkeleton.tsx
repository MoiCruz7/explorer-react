export function CountryCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="animate-pulse overflow-hidden rounded-lg border border-bronce/20 bg-musgo motion-reduce:animate-none"
    >
      <div className="h-32 w-full bg-papel/10" />
      <div className="space-y-2 px-4 py-3">
        <div className="h-5 w-2/3 rounded bg-papel/20" />
        <div className="h-4 w-full rounded bg-papel/10" />
        <div className="h-4 w-1/2 rounded bg-papel/10" />
      </div>
    </div>
  )
}