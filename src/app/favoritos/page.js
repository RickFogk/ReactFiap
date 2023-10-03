"use client";

import Header from "../../components/Header";
import Card from '../../components/card'
import { useState, useEffect } from "react";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const savedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        setFavoritos(savedFavoritos);
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Header />
            <main className="p-6">
                <h2 className="text-3xl mb-6">Catalog</h2>
                <div className="grid grid-cols-5 gap-4">
                    {favoritos.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
            </main>
        </div>
    );
}
