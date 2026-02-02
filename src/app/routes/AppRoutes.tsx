import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { AdminRoute } from "./AdminRoute"
import { Home } from "@/shared/views/Home"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" />
        <Route path="/entrar" />
        <Route path="/esqueceu-senha" />

        {/* Privadas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <h1>Dashboard</h1>
              {/*<Dashboard />*/}
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute>
                {/*<AdminPanel />*/}
                <h1>Admin Panel</h1>
              </AdminRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
