import { Link } from "react-router-dom";
import { footerLinks } from "../Constant/websiteContent";
import "./footer.css";
import Logo from "../Utils/Logo";
import { contactInfo } from "../Constant/websiteContent";
const Footer = () => {
  return (
    <footer className="shadow-3d-light radius-1 padding-md mt">
      <div className="footer-links flex flex-wrap justify-evenly gap-2xl">
        <div className="footer-logo">
          <Logo />
          <div className="flex flex-col mt">
            <p>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </p>
            <p>
              <a href={`tel:${contactInfo.alternatePhone}`}>
                {contactInfo.alternatePhone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
        {footerLinks.map((link, index) => {
          return (
            <div className="footer-link" key={index}>
              <h3 className="t-capitalize">{link.name}</h3>
              <ul className="ml flex flex-col gap-sm mt">
                {link.links.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="t-bold t-info flex gap-sm align-center t-capitalize"
                      >
                        {item.icon} {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
