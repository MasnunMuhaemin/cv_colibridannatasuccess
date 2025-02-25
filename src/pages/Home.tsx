import { Content,Header } from "../sections";
import { Card, GAF, Membran, Tamco } from "../components";

const Home = () => {
    return (
      <div className="mt-20">
        <Header />
        <Content />
        <Card />
        <Membran />
        <Tamco />
        <GAF />
      </div>
    );
  };
  
  export default Home;
  