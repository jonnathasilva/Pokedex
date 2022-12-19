import { usePokemon } from "@/hooks"
import { Link } from "react-router-dom"

interface Props {
  url: string
}

export const Card: React.FC<Props> = ({ url }) => {
  const { data } = usePokemon(url)

  return (
    <Link
      to={`/pokemon/${data?.name}`}
      className={`w-full h-32 flex flex-col justify-center items-center rounded-lg ease-in hover:scale-105 ${data?.types[0].type.name}`}
    >
      <img src={data?.sprites.front_default} alt={data?.name} />
      <p className="text-white capitalize">{data?.name}</p>
    </Link>
  )
}
