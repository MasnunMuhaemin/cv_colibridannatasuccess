import { useState, useEffect } from "react";

const images = [
  "/images/Hero/Hero1.jpg",
  "/images/Hero/Hero2.jpg",
  "/images/Hero/Hero3.jpg",
  "/images/Hero/Hero4.jpg",
  "/images/Hero/Hero5.jpg",
  "/images/Hero/Hero6.jpg",
  "/images/Hero/Hero7.jpeg",
  "/images/Hero/Hero8.jpg",
  "/images/Hero/Hero9.jpg",
  "/images/Hero/Hero10.jpg",
  "/images/Hero/CTIBrosur.jpg",
  "/images/Hero/CTIBrosur2.jpg",
  "/images/Hero/CTIBrosur3.jpg",
  "/images/Hero/CTIBrosur4.jpg",
  "/images/Hero/CTIBrosur5.jpg",
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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      className="relative w-screen h-[250px] md:h-screen flex items-center justify-center"
      aria-label="Gambar slideshow hero"
    >
      {/* Container untuk Gambar */}
      <figure className="absolute inset-0 w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[250px] md:h-full object-fill transition-all duration-700"
          aria-live="polite"
        />
      </figure>

      {/* Navigasi Manual */}
      <button
        onClick={prevSlide}
        className="absolute left-5 text-white bg-black/50 px-3 py-2 rounded-full"
        aria-label="Slide sebelumnya"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 text-white bg-black/50 px-3 py-2 rounded-full"
        aria-label="Slide berikutnya"
      >
        ❯
      </button>

      {/* Indikator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;
