export type Region = string

export type RegionFilter = Region | 'all'

export interface Country {
  id: string
  name: string
  officialName: string
  capital: string
  region: Region
  population: number
  flagUrl: string
  languages: string[]
  currencies: string[]
}