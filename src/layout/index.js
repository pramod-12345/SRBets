import { useState } from "react";
import Sidebar from "../components/shared/sidebar";
import Navbar from "../components/shared/navbar";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <>
      <div className="bg-themeBlack min-h-screen">
        <Navbar
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
        />
        <section className="pt-[4.5rem] min-h-[100vh] flex">
          <Sidebar sidebarToggle={sidebarToggle} />
          <div
            className={`${
              sidebarToggle ? "md:pl-[72px]" : "md:pl-[16.25rem]"
            } p-0 truncate w-full`}
          >
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
