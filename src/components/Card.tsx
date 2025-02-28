import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  { id: 1, image: "/images/GAF/AshBrown.jpg", name: "Ash Brown" },
  { id: 2, image: "/images/GAF/AutumnBrown.jpg", name: "Auntumn Brown" },
  { id: 3, image: "/images/GAF/Charcoal.jpg", name: "Charcoal" },
  { id: 4, image: "/images/GAF/Goldencedar.jpg", name: "Golden Cedar" },
  { id: 5, image: "/images/GAF/Hickory.jpg", name: "Hickory" },
  { id: 6, image: "/images/GAF/Shakewood.jpg", name: "Shake Wood" },
  { id: 7, image: "/images/GAF/Slate.jpg", name: "Slate" },
  { id: 8, image: "/images/GAF/Royalsovereign/AshBrown.jpg", name: "Royal Sovereign Ash Brown" },
  { id: 9, image: "/images/GAF/Royalsovereign/AutumnBrown.jpg", name: "Royal Sovereign Autumn Brown" },
  { id: 10, image: "/images/GAF/Royalsovereign/Charcoal.jpg", name: "Royal Sovereign Charcoal" },
  { id: 11, image: "/images/GAF/Royalsovereign/Goldencedar.jpg", name: "Royal Sovereign Golden Cedar" },
  { id: 12, image: "/images/GAF/Royalsovereign/Slate.jpg", name: "Royal Sovereign Slate" },
  { id: 13, image: "/images/GAF/Timberline/Charcoal.jpg", name: "Timberline Slate" },
  { id: 14, image: "/images/GAF/Timberline/Hickory.jpg", name: "Timberline Slate" },
  { id: 15, image: "/images/GAF/Timberline/Shakewood.jpg", name: "Timberline Slate" },
  { id: 16, image: "/images/GAF/Timberline/Slate.jpg", name: "Timberline Slate" },
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
    const brandName = "Atap GAF"; // Tambahkan nama brand
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div id="produk" className="p-4">
      <div className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        <div className="text-black absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/GAF/GAF.png"
            alt="Logo GAF"
            className="w-20 md:w-28 h-16"
          />
          <div>
            <h4 className="text-md font-semibold">Atap GAF</h4>
            <p className="text-xs">
              Atap GAF berkualitas tinggi dengan daya tahan terhadap cuaca
              ekstrem.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full mt-20 justify-center">
          {products
            .slice(startIndex, startIndex + itemsPerPage)
            .map((product) => (
              <div key={product.id} className="w-full md:w-1/3">
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
                    >
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2 items-center">
          <a
            href="/images/Brosur/Brosur GAF1.pdf"
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
        </div>
      </div>
    </div>
  );
};

export default Card;
