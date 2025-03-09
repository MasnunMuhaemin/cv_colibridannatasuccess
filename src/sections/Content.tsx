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
          {/* Informasi Perusahaan */}
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
            <blockquote className="mt-6 p-4 bg-blue-100 border-l-4 border-secondary rounded">
              <p className="text-secondary font-medium text-sm md:text-base">
                “Kami berkomitmen memberikan solusi terbaik untuk konstruksi
                atap yang kuat dan tahan lama.”
              </p>
            </blockquote>
          </article>

          {/* Layanan Kami */}
          <section className="text-black space-y-6 w-full">
            <h2 className="text-xl md:text-2xl font-bold">Layanan Kami</h2>
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full">
              <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                <IconHome stroke={2} />
              </div>
              <p className="text-sm md:text-lg">
                Jasa pekerjaan Roofing dan Waterproofing
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full">
              <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                <IconCrane stroke={2} />
              </div>
              <p className="text-sm md:text-lg">
                Pemasangan Rangka Baja Berat dan Rangka Baja Ringan
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full">
              <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                <IconBuildings stroke={2} />
              </div>
              <p className="text-sm md:text-lg">Distributor / Supplier Atap</p>
            </div>
          </section>
        </div>

        {/* Visi & Misi */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          <article>
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-left">
              Tujuan
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Visi</h2>
            <p className="text-justify mb-4 text-sm md:text-base">
              Menjadikan CV. COLIBRI DANNATA SUCCESS menjadi perusahaan yang
              maju dan berkembang dalam bidang usaha Perdagangan Umum, Supplier,
              dan Jasa serta Kontraktor.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Misi</h2>
            <ul className="list-disc text-justify text-sm md:text-base">
              <li>
                Memberikan dan menjaga komitmen untuk berkembang dan maju
                bersama dengan mengutamakan kualitas dan pelayanan optimal
                kepada para rekanan, klien, dan mitra bisnis.
              </li>
              <li>
                Memberikan kesejahteraan bagi karyawan, pemilik, serta untuk
                pengembangan usaha.
              </li>
            </ul>
          </article>

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
              alt="Gambar perusahaan"
            />
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary p-2 rounded-full shadow-md hover:bg-secondary/90 text-white"
            >
              <IconChevronRight stroke={2} />
            </button>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default Content;
