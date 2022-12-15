import React from "react"
import ReactDOM from "react-dom/client"
import { Router } from "./page"
import "./index.css"

import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>
)
