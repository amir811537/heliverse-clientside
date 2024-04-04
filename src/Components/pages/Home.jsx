import Banner from "../Navbar/Banner";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <HomeContent></HomeContent>
      </div>
    </div>
  );
};

export default Home;