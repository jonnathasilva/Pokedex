import { describe, expect, afterEach, beforeEach, vi } from "vitest"
import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter } from "react-router-dom"

import { Card } from "./index"
import { usePokemon } from "@/hooks"

const mockedUsePokemon = usePokemon as jest.Mock<any>
vi.mock("../../hooks/usePokemon")

describe("Component Card", () => {
  const queryClient = new QueryClient()
  const url = "http://localhost:5000/"

  const mockData = {
    types: [{ type: { name: "ground" } }],
    sprites: {
      front_default: "http://localhost:5000/img/1",
    },
    name: "rhyhorn",
  }

  beforeEach(() => {
    mockedUsePokemon.mockImplementation(() => ({ isLoading: false, data: mockData }))
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should show Loading", () => {
    mockedUsePokemon.mockImplementation(() => ({ isLoading: true }))

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
