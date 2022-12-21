import { describe, expect, afterEach, beforeEach, vi } from "vitest"
import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter } from "react-router-dom"

import { Pokemon } from "./index"
import { usePokemon } from "@/hooks"

const mockedUsePokemon = usePokemon as jest.Mock<any>
vi.mock("../../hooks/usePokemon")

describe("Page Pokemon", () => {
  const queryClient = new QueryClient()

  const mockData = {
    types: [{ type: { name: "ground" } }],
    sprites: {
      front_default: "http://localhost:5000/img/1",
    },
    name: "rhyhorn",
    abilities: [
      {
        ability: {
          name: "swarm",
        },
      },
    ],
    weight: 560,
    height: 15,
    stats: [
      {
        base_stat: 70,
        stat: {
          name: "hp",
        },
      },
    ],
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
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByTestId("loading")).toBeInTheDocument()
  })

  it("should redirect to profile", () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByRole("link")).toHaveAttribute("href", "/?page=1")
  })

  it("should show image pokemon", () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByRole("img")).toHaveAttribute("src", `${mockData.sprites.front_default}`)
    expect(getByRole("img")).toHaveAttribute("alt", `${mockData.name}`)
  })

  it("should show pokemon name", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(mockData.name)).toBeInTheDocument()
  })

  it("should show abilities", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(mockData.abilities[0].ability.name)).toBeInTheDocument()
  })

  it("should show weight", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(`${mockData.weight} HG`)).toBeInTheDocument()
  })

  it("should show height", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <Pokemon />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(`${mockData.height} DM`)).toBeInTheDocument()
  })
})
