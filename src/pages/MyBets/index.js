import React, { useState } from "react";
import { Tabs, Table, BetDetails } from "components";
import { columns, rows } from "../../data";
import CardData from "./cardData";

const MyBets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { id: "casino", label: "Casino" },
    { id: "sports", label: "Sports" },
  ];
  const tableTabs = [
    { id: "top-bets", label: "Top bets" },
    { id: "casino", label: "Casino leaderboard" },
    { id: "sports", label: "Sports leaderboard" },
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-between ">
        <Tabs tabs={tabs} isOptions={true}>
          <div id="sports" className="space-y-8">
            <CardData setIsOpen={setIsOpen} />
            <Tabs tabs={tableTabs}>
              <Table columns={columns} data={rows} id={"top-bets"} />
            </Tabs>
          </div>
          <div id="casino" className="mt-5">
          <Tabs tabs={tableTabs}>
              <Table columns={columns} data={rows} id={"top-bets"} />
            </Tabs>
          </div>
        </Tabs>
        {/* <div className="mt-8 w-full">
          <Tabs tabs={tableTabs}>
            <Table columns={columns} data={rows} id={"top-bets"} />
          </Tabs>
        </div> */}
      </div>
      {isOpen && <BetDetails handleClose={handleClose} />}
    </>
  );
};

export default MyBets;
