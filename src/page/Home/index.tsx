import { usePokedex } from "../../hooks"
import { Card } from "../../components"

export const Home = () => {
  const { data } = usePokedex()

  console.log(data)

  return (
    <div className="container mx-auto">
      <div className="grid justify-items-center grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {data?.data.results.map((item) => (
          <Card url={item.url} key={item.name} />
        ))}
      </div>
    </div>
  )
}
