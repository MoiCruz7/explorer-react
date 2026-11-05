export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  id: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export function Select({ id, value, options, onChange }: SelectProps) {
  return (
    <select
      id={id}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-full border border-bronce/30 bg-musgo px-4 py-3 font-ui text-sm text-papel transition-colors duration-300 ease-out focus:border-bronce focus:outline-none [&>option]:bg-negro-tinta [&>option]:text-papel"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}