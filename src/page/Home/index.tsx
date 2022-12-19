import { usePokedex } from "@/hooks"
import { Card } from "@/components"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { useSearchParams, useNavigate } from "react-router-dom"

export const Home = () => {
  const [searchParams] = useSearchParams()
  const navegate = useNavigate()
  const { data } = usePokedex(Number(searchParams.get("page") || 1))

  const next = () => {
    const page = Number(searchParams.get("page")) || 1
    navegate(`/?page=${page + 1}`)
  }

  const previous = () => {
    const page = Number(searchParams.get("page"))
    if (page > 1) {
      navegate(`/?page=${page - 1}`)
    }
  }

  return (
    <div className="space-y-5 pb-5">
      <header className="bg-[#d53b47] h-14 flex items-center">
        <h1 className="px-6 text-3xl text-white font-bold">Pokedex</h1>
      </header>

      <div className="px-6 space-y-4">
        <div className="flex w-full justify-end space-x-4">
          <span
            className="w-6 h-6 bg-[#4f4d50] flex items-center justify-center rounded-md cursor-pointer"
            onClick={previous}
          >
            <BsChevronCompactLeft color="#FFF" size={20} />
          </span>

          <span
            className="w-6 h-6 bg-[#4f4d50] flex items-center justify-center rounded-md cursor-pointer"
            onClick={next}
          >
            <BsChevronCompactRight color="#FFF" size={20} />
          </span>
        </div>

        <div className="grid justify-items-center grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {data?.results.map((item) => (
            <Card url={item.url} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  )
}
