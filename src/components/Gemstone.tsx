import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    image: "/images/GEMSTONE/3tabasphaltshingle/Auntumnbrown.jpg",
    name: "3 Tab Asphalt Shingle Auntumn Brown",
  },
  {
    id: 2,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedchateaugreen.jpg",
    name: "3 Tab Asphalt Shingle Mixed Chateau Green",
  },
  {
    id: 3,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixeddeserttan.jpg",
    name: "3 Tab Asphalt Shingle Mixed Desert Tan",
  },
  {
    id: 4,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedestategray.jpg",
    name: "3 Tab Asphalt Shingle Mixed Estate Gray",
  },
  {
    id: 5,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedharborblue.jpg",
    name: "3 Tab Asphalt Shingle Mixed Harbor Blue",
  },
  {
    id: 6,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedmahogany.jpg",
    name: "Mixed Mahogany",
  },
  {
    id: 7,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedonyxblack.jpg",
    name: "3 Tab Asphalt Shingle Mixed Onyx Black",
  },
  {
    id: 8,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedsnowwhite.jpg",
    name: "3 Tab Asphalt Shingle Mixed Snow White",
  },
  {
    id: 9,
    image: "/images/GEMSTONE/3tabasphaltshingle/Mixedterracotta.jpg",
    name: "3 Tab Asphalt Shingle Mixed Terra Cota",
  },
  {
    id: 10,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedbrownwood.jpg",
    name: "Architectural Asphalt Shingle Mixed Brown Wood",
  },
  {
    id: 11,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedchateaugreen.jpg",
    name: "Architectural Asphalt Shingle Mixed Chateau Green",
  },
  {
    id: 12,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixeddeserttan.jpg",
    name: "Architectural Asphalt Shingle Mixed Desert Tan",
  },
  {
    id: 13,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedestategray.jpg",
    name: "Architectural Asphalt Shingle Mixed Estate Gray",
  },
  {
    id: 14,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedharborblue.jpg",
    name: "Architectural Asphalt Shingle Mixed Harbor Blue",
  },
  {
    id: 15,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedmohagany.jpg",
    name: "Architectural Asphalt Shingle Mixed Mahogany",
  },
  {
    id: 16,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedonyxblack.jpg",
    name: "Architectural Asphalt Shingle Mixed Onyx Black",
  },
  {
    id: 17,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedorangered.jpg",
    name: "Architectural Asphalt Shingle Mixxed Orange Red",
  },
  {
    id: 18,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedsnowwhite.jpg",
    name: "Architectural Asphalt Shingle Thunder Storm Grey",
  },
  {
    id: 19,
    image: "/images/GEMSTONE/architecruralasphaltshingle/Mixedterracotta.jpg",
    name: "Architectural Asphalt Shingle Thunder Storm Grey",
  },
];

const Gemstone = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % products.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? products.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const handleWhatsApp = (productName: string): void => {
    const phone = "+6282123572533";
    const brandName = "Atap Gemstone"; // Tambahkan nama brand
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <section className="font1 p-4">
      <article className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        <header className="text-black absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/GEMSTONE/Gemstone.jpg"
            alt="Logo Gemstone"
            className="w-20 md:w-28 h-16"
          />
          <div>
            <h4 className="text-md font-semibold">Atap Gemstone</h4>
            <p className="text-xs">
              Atap Gemstone berkualitas tinggi dengan daya tahan terhadap cuaca
              ekstrem.
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-4 w-full mt-20 justify-center">
          {products
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => (
              <article key={product.id} className="w-full md:w-1/3">
                <div className="group border border-secondary rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 md:h-64 object-cover object-center"
                  />
                  <div className="p-4 flex flex-col justify-between h-full group-hover:text-white">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-white">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mb-4 group-hover:text-white">
                      Atap berkualitas tinggi untuk rumah dan bangunan modern.
                    </p>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>

        <nav className="absolute bottom-4 right-4 flex gap-2 items-center">
          <a
            href="/images/Brosur/Brosur Gemstone.pdf"
            download
            className="bg-secondary/75 text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary/100 hover:shadow-lg transition duration-300"
          >
            Download Brosur
          </a>

          <button
            onClick={prevSlide}
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
          >
            <IconChevronLeft size={30} />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
          >
            <IconChevronRight size={30} />
          </button>
        </nav>
      </article>
    </section>
  );
};

export default Gemstone;
