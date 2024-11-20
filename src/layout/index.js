import { useState } from "react";
import Sidebar from "../components/shared/sidebar";
import Navbar from "../components/shared/navbar";
import { Outlet } from "react-router-dom";
import Container from "../components/common/container";
import Footer from "../components/shared/footer";
import BetSlipSlider from "../components/shared/betSlipSlider";

const Layout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [betSlipToggle, setBetSlipToggle] = useState(false)
  return (
    <>
      <div className="bg-themeBlack min-h-screen">
        <Navbar
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
          betSlipToggle={betSlipToggle}
          setBetSlipToggle={setBetSlipToggle}
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
          <BetSlipSlider betSlipToggle={betSlipToggle}/>
        </section>
      </div>
    </>
  );
};

export default Layout;
