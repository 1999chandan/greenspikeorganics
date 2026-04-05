import React, { useState } from 'react';
import heroSec01 from '../assets/heroSec01.jfif';
import heroSec02 from '../assets/heroSec02.jfif';
import heroSec03 from '../assets/heroSec03.jpg';

const HeroSection = () => {
  const images = [
    heroSec01,
    heroSec02,
    heroSec03,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
              Welcome to GreenSpike Organics
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover our premium products and innovative solutions. We are committed to quality and sustainability in everything we do.
            </p>
            <button className="bg-leaf-green hover:bg-forest-green text-white px-6 py-3 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={images[currentImage]}
                alt={`Slide ${currentImage + 1}`}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              >
                ›
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImage ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;