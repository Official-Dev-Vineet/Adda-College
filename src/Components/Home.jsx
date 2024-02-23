import Banner from "../Utils/Banner";
import bannerImage from "../assets/hero.jpg";
import Academic from "./Academic";
const Home = () => {
  return (
    <div className="relative">
      <Banner
        title={"Welcome to Adda College"}
        description={
          <>
            <span>
              <q>Adda College: Where Ambitions Meet Opportunities </q>
            </span>
            <br />
            It a digital gateway to our academic community and a comprehensive
            resource for prospective students, current students, faculty, and
            staff. Our website has been designed with a user-friendly interface
            to ensure that information is accessible and navigation is
            effortless. Below is an overview of what you can expect to find on
            our site.
          </>
        }
        link={"/login"}
        linkName={"Get Started"}
        image={bannerImage}
      />
      <Academic />
    </div>
  );
};

export default Home;
