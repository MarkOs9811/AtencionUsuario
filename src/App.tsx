import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { AppRouter } from "./AppRouter"
// import AuthLayOut from "./auth/layout/AuthLayOut"
// import ChatLayOut from "./chat/layout/ChatLayOut"
// import ChatPages from "./chat/pages/ChatPages"


// Create a client
const queryClient = new QueryClient()

function App() {

  return (

    <>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
