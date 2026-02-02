import { createContext } from "react"

export type UserRole = "USER" | "ADMIN"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

export interface AuthContextData {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextData | null>(null)
