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

const Pokedex = async () => {
  const { data } = await axios.get<Pokedex>("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=248")
  return data
}

export const usePokedex = () => {
  return useQuery(["pokedex"], Pokedex)
}
