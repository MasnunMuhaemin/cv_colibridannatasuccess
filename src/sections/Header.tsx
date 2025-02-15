import { useState, useEffect } from "react";

const images = [
  "/images/PRODUK/CTI/CTIBrosur.jpg",
  "/images/PRODUK/CTI/CTIBrosur2.jpg",
  "/images/PRODUK/CTI/CTIBrosur3.jpg",
  "/images/PRODUK/CTI/CTIBrosur4.jpg",
  "/images/PRODUK/CTI/CTIBrosur5.jpg",
  "/images/PRODUK/CTI/CTIBrosur6.jpg",
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
