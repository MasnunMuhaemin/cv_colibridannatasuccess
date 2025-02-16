import { IconHome, IconCrane, IconBuildings } from "@tabler/icons-react";

const Content = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <div className="text-black max-w-screen-xl mx-auto w-full px-4 md:px-12 py-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            CV. Colibri Dannata Success
          </h1>
          <p className="mt-3 text-lg">
            Solusi terbaik untuk konstruksi atap berkualitas tinggi.
          </p>
        </div>

        {/* Layout Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Kiri: Informasi Perusahaan */}
          <div className="bg-white p-8 shadow-lg rounded-xl w-full">
            <h2 className="text-2xl font-bold mb-4">
              Tentang Kami
            </h2>
            <p className="leading-relaxed">
              <span className="font-semibold">
                CV. COLIBRI DANNATA SUCCESS
              </span>{" "}
              adalah perusahaan berpengalaman yang berdiri sejak 2021,
              menyediakan desain dan pemasangan material konstruksi atap untuk
              proyek nasional.
            </p>

            <p className="mt-4 leading-relaxed">
              Dengan kualifikasi yang terjamin, kami menyediakan berbagai produk
              atap baja ringan dan floordeck metal yang mendukung pembangunan di
              Indonesia.
            </p>

            {/* Highlight Box */}
            <div className="mt-6 p-4 bg-blue-100 border-l-4 border-secondary rounded">
              <p className="text-secondary font-medium">
                “Kami berkomitmen memberikan solusi terbaik untuk konstruksi
                atap yang kuat dan tahan lama.”
              </p>
            </div>
          </div>

          {/* Kanan: Layanan */}
          <div className="text-black space-y-6 w-full">
            <h2 className="text-2xl font-bold">Layanan Kami</h2>
            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full">
              <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                <IconHome stroke={2} />
              </div>
              <p className="text-lg">
                Jasa pekerjaan Roofing dan Waterproofing
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full">
              <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                <IconCrane stroke={2} />
              </div>
              <p className="text-lg">
                Pemasangan Rangka Baja Berat dan Rangka Baja Ringan
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg flex items-center space-x-4 hover:shadow-xl transition w-full">
              <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-full">
                <IconBuildings stroke={2} />
              </div>
              <p className="text-lg">
                Distributor / Supplier Atap
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
