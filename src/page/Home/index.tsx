import { usePokedex } from "../../hooks"
import { Card } from "../../components"

export const Home = () => {
  const { data } = usePokedex()

  return (
    <h1 className="text-3xl font-bold underline">
      {data?.data.results.map((item) => (
        <Card url={item.url} key={item.name} />
      ))}
    </h1>
  )
}
