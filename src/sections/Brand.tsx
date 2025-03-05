import { useState, useEffect } from "react";

const images = [
  "/images/BSK/BSK.png",
  "/images/CTI/logo.png",
  "/images/DRAGON/Dragon.png",
  "/images/FIRESCREEN/Firescreen.png",
  "/images/GAF/GAF.png",
  "/images/GEMSTONE/Gemstone.jpg",
  "/images/Maxxi/Maxxi.jpg",
  "/images/Membran/Membran.jpg",
  "/images/OWEN/Owens.png",
  "/images/TAMCO/Tamco.png",
  "/images/TEGOLA/Tegola.png",
  "/images/VICTORY/Victory.png",
  "/images/Primasupreme/logo.jpeg",
  "/images/RBshera/rbshera.png",
  "/images/Robertson/logo.png",
  "/images/MATTAKA/logo.png",
  "/images/ALDERON/Alderon.png",
  "/images/AVANTGUARD/logo.png",
];

const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5;
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= totalImages) {
          return 0; // Kembali ke awal setelah gambar terakhir
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div
      className="my-20 flex gap-4 transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
        transition:
          currentIndex === totalImages ? "none" : "transform 0.5s ease-in-out",
      }}
      onTransitionEnd={() => {
        if (currentIndex === totalImages) {
          setCurrentIndex(0); // Reset ke awal tanpa jeda
        }
      }}
    >
      {[...images, ...images].map((img, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-36 h-24 flex justify-center items-center bg-white rounded-lg shadow-md border"
        >
          <img
            src={img}
            alt="Brand Logo"
            className="w-full h-full object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Brand;
