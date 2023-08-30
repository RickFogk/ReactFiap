export default function Card({data}) {
    return (
        <div className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
              <div className="relative pb-56 mb-2" > {/* 56.25% é a proporção para 16:9 */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-600 " >
                    <img src={data.url} className="w-full h-full object-cover rounded-md" />
                </div>
              </div>
              <h3 className="text-xl mb-2">{data.title} </h3>
              <p>Rating: ★★★★☆</p>
            </div>
    )
}