import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MyRoutes } from "./routes/Routes"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MyRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
