import { usePokedex } from "@/hooks"
import { Card } from "@/components"

export const Home = () => {
  const { data } = usePokedex()

  return (
    <div className="space-y-5">
      <header className="bg-[#d53b47] h-14 flex items-center">
        <h1 className="px-6 text-3xl text-white font-bold">Pokedex</h1>
      </header>

      <div className="px-6 ">
        <div className="grid justify-items-center grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {data?.results.map((item) => (
            <Card url={item.url} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
