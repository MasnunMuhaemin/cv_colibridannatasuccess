const Maps = () => {
  return (
    <section
      id="lokasi"
      className="font1 text-black bg-gray-50 py-16 px-4 md:px-12 max-w-screen-xl mx-auto"
      aria-labelledby="maps-title"
    >
      {/* Section Header */}
      <header className="text-center mb-8">
        <h2 id="maps-title" className="text-2xl md:text-3xl font-bold">
          Legalitas & Lokasi Kami
        </h2>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Embed Google Maps */}
        <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4653772771626!2d106.89706939999999!3d-6.178689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5eb03fe2e87%3A0x11d1c921422932a5!2sCV.COLIBRI%20DANNATA%20SUCCESS!5e1!3m2!1sen!2sid!4v1740645050880!5m2!1sen!2sid"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi CV. Colibri Dannata Success di Google Maps"
            aria-label="Peta lokasi CV. Colibri Dannata Success"
          ></iframe>
        </div>

        {/* Informasi Legalitas */}
        <article className="bg-white p-6 rounded-lg">
          <header>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Legalitas Perusahaan
            </h3>
          </header>
          <ul className="list-disc list-inside text-sm md:text-base space-y-2">
            <li>
              <span className="font-semibold">Nama Perusahaan:</span> CV.
              Colibri Dannata Success
            </li>
            <li>
              <span className="font-semibold">Akta Notaris:</span> Akta Nomor 4
            </li>
            <li>
              <span className="font-semibold">AHU Nomor:</span>{" "}
              AHU-0053881-AH.01.14
            </li>
            <li>
              <span className="font-semibold">NIB:</span> 2307240067076
            </li>
            <li>
              <span className="font-semibold">Alamat:</span>
              <address className="not-italic">
                Jl. Perintis Kemerdekaan Komplek Pertokoan Pulomas Blok XII
                No.14 Pulogadung, Jakarta Timur
              </address>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Maps;
