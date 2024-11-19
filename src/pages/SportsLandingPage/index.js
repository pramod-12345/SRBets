import React, { useEffect, useState } from "react";
import Typography from "../../components/common/typography";
import globe from "../../assets/svg/globe.svg";
import Table from "../../components/shared/table";
import { columns, rows } from "../../data";
import Tabs from "../../components/common/tab";
import Accordion from "../../components/common/accordion";

const SportsLandingPage = () => {
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
            <Accordion
              title={"International"}
              isMain={true}
              badgeContent={"3"}
              labelIcon={globe}
            >
              <Accordion
                isSeperator={true}
                title={"Test Series Pakistan vs. England"}
              >
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 relative">
                    <div className="w-1 h-[15px] bg-Amaranth absolute left-[-15px]"></div>
                    <div className="bg-Amaranth px-1 rounded-[5px] h-4 flex items-center">
                      <Typography
                        color={"white"}
                        variant={"size10SemiBold"}
                        content={"LIVE"}
                      />
                    </div>
                    <Typography
                      color={"vintageRibbon"}
                      variant={"textXsMedium"}
                      content={"First innings"}
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-12">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col gap-1">
                        <Typography
                          color={"white"}
                          variant={"textSmSemibold"}
                          content={"Pakistan"}
                        />
                        <Typography
                          color={"white"}
                          variant={"textSmSemibold"}
                          content={"England"}
                        />
                      </div>
                      <div className="flex flex-col gap-1 text-Amaranth font-semibold">
                        <Typography
                          color={"secondary"}
                          variant={"textSmSemibold"}
                          content={"328/4 (86)"}
                        />
                        <Typography
                          color={"vintageRibbon"}
                          variant={"textSmSemibold"}
                          content={"Yet to bat"}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap lg:flex-nowrap gap-4">
                      <div className="flex items-center gap-4 w-full">
                        <div className="text-center w-full max-w-[96px] lg:w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start px-4 py-2.5 bg-blackRussian rounded">
                          <Typography
                            color={"white"}
                            variant={"textXsNormal"}
                            content={"India"}
                          />
                          <Typography
                            color={"chinesePurple"}
                            variant={"size16Bold"}
                            content={"1.32"}
                          />
                        </div>
                        <div className="text-center w-full max-w-[96px] lg:w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start px-4 py-2.5 bg-blackRussian rounded">
                          <Typography
                            color={"white"}
                            variant={"textXsNormal"}
                            content={"Bangladesh"}
                          />
                          <Typography
                            color={"chinesePurple"}
                            variant={"size16Bold"}
                            content={"1.32"}
                          />
                        </div>
                        <div className="text-center w-full max-w-[96px] lg:w-[140px] h-[56px] rounded-lg flex flex-col justify-center items-start px-4 py-2.5 bg-blackRussian rounded">
                          <Typography
                            color={"white"}
                            variant={"textXsNormal"}
                            content={"Draw"}
                          />
                          <Typography
                            color={"vintageRibbon"}
                            variant={"size16Bold"}
                            content={"NA"}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-center w-full lg:w-[60px] h-[36px] lg:h-[56px] bg-blackRussian px-3 rounded-lg">
                        <Typography
                          color={"white"}
                          variant={"textSmSemibold"}
                          content={"+28"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion>
            </Accordion>
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
