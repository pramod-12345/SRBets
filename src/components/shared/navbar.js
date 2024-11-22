import React, { useState } from "react";
import navImages from "../../assets/svg/navbar";
import { MbNavTabs } from "../../data";
import CommonButton from "../common/button";
import Search from "../common/search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../common/Modal";
import Login from "../modals/auth/login";
import Register from "../modals/auth/register";
import ForgotPassword from "../modals/auth/forgotPassword";

const Navbar = ({
  setSidebarToggle,
  sidebarToggle,
  setBetSlipToggle,
  betSlipToggle,
}) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [modalType, setModalType] = useState('')
  const NavItem = ({ icon, label, link }) => {
    const location = useLocation();
    const isActive = location.pathname === link;
  
    return (
      <Link to={link} className="flex flex-col items-center text-vintageRibbon hover:text-white">
        <img src={icon} alt={`${label} icon`} className="h-8 w-8" />
        <span className={`text-xs font-semibold ${isActive ? "text-white" : ""} mt-1`}>
          {label}
        </span>
        {isActive && <span className="w-7 h-1 bg-primary rounded-t-md mt-2"></span>}
      </Link>
    );
  };

  const handleToggleLogin =()=>{
    setIsLogin(false);
  }

  return (
    <>
      <header
        className={`flex w-full items-center bg-blackRussian sm:px-6 sm:py-3.5 p-4 fixed z-20 border-b border-[lightgrey] border-opacity-10`}
      >
        <div className="w-full">
          <div className="relative  flex items-center justify-between">
            <div className="max-w-full  flex items-center gap-5">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setSidebarToggle(!sidebarToggle)}
                className="hidden md:block"
              >
                <img src={navImages.menuIcon} alt="logo" className="w-4 h-4" />
              </div>
              <div
                className="flex items-center gap-3 font-monasans cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  src={navImages.logoStarIcon}
                  alt="logo"
                  className="sm:w-9 sm:h-9 h-8 w-8"
                />
                <span className="text-2xl text-white hidden md:block">
                  <b className="mr-2">SR</b>Bets
                </span>
              </div>
            </div>
            <Search />
            <div className="flex items-center gap-5">
              <div className="bg-themeBlack h-11 rounded-lg flex items-center gap-2 pr-0.5">
                <div className="flex items-center gap-2 pl-3">
                  <img src={navImages.usdIcon} alt="logo" className="w-5 h-5" />
                  <span className="text-sm text-white">2.56</span>
                </div>
                <img
                  src={navImages.arrowDown}
                  alt="logo"
                  className="sm:w-9 sm:h-9 h-5 w-5"
                />
                <CommonButton label={"Wallet"} type="nav" />
              </div>
              <CommonButton
                label={"Login"}
                type="nav"
                onClick={() => {
                  setIsLogin(true);
                  setModalType('login')
                }}
              />
              <img
                src={navImages.mbSearchIcon}
                alt="logo"
                className="w-5 h-5 block md:hidden"
              />
              <img
                src={navImages.profileIcon}
                alt="logo"
                className="sm:w-7 sm:h-7 w-5 h-5"
              />
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setBetSlipToggle(!betSlipToggle)}
                className="hidden md:block"
              >
                <img src={navImages.menuIcon} alt="logo" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-darkGunmetal rounded-full px-8 pt-2.5 pb-px w-[352px] z-50 flex justify-between items-center md:hidden  shadow-lg">
        {MbNavTabs?.map((i, index) => (
          <NavItem key={index} icon={i?.icon} label={i?.label} link={i?.link} />
        ))}
      </div>
      {isLogin && (
        <Modal onClose={handleToggleLogin}>
          {modalType === 'login' && <Login setModalType={setModalType}/>}
          {modalType === 'register' && <Register setModalType={setModalType} />}
          {modalType === 'forgotPassword' && <ForgotPassword />}
        </Modal>
      )}
    </>
  );
};

export default Navbar;
