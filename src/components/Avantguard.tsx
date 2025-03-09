import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    image: "/images/AVANTGUARD/Abu.jpg",
    name: "UPVC 3 Lapis Tipe T Abu-Abu",
  },
  {
    id: 2,
    image: "/images/AVANTGUARD/Biru.jpg",
    name: "UPVC 3 Lapis Tipe T Biru",
  },
  {
    id: 3,
    image: "/images/AVANTGUARD/Hijau.jpg",
    name: "UPVC 3 Lapis Tipe T Hijau",
  },
  {
    id: 4,
    image: "/images/AVANTGUARD/Putih.jpg",
    name: "UPVC 3 Lapis Tipe T Putih",
  },
  {
    id: 5,
    image: "/images/AVANTGUARD/Translite.jpg",
    name: "UPVC 3 Lapis Tipe T Translite",
  },
];

const Avantguard = () => {
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
    const brandName = "Atap Avantguard";
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="font1 p-4">
      {/* Header Section */}
      <header className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        <div className="text-black absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/AVANTGUARD/logo.png"
            alt="Logo AVANTGUARD"
            className="w-40 md:w-auto h-16 bg-black"
          />
          <div>
            <h1 className="text-md font-semibold">Atap Avantguard</h1>
            <p className="text-xs">
              Atap Avantguard berkualitas tinggi dengan daya tahan terhadap
              cuaca ekstrem.
            </p>
          </div>
        </div>

        {/* Products List */}
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
                      Atap tangguh dan stylish untuk hunian dan bangunan modern.
                    </p>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                      aria-label={`Beli produk ${product.name}`}
                    >
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Navigation */}
        <nav className="absolute bottom-4 right-4 flex gap-2 items-center">
          <button
            onClick={prevSlide}
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
            aria-label="Produk sebelumnya"
          >
            <IconChevronLeft size={30} />
          </button>

          <button
            onClick={nextSlide}
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
            aria-label="Produk selanjutnya"
          >
            <IconChevronRight size={30} />
          </button>
        </nav>
      </header>
    </section>
  );
};

export default Avantguard;
