import React, { useEffect, useRef, useState } from "react";
import {
  CommonButton,
  Search,
  Modal,
  Login,
  Register,
  ForgotPassword,
  Withdraw,
  Deposit,
  WalletModal,
  RegisterTerms,
  AuthoriseRegistration,
  TwoFactorAuthentication,
  ResetPassword,
  PaymentApproved,
  AddNewBankAccount,
  PaymentStatus,
} from "components";
import navImages, {
  MBBets,
  MBCasino,
  MBFootball,
  MBHome,
  MBSetting,
} from "../../assets/svg/navbar";
import { MbNavTabs } from "../../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  setModalType,
  toggleModal,
} from "../../redux/reducers/authSlice";
import { sidebarImg } from "../../assets/svg/sidebar";
import { btcIcon, rupees } from "assets";
import { checkBalance } from "services/dashboard.service";
import { useAxios } from "hooks";
import {
  setBetSlipToggle,
  setUserBalance,
} from "../../redux/reducers/dashboard";

const Navbar = ({ setSidebarToggle, sidebarToggle, betSlipToggle }) => {
  let balance = 255.76;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const { makeRequest } = useAxios();
  const [isOpen, setIsOpen] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [selected, setSelected] = useState({
    id: 1,
    label: "INR",
    icon: rupees,
    value: 0,
  });

  const { isLoggedIn } = useSelector((state) => state.auth);
  const profileMenuRef = useRef(null);
  const currencyRef = useRef(null);
  // Get modal type and visibility from Redux state
  const { modalType, isModalOpen } = useSelector((state) => state?.auth);
  const { userBalance } = useSelector((state) => state?.dashboard);

  const currencies = [
    { id: 1, label: "INR", icon: rupees, value: 0 },
    { id: 1, label: "USD", icon: navImages.usdIcon, value: 0 },
    { id: 2, label: "BTC", icon: btcIcon, value: 0 },
  ];

  const handleLogout = () => {
    dispatch(logout({}));
    dispatch(setUserBalance(null));
    navigate("/");
    setOpenProfileMenu(false);
  };

  const getActiveIconMBNav = (link, isActive) => {
    switch (link) {
      case "/":
        return <MBHome color={isActive ? "#fff" : "#9298B4"} />;
      case "/my-bets":
        return <MBBets color={isActive ? "#fff" : "#9298B4"} />;
      case "/casino-home":
        return <MBCasino color={isActive ? "#fff" : "#9298B4"} />;
      case "/sports-home":
        return <MBFootball color={isActive ? "#fff" : "#9298B4"} />;
      case "/#":
        return <MBSetting color={isActive ? "#fff" : "#9298B4"} />;
      default:
        return null;
    }
  };

  const NavItem = ({ icon, label, link }) => {
    const location = useLocation();
    const isActive = location.pathname === link;

    return (
      <Link
        to={link}
        className="flex flex-col items-center text-vintageRibbon hover:text-white"
      >
        {/* <img src={icon} alt={`${label} icon`} className="h-8 w-8" /> */}
        {getActiveIconMBNav(link, isActive)}
        <span
          className={`text-xs font-semibold ${
            isActive ? "text-white" : ""
          } mt-1`}
        >
          {label}
        </span>
        {isActive ? (
          <span className="w-7 h-1 bg-primary rounded-t-md mt-2"></span>
        ) : (
          <span className="w-7 h-1 bg-transparent rounded-t-md mt-2"></span>
        )}
      </Link>
    );
  };

  const openModal = (type) => {
    dispatch(setModalType(type));
    dispatch(toggleModal(true));
  };

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  const CheckBalance = () => {
    const payload = {
      userId: user?.id,
      currency: selected?.label,
    };
    checkBalance(makeRequest, payload, dispatch);
  };

  useEffect(() => {
    if (user?.id) {
      CheckBalance();
    }
  }, [user, selected]);

  const getBalanceIcon = () => {
    switch (selected?.label) {
      case "USD":
        return navImages.usdIcon;
      case "INR":
        return rupees;
      case "BTC":
        return btcIcon;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setOpenProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`flex w-full items-center bg-blackRussian sm:px-6 sm:py-3.5 p-4 fixed z-20 border-b border-[lightgrey] border-opacity-10`}
      >
        <div className="w-full">
          <div className="relative flex items-center justify-between">
            <div className="max-w-full flex items-center gap-5">
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
                <div className="flex items-center gap-2 relative">
                  <div className="flex items-center gap-2 pl-3">
                    <img
                      src={getBalanceIcon()}
                      alt="logo"
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-white">
                      {userBalance?.body?.balance ?? 0}
                    </span>
                    <div ref={currencyRef} onClick={() => setIsOpen(!isOpen)}>
                      <img
                        src={navImages.arrowDown}
                        alt="logo"
                        className="sm:w-9 sm:h-9 h-5 w-5"
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <div className="w-full bg-white shadow-lg rounded-lg z-50 absolute left-0 top-full">
                      <ul className="divide-y divide-[#E5E5E5]">
                        {currencies.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelect(item)}
                            className="p-2 cursor-pointer flex items-center gap-4"
                          >
                            {/* <span className="text-blackRussian text-[14px] leading-10  font-semibold">
                              {item?.value}
                            </span> */}
                            <div className="flex items-center gap-2">
                              <img
                                src={item.icon}
                                alt="logo"
                                className="w-5 h-5"
                              />
                              <span className="text-blackRussian text-[14px] leading-10  font-semibold">
                                {item?.label}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <CommonButton
                  label={"Wallet"}
                  type="nav"
                  onClick={() => openModal("wallet")}
                />
              </div>
              {!isLoggedIn && (
                <CommonButton
                  label={"Login"}
                  type="nav"
                  onClick={() => openModal("login")}
                />
              )}
              <img
                src={navImages.mbSearchIcon}
                alt="logo"
                className="w-5 h-5 block md:hidden"
              />
              <div ref={profileMenuRef} className="relative inline-block">
                <img
                  onClick={() => setOpenProfileMenu(!openProfileMenu)}
                  src={navImages.profileIcon}
                  alt="logo"
                  className="sm:w-7 sm:h-7 w-5 h-5 cursor-pointer"
                />
                {openProfileMenu && user?.id ? (
                  <ul className="absolute mt-2 w-48 rounded bg-white shadow-lg focus:outline-none right-0 ltr:right-0 ltr:origin-top-right rtl:left-0 rtl:origin-top-left transform opacity-100 scale-100">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full py-2.5 px-6 text-sm font-semibold capitalize transition duration-200 hover:text-primary focus:outline-0 ltr:text-left rtl:text-right"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                ) : null}
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(setBetSlipToggle(!betSlipToggle))}
                className="hidden md:block"
              >
                <img src={sidebarImg.bets} alt="logo" className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-darkGunmetal rounded-full px-8 pt-2.5 pb-px w-[352px] z-20 flex justify-between items-center md:hidden shadow-lg">
        {MbNavTabs?.map((i, index) => (
          <NavItem key={index} icon={i?.icon} label={i?.label} link={i?.link} />
        ))}
      </div>
      {/* Modal Section */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalType === "login" && <Login setModalType={setModalType} />}
          {modalType === "register" && <Register setModalType={setModalType} />}
          {modalType === "registerTerms" && (
            <RegisterTerms setModalType={setModalType} />
          )}
          {modalType === "authoriseRegistration" && (
            <AuthoriseRegistration setModalType={setModalType} />
          )}
          {modalType === "twoFactorAuthentication" && (
            <TwoFactorAuthentication />
          )}
          {modalType === "forgotPassword" && <ForgotPassword />}
          {modalType === "resetPassword" && <ResetPassword />}
          {modalType === "wallet" && <WalletModal />}
          {modalType === "withdraw" && <Withdraw />}
          {modalType === "deposit" && <Deposit />}
          {modalType === "paymentApproved" && <PaymentApproved />}
          {modalType === "paymentStatus" && <PaymentStatus />}
          {modalType === "paymentFailed" && <PaymentStatus isError={true} />}
          {modalType === "addBank" && <AddNewBankAccount />}
        </Modal>
      )}
    </>
  );
};

export default Navbar;
