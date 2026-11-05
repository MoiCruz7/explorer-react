interface InputProps {
  id: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export function Input({ id, value, placeholder, onChange }: InputProps) {
  return (
    <input
      id={id}
      type="search"
      value={value}
      placeholder={placeholder}
      autoComplete="off"
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-full border border-bronce/30 bg-musgo px-4 py-3 font-ui text-sm text-papel placeholder:text-papel/50 transition-colors duration-300 ease-out focus:border-bronce focus:outline-none"
    />
  )
}