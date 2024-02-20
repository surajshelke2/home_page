import React, { useState } from "react";
import image1 from "./assets/d1.jpg";
import image2 from "./assets/d2.jpg";
import image3 from "./assets/d3.jpg";
import image4 from "./assets/d4.jpg";

const ImageSlider = () => {
  const images = [image1, image2, image3,image4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-screen mx-auto mt-1 bg-gray-300">
    <div className="relative w-screen" style={{ height: "500px" }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            top: "0", // Ensure images start from the top
            maxHeight: "100%", // Ensure images stay within the container height
            maxWidth: "100%", // Ensure images stay within the container width
          }}
        />
      ))}
    </div>
  
  

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
        >
          &gt;
        </button>
      </div>
   
  );
};

export default ImageSlider;
