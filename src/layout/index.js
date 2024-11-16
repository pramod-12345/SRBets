import { useState } from "react";
import Sidebar from "../components/shared/sidebar";
import Navbar from "../components/shared/navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/common/container";
import Footer from "../components/shared/footer";
// import Footer from "../components/shared/footer";

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
        <section className="pt-[4.5rem] max-h-screen flex">
          <Sidebar sidebarToggle={sidebarToggle} />
          <div
            className={` p-0 w-full overflow-auto`}
          >
            <Container>
            <Outlet />
            <Footer/>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default Layout;
