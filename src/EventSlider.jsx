import React, { useState } from 'react';

import e1 from './events/e1.jpg';
import e2 from './events/e2.jpg';
import e3 from './events/e3.jpg';
import e4 from './events/e4.jpg';

const EventSlider = () => {
    const Events = [
        { src: e1, text: "Event 1" },
        { src: e2, text: "Event 2" },
        { src: e3, text: "Event 3" },
        { src: e4, text: "Event 4" }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <h1
                className="heading text-4xl md:text-5xl lg:text-6xl m-3 text-center text-blue-900 font-bold transition-all duration-300 transform hover:scale-110 hover:text-blue-400"
                style={{ fontFamily: "'IBM Plex Serif', serif" }}
            >
                Events
            </h1>

            {Events.length > 0 && (
    <div className="slider flex justify-center items-center h-96 overflow-x-auto">
        {Events.map((event, index) => (
            <div
                key={index}
                className="relative overflow-hidden mx-4 rounded-sm shadow-lg md:w-72 sm:w-60 h-60"
                style={{ width: "300px", height: "300px" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={event.src}
                    alt={`Event ${index + 1}`}
                    className={`block w-full h-full absolute top-0 left-0 transition-all duration-300 transform ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                />
                {hoveredIndex === index && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center shadow- shadow-cyan-200">
                        {event.text}
                    </div>
                )}
            </div>
        ))}
    </div>
)}

        </>
    );
};

export default EventSlider;
