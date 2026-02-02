import { Navigate } from "react-router-dom"
import { useAuth } from "../providers/useAuth"
import type { ReactNode } from "react"

export function AdminRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth()

  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
