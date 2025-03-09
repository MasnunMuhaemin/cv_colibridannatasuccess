const Project = () => {
  const images = [
    {
      src: "/images/Galeri/Project1.jpeg",
      alt: "Sari Pan Pacific Jakarta",
      label: "Sari Pan Pacific Jakarta",
      description: "Project Sari Pan Pacific Jakarta.",
    },
    {
      src: "/images/Galeri/Project4.jpeg",
      alt: "Saung Kebalen Babelan Bekasi",
      label: "Saung Kebalen Babelan Bekasi",
      description: "Project Saung Kebalen Babelan Bekasi.",
      span: "md:col-span-2",
    },
    {
      src: "/images/Galeri/Project3.jpeg",
      alt: "Project Menwa Pulomas",
      label: "Menwa Pulomas",
      description: "Project Menwa Pulomas.",
      span: "md:col-span-2",
    },
    {
      src: "/images/Galeri/Project2.jpeg",
      alt: "Pengadilan Bandung",
      label: "Pengadilan Bandung",
      description: "Project Pengadilan Bandung.",
    },
  ];

  return (
    <section
      className="font1 h-full py-6 sm:py-8 lg:py-8"
      aria-labelledby="project-title"
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Judul dan Deskripsi */}
        <header className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <h2
            id="project-title"
            className="text-black text-2xl font-bold lg:text-3xl"
          >
            Project Kami
          </h2>
          <p className="hidden max-w-screen-sm text-black md:block">
            Berikut adalah beberapa project atap yang telah selesai kami garap
            dengan kualitas terbaik dan kepuasan pelanggan sebagai prioritas
            utama.
          </p>
        </header>

        {/* Grid Gambar */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <figure
              key={index}
              className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${
                image.span || ""
              }`}
              role="group"
              aria-labelledby={`label-${index}`}
              aria-describedby={`desc-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition duration-300"
                aria-hidden="true"
              ></div>
              <figcaption className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <span
                  id={`label-${index}`}
                  className="block text-sm md:text-lg font-semibold"
                >
                  {image.label}
                </span>
                <p id={`desc-${index}`} className="text-xs md:text-sm">
                  {image.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
