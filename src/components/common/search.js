import React, { useState } from "react";
import navImages from "../../assets/svg/navbar";
import Typography from "./typography";
import { image } from "assets";
import { recentPlayed } from "../../data";
import CommonButton from "./button";

const Search = ({ variant = "default", bgColor = "bg-themeBlack" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const widthClass = variant === "full" ? "w-full" : "max-w-[32%]";

  const handleButtonClick = (label) => {
    setInputValue(label);
    setIsFocused(false);
  };

  return (
    <>
      {isFocused && (
        <div className="fixed inset-0 bg-themeBlack opacity-80 z-10" onClick={()=>setIsFocused(false)}></div>
      )}
      <div className="flex flex-col ">
      <div
        className={`items-center gap-1 px-3 h-11 rounded-lg w-full ${widthClass} ${bgColor} hidden md:flex ${isFocused ? 'z-20' : ''}`}
      >
        <img src={navImages.searchIcon} alt="logo" className="w-4 h-4" />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search game or sport"
          className="leading-normal bg-transparent text-sm text-white w-full px-2 outline-none"
          onFocus={() => setIsFocused(true)}
        />
      </div>
        {isFocused && (
          <div className=" transform mt-4 bg-charcoal space-y-10 rounded-lg shadow-lg z-20 overflow-auto no-scrollbar max-h-[80vh]">
            <div className="bg-yankeesBlue p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <Typography
                  variant={"size20Semibold"}
                  content={"Search requires at least 3 characters"}
                  color={"vintageRibbon"}
                />
                <button
                  onClick={() => setIsFocused(false)}
                  className="text-primary text-base font-semibold leading-[20px]"
                >
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-6 gap-x-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((game, index) => (
                  <div
                    key={index}
                    className="h-[187px] w-[117px] rounded-lg flex flex-col items-center"
                  >
                    <img src={image} alt={game} className="w-full" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yankeesBlue p-6 rounded-xl">
              <div className="flex justify-between items-center mt-12">
                <Typography
                  variant={"size20Semibold"}
                  content={"Recent Searches"}
                  color={"vintageRibbon"}
                />
                <button
                  onClick={() => setIsFocused(false)}
                  className="text-primary text-base font-semibold leading-[20px]"
                >
                  Reset
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
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
          </div>
        )}
        </div>
    </>
  );
};

export default Search;
