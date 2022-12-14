import { useQuery } from "react-query"
import axios from "axios"

export const usePokedex = () => {
  return useQuery(["pokedex"], () => axios.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20"))
}
