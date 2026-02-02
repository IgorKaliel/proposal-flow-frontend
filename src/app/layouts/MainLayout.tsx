import { Outlet } from "react-router-dom"
import { Sidebar } from "@/shared/components/layout/Sidebar"
import { Header } from "@/shared/components/layout/Header"

export function MainLayout() {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <Sidebar />
      </aside>

      {/* Área da aplicação */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b bg-white">
          <Header />
        </header>

        {/* Conteúdo dinâmico */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
