import { usePokemon } from "@/hooks"
import * as Style from "./index.styles"
import { useParams } from "react-router-dom"

export const Pokemon = () => {
  const { name } = useParams()
  const { data, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <Style.Container className={data?.types[0].type.name}>
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
            <div key={item.stat.name} className="flex items-center space-x-2 space-y-2">
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
    </Style.Container>
  )
}
