import {
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandShopee,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-secondary lg:px-20 px-10 py-10 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 mt-20 gap-10 text-gray-100 dark:text-gray-100">
      <div className="md:col-span-3 col-span-2 md:text-left text-center">
        <h4 className="text-4xl font-bold font-waterbrush">
          CV Colibri Dannata Success
        </h4>
        <p className="text-sm mt-5 leading-relaxed">
          CV Colibri Dannata Success adalah pilihan terbaik untuk solusi atap
          berkualitas. Kami menghadirkan berbagai jenis atap bitumen yang tahan
          lama, estetis, dan cocok untuk segala kebutuhan konstruksi. Percayakan
          atap bangunan Anda kepada kami untuk kenyamanan dan keamanan yang
          maksimal.
        </p>
      </div>
      <div className="pt-5 pl-5 md:pl-0">
        <h5 className="text-xl font-semibold">Support</h5>
        <ul className="mt-2 space-y-1">
          <li className="text-sm">FAQ</li>
          <li className="text-sm">Kontak Kami</li>
        </ul>
      </div>
      <div className="pt-5 pl-10 md:pl-0">
        <h5 className="text-xl font-semibold">Links</h5>
        <ul className="mt-2 space-y-1">
          <li className="text-sm">Produk</li>
          <li className="text-sm">Galeri</li>
          <li className="text-sm">Testimoni</li>
          <li className="text-sm">Tentang Kami</li>
        </ul>
      </div>
      <div className="lg:col-span-2 md:col-span-1 col-span-2 md:text-left text-center pt-5">
        <h5 className="text-xl font-semibold mb-5">Kontak Kami</h5>
        <p className="flex gap-4 mb-3 md:justify-start justify-center">
          <IconPhone className="w-5 h-5 text-white" /> 082123572533
        </p>
        <p className="flex gap-4 mb-3 md:justify-start justify-center">
          <IconMail className="w-5 h-5 text-white" />{" "}
          cv.colibridannatasuces@gmail.com
        </p>
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
          <a
            href="https://www.tokopedia.com/colibri-dannata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src="/images/Galeri/tokopedia.png"
              alt="Tokopedia"
              className="w-6 h-6"
            />
            <span className="text-green-500 font-medium">Colibri Dannata</span>
          </a>
          <a
            href="https://www.olx.co.id/profile/colibri-dannata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img src="/images/Galeri/olx.png" alt="OLX" className="w-6 h-6" />
            <span className="text-blue-600 font-medium">
              Atap Bitumen Murah Bekasi
            </span>
          </a>
        </div>
      </div>
      <div className="lg:col-span-7 md:col-span-3 col-span-2 text-center border-t-2 py-5 border-white mt-5">
        <p className="text-sm">Atap Bitumen Murah Jakarta Timur</p>
      </div>
    </footer>
  );
};

export default Footer;
