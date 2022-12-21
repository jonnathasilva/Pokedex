import { describe, expect, afterEach, beforeEach } from "vitest"
import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter } from "react-router-dom"

import { Home } from "./index"
import { usePokedex } from "@/hooks"

const mockedUsePokedex = usePokedex as jest.Mock<any>
vi.mock("../../hooks/usePokedex")

describe("Page Home", () => {
  const mockData = {
    count: 1154,
    next: "http://localhost:5000/pokemon/3",
    previous: "http://localhost:5000/pokemon/1",
    results: [
      {
        name: "starmie",
        url: "http://localhost:5000/pokemon/starmie/123",
      },
    ],
  }

  beforeEach(() => {
    mockedUsePokedex.mockImplementation(() => ({ data: mockData }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  const queryClient = new QueryClient()

  it("should title", () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByRole("link")).toBeInTheDocument()
    expect(getByRole("link")).toHaveAttribute("href", "/")
  })
})
