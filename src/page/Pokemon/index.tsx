import { usePokemon } from "../../hooks"
import { useParams } from "react-router-dom"

export const Pokemon = () => {
  const { name } = useParams()
  const { data, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (isLoading) {
    return <div>Carregando...</div>
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

        <div className="w-4/5 mx-auto space-y-2">
          {data?.stats.map((item) => (
            <div className="flex items-center space-x-2">
              <p className="capitalize text-sm text-white">{item.stat.name}</p>

              <span className="text-sm text-white">{item.base_stat}/300</span>

              <progress className="flex-1 text-black rounded-full" value={item.base_stat} max={300}></progress>
            </div>
          ))}

          <div className="flex items-center space-x-2">
            <p className="capitalize text-sm text-white">EXP</p>

            <span className="text-sm text-white">{data?.base_experience}/1000</span>

            <progress className="flex-1 text-black rounded-full" value={data?.base_experience} max={1000}>
              100%
            </progress>
          </div>
        </div>
      </div>
    </div>
  )
}
