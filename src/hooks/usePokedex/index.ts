import { useQuery } from "react-query"
import axios from "axios"

interface Item {
  name: string
  url: string
}

interface Pokedex {
  count: number
  next: string
  previous: string
  results: Item[]
}

const Pokedex = async (offset: string) => {
  const { data } = await axios.get<Pokedex>(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=40`)
  return data
}

export const usePokedex = (page: number) => {
  const offset = 40 * page
  return useQuery(["pokedex", offset], () => Pokedex(`${offset}`))
}
