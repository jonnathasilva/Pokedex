import { usePokedex } from "@/hooks"

export const Home = () => {
  const { data } = usePokedex()

  console.log(data?.data)

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
