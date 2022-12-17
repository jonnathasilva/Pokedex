import { usePokemon } from "@/hooks"
import * as Style from "./index.styles"

interface Props {
  url: string
}

export const Card: React.FC<Props> = ({ url }) => {
  const { data, isLoading } = usePokemon(url)

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <Style.CardLink to={`/pokemon/${data?.name}`} className={data?.types[0].type.name}>
      <img src={data?.sprites.front_default} alt={data?.name} />
      <p>{data?.name}</p>
    </Style.CardLink>
  )
}
