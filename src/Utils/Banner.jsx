import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./banner.css";
const Banner = ({ title, description, link, linkName, image }) => {
  return (
    <header className="banner padding-lg gap-md">
      <div className="banner-content shadow-3d-light padding-sm radius-1">
        <h1 className="transition t-balance">{title}</h1>
        <div className="mt ml mb t-opacity">{description}</div>
        <button className="btn radius-2 shadow-3d-light ml mt mb">
          <Link to={link}>{linkName}</Link>
        </button>
      </div>
      <div className="banner-image overflow-hidden radius-1 shadow-3d-light">
        <img src={image} className="transition" alt="adda college" />
      </div>
    </header>
  );
};
export default Banner;
Banner.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  link: PropTypes.string,
  linkName: PropTypes.string,
  image: PropTypes.string,
};
