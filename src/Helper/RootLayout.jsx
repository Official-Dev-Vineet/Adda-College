import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";

const RootLayout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="main-panel">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
