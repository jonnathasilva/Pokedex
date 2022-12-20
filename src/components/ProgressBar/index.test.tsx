import { describe, expect } from "vitest"
import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter } from "react-router-dom"

import { ProgressBar } from "./index"

describe("Componont ProgressBar", () => {
  const queryClient = new QueryClient()

  const mockData = {
    name: "HP",
    base_stat: 119,
    mx: 250,
  }

  it("should show name", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <ProgressBar mx={mockData.mx} name={mockData.name} base_stat={mockData.base_stat} key={mockData.name} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(mockData.name)).toBeInTheDocument()
  })

  it("should show percentage of progress", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <ProgressBar mx={mockData.mx} name={mockData.name} base_stat={mockData.base_stat} key={mockData.name} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByText(`${mockData.base_stat}/${mockData.mx}`)).toBeInTheDocument()
  })

  it("should show progress", () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/pokemon/?name=rhyhorn&page=1"]}>
          <ProgressBar mx={mockData.mx} name={mockData.name} base_stat={mockData.base_stat} key={mockData.name} />
        </MemoryRouter>
      </QueryClientProvider>
    )

    expect(getByRole("progressbar")).toBeInTheDocument()
    expect(getByRole("progressbar")).toHaveAttribute("max", `${mockData.mx}`)
    expect(getByRole("progressbar")).toHaveAttribute("value", `${mockData.base_stat}`)
  })
})
