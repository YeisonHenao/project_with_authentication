export const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">¡Lo sentimos! La página que estás buscando no se encuentra.</p>
        <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Volver a la página de inicio</a>
      </div>
    </div>
  )
}