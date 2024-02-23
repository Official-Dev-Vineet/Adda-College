import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../Constant/websiteContent";
import "./sideBar.css";
import { useState } from "react";
const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const activeLinksHandler = (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
  };
  const activeSubLinksHandler = (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    } else {
      e.target.classList.remove("active");
    }
  };
  return (
    <>
      <div className={`sidebar shadow-3d-light ${sideBar ? "active" : ""}`}>
        <div className="sideBar-toggler pointer" onClick={() => setSideBar(!sideBar)}>
          <span className="icon">
            <TiThMenu />
          </span>
        </div>
        <div className="sideBar-content">
          <div className="navigationLink">
            {navLinks.map((link, index) => (
              <div className="links-wrapper relative" key={index}>
                <Link
                  className={`link t-capitalize shadow-3d-light flex gap-sm align-center pointer`}
                  onClick={activeLinksHandler}
                  to={link?.link}
                >
                  {link?.icon}
                  {link?.name}
                </Link>
                {link?.subLinks && (
                  <div className="sub-link ml">
                    <div className="sub-link-content">
                      {link?.subLinks?.map((subLink, index) => (
                        <div className="linkName relative" key={index}>
                          <span
                            className="transition link shadow-3d-light"
                            onClick={activeSubLinksHandler}
                          >
                            {subLink.name}
                          </span>
                          <div className="sub-links ml">
                            {subLink.LinksByDegree.map((subLink, index) => (
                              <NavLink
                                className="link shadow-3d-light"
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
        </div>
      </div>
    </>
  );
};

export default SideBar;
