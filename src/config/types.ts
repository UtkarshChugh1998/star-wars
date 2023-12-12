export type CharacterResponse = {
  count: number
  next?: string
  previous?: string
  results: Character[]
}
interface BasicCharacter {
  name: string
  url: string
  created: string
  edited: string
}
export interface Character extends BasicCharacter {
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
}

export interface Planet extends BasicCharacter {
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  residents: string[]
  films: string[]
}
export interface Movie {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}