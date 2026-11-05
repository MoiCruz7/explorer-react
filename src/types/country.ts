export type Region = 'África' | 'América' | 'Asia' | 'Europa' | 'Oceanía'

export type RegionFilter = Region | 'all'

export interface Country {
  id: string
  name: string
  capital: string
  region: Region
  population: number
  flagUrl: string
}