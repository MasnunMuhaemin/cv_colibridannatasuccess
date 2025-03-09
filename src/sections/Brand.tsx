import { useState, useEffect } from "react";

const images = [
  { src: "/images/BSK/BSK.png", alt: "BSK Brand Logo" },
  { src: "/images/CTI/logo.png", alt: "CTI Brand Logo" },
  { src: "/images/DRAGON/Dragon.png", alt: "Dragon Brand Logo" },
  { src: "/images/FIRESCREEN/Firescreen.png", alt: "Firescreen Brand Logo" },
  { src: "/images/GAF/GAF.png", alt: "GAF Brand Logo" },
  { src: "/images/GEMSTONE/Gemstone.jpg", alt: "Gemstone Brand Logo" },
  { src: "/images/Maxxi/Maxxi.jpg", alt: "Maxxi Brand Logo" },
  { src: "/images/Membran/Membran.jpg", alt: "Membran Brand Logo" },
  { src: "/images/OWEN/Owens.png", alt: "Owens Brand Logo" },
  { src: "/images/TAMCO/Tamco.png", alt: "Tamco Brand Logo" },
  { src: "/images/TEGOLA/Tegola.png", alt: "Tegola Brand Logo" },
  { src: "/images/VICTORY/Victory.png", alt: "Victory Brand Logo" },
  { src: "/images/Primasupreme/logo.png", alt: "Primasupreme Brand Logo" },
  { src: "/images/RBshera/rbshera.png", alt: "RB Shera Brand Logo" },
  { src: "/images/Robertson/logo.png", alt: "Robertson Brand Logo" },
  { src: "/images/MATTAKA/logo.png", alt: "Mattaka Brand Logo" },
  { src: "/images/ALDERON/Alderon.png", alt: "Alderon Brand Logo" },
  { src: "/images/AVANTGUARD/logo.png", alt: "Avantguard Brand Logo" },
];

const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 5;
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalImages ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section
      aria-label="Brand Logos"
      className="my-20 overflow-hidden"
    >
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
          transition:
            currentIndex === totalImages ? "none" : "transform 0.5s ease-in-out",
        }}
        onTransitionEnd={() => {
          if (currentIndex === totalImages) {
            setCurrentIndex(0);
          }
        }}
      >
        {[...images, ...images].map((img, index) => (
          <figure
            key={index}
            className="flex-shrink-0 w-36 h-24 flex justify-center items-center bg-white rounded-lg shadow-md border"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain rounded-md"
            />
            <figcaption className="sr-only">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Brand;
