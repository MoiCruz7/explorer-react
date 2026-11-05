interface InfoRowProps {
  label: string
  value: string
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <>
      <dt className="text-papel/70">{label}</dt>
      <dd className="text-papel/90">{value}</dd>
    </>
  )
}