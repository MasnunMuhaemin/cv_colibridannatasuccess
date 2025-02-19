import { useState, useEffect } from "react";

const images = [
  "/images/Hero/CTIBrosur.jpg",
  "/images/Hero/CTIBrosur2.jpg",
  "/images/Hero/CTIBrosur3.jpg",
  "/images/Hero/CTIBrosur4.jpg",
  "/images/Hero/CTIBrosur5.jpg",
  "/images/Hero/Hero1.jpg",
  "/images/Hero/Hero2.jpeg",
  "/images/Hero/Hero3.jpg",
  "/images/Hero/Hero4.jpg",
  "/images/Hero/Hero5.jpeg",
  "/images/Hero/Hero6.jpg",
  "/images/Hero/Hero7.jpeg",
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-screen h-[calc(100vh-90px)] flex items-center justify-center mt-0 md:mt-12">
      {/* Container untuk Gambar */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain md:object-fill transition-all duration-700"
        />
      </div>

      {/* Indikator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
