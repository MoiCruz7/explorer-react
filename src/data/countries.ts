import type { Country } from '../types/country'

const flag = (code: string): string => `https://flagcdn.com/w320/${code}.png`

export const countries: Country[] = [
  { id: 'sv', name: 'El Salvador', capital: 'San Salvador', region: 'América', population: 6364943, flagUrl: flag('sv') },
  { id: 'ar', name: 'Argentina', capital: 'Buenos Aires', region: 'América', population: 45510318, flagUrl: flag('ar') },
  { id: 'co', name: 'Colombia', capital: 'Bogotá', region: 'América', population: 51874024, flagUrl: flag('co') },
  { id: 'mx', name: 'México', capital: 'Ciudad de México', region: 'América', population: 127504125, flagUrl: flag('mx') },
  { id: 'br', name: 'Brasil', capital: 'Brasilia', region: 'América', population: 215313498, flagUrl: flag('br') },
  { id: 'it', name: 'Italia', capital: 'Roma', region: 'Europa', population: 59037474, flagUrl: flag('it') },
  { id: 'es', name: 'España', capital: 'Madrid', region: 'Europa', population: 47558630, flagUrl: flag('es') },
  { id: 'al', name: 'Albania', capital: 'Tirana', region: 'Europa', population: 2827377, flagUrl: flag('al') },
  { id: 'jp', name: 'Japón', capital: 'Tokio', region: 'Asia', population: 123951692, flagUrl: flag('jp') },
  { id: 'in', name: 'India', capital: 'Nueva Delhi', region: 'Asia', population: 1417173173, flagUrl: flag('in') },
  { id: 'kr', name: 'Corea del Sur', capital: 'Seúl', region: 'Asia', population: 51815810, flagUrl: flag('kr') },
  { id: 'eg', name: 'Egipto', capital: 'El Cairo', region: 'África', population: 110990103, flagUrl: flag('eg') },
  { id: 'ng', name: 'Nigeria', capital: 'Abuya', region: 'África', population: 218541212, flagUrl: flag('ng') },
  { id: 'za', name: 'Sudáfrica', capital: 'Pretoria', region: 'África', population: 59893885, flagUrl: flag('za') },
  { id: 'au', name: 'Australia', capital: 'Canberra', region: 'Oceanía', population: 26177413, flagUrl: flag('au') },
  { id: 'nz', name: 'Nueva Zelanda', capital: 'Wellington', region: 'Oceanía', population: 5185288, flagUrl: flag('nz') },
]