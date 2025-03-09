import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  function openMenu() {
    setIsOpen(!isOpen);
  }

  const handleScroll = (id: string) => {
    const targetId = id === "legalitas" ? "lokasi" : id;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(targetId);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "produk", "lokasi"];
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md backdrop-blur-lg">
      <nav
        id="nav"
        role="navigation"
        aria-label="Navigasi utama"
        className="font1 w-full py-3 flex items-center justify-between px-6 lg:px-12 xl:px-20 2xl:px-32 max-w-screen-2xl mx-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="font-bold whitespace-nowrap text-black lg:text-2xl text-2xl">
            Colibri Dannata Success
          </h1>
        </div>

        {/* Menu untuk Desktop */}
        <ul className="hidden lg:flex items-center gap-6 text-black font-semibold">
          {["about", "produk", "lokasi", "legalitas"].map((id, index) => (
            <li key={index}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(id);
                }}
                className={`relative group text-lg ${
                  activeSection === (id === "legalitas" ? "lokasi" : id)
                    ? "text-secondary font-bold"
                    : "text-black"
                }`}
              >
                {id === "about"
                  ? "Tentang Kami"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                    activeSection === (id === "legalitas" ? "lokasi" : id)
                      ? "w-full bg-secondary"
                      : "w-0 bg-black group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Menu untuk Mobile */}
        <div className="lg:hidden">
          <button
            onClick={openMenu}
            aria-label="Buka menu navigasi"
            aria-expanded={isOpen}
            className="text-black"
          >
            <IconMenu2 />
          </button>

          {/* Overlay */}
          {isOpen && (
            <div
              className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-40"
              onClick={openMenu}
              aria-hidden="true"
            />
          )}

          {/* Fullscreen Sidebar Menu */}
          <aside
            className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-lg bg-white/65 z-50 flex flex-col items-center justify-center transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
            role="dialog"
            aria-label="Menu navigasi"
          >
            <button
              onClick={openMenu}
              className="absolute top-5 right-5 text-black"
              aria-label="Tutup menu navigasi"
            >
              <IconX size={32} />
            </button>
            <ul className="flex flex-col justify-center items-center gap-6 text-xl font-semibold">
              {["about", "produk", "lokasi", "legalitas"].map((id, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScroll(id)}
                    className={`relative group ${
                      activeSection === (id === "legalitas" ? "lokasi" : id)
                        ? "text-secondary font-bold"
                        : "text-zinc-800"
                    }`}
                  >
                    {id === "about"
                      ? "Tentang Kami"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${
                        activeSection === (id === "legalitas" ? "lokasi" : id)
                          ? "w-full bg-secondary"
                          : "w-0 bg-black group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
