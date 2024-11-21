import React from "react";
import Tabs from "../../components/common/tab";
import { BetCards } from "../../components/common/cards";
import infoIcon from "../../assets/svg/info-icon.svg";
import { cardData, columns, rows } from "../../data";
import Table from "../../components/shared/table";

const MyBets = () => {
  const tabs = [
    { id: "casino", label: "Casino" },
    { id: "sports", label: "Sports" },
  ];
  const tableTabs = [
    { id: "top-bets", label: "Top bets" },
    { id: "casino", label: "Casino leaderboard" },
    { id: "sports", label: "Sports leaderboard" },
  ];
  return (
    <div className="mt-5 flex flex-col items-center justify-between items-center ">
      <Tabs tabs={tabs} isOptions={true}>
        {/* Cards */}
        <div
          id="casino"
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 pt-6 w-full"
        >
          {cardData.map((card, index) => (
            <BetCards
              key={index}
              date={card.date}
              status={card.status}
              match={card.match}
              result={card.result}
              odds={card.odds}
              betAmount={card.betAmount}
              payout={card.payout}
              infoIcon={infoIcon}
            />
          ))}
        </div>
      </Tabs>
      <div className="mt-8 w-full">
        <Tabs tabs={tableTabs}>
          <Table columns={columns} data={rows} id={"top-bets"} />
        </Tabs>
      </div>
    </div>
  );
};

export default MyBets;
