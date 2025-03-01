import { Content, Header, FAQ, Brand, Maps } from "../sections";
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
      <Brand />
      <FAQ />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
