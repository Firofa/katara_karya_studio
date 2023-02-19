import React, { useState, useEffect } from "react";

const images = [
  { id: 1, src: "src/assets/image/logo.jpeg", alt: "Image 1" },
  { id: 2, src: "https://fakeimg.pl/250x100/", alt: "Image 2" },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute top-1/2 left-0 right-0 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {images[currentImage].alt}
        </h2>
        <div className="flex items-center justify-center">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`w-4 h-4 mx-2 rounded-full ${
                index === currentImage ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
