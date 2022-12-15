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

export const usePokedex = () => {
  return useQuery(["pokedex"], () => axios.get<Pokedex>("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=248"))
}
