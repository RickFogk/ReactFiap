import Card from "@/components/card";

export default function Header(){
  return (
      <header className="p-6 bg-black shadow-md text-white">
          <h1 className="text-5xl font-bold mb-4">WonderWatches</h1>
          <ul className="flex space-x-4">
              <li>
                  <a href="/" className="hover:underline">Home</a>
              </li>
              <li>
                  <a href="/favoritos" className="hover:underline">Favoritos</a>
              </li>
          </ul>
      </header>
  );
}