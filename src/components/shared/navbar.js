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
  Typography,
  SportsCard,
} from "components";
import navImages, {
  MBBets,
  MBCasino,
  MBFootball,
  MBHome,
  MBSetting,
} from "../../assets/svg/navbar";
import { MbNavTabs, recentPlayed } from "../../data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  setModalType,
  toggleModal,
} from "../../redux/reducers/authSlice";
import { sidebarImg } from "../../assets/svg/sidebar";
import { btcIcon, closeIcon, rupees } from "assets";
import { checkBalance } from "services/dashboard.service";
import { useAxios, useToast } from "hooks";
import {
  setBetSlipToggle,
  setIsSearchFocused,
  setSelectedCurrency,
  setUserBalance,
} from "../../redux/reducers/dashboard";

const Navbar = ({ setSidebarToggle, sidebarToggle, betSlipToggle, showNavbar }) => {
  const showToast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const { makeRequest } = useAxios();
  const [isOpen, setIsOpen] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const {layoutData, isMbIframeFull} = useSelector((state)=> state?.dashboard)

  const { isLoggedIn } = useSelector((state) => state.auth);
  const profileMenuRef = useRef(null);
  const currencyRef = useRef(null);
  // Get modal type and visibility from Redux state
  const { modalType, isModalOpen } = useSelector((state) => state?.auth);
  const { userBalance, selectedCurrency } = useSelector(
    (state) => state?.dashboard
  );

  const data = layoutData?.layout?.casinoSection?.featuredCasinoGames || [];
  const [isScrolled, setIsScrolled] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (label) => {
    setInputValue(label);
    setIsSearchOpen(false);
  };

  const currencies = [
    { id: 1, label: "INR", icon: rupees, value: 0 },
    { id: 1, label: "USD", icon: navImages.usdIcon, value: 0 },
    { id: 2, label: "BTC", icon: btcIcon, value: 0 },
  ];

  const handleLogout = () => {
    dispatch(logout({}));
    dispatch(setUserBalance(null));
    showToast("success", "Logout Successfully");
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
          className={`text-xs font-semibold ${isActive ? "text-white" : ""
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

  const filteredData = inputValue.length >= 3 ? data.filter((game) => game.name.toLowerCase().includes(inputValue.toLowerCase())): [];

  const closeModal = () => {
    dispatch(toggleModal(false));
  };

  const handleSelect = (item) => {
    dispatch(setSelectedCurrency(item));
    setIsOpen(false);
    dispatch(setUserBalance(null));
  };

  const CheckBalance = () => {
    const payload = {
      userId: user?.id,
      currency: selectedCurrency?.label,
    };
    checkBalance(makeRequest, payload, dispatch);
  };

  const handleGameEntry = (id, imageUrl) => {
    navigate(`/game-entry/${id}`, { state: { imageUrl: imageUrl } })
    setIsSearchOpen(false)
  };

  useEffect(() => {
    if (user?.id) {
      CheckBalance();
    }
  }, [user, selectedCurrency]);

  const getBalanceIcon = () => {
    switch (selectedCurrency?.label) {
      case "USD":
        return navImages.usdIcon;
      case "INR":
        return rupees;
      case "BTC":
        return btcIcon;
    }
  };

  useEffect(() => {
    const checkBalanceInterval = setInterval(() => {
      if (user?.id) {
        CheckBalance();
      }
    }, 10000);

    return () => {
      clearInterval(checkBalanceInterval);
    };
  }, []);

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
    dispatch(
      setSelectedCurrency({
        id: 1,
        label: "INR",
        icon: rupees,
        value: 0,
      })
    );

    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`${isMbIframeFull ? 'hidden' : ''} flex w-full items-center bg-blackRussian sm:px-6 sm:py-3.5 p-4 fixed z-20 border-b border-[lightgrey] border-opacity-10`}
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
                    <div onClick={() => setIsOpen(!isOpen)}>
                      <img
                        src={navImages.arrowDown}
                        alt="logo"
                        className="sm:w-9 sm:h-9 h-5 w-5"
                      />
                    </div>
                  </div>
                  {isOpen && (
                    <div
                      ref={currencyRef}
                      className="w-full bg-white shadow-lg rounded-lg z-50 absolute left-0 top-full"
                    >
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
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              {isLoggedIn && (
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
              )}
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

      {showNavbar && <div
        id="mobile-nav"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-darkGunmetal rounded-full px-8 pt-2.5 pb-px w-[352px] z-20 flex justify-between items-center md:hidden shadow-lg"
      >
        {MbNavTabs?.map((i, index) => (
          <NavItem
            key={index}
            icon={i?.icon}
            label={i?.label}
            link={i?.link}
          />
        ))}
      </div>}

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

      {
        isSearchOpen && (
          <div className="fixed inset-0 flex z-20 items-center justify-center bg-black bg-opacity-50">
            <div className="min-h-screen bg-[#0B0D1C] w-full mt-4 flex flex-col  p-4">
              {/* Search Bar */}
              <div className="w-full max-w-lg flex items-center bg-themeBlack rounded-lg p-3">
                <img src={navImages.mbSearchIcon} alt="Search" className="mr-2" />
                <input
                  type="text"
                  placeholder="Search game or sport"
                  className="flex-grow bg-themeBlack text-white focus:outline-none"
                  onChange={(e)=> setInputValue(e.target.value)}
                />
                <button onClick={() => setIsSearchOpen(false)}>
                  <img src={closeIcon} alt="Close" />
                </button>
              </div>
              <div className="mt-5">
              {filteredData.length > 0 ? (
                <div className="flex items-center gap-3.5">
                  {filteredData.map((game) => (
                  <div className={`w-[104px] h-[167px] transform transition duration-300 hover:-translate-y-2`}>
                  <div
                    style={{
                      backgroundImage: `url(${game.imageUrl})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      aspectRatio: 1/1.3
                    }}
                    className="rounded-xl md:rounded-[20px] w-full h-full p-2.5 overflow-hidden bg-cover md:bg-contain"
                    onClick={() => (isLoggedIn ? handleGameEntry(game?.id, game?.imageUrl) : {})}
                  >
                  </div>
                </div>
                  ))}
                </div>
              ) : (
                inputValue.length >= 3 && (
                  <Typography
                    variant={"size16Semibold"}
                    content={"No results found"}
                    color={"white"}
                  />
                )
              )}
              </div>
              {/* Recent Searches */}
              {
                inputValue.length ===0 && (

              <div className="w-full max-w-lg mt-6">
                <div className="flex items-center justify-between">
                  <Typography
                    color={"vintageRibbon"}
                    content={"Recent Searches"}
                    variant={"size16SemiBold"}
                  />
                  <Typography
                    color={"primary"}
                    content={"Reset"}
                    variant={"size12SemiBold"}
                  />
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {recentPlayed?.map((item, index) => (
                    <CommonButton
                      key={index}
                      icon={item?.icon}
                      imageStyle={"w-7 h-7"}
                      label={item?.label}
                      type="outline"
                      onClick={() => handleButtonClick(item.label)}
                    />
                  ))}
                </div>
              </div>
                )
              }
            </div>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
