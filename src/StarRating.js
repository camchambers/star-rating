import React, { useState } from 'react';
import Star from './Star';

const createArray = (length) => [
    ...Array(length)
];

function StarRating({ totalStars = 5 }) {
    const [selectedStars, setSelectedStars] = useState(0);
    console.log(createArray(5));
    return (
        <div class='stars'>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => setSelectedStars(i + 1)}
                />
            ))}
            <p>{selectedStars} of {totalStars}</p>
        </div>
    );
}

export default StarRating;