import React, { useEffect, useState } from "react";
import Typography from "../../components/common/typography";
import globe from "../../assets/svg/globe.svg";
import arrowDown from "../../assets/svg/arrow-down.svg";
import minusIcon from "../../assets/svg/accordion-minus-icon.svg";
import plusIcon from "../../assets/svg/accordion-plus-icon.svg";
import Table from "../../components/shared/table";
import { columns, rows } from "../../data";
import Tabs from "../../components/common/tab";
import Badge from "../../components/common/badge";

const SportsLandingPage = () => {
  const [isAccord, setIsAccord] = useState(false);
  const [isMainAccord, setIsMainAccord] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const tabs = [
    { id: "in-play", label: "In-play" },
    { id: "upcoming", label: "Upcoming" },
  ];

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setData(rows);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);
  return (
    <div>
      <Typography color={"white"} variant={"h1"} content={"Cricket"} />
      <div className="mt-5">
        <Tabs tabs={tabs}>
          <div className="mt-4 w-full" id="in-play">
            <div className="bg-darkBlueBlack p-4 w-full rounded-lg">
              <div
                className={`flex justify-between items-center ${
                  isMainAccord ? "mb-4" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src={globe} className="w-4 h-4" alt="Globe" />
                  <Typography
                    color={"white"}
                    variant={"textSmSemibold"}
                    content={"International"}
                  />
                  <Badge color={"vintageRibbon"}>
                    <Typography
                      color={"white"}
                      variant={"textSmSemibold"}
                      content={"3"}
                    />
                  </Badge>
                </div>
                <div>
                  <img
                    src={isMainAccord ? minusIcon : plusIcon}
                    alt=""
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => setIsMainAccord(!isMainAccord)}
                  />
                </div>
              </div>
              {isMainAccord && (
                <>
                  <div className="bg-darkByzantineBlue rounded-lg mb-4 w-full">
                    <div
                      className={`flex justify-between items-center p-4 ${
                        isAccord ? "border-b border-gray-700" : ""
                      }`}
                    >
                      <Typography
                        color={"vintageRibbon"}
                        variant={"textSmSemibold"}
                        content={"Test Series Pakistan vs. England"}
                      />
                      <img
                        src={arrowDown}
                        alt="Down Arrow"
                        className={`${
                          isAccord ? "" : "transform rotate-[270deg]"
                        }`}
                        onClick={() => setIsAccord(!isAccord)}
                      />
                    </div>

                    {isAccord && (
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-Amaranth text-white text-[10px] leading-3 px-2 py-0.5 rounded">
                            LIVE
                          </span>
                          <span className="text-sm leading-4 font-medium text-vintageRibbon">
                            First innings
                          </span>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-[48px]">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col gap-1">
                              <span className="text-sm leading-4 font-semibold">
                                Pakistan
                              </span>
                              <span className="leading-4 text-sm font-semibold">England</span>
                            </div>
                            <div className="flex flex-col gap-1 font-semibold">
                              <span className="text-[#F02A83] text-sm leading-4 font-semibold">
                                328/4 (86)
                              </span>
                              <span className="text-vintageRibbon text-[14px] leading-4">
                                Yet to bat
                              </span>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="text-center w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start pl-4 pt-2 bg-blackRussian rounded">
                              <div className="text-xs leading-4">India</div>
                              <div className="text-chinesePurple font-bold text-[16px]">
                                1.32
                              </div>
                            </div>
                            <div className="text-center w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start pl-4 pt-2 bg-blackRussian rounded">
                              <div className="text-xs leading-4">
                                Bangladesh
                              </div>
                              <div className="text-chinesePurple font-bold text-[16px]">
                                1.32
                              </div>
                            </div>
                            <div className="text-center w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start pl-4 pt-1 bg-blackRussian rounded">
                              <div className="text-xs leading-4">Draw</div>
                              <div className="text-vintageRibbon leading-5 font-bold text-sm">
                                NA
                              </div>
                            </div>
                            <div className="flex items-center w-[60px] h-[56px] bg-blackRussian px-3 rounded-lg">
                              <span>+28</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-darkByzantineBlue rounded-lg w-full">
                    <div className="flex justify-between items-center p-4 border-b border-[#393D5D]">
                      <span className="text-vintageRibbon text-sm leading-4 font-semibold">
                        Women's World T20
                      </span>
                      <img src={arrowDown} alt="Arrow Right" />
                    </div>

                    <div className="bg-darkByzantineBlue">
                      {["India vs Bangladesh", "South Africa vs Australia"].map(
                        (match, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-lg border-b border-[#393D5D]"
                          >
                            <div className="text-[12px] leading-4 text-vintageRibbon mb-2">
                              10 OCT 2024 AT 6:30PM IST
                            </div>
                            <div className="flex items-center justify-between mt-4">
                              <div className="space-y-2">
                                <div className="flex justify-between gap-x-20">
                                  <span className="text-sm leading-4 fonnt-semibold">
                                    {match.split(" vs ")[0]}
                                  </span>
                                  <span className="text-gray-400 text-[14px]">
                                    Yet to bat
                                  </span>
                                </div>
                                <div className="flex justify-between gap-x-20">
                                  <span className="text-sm leading-4 font-semibold">
                                    {match.split(" vs ")[1]}
                                  </span>
                                  <span className="text-gray-400 text-[14px]">
                                    Yet to bat
                                  </span>
                                </div>
                              </div>

                              <div className="flex gap-4">
                                <div className="text-center w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start pl-4 pt-2 bg-blackRussian rounded">
                                  <div className="text-xs">
                                    {match.split(" vs ")[0]}
                                  </div>
                                  <div className="text-chinesePurple font-bold text-[16px]">
                                    1.32
                                  </div>
                                </div>
                                <div className="text-center w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start pl-4 pt-2 bg-blackRussian rounded">
                                  <div className="text-xs">
                                    {match.split(" vs ")[1]}
                                  </div>
                                  <div className="text-chinesePurple font-bold text-[16px]">
                                    1.32
                                  </div>
                                </div>
                                <div className="flex items-center w-[60px] h-[56px] bg-blackRussian px-3 rounded-lg">
                                  <span>+28</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-darkByzantineBlue rounded-lg mt-4 w-full">
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-vintageRibbon text-[14px] leading-4 font-semibold">
                          T20 Series India vs Bangladesh
                        </span>
                        <span className="bg-vintageRibbon px-2 rounded-full text-sm font-semibold text-white">
                          1
                        </span>
                      </div>
                      <img
                        src={arrowDown}
                        alt="Arrow Right"
                        className="transform rotate-[270deg]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Tabs>
      </div>
      <div className="mt-[36px] flex flex-col gap-1.5">
        <Typography color={"white"} variant={"h2"} content={"To Bets"} />
        <Table columns={columns} data={data} loading={loading} />
      </div>
    </div>
  );
};

export default SportsLandingPage;
