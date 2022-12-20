import { usePokemon } from "@/hooks"
import { ProgressBar, Loading } from "@/components"
import { Link, useSearchParams } from "react-router-dom"

import { BsArrowLeft } from "react-icons/bs"

export const Pokemon = () => {
  const [searchParams] = useSearchParams()
  const { data, isLoading } = usePokemon(`https://pokeapi.co/api/v2/pokemon/${searchParams.get("name")}`)

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={`min-h-screen py-5 space-y-5 flex flex-col ${data?.types[0].type.name}`}>
      <Link to={`/?page=${searchParams.get("page")}`} className="inline-flex w-32 space-x-2 px-2">
        <BsArrowLeft size={25} color="#FFF" />

        <span className="text-white font-medium">Pokedex</span>
      </Link>

      <div className="flex-1 flex flex-col md:items-center md:flex-row">
        <div className="w-40 mx-auto md:flex-1">
          <img
            className="w-full h-full md:w-80 md:h-80 md:mx-auto"
            src={data?.sprites.front_default}
            alt={data?.name}
          />
        </div>

        <div className="space-y-4 text-center w-full flex-1">
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
              <ProgressBar key={item.stat.name} name={item.stat.name} base_stat={item.base_stat} mx={250} />
            ))}

            <ProgressBar name="EXP" base_stat={data?.base_experience} mx={1000} />
          </div>
        </div>
      </div>
    </div>
  )
}
