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
  Alderon,
  Ecoroof,
  Henda,
  Rbshera,
  Robertson,
  Mattaka,
  Avantguard,
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
      <Alderon />
      <Ecoroof />
      <Henda />
      <Rbshera />
      <Robertson />
      <Mattaka />
      <Avantguard />
      <Project />
      <Brand />
      <FAQ />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
