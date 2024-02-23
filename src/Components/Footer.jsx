import { Link } from "react-router-dom";
import { footerLinks } from "../Constant/websiteContent";
import "./footer.css";
import Logo from "../Utils/Logo";
const Footer = () => {
  return (
    <div
      className="shadow-3d-light radius-1 max-w mx-auto padding-md mt mb"
      style={{ "--mwValue": 100 }}
    >
      <div className="footer-links flex flex-wrap justify-around gap-2xl">
        {footerLinks.map((link, index) => {
          return (
            <div className="footer-link" key={index}>
              <h3 className="t-capitalize">{link.name}</h3>
              <ul className="ml flex flex-col mt">
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
        <div className="footer-logo">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
