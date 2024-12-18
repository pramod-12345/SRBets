import React, { useRef, useState } from "react";
import { CommonButton, Typography } from "components";
import {
  arrowDown,
  btcIcon,
  fullScreenIcon,
  playIcon,
  rupees,
  usdIcon,
} from "assets";

const Poker = () => {
  const iframeRef = useRef(null);
  const currencyRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    id: 1,
    label: "INR",
    icon: rupees,
    value: 0,
  });

  const currencies = [
    { id: 1, label: "INR", icon: rupees, value: 0 },
    { id: 1, label: "USD", icon: usdIcon, value: 0 },
    { id: 2, label: "BTC", icon: btcIcon, value: 0 },
  ];

  const handleFullscreen = () => {
    if (iframeRef.current) {
      const iframeContainer = iframeRef.current.parentElement; // Get the parent container of the iframe
      if (iframeContainer.requestFullscreen) {
        iframeContainer.requestFullscreen();
      } else if (iframeContainer.webkitRequestFullscreen) {
        iframeContainer.webkitRequestFullscreen(); // For Safari
      } else if (iframeContainer.mozRequestFullScreen) {
        iframeContainer.mozRequestFullScreen(); // For Firefox
      } else if (iframeContainer.msRequestFullscreen) {
        iframeContainer.msRequestFullscreen(); // For IE/Edge
      }
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

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Roulette"} />
      <div className="mt-7">
        <div className="rounded-xl">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center items-center bg-themeBlack opacity-80 z-10 flex-col gap-5">
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
                    <Typography variant={'size14Medium'} color={'white'} content={selected?.label}/>
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
                label={"Real play"}
              />
            </div>
            <iframe
              ref={iframeRef}
              src={
                "https://metagrow5r.uat1.evo-test.com/frontend/evo/r1/#provider=evolution&ua_launch_id=180df03be63e7f900ec82e2a&game=dragontiger&table_id=DragonTiger00001&app="
              } // Replace with your desired URL
              title="My Iframe"
              allowFullScreen
              className=" w-full rounded-t-xl h-screen max-h-[594px] bg-darkByzantineBlue"
            ></iframe>
          </div>
          <div className="bg-blackRussian items-center bottom-0 rounded-b-xl py-2 px-5 flex w-full h-[63px] justify-between">
            <div className="flex items-center gap-5">
            <button
              type="button"
              tabindex="0"
              className="text-xl text-white font-bold"
              data-button-root=""
              fdprocessedid="7yd5nl"
              onClick={handleFullscreen}
            >
              <img
                src={fullScreenIcon}
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <div className="flex items-center gap-2 relative bg-blackRussian rounded-lg">
              <div className="flex items-center gap-2 pl-3">
                <img src={getBalanceIcon()} alt="logo" className="w-5 h-5" />
                <Typography variant={'size14Medium'} color={'white'} content={selected?.label}/>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poker;
