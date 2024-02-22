import "./navbar.css";
import { navLinks } from "../Constant/websiteContent";
import { NavLink } from "react-router-dom";
import { SearchInput } from "../Utils/SearchInput";
import { TiThMenu } from "react-icons/ti";
import Logo from "../Utils/Logo";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed">
      <Logo />
      <div className="navigationLink flex">
        {navLinks.map((link, index) => (
          <div className="links-wrapper relative" key={index}>
            <NavLink className="link t-capitalize t-i-shadow" to={link.link}>
              {link.name}
            </NavLink>
            {link.subLinks && (
              <div className="sub-link padding-md">
                <div className="sub-link-content flex gap-lg flex-wrap">
                  {link?.subLinks?.map((subLink, index) => (
                    <div className="linkName relative" key={index}>
                      <span className="t-light transition link">
                        {subLink.name}
                      </span>
                      <div className="sub-links">
                        {subLink.LinksByDegree.map((subLink, index) => (
                          <NavLink
                            className="link block"
                            key={index}
                            to={subLink.link}
                          >
                            {subLink.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <SearchInput />
      <TiThMenu
        className="t-light pointer menu-btn"
        style={{ fontSize: "2.5rem" }}
      />
    </nav>
  );
};

export default Navbar;
