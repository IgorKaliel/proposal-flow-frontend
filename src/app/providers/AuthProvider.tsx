import { useState, useMemo, type ReactNode } from "react"
import { AuthContext, type User } from "./AuthContext"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  function login(userData: User) {
    setUser(userData)
  }

  function logout() {
    setUser(null)
  }

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
