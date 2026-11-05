import { useState } from 'react'

interface FlagImageProps {
  src: string
  alt: string
  className?: string
}

export function FlagImage({ src, alt, className = '' }: FlagImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-negro-tinta/40 font-ui text-sm text-papel/70 ${className}`.trim()}
      >
        Sin bandera
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  )
}