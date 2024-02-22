import Banner from "../Utils/Banner";
import bannerImage from "../assets/hero.png";
const Home = () => {
  return (
    <div className="relative">
      <Banner
        title={"Adda College"}
        description={"Create Your Bright Future"}
        link={"/"}
        linkName={"Get Started"}
        image={bannerImage}
      />
    </div>
  );
};

export default Home;
