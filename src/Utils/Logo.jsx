import { IoSchool } from "react-icons/io5";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="logo flex gap-sm align-center"
      title="Adda College"
    >
      <div className="icon">
        <IoSchool />
      </div>
      <div className="flex flex-col">
        <span>Adda</span>
        <span>College</span>
      </div>
    </Link>
  );
};

export default Logo;
