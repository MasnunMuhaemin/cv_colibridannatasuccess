import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    image: "/images/TAMCO/Eliteglass/antiqueslate.jpg",
    name: "Elite Glass Antique Slate",
  },
  {
    id: 2,
    image: "/images/TAMCO/Eliteglass/greenblend.jpg",
    name: "Elite Glass Green Blend",
  },
  {
    id: 3,
    image: "/images/TAMCO/Eliteglass/rusticblack.jpg",
    name: "Elite Glass Rustic Black",
  },
  {
    id: 4,
    image: "/images/TAMCO/Eliteglass/rusticredwood.jpg",
    name: "Elite Glass Rustic Red Wood",
  },
  {
    id: 5,
    image: "/images/TAMCO/Eliteglass/rusticcedar.jpg",
    name: "Elite Glass Rustic Cedar",
  },
  {
    id: 6,
    image: "/images/TAMCO/Eliteglass/tilered.jpg",
    name: "Elite Glass Tile Red",
  },
  {
    id: 7,
    image: "/images/TAMCO/Eliteglass/tweedblend.jpg",
    name: "Elite Glass Tweed Blend",
  },
  {
    id: 8,
    image: "/images/TAMCO/Eliteglass/weatheredwood.jpg",
    name: "Elite Glass Weather Red Wood",
  },
  {
    id: 9,
    image: "/images/TAMCO/Heritage/auntmnbrown.jpg",
    name: "Heritage Auntumn Brown",
  },
  {
    id: 10,
    image: "/images/TAMCO/Heritage/rusticblack.jpg",
    name: "Heritage Rustiic Black",
  },
  {
    id: 11,
    image: "/images/TAMCO/Heritage/rusticredwood.jpg",
    name: "Heritage Rustic Red",
  },
  {
    id: 12,
    image: "/images/TAMCO/Heritage/slatetonegrey.jpg",
    name: "Heritage Slateton Grey",
  },
  {
    id: 13,
    image: "/images/TAMCO/Heritage/thunderstormgrey.jpg",
    name: "Heritage Thunder Storm Grey",
  },
];

const Tamco = () => {
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
    const brandName = "Atap Tamco"; // Tambahkan nama brand
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
            src="/images/TAMCO/Tamco.png"
            alt="Logo Tamco"
            className="w-20 md:w-28 h-auto"
          />
          <div>
            <h1 className="text-md font-semibold">Atap Tamco</h1>
            <p className="text-xs">
              Atap Tamco berkualitas tinggi dengan daya tahan terhadap cuaca
              ekstrem.
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-4 w-full mt-20 justify-center">
          {products
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => (
              <article key={product.id} className="w-full md:w-1/3">
                <figure className="group border border-secondary rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 md:h-64 object-cover object-center"
                  />
                  <figcaption className="p-4 flex flex-col justify-between h-full group-hover:text-white">
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
                  </figcaption>
                </figure>
              </article>
            ))}
        </div>

        <nav className="absolute bottom-4 right-4 flex gap-2 items-center">
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

export default Tamco;
