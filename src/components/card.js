"use client";
import {useState,useEffect} from "react";
import {HeartIcon} from '@heroicons/react/24/solid'
import {HeartIcon as HeartIconOutline} from '@heroicons/react/24/outline'

function Card({data}) {

    const [ favorito, setFavorito ] = useState(false) // hooks

    useEffect(() => {
        let favoritos = JSON.parse( localStorage.getItem("favoritos") ) || []
        const favorito = favoritos.find(item => item.id === data.id)
        setFavorito(favorito)
    }, [])

    const [rating, setRating] = useState(0);

    const handleClick = (value) => {
        setRating(value);
    };

    function favoritar() {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        favoritos.push(data);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        setFavorito(true);
    }

    function desfavoritar() {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        let index = favoritos.findIndex(item => item.id === data.id);
        if (index > -1) {
            favoritos.splice(index, 1);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }
        setFavorito(false);
    }

    return (

        <div className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">

            {favorito ?
                <HeartIcon
                    className="h-6 w-6 text-red-600 top-1 right-2 cursor-pointer"
                    onClick={desfavoritar}
                />
                :
                <HeartIconOutline
                    className="h-6 w-6 top-1 right-2 cursor-pointer hover:text-red-600"
                    onClick={favoritar}
                />
            }

            <div className="relative pb-56 mb-2" style={{paddingBottom: '56.25%'}}>

                <div className="absolute top-0 left-0 w-full h-full bg-gray-600">
                    <img src={data.url} alt={data.title} className="w-full h-full object-cover rounded-md"/>
                </div>
            </div>
            <h3 className="text-xl mb-2">{data.title}</h3>
            <div>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        role="img"
                        aria-label="star"
                        onClick={() => handleClick(index + 1)}
                        style={{cursor: 'pointer'}}
                    >
            {index < rating ? '⭐️' : '☆'}
          </span>
                ))}
            </div>
            <p>Rating: {rating} out of 5</p>
        </div>
    );
}

export default Card;
