import React, { useState } from "react";
import arrowDown from "../../assets/svg/arrow-down.svg";
import Dropdown from "./dropdown";
import { cricketItems, numberItems, selectedBetItems } from "../../data";

const Tabs = ({ tabs, children, initialTab, isOptions }) => {
  const [activeTab, setActiveTab] = useState(initialTab ?? tabs?.[0]?.id);

  const activeChild = React.Children.toArray(children).find(
    (child) => child.props.id === activeTab
  );

  const handleGameSelect = (item) => {
    console.log("Selected Cricket Option:", item.label);
  };

  const handleNumberSelect = (item) => {
    console.log("Selected Number Option:", item.label);
  };

  const handleBetTypeSelect = (item) => {
    console.log("Selected Bet Option:", item.label);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between flex-col lg:flex-row gap-5">
        <div className="overflow-auto">
          <div className="bg-eigengrau rounded-2xl w-fit p-1 ">
            <div className="flex gap-[5px]  relative">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-w-[130px] px-6 py-2.5 whitespace-nowrap sm:py-3 sm:h-[44px] h-[36px] flex justify-center items-center rounded-xl font-semibold text-sm hover:bg-themeBlack transition-colors duration-200 relative z-10
            ${
              activeTab === tab.id
                ? "text-white bg-themeBlack"
                : "text-vintageRibbon"
            }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {isOptions && (
          <div className="text-white flex items-center gap-4  ">
            {/* Number Dropdown */}
            <Dropdown
              items={numberItems}
              onSelect={handleNumberSelect}
              placeholder="10"
            />

            <Dropdown
              items={cricketItems}
              onSelect={handleGameSelect}
              placeholder="Cricket"
            />

            {/* Selected Bet Dropdown */}
            <Dropdown
              items={selectedBetItems}
              onSelect={handleBetTypeSelect}
              placeholder="Settled Bet"
            />
          </div>
        )}
      </div>
      <div>{activeChild}</div>
    </div>
  );
};

export default Tabs;
