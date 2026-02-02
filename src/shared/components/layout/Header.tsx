export const Header = () => {
  return (
    <div className="h-full flex items-center justify-between px-6">
      {/* Título da página (depois será dinâmico) */}
      <h1 className="text-sm font-medium">Dashboard</h1>

      {/* Área do usuário */}
      <div className="text-sm text-gray-600">Usuário</div>
    </div>
  )
}
