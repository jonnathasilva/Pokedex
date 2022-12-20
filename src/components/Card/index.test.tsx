import { describe, expect, afterEach, beforeEach } from "vitest"
import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter } from "react-router-dom"

import { Card } from "./index"
import { usePokemon } from "@/hooks"

const mockedUsePokemon = usePokemon as jest.Mock<any>
vi.mock("../../hooks/usePokemon")

describe("Component Card", () => {
  beforeEach(() => {
    mockedUsePokemon.mockImplementation(() => ({ isLoading: false }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  const queryClient = new QueryClient()
  const url = "http://localhost:5000/"

  const mockData = {
    types: [{ type: { name: "ground" } }],
    sprites: {
      front_default: "http://localhost:5000/img/1",
    },
    name: "rhyhorn",
  }

  it("should show Loading", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Card url={url} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByTestId("loading")).toBeInTheDocument()
  })

  it("should redirect to profile", () => {
    mockedUsePokemon.mockImplementation(() => ({ isLoading: false, data: mockData }))

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Card url={url} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByRole("link")).toHaveAttribute("href", `/pokemon/?name=${mockData.name}&page=1`)
  })

  it("should show image", () => {
    mockedUsePokemon.mockImplementation(() => ({ isLoading: false, data: mockData }))

    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Card url={url} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByRole("img")).toHaveAttribute("src", mockData.sprites.front_default)
    expect(getByRole("img")).toHaveAttribute("alt", mockData.name)
  })

  it("should show pokemon name", () => {
    mockedUsePokemon.mockImplementation(() => ({ isLoading: false, data: mockData }))

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <Card url={url} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(mockData.name)).toBeInTheDocument()
  })
})
