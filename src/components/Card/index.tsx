import { usePokemon } from "@/hooks"
import { useSearchParams, Link } from "react-router-dom"

interface Props {
  url: string
}

export const Card: React.FC<Props> = ({ url }) => {
  const [searchParams] = useSearchParams()
  const { data, isLoading } = usePokemon(url)

  if (isLoading || !data?.sprites.front_default) {
    return (
      <div data-testid="loading" className="transform">
        <div className="border-t-transparent border-solid animate-spin rounded-full border-black-400 border-8 h-20 w-20"></div>
      </div>
    )
  }

  return (
    <Link
      to={`/pokemon/?name=${data?.name}&page=${searchParams.get("page") || 1}`}
      className={`w-full h-32 flex flex-col justify-center items-center rounded-lg ease-in hover:scale-105 ${data?.types[0].type.name}`}
    >
      <img src={data?.sprites.front_default} alt={data?.name} />
      <p className="text-white capitalize">{data?.name}</p>
    </Link>
  )
}
