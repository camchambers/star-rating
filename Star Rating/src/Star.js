import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onSelect }) {
    return (
        <FaStar
            color={selected ? "yellow" : "gray"}
            onClick={onSelect}
        />
    );
}

export default Star;
