import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    image: "/images/MATTAKA/LockSeal.png",
    name: "Lock Seal for Double Layer",
  },
  {
    id: 2,
    image: "/images/MATTAKA/Mattakadouble.png",
    name: "Mattaka Double Layer 760",
  },
  {
    id: 3,
    image: "/images/MATTAKA/MattakaEcoSingle.png",
    name: "Mattaka Super Double Layer DL-1060",
  },
  {
    id: 4,
    image: "/images/MATTAKA/MattakaEcoSingleSaga.png",
    name: "Mattaka Eco Single Saga 760",
  },
  {
    id: 5,
    image: "/images/MATTAKA/MattakaEcoSingleSaga1000.png",
    name: "Mattaka Eco Single Saga 1000",
  },
  {
    id: 6,
    image: "/images/MATTAKA/Mattakasuper.png",
    name: "Mattaka Super Double Layer DL-1060",
  },
  {
    id: 7,
    image: "/images/MATTAKA/Nokmattaka.png",
    name: "Nok Mattaka Double Layer",
  },
  {
    id: 8,
    image: "/images/MATTAKA/Nokmattakaeco.png",
    name: "Nok Mattaka Single Layer",
  },
  { id: 9, image: "/images/MATTAKA/NokWay.png", name: "Nok 3 Way" },
  {
    id: 10,
    image: "/images/MATTAKA/RoundedSeal.png",
    name: "Rounded Seal Set for Single Layer",
  },
];

const Mattaka = () => {
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
    const brandName = "Atap Mattaka";
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="font1 p-4">
      <div className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        {/* Header */}
        <header className="text-black absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/MATTAKA/logo.png"
            alt="Logo Atap Mattaka"
            className="w-20 md:w-28 h-16"
          />
          <div>
            <h4 className="text-md font-semibold">Atap Mattaka</h4>
            <p className="text-xs">
              Atap Mattaka berkualitas tinggi dengan daya tahan terhadap cuaca
              ekstrem.
            </p>
          </div>
        </header>

        {/* Produk */}
        <section className="flex flex-col md:flex-row gap-4 w-full mt-20 justify-center">
          {products
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => (
              <article key={product.id} className="w-full md:w-1/3">
                <div className="group border border-secondary rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-secondary">
                  <figure>
                    <img
                      src={product.image}
                      alt={`Gambar produk ${product.name}`}
                      className="w-full h-48 md:h-64 object-cover object-center"
                    />
                  </figure>
                  <div className="p-4 flex flex-col justify-between h-full group-hover:text-white">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-white">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mb-4 group-hover:text-white">
                      Atap tangguh dan stylish untuk hunian dan bangunan modern.
                    </p>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                      aria-label={`Beli ${product.name}`}
                    >
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </section>

        {/* Navigasi Slider */}
        <nav
          className="absolute bottom-4 right-4 flex gap-2 items-center"
          aria-label="Navigasi produk"
        >
          <button
            onClick={prevSlide}
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
            aria-label="Lihat produk sebelumnya"
          >
            <IconChevronLeft size={30} />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
            aria-label="Lihat produk berikutnya"
          >
            <IconChevronRight size={30} />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Mattaka;
