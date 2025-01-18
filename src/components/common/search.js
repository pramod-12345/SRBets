import React, { useEffect, useState } from "react";
import navImages from "../../assets/svg/navbar";
import Typography from "./typography";
import { recentPlayed } from "../../data";
import CommonButton from "./button";
import { useSelector } from "react-redux";
import { SportsCard } from "./cards";
import { useNavigate } from "react-router-dom";

const Search = ({ variant = "default", bgColor = "bg-themeBlack" }) => {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const widthClass = variant === "full" ? "w-full" : "max-w-[40%] w-full";
  const { layoutData } = useSelector((state) => state?.dashboard);
  const data = layoutData?.layout?.casinoSection?.featuredCasinoGames || [];
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleButtonClick = (label) => {
    setInputValue(label);
    setIsFocused(false);
  };

const handleGameEntry = (id, imageUrl, data) => {
    navigate(`/game-entry/${id}`, { state: { imageUrl: imageUrl, gameData: data } })
    setIsFocused(false)
    setInputValue("")
};

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (isFocused) {
        mainContent.classList.add("overflow-hidden");
      } else {
        mainContent.classList.remove("overflow-hidden");
      }
    }

    return () => {
      if (mainContent) {
        mainContent.classList.remove("overflow-hidden");
      }
    };
  }, [isFocused]);

  const filteredData =
    inputValue.length >= 3
      ? data.filter((game) =>
          game.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

      const handleReset = ()=>{
        setInputValue("")
        setIsFocused(false)
      }

  return (
    <>
      {isFocused && (
        <div
          className="fixed inset-0 bg-themeBlack opacity-80 z-10"
          onClick={() => setIsFocused(false)}
        ></div>
      )}
      <div className={`hidden md:flex flex-col ${isFocused ? 'w-full' : widthClass}`}>
        <div
          className={`items-center gap-1 px-3 h-11 rounded-lg w-full ${bgColor} hidden md:flex ${
            isFocused ? "z-20 bg-blackRussian" : ""
          }`}
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
          <>
          <div className=" transform mt-4 bg-charcoal space-y-10 rounded-lg shadow-lg z-20 overflow-auto no-scrollbar max-h-[80vh]">
            <div className="bg-yankeesBlue p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <Typography
                  variant={"size20Semibold"}
                  content={inputValue.length >= 3 ? null : "Search requires at least 3 characters"}
                  color={"vintageRibbon"}
                />
                <button
                  onClick={handleReset}
                  className="text-primary text-base font-semibold leading-[20px]"
                >
                  Reset
                </button>
              </div>

              {filteredData.length > 0 ? (
                <div className="flex items-center gap-3.5 ">
                  {filteredData.map((game) => (
                      <div className={`w-[117px] h-[187px] transform transition duration-300 hover:-translate-y-2`}>
                      <div
                        style={{
                          backgroundImage: `url(${game.imageUrl})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          aspectRatio: 1/1.3
                        }}
                        className="rounded-xl md:rounded-[20px] w-full h-full p-2.5 overflow-hidden bg-cover md:bg-contain"
                        onClick={() => (isLoggedIn ? handleGameEntry(game?.id, game?.imageUrl, game) : {})}
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

              {/* <div className="grid grid-cols-6 gap-x-4">
                {data.map((game, index) => (
                  <div
                    key={game.id}
                    className="h-[187px] w-[117px] rounded-lg flex flex-col items-center"
                  >
                    <img src={game.imageUrl} alt={game} className="w-full" />
                  </div>
                ))}
              </div> */}
            {/* </div> */}

            {inputValue.length >= 3 ? null : <div className="bg-yankeesBlue p-6 rounded-xl">
              <div className="flex justify-between items-center">
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
            </div>}
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
