import React from "react";
import navImages from "../../assets/svg/navbar";
import { MbNavTabs } from "../../contant";
import CommonButton from "../common/button";
import Search from "../common/search";

const Navbar = ({ setSidebarToggle, sidebarToggle }) => {
  const NavItem = ({ icon, label }) => (
    <div className="flex flex-col items-center text-gray-400 hover:text-white">
      <img src={icon} alt="" className="h-8 w-8" />
      <span
        className={`text-xs font-semibold ${
          label === "Home" ? "text-white" : ""
        } mt-1`}
      >
        {label}
      </span>
      {label === "Home" ? (
        <span className="w-7 h-1 bg-[#673CFF] rounded-t-md mt-2"></span>
      ) : null}
    </div>
  );

  return (
    <>
      <header
        className={`flex w-full items-center bg-[#141525] sm:px-6 sm:py-3.5 p-4 fixed z-20 border-b border-[lightgrey] border-opacity-10`}
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
              <div className="flex items-center gap-3 font-monasans">
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
              <div className="bg-[#0B0D1C] h-11 rounded-lg flex items-center gap-2 pr-[2px]">
                <div className="flex items-center gap-2 pl-3">
                  <img src={navImages.usdIcon} alt="logo" className="w-5 h-5" />
                  <span className="text-sm text-white">2.56</span>
                </div>
                <img
                  src={navImages.arrowDown}
                  alt="logo"
                  className="sm:w-9 sm:h-9 h-5 w-5"
                />
                <CommonButton
                  bgColor={"#673CFF"}
                  label={"Wallet"}
                  style={`sm:h-10 h-7 rounded-lg sm:px-4 px-1.5 sm:text-sm text-xs`}
                />
              </div>
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
            </div>
          </div>
        </div>
      </header>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#1B1E2A] rounded-full px-8 pt-2.5 pb-px w-[352px] flex justify-between items-center md:hidden  shadow-lg">
        {MbNavTabs?.map((i, index) => (
          <NavItem key={index} icon={i?.icon} label={i?.label} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
