import { useCallback } from "react";
import {
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandShopee,
} from "@tabler/icons-react";

const Footer = () => {
  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="font1 bg-secondary lg:px-20 px-10 py-10 text-gray-100 dark:text-gray-100">
      <section className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-10">
        <article className="md:col-span-3 col-span-2 md:text-left text-center">
          <h4 className="text-4xl font-bold font-waterbrush">
            CV Colibri Dannata Success
          </h4>
          <p className="text-sm mt-5 leading-relaxed">
            CV Colibri Dannata Success adalah pilihan terbaik untuk solusi atap
            berkualitas. Kami menghadirkan berbagai jenis atap bitumen yang
            tahan lama, estetis, dan cocok untuk segala kebutuhan konstruksi.
          </p>
        </article>

        <nav className="pt-5 pl-5 md:pl-0">
          <h5 className="text-xl font-semibold">Support</h5>
          <ul className="mt-2 space-y-1">
            <li className="text-sm">
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("faq");
                }}
                className="cursor-pointer text-gray-100 hover:text-primary"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <nav className="pt-5 pl-10 md:pl-0">
          <h5 className="text-xl font-semibold">Links</h5>
          <ul className="mt-2 space-y-1">
            <li className="text-sm">
              <a
                href="#produk"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("produk");
                }}
                className="cursor-pointer text-gray-100 hover:text-primary"
              >
                Produk
              </a>
            </li>
            <li className="text-sm">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
                className="cursor-pointer text-gray-100 hover:text-primary"
              >
                Tentang Kami
              </a>
            </li>
          </ul>
        </nav>

        <address className="lg:col-span-2 md:col-span-1 col-span-2 md:text-left text-center pt-5 not-italic">
          <h5 className="text-xl font-semibold mb-5">Kontak Kami</h5>
          <p className="flex gap-4 mb-3 md:justify-start justify-center">
            <IconPhone className="w-5 h-5 text-white" /> 082123572533
          </p>
          <p className="flex gap-4 mb-3 md:justify-start justify-center">
            <IconMail className="w-5 h-5 text-white" />{" "}
            cv.colibridannatasuces@gmail.com
          </p>
        </address>

        <section className="lg:col-span-2 md:col-span-1 col-span-2 md:text-left text-center pt-5">
          <h5 className="text-xl font-semibold mt-5">Sosial Media</h5>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-3">
            <a
              href="https://www.instagram.com/cv_colibri.dannata.success"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IconBrandInstagram className="w-6 h-6 text-[#E4405F]" />
              <span className="text-[#E4405F] font-medium">
                @cv_colibri.dannata.success
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@colibri.dannata.s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IconBrandTiktok className="w-6 h-6 text-white" />
              <span className="text-white font-medium">@colibri.dannata.s</span>
            </a>
            <a
              href="https://shopee.co.id/Colibri.Dannata_Success"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IconBrandShopee className="w-6 h-6 text-[#FF5722]" />
              <span className="text-[#FF5722] font-medium">
                Colibri.Dannata_Success
              </span>
            </a>
          </div>
        </section>
      </section>

      <section className="text-center border-t-2 py-5 border-white mt-5">
        <p className="text-sm">
          CV Colibri Dannata Success - Solusi Atap Berkualitas
        </p>
      </section>
    </footer>
  );
};

export default Footer;
