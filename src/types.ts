export interface Country {
  name: string
  population: number
  region: string
  capital: string
  flag: string
  alpha3Code: string
  nativeName: string
  currencies: Array<Obj>
  subregion: string
  topLevelDomain: string
  languages: Array<Obj>
  borders: Array<string>
}

interface Obj {
  name: string
}
