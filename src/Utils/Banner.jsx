import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Banner = ({ title, description, link, linkName, image }) => {
  return (
    <header
      className="banner grid grid-auto align-center justify-center"
      style={{ backgroundColor: "var(--violet)", height: "100vh" }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn pad-x-y radius-2">
          <Link to={link}>{linkName}</Link>
        </button>
        <div className="line"></div>
      </div>
      <div className="banner-image">
        <img src={image} alt="banner" />
      </div>
    </header>
  );
};

export default Banner;
Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
  image: PropTypes.string,
};
