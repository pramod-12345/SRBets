import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  Container,
  Navbar,
  Sidebar,
  Footer,
  BetSlipSlider,
  GlobalLoader,
} from "components";
import { useSelector } from "react-redux";
import { ToastProvider } from "hooks";

const Layout = () => {
  const mainContentRef = useRef(null);
  const location = useLocation();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const { loading } = useSelector((state) => state?.auth);
  const { betSlipToggle, isMbIframeFull } = useSelector((state) => state?.dashboard);
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 1024 && window.innerWidth >= 768
  );
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024 && window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(mainContentRef.current.scrollTop > 0);
    };

    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainContent) {
        mainContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const mainContent = mainContentRef.current;
    if (mainContent) {
      mainContent.scrollTo(0, 0); // Scroll to the top
    }
  }, [location.pathname]);

  return (
    <ToastProvider>
      <>
        {loading && <GlobalLoader />}
        <div className="bg-themeBlack min-h-screen no-scrollbar">
          <Navbar
          showNavbar={showNavbar}
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
            betSlipToggle={betSlipToggle}
            // setBetSlipToggle={setBetSlipToggle}
          />
          <section className={`${isMbIframeFull ? 'h-screen' : 'pt-[4.5rem] max-h-screen'} flex no-scrollbar`}>
            <Sidebar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
              isSmallScreen={isSmallScreen}
            />
            <div
              ref={mainContentRef}
              id="main-content"
              className={` p-0 ${
                isSmallScreen ? "pl-[72px]" : ""
              } w-full overflow-auto no-scrollbar`}
            >
              <Container>
                <Outlet />
                {isMbIframeFull ? null : <Footer />}
              </Container>
            </div>
            <BetSlipSlider
              betSlipToggle={betSlipToggle}
              // setBetSlipToggle={setBetSlipToggle}
            />
          </section>
        </div>
      </>
    </ToastProvider>
  );
};

export default Layout;
