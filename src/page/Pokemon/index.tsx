import { usePokemon } from "../../hooks"
import { useParams } from "react-router-dom"

export const Pokemon = () => {
  const { name } = useParams()
  const { data } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)

  const COLOR = {
    bug: "bg-green-400",
    dark: "bg-gray-800",
    dragon: "bg-purple-800",
    electric: "bg-yellow-400",
    fairy: "bg-pink-400",
    fighting: "bg-red-900",
    fire: "bg-red-400",
    flying: "bg-indigo-600",
    ghost: "bg-indigo-700",
    grass: "bg-green-600",
    ground: "bg-yellow-700",
    ice: "bg-blue-400",
    normal: "bg-gray-500",
    poison: "bg-purple-600",
    psychic: "bg-pink-700",
    rock: "bg-yellow-600",
    steel: "bg-gray-400",
    water: "bg-blue-500",
  }

  return (
    <div className={`h-screen space-y-10  flex flex-col items-center ${data?.types[0].type.name}`}>
      <div className="w-40 ">
        <img className="w-full h-full" src={data?.sprites.front_default} alt={data?.name} />
      </div>

      <div className="space-y-4 text-center w-full">
        <h1 className="font-medium text-5xl text-white capitalize">{data?.name}</h1>

        <div className="flex justify-center gap-3">
          {data?.abilities.map((item) => (
            <p key={item.ability.name} className="text-white rounded-full px-4 py-2 capitalize bg-white/25 text-xs">
              {item.ability.name}
            </p>
          ))}
        </div>

        <div className="w-4/5 mx-auto">
          {data?.stats.map((item) => (
            <div className="flex items-center space-x-2 space-y-2">
              <p className="capitalize">{item.stat.name}</p>
              <span className="flex-1 h-6 rounded-full bg-white">{item.base_stat}/300</span>
            </div>
          ))}

          <div className="flex items-center space-x-2 space-y-2">
            <p className="capitalize">EXP</p>
            <span className="flex-1 h-6 rounded-full bg-white">{data?.base_experience}/1000</span>
          </div>
        </div>
      </div>
    </div>
  )
}
