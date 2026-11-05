import { Heading } from '../atoms/Heading'

interface EmptyMessageProps {
  title: string
  description: string
}

export function EmptyMessage({ title, description }: EmptyMessageProps) {
  return (
    <div
      role="status"
      className="rounded-lg border border-bronce/20 bg-musgo px-6 py-10 text-center"
    >
      <Heading level={3}>{title}</Heading>
      <p className="mt-2 font-body text-papel/80">{description}</p>
    </div>
  )
}