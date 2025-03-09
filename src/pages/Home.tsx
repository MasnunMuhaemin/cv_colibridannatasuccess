import { Content, Hero, FAQ, Brand, Maps, Project } from "../sections";
import {
  Navbar,
  Footer,
  Card,
  Membran,
  Tamco,
  CTI,
  Owen,
  Tegola,
  Firescreen,
  BSK,
  Gemstone,
  Maxxi,
  Victory,
  Dragon,
  Landmark,
  Cardupvc,
  Ecoroof,
  Henda,
  Robertson,
  Mattaka,
  Avantguard,
  Cardmetal,
  Cardsilikat,
} from "../components";

const Home = () => {
  return (
    <div className="mt-12">
      {/* Header: Navigasi Utama */}
      <header role="banner">
        <Navbar />
      </header>

      {/* Konten Utama */}
      <main role="main">
        <section id="hero" aria-labelledby="hero-title">
          <Hero />
        </section>

        <section id="content" aria-labelledby="content-title">
          <Content />
        </section>

        {/* Bagian Produk */}
        <section id="products" aria-labelledby="products-title">
          <h2 id="products-title" className="sr-only">
            Produk
          </h2>
          <Card />
          <CTI />
          <Tamco />
          <Owen />
          <Tegola />
          <Firescreen />
          <BSK />
          <Gemstone />
          <Maxxi />
          <Victory />
          <Dragon />
          <Landmark />
          <Membran />
          <Cardupvc />
          <Ecoroof />
          <Henda />
          <Mattaka />
          <Avantguard />
          <Cardmetal />
          <Robertson />
          <Cardsilikat />
        </section>

        {/* Bagian Proyek dan Brand */}
        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title" className="sr-only">
            Proyek
          </h2>
          <Project />
        </section>

        <section id="brands" aria-labelledby="brands-title">
          <h2 id="brands-title" className="sr-only">
            Brand
          </h2>
          <Brand />
        </section>

        {/* FAQ dan Maps */}
        <section id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title" className="sr-only">
            FAQ
          </h2>
          <FAQ />
        </section>

        <section id="maps" aria-labelledby="maps-title">
          <h2 id="maps-title" className="sr-only">
            Lokasi
          </h2>
          <Maps />
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
