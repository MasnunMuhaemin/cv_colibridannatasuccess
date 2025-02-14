import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section>
      <div
        id="nav"
        className="font1 w-full backdrop-blur-lg bg-primary/50 shadow-md py-3 flex items-center justify-between fixed top-0 z-50 transition-all duration-300 px-6 lg:px-12 max-w-screen-xl mx-auto"
      >
        <div className="flex items-center gap-3">
          <h1 className="font-bold whitespace-nowrap text-black lg:text-3xl text-2xl">
            Colibri Dannata Success
          </h1>
        </div>

        {/* Menu untuk Desktop */}
        <div className="hidden lg:flex items-center gap-6 text-black font-semibold">
          {[
            "Beranda",
            "Tentang Kami",
            "Produk",
            "Keunggulan",
            "Spesifikasi",
            "Kontak",
          ].map((menu, index) => (
            <NavLink key={index} to="/" className="relative group text-lg">
              {menu}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        {/* Menu untuk Mobile */}
        <div className="lg:hidden">
          <button onClick={openMenu} className="text-black">
            <IconMenu2 />
          </button>

          {/* Overlay */}
          {isOpen && (
            <div
              className="w-screen h-screen fixed top-0 left-0 bg-black/50 z-40"
              onClick={openMenu}
            />
          )}

          {/* Fullscreen Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 w-screen h-screen bg-white z-50 flex flex-col items-center justify-center transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <button
              onClick={openMenu}
              className="absolute top-5 right-5 text-black"
            >
              <IconX size={32} />
            </button>
            <div className="flex flex-col justify-center items-center gap-6 text-xl font-semibold">
              {[
                "Beranda",
                "Tentang Kami",
                "Produk",
                "Keunggulan",
                "Spesifikasi",
                "Kontak",
              ].map((menu, index) => (
                <NavLink
                  key={index}
                  to="/"
                  onClick={openMenu}
                  className="relative group text-zinc-800"
                >
                  {menu}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
