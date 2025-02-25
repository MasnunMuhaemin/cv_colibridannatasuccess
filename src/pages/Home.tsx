import { Content,Header } from "../sections";
import { Card, Membran, Tamco } from "../components";

const Home = () => {
    return (
      <div className="mt-20">
        <Header />
        <Content />
        <Card />
        <Membran />
        <Tamco />
      </div>
    );
  };
  
  export default Home;
  