import "./navbar.css";
import { Link } from "react-router-dom";
import { SearchInput } from "../Utils/SearchInput";
import { TiThMenu } from "react-icons/ti";
import Logo from "../Utils/Logo";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="flex justify-between sticky align-center shadow-3d-light">
      <Logo />
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
