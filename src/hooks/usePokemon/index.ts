import { useQuery } from "react-query"
import axios from "axios"

interface Ability {
  name: string
  url: string
}

interface Abilities {
  is_hidden: boolean
  slot: number
  ability: Ability
}

interface Forms {
  name: string
  url: string
}

interface Species {
  name: string
  url: string
}

interface Sprites {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

interface Stat {
  name: string
  url: string
}

interface Stats {
  base_stat: number
  effort: number
  stat: Stat
}

interface Type {
  name: string
  url: string
}

interface Types {
  slot: number
  type: Type
}

interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Abilities[]
  forms: Forms[]
  species: Species
  sprites: Sprites
  stats: Stats[]
  types: Types[]
}

const Pokemon = async (url: string) => {
  const { data } = await axios.get<Pokemon>(url)
  return data
}

export const usePokemon = (url: string) => {
  return useQuery(["Card", url], () => Pokemon(url))
}
