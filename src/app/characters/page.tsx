export default function Characters() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Personagem 1" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Nome do Personagem 1</h2>
            <p className="text-gray-700">Descrição breve do personagem 1.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Personagem 2" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Nome do Personagem 2</h2>
            <p className="text-gray-700">Descrição breve do personagem 2.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400" alt="Personagem 3" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Nome do Personagem 3</h2>
            <p className="text-gray-700">Descrição breve do personagem 3.</p>
          </div>
        </div>

      </div>
  </div>
  )
}
