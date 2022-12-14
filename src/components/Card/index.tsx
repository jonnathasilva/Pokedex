import { usePokemon } from "../../hooks"

interface Props {
  url: string
}

export const Card: React.FC<Props> = ({ url }) => {
  const { data } = usePokemon(url)

  console.log(data)

  return <div>{data?.data.name}</div>
}
