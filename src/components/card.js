"use client";
import { useState } from "react";

function Card({ data }) {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300">
      <div className="relative pb-56 mb-2" style={{ paddingBottom: '56.25%' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-600">
          <img src={data.url} alt={data.title} className="w-full h-full object-cover rounded-md" />
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
            style={{ cursor: 'pointer' }}
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
