import {
  IconHome,
  IconCrane,
  IconBuildings,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { useState } from "react";

const images = [
  "/images/Galeri/kantor4.jpeg",
  "/images/Galeri/kantor.jpeg",
  "/images/Galeri/kantor2.jpeg",
  "/images/Galeri/kantor3.jpeg",
];

const Content = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="about" className="bg-gray-50 font1">
      <div className="text-black max-w-screen-xl mx-auto w-full px-4 md:px-12 py-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
            CV. Colibri Dannata Success
          </h1>
          <p className="mt-3 text-base md:text-lg">
            Solusi terbaik untuk konstruksi atap berkualitas tinggi.
          </p>
        </header>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Kiri: Informasi Perusahaan */}
          <article className="bg-white p-8 shadow-lg rounded-xl w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Tentang Kami</h2>
            <p className="leading-relaxed text-sm md:text-base">
              <strong>CV. COLIBRI DANNATA SUCCESS</strong> adalah perusahaan
              berpengalaman yang berdiri sejak 2019, menyediakan desain dan
              pemasangan material konstruksi atap untuk proyek nasional.
            </p>
            <p className="mt-4 leading-relaxed text-sm md:text-base">
              Dengan kualifikasi yang terjamin, kami menyediakan berbagai produk
              Atap Baja Ringan dan Waterproofing yang mendukung pembangunan di
              Indonesia.
            </p>
            {/* Highlight Box */}
            <blockquote className="mt-6 p-4 bg-blue-100 border-l-4 border-secondary rounded">
              <p className="text-secondary font-medium text-sm md:text-base">
                “Kami berkomitmen memberikan solusi terbaik untuk konstruksi
                atap yang kuat dan tahan lama.”
              </p>
            </blockquote>
          </article>

          {/* Kanan: Layanan */}
          <section className="text-black space-y-6 w-full">
            <h2 className="text-xl md:text-2xl font-bold">Layanan Kami</h2>
            {[
              {
                icon: <IconHome stroke={2} />,
                text: "Jasa pekerjaan Roofing dan Waterproofing",
              },
              {
                icon: <IconCrane stroke={2} />,
                text: "Pemasangan Rangka Baja Berat dan Rangka Baja Ringan",
              },
              {
                icon: <IconBuildings stroke={2} />,
                text: "Distributor / Supplier Atap",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full"
              >
                <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                  {service.icon}
                </div>
                <p className="text-sm md:text-lg">{service.text}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Visi & Misi */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Teks Visi & Misi */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">
              Tujuan
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Visi</h3>
            <p className="text-justify mb-4 text-sm md:text-base">
              Menjadikan CV. COLIBRI DANNATA SUCCESS menjadi perusahaan yang
              maju dan berkembang dalam bidang usaha Perdagangan Umum, Supplier
              dan Jasa dan juga Kontraktor.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Misi</h3>
            <ul className="list-disc text-sm md:text-base pl-5">
              <li className="text-justify">
                Memberikan dan menjaga komitmen untuk berkembang dan maju
                bersama dengan mengutamakan kualitas dan pelayanan optimal
                kepada para rekanan, klien dan mitra bisnis.
              </li>
              <li>
                Memberikan kesejahteraan bagi karyawan, Pemilik serta untuk
                pengembangan usaha.
              </li>
            </ul>
          </section>
          {/* Gambar dengan Navigasi */}
          <figure className="flex justify-center relative">
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-secondary p-2 rounded-full shadow-md hover:bg-secondary/90 text-white"
            >
              <IconChevronLeft stroke={2} />
            </button>
            <img
              className="rounded-lg"
              src={images[currentImage]}
              alt="Galeri Kantor"
            />
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary p-2 rounded-full shadow-md hover:bg-secondary/90 text-white"
            >
              <IconChevronRight stroke={2} />
            </button>
          </figure>
        </div>

        {/* Human Capital */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Gambar */}
          <figure className="flex justify-center">
            <img
              className="rounded-lg"
              src="/images/Galeri/human.png"
              alt="Human Capital"
            />
          </figure>
          {/* Teks Human Capital */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-right">
              Human Capital
            </h2>
            <p className="text-justify text-sm md:text-base">
              Kami percaya bahwa sumber daya manusia yang berkualitas adalah
              aset terbesar perusahaan. Oleh karena itu, kami selalu berusaha
              menciptakan lingkungan kerja yang kondusif, meningkatkan
              keterampilan karyawan, dan memberikan kesempatan bagi mereka untuk
              berkembang bersama perusahaan.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Content;
