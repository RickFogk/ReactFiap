import Image from 'next/image'
import Card from '../components/card'

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
          <Card data={{ url: 'https://hodinkee.imgix.net/uploads/images/1530816924977-rgmy4ajytn-c2115c8da25ca086f80d998962a1c2cf/rolex_01.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&ar=16%3A9&w=1760', title: 'Seiko' }}/>
          <Card data={{ url: 'https://hodinkee.imgix.net/uploads/images/1530635536588-p7xqog4jizq-b7ea4ddb5f46e2c380b6bd8f4c6d3b1e/grandseiko.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&w=1640', title: 'Grand Seiko' }}/>
          <Card data={{ url: 'https://cdn.shopify.com/s/files/1/0609/1636/7523/files/Blue-K1-on-Blue-Perlon.jpg', title: 'IWC' }}/>
          <Card data={{ url: 'https://quillandpad.com/wp-content/uploads/2021/08/Jaquet-Droz-Grande-Seconde-Skelet-One-Tourbillon-Only-Watch.jpg', title: 'Jaquet Droz' }}/>
          <Card data={{ url: 'https://cdn.carbuzz.com/gallery-images/1600/1004000/500/1004527.jpg', title: 'IWC' }}/>
          <Card data={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jnqxPwvLTqFkt2ZT4BFetZ7zECA1uHRJrQ&usqp=CAU', title: 'SJX' }}/>
          <Card data={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0GhaddIsyJKsQzRP40BhMi7bjcfyLh0Gcw&usqp=CAU', title: '1bX5QH6' }}/>
          <Card data={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJw_eq2hT2fv9Z1Z8g2RLkQq5rNEMZL9-1JLbJtcQPZ-Ta1v4MFZF3WuZQ7-U7NGdLyak&usqp=CAU', title: 'Breguet' }}/>
          <Card data={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUcEy7pNJcp6oa0pyo4uaNB6K3EGWFjce9Q&usqp=CAU', title: 'Rolex' }}/>
          <Card data={{ url: 'https://monochrome-watches.com/wp-content/uploads/2021/07/Breguet-Type-XX-Only-Watch-2021-2065ST-1.jpg', title: 'Breguet' }}/>
        </div>
      </main>
    </div>
  )
}


