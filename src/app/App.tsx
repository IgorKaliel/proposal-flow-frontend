import { AppRoutes } from "./routes"
import { QueryProvider } from "./providers/QueryProvider"
import { AuthProvider } from "./providers/AuthProvider"
import { ThemeProvider } from "./providers/ThemeProvider"

export default function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </QueryProvider>
  )
}
