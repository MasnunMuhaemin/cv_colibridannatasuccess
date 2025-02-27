import { Content, Header, FAQ, Brand, Maps } from "../sections";
import {
  Navbar,
  Footer,
  Card,
  Membran,
  Tamco,
  GAF,
  Owen,
  Tegola,
  Firescreen,
  BSK,
  Gemstone,
  Maxxi,
  Victory,
  Dragon,
  Cardupvc,
} from "../components";

const Home = () => {
  return (
    <div className="mt-20">
      <Navbar />
      <Header />
      <Content />
      <Card />
      <Membran />
      <Tamco />
      <GAF />
      <Owen />
      <Tegola />
      <Firescreen />
      <BSK />
      <Gemstone />
      <Maxxi />
      <Victory />
      <Dragon />
      <Cardupvc />
      <Brand />
      <FAQ />
      <Maps />
      <Footer />
    </div>
  );
};

export default Home;
