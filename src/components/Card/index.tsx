import { usePokemon } from "../../hooks"

interface Props {
  url: string
}

export const Card: React.FC<Props> = ({ url }) => {
  const { data } = usePokemon(url)

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
    <div
      className={`w-full flex flex-col justify-center items-center rounded-lg ${COLOR[data?.data.types[0].type.name]}`}
    >
      <img src={data?.data.sprites.front_default} alt={data?.data.name} />
      <p className="text-white">{data?.data.name}</p>
    </div>
  )
}
