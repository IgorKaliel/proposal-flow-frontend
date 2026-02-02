import { createContext } from "react"

export interface Theme {
  colors: {
    primary: string
    background: string
    text: string
  }
}

export const ThemeContext = createContext<Theme | null>(null)
