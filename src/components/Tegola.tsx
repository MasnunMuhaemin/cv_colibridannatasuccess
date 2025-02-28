import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const products = [
  {
    id: 1,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumgothik/Arabica.jpg",
    name: "Eco Roof Premium Arabica",
  },
  {
    id: 2,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumgothik/Granite.jpg",
    name: "Eco Roof Premium Granite",
  },
  {
    id: 3,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumgothik/Iceblue.jpg",
    name: "Eco Roof Premium Ice Blue",
  },
  {
    id: 4,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumgothik/Marinegreen.jpg",
    name: "Eco Roof Premium Mariine Green",
  },
  {
    id: 5,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumgothik/Tizianored.jpg",
    name: "Eco Roof Premium Tiziano Red",
  },
  {
    id: 6,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumgothik/Wood.jpg",
    name: "Eco Roof Premium Wood",
  },
  {
    id: 7,
    image: "/images/TEGOLA/Ecoroofpremium/Premiummosaik/Arabika.jpg",
    name: "Eco Roof Premium Arabika",
  },
  {
    id: 8,
    image: "/images/TEGOLA/Ecoroofpremium/Premiummosaik/Dark.jpg",
    name: "Eco Roof Premium Dark",
  },
  {
    id: 9,
    image: "/images/TEGOLA/Ecoroofpremium/Premiummosaik/Granite.jpg",
    name: "Eco Roof Premium Granite",
  },
  {
    id: 10,
    image: "/images/TEGOLA/Ecoroofpremium/Premiummosaik/Marinegreen.jpg",
    name: "Eco Roof Premium Marine Green",
  },
  {
    id: 11,
    image: "/images/TEGOLA/Ecoroofpremium/Premiummosaik/nuancedbrown.jpg",
    name: "Eco Roof Premium Nuanced Brown",
  },
  {
    id: 12,
    image: "/images/TEGOLA/Ecoroofpremium/Premiummosaik/Tizianored.jpg",
    name: "Eco Roof Premium Tiziano Red",
  },
  {
    id: 13,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumrectanguler/2-Tonegreen.jpg",
    name: "Eco Roof Premium Two Tone Green",
  },
  {
    id: 14,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumrectanguler/Black.jpg",
    name: "Eco Roof Premium Black",
  },
  {
    id: 15,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumrectanguler/Copperyred.jpg",
    name: "Eco Roof Premium Coppery Red",
  },
  {
    id: 16,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumrectanguler/darkbrown.jpg",
    name: "Eco Roof Premium Dark Brown",
  },
  {
    id: 17,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumrectanguler/nuancedbrown.jpg",
    name: "Eco Roof Premium Nuanced Brown",
  },
  {
    id: 18,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumrectanguler/Slategrey.jpg",
    name: "Eco Roof Premium Slate Grey",
  },
  {
    id: 19,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumtraditional/Antiquered.jpg",
    name: "Eco Roof Premium Antique Red",
  },
  {
    id: 20,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumtraditional/Arabica.jpg",
    name: "Eco Roof Premium Arabica",
  },
  {
    id: 21,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumtraditional/Cork.jpg",
    name: "Eco Roof Premium Cork",
  },
  {
    id: 22,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumtraditional/Indigo.jpg",
    name: "Eco Roof Premium Indigo",
  },
  {
    id: 23,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumtraditional/Olivegreen.jpg",
    name: "Eco Roof Premium Olive Green",
  },
  {
    id: 24,
    image: "/images/TEGOLA/Ecoroofpremium/Premiumtraditional/Slategrey.jpg",
    name: "Eco Roof Premium Slate Grey",
  },
  {
    id: 25,
    image: "/images/TEGOLA/ShinglesRectanguler/Blackrectangular.jpg",
    name: "Shingles Rectanguler Black Rectanguler",
  },
  {
    id: 26,
    image: "/images/TEGOLA/ShinglesRectanguler/Blacktraditional.jpg",
    name: "Shingles Rectanguler Black Traditional",
  },
  {
    id: 27,
    image: "/images/TEGOLA/ShinglesRectanguler/Purpleredrectangular.jpg",
    name: "Shingles Rectanguler Purple Red Rectangular",
  },
  {
    id: 28,
    image: "/images/TEGOLA/ShinglesRectanguler/Shadedbrownrectangular.jpg",
    name: "Shingles Rectanguler Shaded Brown Rectangular",
  },
  {
    id: 29,
    image: "/images/TEGOLA/ShinglesRectanguler/Shadedbrowntraditional.jpg",
    name: "Shingles Rectanguler Shaded Brown Traditional",
  },
  {
    id: 30,
    image: "/images/TEGOLA/ShinglesRectanguler/Shadedgreenrectangular.jpg",
    name: "Shingles Rectanguler Shaded Green Rectangular",
  },
  {
    id: 31,
    image: "/images/TEGOLA/ShinglesRectanguler/Shadedgreentraditional.jpg",
    name: "Shingles Rectanguler Shaded Green Traditional",
  },
  {
    id: 32,
    image: "/images/TEGOLA/ShinglesRectanguler/Shadedredrectangular.jpg",
    name: "Shingles Rectanguler Shaded Red Rectangular",
  },
  {
    id: 33,
    image: "/images/TEGOLA/ShinglesRectanguler/Slategreyrectangular.jpg",
    name: "Shingles Rectanguler Slate Grey Rectangular",
  },
  {
    id: 34,
    image: "/images/TEGOLA/ShinglesRectanguler/Slategreytraditional.jpg",
    name: "Shingles Rectanguler Slate Grey Traditional",
  },
  {
    id: 35,
    image: "/images/TEGOLA/ShinglesRectanguler/Terracotatraditional.jpg",
    name: "Shingles Rectanguler Teracota Traditional",
  },
  {
    id: 36,
    image: "/images/TEGOLA/ShinglesRectanguler/Uniredtraditional.jpg",
    name: "Shingles Rectanguler Unired Traditional",
  },
];

const Tegola = () => {
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
    const brandName = "Atap Tegola"; // Tambahkan nama brand
    const message = `Halo, saya ingin mengetahui produk ini lebih lanjut... ${brandName} - ${productName}.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
  return (
    <div className="font1 p-4">
      <div className="border border-secondary rounded-lg p-4 mt-2 pb-20 relative">
        <div className="text-black absolute left-4 top-4 flex items-start space-x-4">
          <img
            src="/images/TEGOLA/Tegola.png"
            alt="Logo Tegola"
            className="w-20 md:w-28 h-auto"
          />
          <div>
            <h4 className="text-md font-semibold">Atap Tegola</h4>
            <p className="text-xs">
              Atap Tegola berkualitas tinggi dengan daya tahan terhadap
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
                      Atap premium dengan daya tahan tinggi untuk hunian dan
                      bangunan masa kini.
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
            href="/images/Brosur/Brosur Genteng Tegola.pdf"
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

export default Tegola;
