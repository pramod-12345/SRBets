import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
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
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const { loading } = useSelector((state) => state?.auth);
  const { betSlipToggle } = useSelector((state) => state?.dashboard);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024 && window.innerWidth >= 768);
  // const [betSlipToggle, setBetSlipToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024 && window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ToastProvider>
      <>
        {loading && <GlobalLoader />}
        <div className="bg-themeBlack min-h-screen no-scrollbar">
          <Navbar
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
            betSlipToggle={betSlipToggle}
            // setBetSlipToggle={setBetSlipToggle}
          />
          <section className="pt-[4.5rem] max-h-screen flex no-scrollbar">
            <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} isSmallScreen={isSmallScreen}/>
            <div id='main-content' className={` p-0 ${isSmallScreen ? 'pl-[72px]' : ''} w-full overflow-auto no-scrollbar`}>
              <Container>
                <Outlet />
                <Footer />
              </Container>
            </div>
            <BetSlipSlider betSlipToggle={betSlipToggle} 
            // setBetSlipToggle={setBetSlipToggle} 
            />
          </section>
        </div>
      </>
    </ToastProvider>
  );
};

export default Layout;
