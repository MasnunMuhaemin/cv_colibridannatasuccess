import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  { id: 1, image: "/images/RBshera/onepluscassia.jpg", name: "Roof Eaves One Puls Cassia Uncolored" },
  { id: 2, image: "/images/RBshera/smoothcoralwhite.jpg", name: "Roof Eaves Pro Smooth Coral White" },
  { id: 3, image: "/images/RBshera/smoothhoneyteakbrown.jpg", name: "Roof Eaves Pro Smooth Honey Teak Brown" },
  { id: 4, image: "/images/RBshera/Zedarblack.jpg", name: "Zedar Black Wenge Mixed" },
  { id: 5, image: "/images/RBshera/Zedarbrown.jpg", name: "Zedar Shake Brown Chesnut Mixed" },
  { id: 6, image: "/images/RBshera/Zedarmetrogrey.jpg", name: "Zedar Shake Metro Grey Mixed" },
  { id: 7, image: "/images/RBshera/Zedaryellow.jpg", name: "Zedar Shake Yellow Zante Mixed" },
];

const Cardsilikat = () => {
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
    const brandName = "Atap RB Shera"; // Tambahkan nama brand
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="font1 text-black p-4 relative mt-20">
      <h2 className="text-xl font-bold text-center md:text-left">
        Produk Papan Silikat
      </h2>

      <div className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        <div className="absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/RBshera/rbshera.png"
            alt="Logo RB Shera"
            className="w-20 md:w-28 h-auto"
          />
          <div>
            <h4 className="text-md font-semibold">Atap RB Shera</h4>
            <p className="text-xs">
              Atap RB Shera berkualitas tinggi dengan daya tahan terhadap
              cuaca ekstrem.
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
              </div>
            ))}
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2 items-center">
          <a
            href="/images/Brosur/Brosur RB Shera.pdf"
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

export default Cardsilikat;
