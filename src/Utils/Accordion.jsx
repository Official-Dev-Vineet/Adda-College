import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Accordion = ({ title, details, link, linkName, list, isOpen }) => {
  return (
    <div className={"accordion" + (isOpen ? " open" : "")}>
      <div className="accordion-header">
        <h3>{title}</h3>
        <span className="icon">
          <MdOutlineKeyboardArrowDown />
        </span>
      </div>
      <div className="accordion-details">
        <p>{details}</p>
      </div>
      <div className="accordion-list">
        {list && list.length > 0 && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="accordion-footer">
        <Link to={link}>{linkName}</Link>
      </div>
    </div>
  );
};

export default Accordion;
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkName: PropTypes.string,
  list: PropTypes.array,
  isOpen: PropTypes.bool,
};
