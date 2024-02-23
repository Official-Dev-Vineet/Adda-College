import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./BannerList.css";
const BannerList = ({ title, description, link, linkName, list, image }) => {
  return (
    <div className="banner-list shadow-3d-light mt mb radius-1 overflow-hidden padding-sm">
      <div className="banner-header">
        <div className="text mt mb">
          <h3 className="mt mb">{title}</h3>
          <p>{description}</p>
        </div>
        <div className="image overflow-hidden radius-1">
          <img src={image} alt="adda college" />
        </div>
      </div>
      <ul className="list ml padding-md">
        {list &&
          list.length > 0 &&
          list.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
      </ul>
      {link && (
        <div className="banner-footer flex justify-center align-center">
          <Link to={link}>{linkName}</Link>
        </div>
      )}
    </div>
  );
};

export default BannerList;
// props validations

BannerList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  link: PropTypes.string,
  linkName: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.string,
};
