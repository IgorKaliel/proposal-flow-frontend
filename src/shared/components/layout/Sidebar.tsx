import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Logo / Marca */}
      <div className="h-16 flex items-center justify-center border-b font-semibold">
        ProposalFlow
      </div>

      {/* Navegação */}
      <nav className="flex-1 p-4 space-y-2 text-sm">
        <NavLink
          to="/dashboard"
          className="block p-2 rounded hover:bg-gray-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/proposals"
          className="block p-2 rounded hover:bg-gray-100"
        >
          Propostas
        </NavLink>

        <NavLink to="/clients" className="block p-2 rounded hover:bg-gray-100">
          Clientes
        </NavLink>
      </nav>

      {/* Rodapé */}
      <div className="p-4 border-t text-xs text-gray-500">v0.1.0</div>
    </div>
  )
}
