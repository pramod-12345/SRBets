import React, { useEffect, useRef } from 'react';
import {
    closeIcon,
    usdIcon
} from "assets"
import {
    Typography,
    Seperator,
    Tabs,
    Dropdown,
    BetSlipCards,
    CommonButton
} from "components"
import { numberItems } from '../../data';
import { useDispatch, useSelector } from "react-redux";
import { setBets, setBetSlipToggle } from "../../redux/reducers/dashboard";

const BetSlipSlider = ({ betSlipToggle }) => {
  const { bets } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Scroll to the bottom of the container
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [bets]);

  const handleClearBets = () => {
    dispatch(setBets([]));
  };

  const tabs = [
    { id: "single", label: "Single" },
    { id: "multi", label: "Multi" },
  ];

  const handleNumberSelect = (item) => {
    console.log("Selected Number Option:", item.label);
  };

  return (
    <aside
      style={{
        maxHeight: "calc(100vh - 72px)",
        minHeight: "calc(100vh - 72px)",
      }}
      // className={`hidden sidebar-main no-scrollbar p-4 bg-blackRussian text-white h-full md:flex flex-col overflow-auto transition-all ease-in-out duration-300 ${
      //   betSlipToggle
      //     ? "translate-x-0 min-w-[440px] w-[260px]"
      //     : "translate-x-full min-w-[0] w-0"
      // }`}
      // className={`hidden ${betSlipToggle ? 'p-4' : ''} sidebar-main no-scrollbar bg-blackRussian text-white h-full md:flex flex-col overflow-auto transition-all ease-in-out duration-300 ${betSlipToggle ? "translate-x-0 min-w-[440px] w-[260px]" : "translate-x-full min-w-[0] w-0"
      // }`}
      className={`hidden md:flex max-w-md bg-blackRussian sidebar-main text-white h-screen flex flex-col transition-all ease-in-out duration-300 ${
        betSlipToggle
          ? "translate-x-0 min-w-[440px] w-[260px] p-4"
          : "translate-x-full min-w-[0] w-0 overflow-auto"
      }`}
    >
      {/* <div className="px-6 py-7"> */}
        <header className="">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={closeIcon}
                alt="Close"
                className="w-3 h-3 cursor-pointer"
                onClick={() => dispatch(setBetSlipToggle(false))}
              />
              <Typography
                color={"white"}
                content={"Betslip"}
                variant={"size20Semibold"}
              />
              <span className="bg-white text-[14px] leading-4 text-blackRussian flex justify-center items-center font-semibold w-[32px] h-[24px] rounded-xl">
                1
              </span>
            </div>
            <button className="text-primary whitespace-nowrap flex items-center font-semibold leading-4 text-sm">
              Go to my bets
              <span className="ml-3 bg-primary text-white text-sm flex justify-center items-center font-semibold w-[32px] h-[24px] rounded-xl">
                10
              </span>
            </button>
          </div>

          <Seperator color="ebonyClay" />
          <div className="mt-5">
            <Tabs tabs={tabs} />
          </div>

          <div className="mt-5">
            <Seperator color="ebonyClay" />
          </div>

          <div className="flex items-center justify-between mt-3">
            <Dropdown
              items={numberItems}
              onSelect={handleNumberSelect}
              placeholder="Accept Any odds"
            />
            <button
              onClick={handleClearBets}
              className="text-[14px] leading-4 font-semibold"
            >
              Clear all
            </button>
          </div>
        </header>

        {/* <div
          id="dra-456-bet-slip-space"
          ref={containerRef}
          className="mt-5 min-h-[300px] overflow-auto no-scrollbar"
        > */}
        <div
          id="dra-456-bet-slip-space"
          ref={containerRef}
          className="flex-1 overflow-y-auto space-y-4 mt-5 mb-[110px] pb-20 no-scrollbar"
        >
          {bets?.map((item, index) => (
            <BetSlipCards key={index} isInput={true} data={item} />
          ))}
        </div>
        {/* </div> */}

        <footer className="absolute bottom-0 left-0 w-full text-center">
          <div className="bg-darkByzantineBlue p-6">
            <div className="flex items-center justify-between">
              <Typography
                variant="size14Normal"
                color="vintageRibbon"
                content="Total Bet Amount"
              />
              <div className="flex items-center gap-1 mt-1">
                <Typography
                  variant="size14Normal"
                  color="vintageRibbon"
                  content="$1.00"
                />
                <img src={usdIcon} alt="Dollar Icon" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <Typography
                variant="size14Semibold"
                color="vintageRibbon"
                content="Est. Payout"
              />
              <div className="flex items-center gap-1 mt-1">
                <Typography
                  variant="size14Semibold"
                  color="vintageRibbon"
                  content="$1.00"
                />
                <img src={usdIcon} alt="Dollar Icon" className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-center justify-center text-white mt-4">
              <CommonButton type="viewBetsBtn" label={"View My Bets"} />
              {/* <span className="ml-3 bg-white text-primary text-sm flex justify-center items-center font-semibold w-[32px] h-[24px] rounded-xl">10</span> */}
            </div>
          </div>
        </footer>
      {/* </div> */}
    </aside>
  );
};

export default BetSlipSlider;
