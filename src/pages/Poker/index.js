import React, { useEffect, useRef, useState } from "react";
import { CommonButton, SportsCard, Typography } from "components";
import {
  arrowDown,
  btcIcon,
  fullScreenIcon,
  playIcon,
  rupees,
  usdIcon,
} from "assets";
import { useLocation, useParams } from "react-router-dom";
import { gameEntry } from "services/dashboard.service";
import { useAxios } from "hooks";
import { useSelector } from "react-redux";

const Poker = () => {
  const { id } = useParams();
  const { makeRequest } = useAxios();
  const location = useLocation();
  const iframeRef = useRef(null);
  const currencyRef = useRef(null);
  const { selectedCurrency } = useSelector((state) => state?.dashboard);
  const [isOpen, setIsOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const [selected, setSelected] = useState([]);
  const [playMode, setplayMode] = useState(true);
  const [mobilePlayMode, setMobilePlayMode] = useState(false);
  const [isIFrameFull, setIsIFrameFull] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const { imageUrl } = location?.state;

  const currencies = [
    { id: 1, label: "INR", icon: rupees, value: 0 },
    { id: 1, label: "USD", icon: usdIcon, value: 0 },
    { id: 2, label: "BTC", icon: btcIcon, value: 0 },
  ];

  const handleFullscreen = () => {
    if (iframeRef.current) {
      const iframeContainer = iframeRef.current.parentElement; // Get the parent container of the iframe
      if (iframeContainer.requestFullscreen) {
        iframeContainer.requestFullscreen().then(() => setIsIFrameFull(true));
      } else if (iframeContainer.webkitRequestFullscreen) {
        iframeContainer.webkitRequestFullscreen(); // For Safari
        setIsIFrameFull(true);
      } else if (iframeContainer.mozRequestFullScreen) {
        iframeContainer.mozRequestFullScreen(); // For Firefox
        setIsIFrameFull(true);
      } else if (iframeContainer.msRequestFullscreen) {
        iframeContainer.msRequestFullscreen(); // For IE/Edge
        setIsIFrameFull(true);
      }
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  

  const handleExitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(); // For Safari
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen(); // For Firefox
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen(); // For IE/Edge
    }
    setIsIFrameFull(false); // Update state
  };

  const toggleFullScreen = () => {
    if (isIFrameFull) {
      handleExitFullscreen();
    } else {
      handleFullscreen();
    }
  };

  const getBalanceIcon = () => {
    switch (selected?.label) {
      case "USD":
        return usdIcon;
      case "INR":
        return rupees;
      case "BTC":
        return btcIcon;
    }
  };

  const handlePlay = () => {
    setplayMode(false);
    setMobilePlayMode(true);
  };
  const handleMobilePlay = () => {
    setplayMode(false);
    setMobilePlayMode(true);
    if (isToggled) {
      setTimeout(() => {
        handleFullscreen();
      }, 0);
    }
  };

  const handleGameEntry = () => {
    const payload = {
      gameId: id,
      currency: selected?.label,
    };

    gameEntry(makeRequest, payload, setIframeUrl);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (id && selected?.label) {
      handleGameEntry();
    }
  }, [selected]);

  useEffect(() => {
    setSelected(selectedCurrency);

    const handleFullscreenChange = () => {
      setIsIFrameFull(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const containerHeight = window.innerHeight;
        const bottomControlsHeight = 63; // Adjust based on the controls' actual height
        iframeRef.current.style.height = `${
          containerHeight - bottomControlsHeight
        }px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set height
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderIframe = () => {
    return (
      <div className="rounded-xl">
        <div className="iframe-container relative">
          {playMode && (
            <div className="absolute hidden inset-0 sm:flex justify-center flex-grow items-center bg-themeBlack opacity-80 z-10 flex-col gap-5">
              <div className="flex items-center">
                <Typography
                  variant={"size14Medium"}
                  color={"white"}
                  content={"Balance displayed in"}
                />
                <div className="flex items-center gap-2 relative bg-blackRussian rounded-lg">
                  <div className="flex items-center gap-2 pl-3">
                    <img
                      src={getBalanceIcon()}
                      alt="logo"
                      className="w-5 h-5"
                    />
                    <Typography
                      variant={"size14Medium"}
                      color={"white"}
                      content={selected?.label}
                    />
                    <div onClick={() => setIsOpen(!isOpen)}>
                      <img
                        src={arrowDown}
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
              </div>
              <CommonButton
                bgColor="bg-americanGreen"
                type="playNowBtn"
                icon={playIcon}
                onClick={handlePlay}
                label={"Real play"}
              />
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={iframeUrl}
            title="My Iframe"
            allowFullScreen
            className=" bg-darkByzantineBlue"
          ></iframe>
          <div className="bottom-controls bg-blackRussian rounded-b-xl py-2 px-5 flex w-full items-center gap-3">
            <button
              type="button"
              className={`text-xl text-white font-bold p-2 ${
                isIFrameFull ? "bg-ebonyClay" : ""
              } rounded-lg`}
              onClick={toggleFullScreen}
            >
              <img
                src={fullScreenIcon}
                alt="Fullscreen"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            {!playMode && (
              <div className="flex items-center gap-2 relative bg-blackRussian rounded-lg">
                <div className="flex items-center gap-2 pl-3">
                  <img src={getBalanceIcon()} alt="logo" className="w-5 h-5" />
                  <Typography
                    variant={"size14Medium"}
                    color={"white"}
                    content={selected?.label}
                  />
                  <div onClick={() => setIsOpen(!isOpen)}>
                    <img
                      src={arrowDown}
                      alt="logo"
                      className="sm:w-9 sm:h-9 h-5 w-5"
                    />
                  </div>
                </div>
                {isOpen && (
                  <div
                    ref={currencyRef}
                    className={`w-full bg-white shadow-lg rounded-lg z-50 absolute ${
                      isIFrameFull ? "bottom-full mb-2" : "top-full mt-2"
                    }`}
                    style={isIFrameFull ? { position: "absolute" } : {}}
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
            )}
          </div>
        </div>
      </div>
    );
  };
  const renderCard = () => {
    return (
      <div
        className={`bg-blackRussian sm:hidden w-full relative rounded-lg h-auto grid p-4 gap-4 ${
          mobilePlayMode ? "hidden" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-4">
          <SportsCard
            bgImg={imageUrl}
            width={"176px"}
            style={`max-w-[176px]`}
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <h1 className="text-white text-lg font-semibold inline-flex items-center">
                Sweet Bonanza 1000
              </h1>
              <h2 className="text-white text-base font-semibold">
                Pragmatic Play
              </h2>
            </div>
          </div>
        </div>
        <p className="text-white text-left text-sm font-semibold">
          Select Your Display Balance
        </p>
        <div className="flex items-center">
          <Typography
            variant={"size14Medium"}
            color={"white"}
            content={"Balance displayed in"}
          />
          <div className="flex items-center gap-2 relative bg-blackRussian rounded-lg">
            <div
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 pl-3"
            >
              <img src={getBalanceIcon()} alt="logo" className="w-5 h-5" />
              <Typography
                variant={"size14Medium"}
                color={"white"}
                content={selected?.label}
              />
              <div onClick={() => {}}>
                <img
                  src={arrowDown}
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
                        <img src={item.icon} alt="logo" className="w-5 h-5" />
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
        </div>
        <label className="relative inline-flex flex-row items-center text-white text-sm">
          <button
            onClick={handleToggle}
            className={`relative w-14 h-7 mr-4 flex items-center rounded-full transition-colors ${
              isToggled ? "bg-americanGreen" : "bg-vintageRibbon"
            }`}
          >
            <span
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                isToggled ? "translate-x-6" : "translate-x-1"
              }`}
            ></span>
          </button>
          Play in fullscreen
        </label>
        <div style={{height: '60px'}} className="flex items-center gap-2 h-auto">
          {/* <CommonButton
              type="secondary"
              bgColor="bg-primary"
              label={"Register"}
            /> */}
          <CommonButton
            type="primary"
            bgColor="bg-americanGreen"
            label={"Play"}
            onClick={handleMobilePlay}
          />
        </div>
      </div>
    );
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Roulette"} />
      <div className="mt-7">
        {isMobile
          ? mobilePlayMode
            ? renderIframe()
            : renderCard()
          : renderIframe()}
      </div>
    </div>
  );
};

export default Poker;
