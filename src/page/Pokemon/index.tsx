import { usePokemon } from "@/hooks"
import { ProgressBar } from "@/components"
import { useParams, Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

export const Pokemon = () => {
  const { name } = useParams()
  const { data, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <div className={`h-screen space-y-5 flex flex-col  ${data?.types[0].type.name}`}>
      <Link to="/" className="inline-flex space-x-2 p-2">
        <BsArrowLeft size={25} color="#FFF" />

        <span className="text-white font-medium">Pokedex</span>
      </Link>

      <div className="w-40 mx-auto">
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

        <div className="flex justify-center space-x-9">
          <div>
            <p className="text-lg font-bold text-white">{data?.weight} HG</p>
            <span>Weight</span>
          </div>

          <div>
            <p className="text-lg font-bold text-white">{data?.height} DM</p>
            <span>Height</span>
          </div>
        </div>

        <div className="w-4/5 mx-auto space-y-2">
          {data?.stats.map((item) => (
            <ProgressBar name={item.stat.name} base_stat={item.base_stat} mx={250} />
          ))}

          <ProgressBar name={data?.base_experience} base_stat={data?.base_experience} mx={1000} />
        </div>
      </div>
    </div>
  )
}
