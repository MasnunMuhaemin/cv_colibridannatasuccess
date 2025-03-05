import { Content, Header, FAQ, Brand, Maps, Project } from "../sections";
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
  Cardsilikat
} from "../components";

const Home = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Header />
      <Content />
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
      <Project />
      <Brand />
      <FAQ />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
