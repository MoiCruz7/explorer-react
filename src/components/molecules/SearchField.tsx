import { Input } from '../atoms/Input'

interface SearchFieldProps {
  value: string
  onChange: (value: string) => void
}

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <div className="flex-1">
      <label htmlFor="search-input" className="sr-only">
        Buscar país por nombre
      </label>
      <Input id="search-input" value={value} placeholder="Buscar país" onChange={onChange} />
    </div>
  )
}