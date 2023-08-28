import Image from 'next/image'


export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="p-6 bg-black shadow-md">
        <h1 className="text-5xl font-bold">WonderWatches</h1>
      </header>
      <main className="p-6">
        <h2 className="text-3xl mb-6">Catalog</h2>
        <div className="grid grid-cols-5 gap-4">
          {/* Placeholder para os relógios. Você pode mapear um array de dados aqui para exibir cada relógio */}
          {[...Array(10)].map((_, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
              <div className="relative pb-56 mb-2"> {/* 56.25% é a proporção para 16:9 */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-600"></div>
              </div>
              <h3 className="text-xl mb-2">Watch {idx + 1}</h3>
              <p>Rating: ★★★★☆</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}


