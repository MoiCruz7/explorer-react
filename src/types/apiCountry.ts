export interface ApiCountry {
  codes: { alpha_3: string }
  names: { common: string; official: string }
  flag: {
    url_svg?: string | null
    url_png?: string | null
    description?: string | null
  }
  region?: string | null
  population?: number | null
  capitals?: { name: string }[] | null
  languages?: { name?: string | null; native_name?: string | null }[] | null
  currencies?: {
    name?: string | null
    code?: string | null
    symbol?: string | null
  }[] | null
}