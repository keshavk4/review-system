"use client";
import React, { useState } from 'react';

const StarComponent = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={`bg-transparent border-none cursor-pointer text-5xl ${index <= (hover || rating) ? "text-[#ffd700]" : "text-[#808080]"}`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        &#9733;
                    </button>
                );
            })}
        </div>
    );
};

export default StarComponent;
