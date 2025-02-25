import { Content,Header } from "../sections";
import { Card, Membran, Tamco, GAF, Owen, Tegola, Firescreen } from "../components";

const Home = () => {
    return (
      <div className="mt-20">
        <Header />
        <Content />
        <Card />
        <Membran />
        <Tamco />
        <GAF />
        <Owen />
        <Tegola />
        <Firescreen />
      </div>
    );
  };
  
  export default Home;
  