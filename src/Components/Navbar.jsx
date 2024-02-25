import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { SearchInput } from "../Utils/SearchInput";
import { TiThMenu } from "react-icons/ti";
import Logo from "../Utils/Logo";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import { navLinks } from "../Constant/websiteContent";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const removeActiveClass = () => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
  };
  const linkHandler = (e) => {
    e.preventDefault();
    removeActiveClass();
    e.target.classList.toggle("active");
  };
  return (
    <nav className="flex justify-between align-center shadow-3d-light">
      <div className="flex align-center gap-2xl">
        <Logo />
        <div className="nav-links flex gap-md">
          {navLinks.map((link, index) => (
            <div className="links-wrapper relative" key={index}>
              <NavLink
                key={index}
                to={link.link}
                className="t-light t-capitalize t-bold link relative"
                onClick={() => setIsActive(false)}
              >
                {link.name}
              </NavLink>
              <div className="sub-link absolute radius-1">
                {link.subLinks &&
                  link.subLinks.map((subLink, index) => {
                    return (
                      <div
                        onMouseLeave={removeActiveClass}
                        className="sub-link-wrapper relative flex flex-col"
                        onClick={() => {
                          setIsActive(false);
                          linkHandler();
                        }}
                        key={index}
                      >
                        <Link
                          key={index}
                          to={subLink.link}
                          className={`t-light t-capitalize t-bold link relative`}
                        >
                          {subLink.name}
                        </Link>
                        <div className="sub-sub-link absolute flex-col">
                          {subLink.LinksByDegree &&
                            subLink.LinksByDegree.map((subSubLink, index) => {
                              return (
                                <Link
                                  key={index}
                                  to={subSubLink.link}
                                  className="t-light t-capitalize t-bold link"
                                >
                                  {subSubLink.name}
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`flex grp justify-between gap-2xl align-center ${
          isActive ? "active" : ""
        }`}
      >
        <SearchInput />
        <Link
          to="/login"
          className="flex align-center justify-center gap-sm radius-1 login-Btn"
        >
          <span>Login</span>
          <BiLogIn />
        </Link>
      </div>
      <TiThMenu
        className="t-light pointer menu-btn"
        style={{ fontSize: "2.5rem" }}
        onClick={() => setIsActive(!isActive)}
      />
    </nav>
  );
};

export default Navbar;
