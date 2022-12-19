import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Home } from "./Home"
import { Pokemon } from "./Pokemon"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/",
    element: <Pokemon />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
