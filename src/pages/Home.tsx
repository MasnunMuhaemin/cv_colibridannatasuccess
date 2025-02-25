import { Content,Header } from "../sections";
import { Card, Membran, Tamco, GAF, Owen, Tegola } from "../components";

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
      </div>
    );
  };
  
  export default Home;
  