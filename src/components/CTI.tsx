import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  { id: 1, image: "/images/CTI/blackct5.jpg", name: "Black CT 5" },
  { id: 2, image: "/images/CTI/blackct6.jpg", name: "Black CT 6" },
  { id: 3, image: "/images/CTI/blacksolid.jpg", name: "Black Solid" },
  { id: 4, image: "/images/CTI/charcoalgrey.jpg", name: "Charcoal Grey" },
  { id: 5, image: "/images/CTI/coffebrownct5.jpg", name: "Coffe Brown CT 5" },
  { id: 6, image: "/images/CTI/darkbrown.jpg", name: "Dark Brown" },
  { id: 7, image: "/images/CTI/darkbrownct5.jpg", name: "Dark Brown CT 5" },
  { id: 8, image: "/images/CTI/darkbrownct6.jpg", name: "Dark Brown CT 6" },
  { id: 9, image: "/images/CTI/darkgreyct3.jpg", name: "Dark Grey CT 3" },
  { id: 10, image: "/images/CTI/darkgreyct5.jpg", name: "Dark Grey CT 5" },
  { id: 11, image: "/images/CTI/darkgreyct6.jpg", name: "Dark Grey CT 6" },
  { id: 12, image: "/images/CTI/goldct5.jpg", name: "Gold CT 5" },
  { id: 13, image: "/images/CTI/goldct6.jpg", name: "GOld CT 6" },
  { id: 14, image: "/images/CTI/greenct5.jpg", name: "Green CT 5" },
  { id: 15, image: "/images/CTI/greenct6.jpg", name: "Green CT 6" },
  { id: 16, image: "/images/CTI/midnightct3.jpg", name: "Midnight CT 3" },
  { id: 17, image: "/images/CTI/redct5.jpg", name: "Red CT 5" },
  { id: 18, image: "/images/CTI/redct6.jpg", name: "Red CT 6" },
];

const Cardupvc = () => {
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
    const brandName = "Atap CTI";
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="font1 text-black p-4 relative">
      <section className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        <header className="absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/CTI/logo.png"
            alt="Logo CTI"
            className="w-20 md:w-28 h-auto"
          />
          <div>
            <h3 className="text-md font-semibold">Atap CTI</h3>
            <p className="text-xs">
              Atap CTI berkualitas tinggi dengan daya tahan terhadap cuaca ekstrem.
            </p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-4 w-full mt-20 justify-center">
          {products.slice(startIndex, startIndex + itemsPerPage).map((product) => (
            <article key={product.id} className="w-full md:w-1/3">
              <div className="group border border-secondary rounded-lg overflow-hidden transition duration-300 ease-in-out hover:bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover object-center"
                />
                <div className="p-4 flex flex-col justify-between h-full group-hover:text-white">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-white">
                    {product.name}
                  </h3>
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
            href="/images/Brosur/Brosur CTI.pdf"
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
      </section>
    </section>
  );
};

export default Cardupvc;