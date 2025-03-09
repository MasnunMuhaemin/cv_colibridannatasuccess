import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    image: "/images/GAF/Royalsovereign/AshBrown.jpg",
    name: "Royal Sovereign Ash Brown",
  },
  {
    id: 2,
    image: "/images/GAF/Royalsovereign/AutumnBrown.jpg",
    name: "Royal Sovereign Autumn Brown",
  },
  {
    id: 3,
    image: "/images/GAF/Royalsovereign/Charcoal.jpg",
    name: "Royal Sovereign Charcoal",
  },
  {
    id: 4,
    image: "/images/GAF/Royalsovereign/Goldencedar.jpg",
    name: "Royal Sovereign Golden Cedar",
  },
  {
    id: 5,
    image: "/images/GAF/Royalsovereign/Slate.jpg",
    name: "Royal Sovereign Slate",
  },
  {
    id: 6,
    image: "/images/GAF/Timberline/Charcoal.jpg",
    name: "Timberline Charcoal",
  },
  {
    id: 7,
    image: "/images/GAF/Timberline/Hickory.jpg",
    name: "Timberline Hickory",
  },
  {
    id: 8,
    image: "/images/GAF/Timberline/Shakewood.jpg",
    name: "Timberline Shakewood",
  },
  {
    id: 9,
    image: "/images/GAF/Timberline/Slate.jpg",
    name: "Timberline Slate",
  },
];

const Card = () => {
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
    const brandName = "Atap GAF";
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="produk" className="font1 text-black p-4">
      <h2 className="text-xl font-bold text-center md:text-left">
        Produk Atap BITUMEN
      </h2>

      <div className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        {/* Informasi Produk */}
        <header className="absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/GAF/GAF.png"
            alt="Logo GAF"
            className="w-20 md:w-28 h-16"
          />
          <div>
            <h3 className="text-md font-semibold">Atap GAF</h3>
            <p className="text-xs">
              Atap GAF berkualitas tinggi dengan daya tahan terhadap cuaca
              ekstrem.
            </p>
          </div>
        </header>

        {/* Daftar Produk */}
        <div className="flex flex-col md:flex-row gap-4 w-full mt-20 justify-center">
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
                    <figcaption className="sr-only">{product.name}</figcaption>
                  </figure>
                  <div className="p-4 flex flex-col justify-between h-full group-hover:text-white">
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-white">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 mb-4 group-hover:text-white">
                      Atap tangguh dan stylish untuk hunian dan bangunan modern.
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

        {/* Navigasi dan Brosur */}
        <nav className="absolute bottom-4 right-4 flex gap-2 items-center">
          <a
            href="/images/Brosur/Brosur GAF1.pdf"
            download
            className="bg-secondary/75 text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary/100 hover:shadow-lg transition duration-300"
          >
            Download Brosur
          </a>

          <button
            onClick={prevSlide}
            aria-label="Produk sebelumnya"
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
          >
            <IconChevronLeft size={30} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Produk berikutnya"
            className="p-3 text-white bg-secondary/75 rounded-full hover:bg-secondary/95 shadow-md"
          >
            <IconChevronRight size={30} />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default Card;
