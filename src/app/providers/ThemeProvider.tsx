import { type ReactNode } from "react"
import { ThemeContext, type Theme } from "./ThemeContext"

const defaultTheme: Theme = {
  colors: {
    primary: "#4F46E5",
    background: "#F9FAFB",
    text: "#111827",
  },
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
