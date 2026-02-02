import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { AdminRoute } from "./AdminRoute"

function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
function Login() {
  return <h1>Login</h1>
}
function Dashboard() {
  return <h1>Dashboard</h1>
}
function AdminPanel() {
  return <h1>Admin</h1>
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Privadas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
